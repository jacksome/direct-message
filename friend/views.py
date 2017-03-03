#coding:utf8
import logging
from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from utils import packer
from utils import tools
from account import account_manager
from friend import friend_manager


# Create your views here.
logger = logging.getLogger(__name__)


def query_friend(request):
    """查询联系人信息
    """
    logger.info("query friend[ip=%s]" % tools.get_ip(request))
    account_id = request.session.get('aid', None)
    if account_id is None:
        return HttpResponse(packer.pack_logout_response())

    ret = packer.Ret()
    friends = friend_manager.query_all(account_id)
    return HttpResponse(packer.pack_list_response(friends))


def query_friend_changed(request):
    """查询发生了变动的联系人信息
    """
    logger.info("query friend changed[ip=%s]" % tools.get_ip(request))
    account_id = request.session.get('aid', None)
    if account_id is None:
        return HttpResponse(packer.pack_logout_response())

    ret = packer.Ret()
    try:
        timestamp = request.GET['t']
    except Exception as e:
        logger.warning("Invalid request:%s" % e)
        ret.ret = ret.RET_REQUEST_ERROR
        ret.reason = "Invalid request[%s]" % e
        return HttpResponse(packer.pack_error_response(ret))

    if timestamp == "":
        friends = friend_manager.query_all(account_id)
    else:
        #查询在 timestamp 之后发生了变动的联系人信息
        friends = friend_manager.query_changed(account_id, timestamp)
    return HttpResponse(packer.pack_list_response(friends, t = ret.ts))


@csrf_exempt
def add_friend(request):
    """添加联系人
    """
    logger.info("add friend[ip=%s]" % tools.get_ip(request))
    account_id = request.session.get('aid', None)
    if account_id is None:
        return HttpResponse(packer.pack_logout_response())

    ret = packer.Ret()
    try:
        name = request.POST['name']
    except Exception as e:
        logger.warning("Invalid request:%s" % e)
        ret.ret = ret.RET_REQUEST_ERROR
        ret.reason = "Invalid request[%s]" % e
        return HttpResponse(packer.pack_error_response(ret))

    #查找对方信息
    account = account_manager.get_account_by_name(name, ret)
    if account is None:
        logger.warning("user not exist[name=%s]" % name)
        return HttpResponse(packer.pack_error_response(ret))
    if account.id == account_id:
        ret.ret = ret.RET_HANDLE_ERROR
        ret.reason = "Can not add yourself"
        return HttpResponse(packer.pack_error_response(ret))

    #添加联系人
    friend = friend_manager.add(account_id, account.id, name, ret)
    if friend is None:
        return HttpResponse(packer.pack_error_response(ret))
    else:
        return HttpResponse(packer.pack_response(friend))


@csrf_exempt
def delete_friend(request):
    """删除联系人
    """
    logger.info("delete friend[ip=%s]" % tools.get_ip(request))
    account_id = request.session.get('aid', None)
    if account_id is None:
        return HttpResponse(packer.pack_logout_response())

    ret = packer.Ret()
    try:
        name = request.POST['name']
    except Exception as e:
        logger.warning("Invalid request:%s" % e)
        ret.ret = ret.RET_REQUEST_ERROR
        ret.reason = "Invalid request[%s]" % e
        return HttpResponse(packer.pack_error_response(ret))

    if friend_manager.delete(account_id, name, ret):
        return HttpResponse(packer.pack_response())
    else:
        return HttpResponse(packer.pack_error_response(ret))


