#coding:utf8
import logging
import json
import datetime
from django.utils import timezone
from django.forms.models import model_to_dict

logger = logging.getLogger(__name__)


class Ret(object):
    """返回值 Interface
    包含错误码和错误原因
    """
    RET_OK = 0
    RET_AUTH_ERROR = 1
    RET_REQUEST_ERROR = 2
    RET_INSERT_ERROR = 3
    RET_DELETE_ERROR = 4
    RET_UPDATE_ERROR = 5
    RET_HANDLE_ERROR = 6
    RET_LOGOUT_ERROR = 7

    def __init__(self):
        self.ret = self.RET_OK
        self.reason = 'OK'
        self.ts = timezone.now()


class ComplexEncoder(json.JSONEncoder):
    """Json 序列化补完
    解决 json 无法序列化 datetime 类型的问题
    """

    def default(self, obj):
        if isinstance(obj, datetime.datetime):
            return timezone.localtime(obj).strftime('%Y-%m-%d %H:%M:%S')
        # elif isinstance(obj, date):
        #     return obj.strftime('%Y-%m-%d')
        else:
            return json.JSONEncoder.default(self, obj)


def pack_list_response(objs, count = None, t = None):
    """打包数组数据
    """
    datas = []
    for obj in objs:
        d = model_to_dict(obj)
        datas.append(model_to_dict(obj))

    reason = {}
    reason['ret'] = 0
    reason['reason'] = 'OK'
    reason['data'] = datas
    if count is not None:
        reason['length'] = count
    if t is not None:
        reason['t'] = t

    return json.dumps(reason, cls = ComplexEncoder)


def pack_response(obj = None):
    """打包数据
    """
    if obj is not None:
        reason = {
                'ret': 0,
                'reason': 'OK',
                'data': model_to_dict(obj),
                }
    else:
        reason = {
                'ret': 0,
                'reason': 'OK',
                }

    return json.dumps(reason, cls = ComplexEncoder)


def pack_string_response(string):
    """打包字符串
    """
    reason = {
            'ret': 0,
            'reason': 'OK',
            'data': string,
            }
    return json.dumps(reason)


def pack_error_response(ret):
    """打包错误
    """
    reason = {
            'ret': ret.ret,
            'reason': ret.reason,
            }

    return json.dumps(reason)


def pack_logout_response():
    """未登录错误
    """
    ret = Ret()
    ret.ret = ret.RET_LOGOUT_ERROR
    ret.reason = "please login first"
    reason = {
            'ret': ret.ret,
            'reason': ret.reason,
            }

    return json.dumps(reason)



