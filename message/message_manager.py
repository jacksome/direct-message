#coding:utf8
import logging
from django.db import transaction
from django.db import IntegrityError
from django.db.models import Q
from utils import tools
from message.models import Message


logger = logging.getLogger(__name__)


def mapping_dialog_id(a_id, b_id):
    """计算对话 id
    """
    assert a_id != b_id
    dialog_id = a_id << 32 | b_id if a_id < b_id else b_id << 32 | a_id
    return dialog_id


def query_all(account_a_id, account_b_id, offset = None, limit = None):
    """查询两个人的对话消息
    默认倒序
    """
    dialog_id = mapping_dialog_id(account_a_id, account_b_id)
    count = Message.objects.filter(dialog_id = dialog_id).count()

    if offset is not None and limit is not None:
        offset = count - offset - limit
        dialog = Message.objects.filter(dialog_id = dialog_id)[offset:offset+limit]
    else:
        dialog = Message.objects.filter(dialog_id = dialog_id)

    return (dialog, count)


def add(sender_id, receiver_id, content, ret):
    """添加一条消息
    """
    dialog_id = mapping_dialog_id(sender_id, receiver_id)
    try:
        message = Message.objects.create(
                dialog_id = dialog_id,
                sender_id = sender_id,
                receiver_id = receiver_id,
                content = content)
        return message

    except Exception as e:
        logger.warning("add message failed[reason=%s]" % e)
        ret.ret = ret.RET_INSERT_ERROR
        ret.reason = 'add message failed'
        return None


def delete(id, sender_id, ret):
    """删除一条消息
    """
    try:
        Message.objects.get(
                Q(id = id) &
                Q(sender_id = sender_id)).delete()
        return True

    except Exception as e:
        logger.warning("Delete message failed[reason=%s]" % e)
        ret.ret = ret.RET_DELETE_ERROR
        ret.reason = "Delete message failed[%s]" % e
        return False


