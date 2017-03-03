#coding:utf8
import logging
import time
from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from utils import packer
from utils import tools
from account import account_manager
from account import login_manager


# Create your views here.
logger = logging.getLogger(__name__)


@csrf_exempt
def login(request):
    """登录
    """
    logger.info("login[ip=%s]" % tools.get_ip(request))

    ret = packer.Ret()
    try:
        username = request.POST['username']
        password = request.POST['password']
    except Exception as e:
        logger.warning("Invalid request:%s" % e)
        ret.ret = ret.RET_REQUEST_ERROR
        ret.reason = "Invalid request[%s]" % e
        return HttpResponse(packer.pack_error_response(ret))

    #登录验证
    account = account_manager.login(username, password, ret)
    if account is not None:
        _set_online(request, account)
        response = HttpResponse(packer.pack_response(account))
        return response
    else:
        return HttpResponse(packer.pack_error_response(ret))


def _set_online(request, account):
    """标记在线
    """
    request.session['aid'] = account.id
    request.session['aname'] = account.name
    request.session['active_time'] = int(time.time())
    #the user’s session cookie will expire when the user’s Web browser is closed.
    request.session.set_expiry(0)


@csrf_exempt
def auth(request):
    """自动登录 验证
    """
    logger.info("auth[ip=%s]" % tools.get_ip(request))

    #验证 session
    ret = packer.Ret()
    account_id = request.session.get('aid', None)
    if account_id is None:
        return HttpResponse(packer.pack_logout_response())

    account = account_manager.get_account_by_id(account_id, ret)
    if account is not None:
        return HttpResponse(packer.pack_response(account))
    else:
        return HttpResponse(packer.pack_error_response(ret))


@csrf_exempt
def register(request):
    """创建账户
    """
    logger.info("create account[ip=%s]" % tools.get_ip(request))
    ret = packer.Ret()
    try:
        username = request.POST['username']
        password = request.POST['password']
    except Exception as e:
        logger.warning("Invalid request:%s" % e)
        ret.ret = ret.RET_REQUEST_ERROR
        ret.reason = "Invalid request[%s]" % e
        return HttpResponse(packer.pack_error_response(ret))

    #注册
    account = account_manager.register(username, password, ret)
    if account is None:
        return HttpResponse(packer.pack_error_response(ret))
    else:
        _set_online(request, account)
        return HttpResponse(packer.pack_response(account))


def logout(request):
    """登出
    """
    #删除 session
    request.session.flush()
    return HttpResponse(packer.pack_response())

