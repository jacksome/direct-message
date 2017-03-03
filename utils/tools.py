#coding:utf8
import os
import base64
import hashlib
from Crypto import Random
from Crypto.PublicKey import RSA
from Crypto.Hash import SHA
from Crypto.Hash import SHA256
from Crypto.Cipher import PKCS1_v1_5 as pk_cipher


def get_ip(request):
    """获取 ip
    """
    if request.META.has_key('HTTP_X_FORWARDED_FOR'):
        ip =  request.META['HTTP_X_FORWARDED_FOR']
    else:
        ip = request.META['REMOTE_ADDR']

    return ip


def rsa_importkey(keyfile):
    """读入 key
    """
    key = RSA.importKey(open(keyfile, 'r').read())
    return key


def random_salt(length = 32):
    """随机生成盐: 32字节
    Cryptographically Secure Pseudo-Random Number Generator (CSPRNG)
    """
    return os.urandom(length)


def sha256_hash(value):
    """SHA256 哈希
    """
    obj = SHA256.new()
    obj.update(value)
    return obj.digest()


def md5_hash(value):
    """MD5 哈希
    """
    md5 = hashlib.md5()
    md5.update(value)
    hex_value = md5.hexdigest()
    return hex_value

def rsa_decrypt(data, key):
    """RSA 解密
    """
    print data
    data = base64.b64decode(data)
    print data

    dsize = SHA.digest_size
    sentinel = Random.new().read(15 + dsize)
    cipher = pk_cipher.new(key)
    message = cipher.decrypt(data, sentinel)
    #return message

    digest = SHA.new(message[:-dsize]).digest()
    if digest == message[-dsize:]:
        return message[:-dsize]
    else:
        return message
        # raise ValueError('Cannot decrypt message')


def rsa_encrypt(data, key):
    """RSA 加密
    """
    h = SHA.new(data)
    cipher = pk_cipher.new(key)
    encrypt = cipher.encrypt(data + h.digest())
    encode = base64.b64encode(encrypt)
    return encode
