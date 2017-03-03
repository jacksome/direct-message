#coding:utf8
import logging
from django.db import transaction
from django.db import IntegrityError
from django.db.models import Q
from django.utils import timezone
from utils import tools
from friend.models import Friend


logger = logging.getLogger(__name__)


def query_all(account_id):
    """查询一个用户的所有联系人
    """
    return Friend.objects.filter(account_id = account_id)


def query_changed(account_id, timestamp):
    """查询一个用户在 timestamp 之后发生了变动的联系人
    """
    return Friend.objects.filter(
            Q(account_id = account_id) &
            Q(last_msg_time__gt = timestamp))


def query(account_id, friend_id, ret):
    """查询联系人
    """
    try:
        friend = Friend.objects.get(
                Q(account_id = account_id) &
                Q(friend_id = friend_id))
        return friend

    except Exception as e:
        logger.warning("query friend failed[reason=%s]" % e)
        ret.ret = ret.RET_HANDLE_ERROR
        ret.reason = "query friend failed[%s]" % e
        return None


def query_or_create(account_id, friend_id, friend_name, ret):
    """查找联系人，如果联系人不存在自动添加一个
    """
    try:
        friend = Friend.objects.get(
                Q(account_id = account_id) &
                Q(friend_id = friend_id) &
                Q(friend_name = friend_name))
        return friend

    except Friend.DoesNotExist as e:
        return add(account_id, friend_id, friend_name, ret)

    except Exception as e:
        logger.warning("query friend failed[reason=%s]" % e)
        ret.ret = ret.RET_HANDLE_ERROR
        ret.reason = "query friend failed[%s]" % e
        return None


def add(account_id, friend_id, friend_name, ret):
    """添加一个联系人
    """
    try:
        friend = Friend.objects.create(
                account_id = account_id,
                friend_id = friend_id,
                friend_name = friend_name)
        return friend

    except Exception as e:
        logger.warning("add friend failed[reason=%s]" % e)
        ret.ret = ret.RET_INSERT_ERROR
        ret.reason = 'add friend failed'
        return None


def delete(account_id, friend_name, ret):
    """删除一个联系人
    """
    try:
        Friend.objects.get(
                Q(account_id = account_id) &
                Q(friend_name = friend_name)).delete()
        return True

    except Exception as e:
        logger.warning("Delete friend failed[reason=%s]" % e)
        ret.ret = ret.RET_DELETE_ERROR
        ret.reason = "Delete friend failed[%s]" % e
        return False


def update_by_new_message(account_id, friend_id, new_message_num, ret):
    """收到新消息，更新
    """
    try:
        with transaction.atomic():
            friend = Friend.objects.get(
                    Q(account_id = account_id) &
                    Q(friend_id = friend_id))
            friend.unread_msg_num += new_message_num
            if friend.unread_msg_num < 0:
                friend.unread_msg_num = 0
            friend.last_msg_time = timezone.now()
            friend.save()
            return friend

    except IntegrityError as e:
        logger.warning("Atomic error[reason=%s]" % e)
        ret.ret = ret.RET_UPDATE_ERROR
        ret.reason = "Update friend failed, atomic error[%s]" % e
        return None

    except Exception as e:
        logger.warning("Update friend failed[reason=%s]" % e)
        ret.ret = ret.RET_UPDATE_ERROR
        ret.reason = "Update friend failed[%s]" % e
        return None

