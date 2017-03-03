#coding:utf8
import logging
from django.db import transaction
from django.db import IntegrityError
from utils import tools
from account.models import Account


logger = logging.getLogger(__name__)

SALT_LENGTH = 32


RET_OK = 0
RET_ERROR = 1
RET_CONFLICT = 2
RET_NOTEXIST = 3
RET_AUTHERROR = 4

_reason = {
        RET_OK: "OK",
        RET_ERROR: "Error",
        RET_CONFLICT: "Username already exist",
        RET_NOTEXIST: "Invalid username",
        RET_AUTHERROR: "Invalid Password",
        }


_publicKey = tools.rsa_importkey("utils/data/rsa_public_key.pem")
_privateKey = tools.rsa_importkey("utils/data/rsa_private_key.pem")


def register(username, password, ret):
    """注册新帐号
    Args:
        username: 客户端传入，用户名
        password: 客户端传入，加密处理后的密钥
    Returns:
        (Ret, User)
    """
    #用私钥解密
    decrypt = tools.rsa_decrypt(password, _privateKey)
    password = decrypt[SALT_LENGTH:]

    try:
        with transaction.atomic():
            account = get_account_by_name(username, ret)
            if account is not None:
                ret.ret = ret.RET_HANDLE_ERROR
                ret.reason = "Username already exist[name=%s]" % username
                return None

            salt = tools.md5_hash(tools.random_salt())
            passhash = tools.md5_hash(salt + password) #加盐哈希之后的密码
            account = Account.objects.create(
                    name = username,
                    password = passhash,
                    salt = salt)

            logger.debug("Create account succeed[name=%s][id=%d]" %
                    (account.name, account.id))
            return account

    except IntegrityError as e:
        logger.warning("Atomic error[reason=%s]" % e)
        ret.ret = ret.RET_INSERT_ERROR
        ret.reason = "Create account failed, atomic error[%s]" % e
        return None

    except Exception as e:
        logger.warning("Create account failed[reason=%s]" % e)
        ret.ret = ret.RET_INSERT_ERROR
        ret.reason = "Create account failed[%s]" % e
        return None


def login(username, password, ret):
    """登录校验
    """
    #用私钥解密
    decrypt = tools.rsa_decrypt(password, _privateKey)
    password = decrypt[SALT_LENGTH:]

    account = get_account_by_name(username, ret)
    if account is None:
        logger.debug("Account not exist[name=%s]" % username)
        ret.ret = ret.RET_HANDLE_ERROR
        ret.reason = "Login failed[Invalid username]"
        return None

    if tools.md5_hash(account.salt + password) == account.password:
        logger.info("Account auth success[id=%d][name=%s]" % (account.id, account.name))
        return account

    logger.info("Account auth failed[name=%s]" % username)
    ret.ret = ret.RET_AUTH_ERROR
    ret.reason = "Login failed[Invalid password]"
    return None


def get_account_by_name(username, ret):
    """查找帐号记录
    通过 username
    Returns:
        None: 查找失败
        User: 帐号信息
    """
    try:
        account = Account.objects.get(name = username)
        return account

    except Exception as e:
        logger.warning("Get account failed[reason=%s]" % e)
        ret.ret = ret.RET_REQUEST_ERROR
        ret.reason = "Account not exist[name=%s]" % username
        return None


def get_account_by_id(id, ret):
    """查找帐号记录
    通过 id
    """
    try:
        account = Account.objects.get(id = id)
        return account

    except Exception as e:
        logger.warning("Get account failed[reason=%s]" % e)
        ret.ret = ret.RET_REQUEST_ERROR
        ret.reason = "Account not exist[id=%d]" % id
        return None


