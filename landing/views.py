#coding:utf8
import logging
import time
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from utils import packer
from utils import tools
from account import account_manager
from account import login_manager


# Create your views here.
logger = logging.getLogger(__name__)


def landing(request):
    """登录页
    """
    logger.info("landing[ip=%s]" % tools.get_ip(request))
    return render(request, 'home.html', {})

