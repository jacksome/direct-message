#coding:utf8
import logging
from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from utils import packer
from utils import tools
from account import account_manager
from friend import friend_manager
from message import message_manager

# Create your views here.
logger = logging.getLogger(__name__)


def query_message(request):
    """查询
    """
    logger.info("query message[ip=%s]" % tools.get_ip(request))
    account_id = request.session.get('aid', None)
    if account_id is None:
        return HttpResponse(packer.pack_logout_response())

    ret = packer.Ret()
    try:
        another_account_id = int(request.GET['fid'])
        offset = None
        limit = None
        if 'offset' in request.GET:
            offset = int(request.GET['offset'])
        if 'limit' in request.GET:
            limit = int(request.GET['limit'])
    except Exception as e:
        logger.warning("Invalid request:%s" % e)
        ret.ret = ret.RET_REQUEST_ERROR
        ret.reason = "Invalid request[%s]" % e
        return HttpResponse(packer.pack_error_response(ret))

    friend = friend_manager.query(account_id, another_account_id, ret)
    if friend is None:
        return HttpResponse(packer.pack_error_response(ret))

    #确保获取所有的未读消息
    limit = friend.unread_msg_num if friend.unread_msg_num > limit else limit
    (messages, count) = message_manager.query_all(
            account_id, another_account_id, offset, limit)

    #更新未读消息数量
    read_num = friend.unread_msg_num
    friend = friend_manager.update_by_new_message(
            account_id, another_account_id, -read_num, ret)
    if friend is None:
        return HttpResponse(packer.pack_error_response(ret))

    response = packer.pack_list_response(messages, count)
    logger.info("Query message succeed[res=%s]" % response)
    return HttpResponse(response)


def query_new_message(request):
    """查询新消息
    """
    logger.info("query new message[ip=%s]" % tools.get_ip(request))
    account_id = request.session.get('aid', None)
    if account_id is None:
        return HttpResponse(packer.pack_logout_response())

    ret = packer.Ret()
    try:
        another_account_id = int(request.GET['fid'])
    except Exception as e:
        logger.warning("Invalid request:%s" % e)
        ret.ret = ret.RET_REQUEST_ERROR
        ret.reason = "Invalid request[%s]" % e
        return HttpResponse(packer.pack_error_response(ret))

    friend = friend_manager.query(account_id, another_account_id, ret)
    if friend is None:
        return HttpResponse(packer.pack_error_response(ret))

    if friend.unread_msg_num <= 0:
        return HttpResponse(packer.pack_list_response([]))

    #获取未读的新消息
    (messages, count) = message_manager.query_all(
            account_id, another_account_id, 0, friend.unread_msg_num)

    #更新未读消息数量
    read_num = friend.unread_msg_num
    friend = friend_manager.update_by_new_message(
            account_id, another_account_id, -read_num, ret)
    if friend is None:
        return HttpResponse(packer.pack_error_response(ret))

    response = packer.pack_list_response(messages, count)
    return HttpResponse(response)


@csrf_exempt
def send_message(request):
    """发送消息
    """
    logger.info("send message[ip=%s]" % tools.get_ip(request))
    account_id = request.session.get('aid', None)
    if account_id is None:
        return HttpResponse(packer.pack_logout_response())

    ret = packer.Ret()
    try:
        another_account_id = int(request.POST['fid'])
        content = request.POST['c']
    except Exception as e:
        logger.warning("Invalid request:%s" % e)
        ret.ret = ret.RET_REQUEST_ERROR
        ret.reason = "Invalid request[%s]" % e
        return HttpResponse(packer.pack_error_response(ret))

    #只能给自己的联系人发消息
    friend = friend_manager.query(account_id, another_account_id, ret)
    if friend is None:
        logger.warning("Friend not exist[own_id=%d][other_id=%d]" %
                (account_id, another_account_id))
        return HttpResponse(packer.pack_error_response(ret))

    #如果还不是对方的联系人，自动添加
    account = account_manager.get_account_by_id(account_id, ret)
    assert account is not None
    another_account = account_manager.get_account_by_id(another_account_id, ret)
    if another_account is None:
        return HttpResponse(packer.pack_error_response(ret))

    friend = friend_manager.query_or_create(another_account_id,
            account_id, account.name, ret)
    if friend is None:
        return HttpResponse(packer.pack_error_response(ret))

    #更新联系人信息
    new_message_num = 1 #一条新消息
    friend = friend_manager.update_by_new_message(
            another_account_id, account_id, new_message_num, ret)
    if friend is None:
        return HttpResponse(packer.pack_error_response(ret))

    #发送消息
    message = message_manager.add(account_id, another_account_id, content, ret)
    if message is None:
        return HttpResponse(packer.pack_error_response(ret))
    else:
        return HttpResponse(packer.pack_response(message))


@csrf_exempt
def delete_message(request):
    """删除消息
    """
    logger.info("delete message[ip=%s]" % tools.get_ip(request))
    account_id = request.session.get('aid', None)
    if account_id is None:
        return HttpResponse(packer.pack_logout_response())

    ret = packer.Ret()
    try:
        mid = int(request.POST['mid'])
    except Exception as e:
        logger.warning("Invalid request:%s" % e)
        ret.ret = ret.RET_REQUEST_ERROR
        ret.reason = "Invalid request[%s]" % e
        return HttpResponse(packer.pack_error_response(ret))

    #TODO:并没有更新联系人信息中的未读消息数量

    #删除自己发送的消息
    if message_manager.delete(mid, account_id, ret):
        return HttpResponse(packer.pack_response())
    else:
        return HttpResponse(packer.pack_error_response(ret))

