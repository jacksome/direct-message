#coding:utf8
from django.db import models
from django.utils import timezone


# Create your models here.
class Account(models.Model):
    """帐号信息
    """
    id = models.AutoField(primary_key=True)

    name = models.CharField(max_length=255, db_index=True, unique=True) #email 地址最长254个字符
    password = models.BinaryField()
    salt = models.BinaryField()

    create_time = models.DateTimeField(default=timezone.now)

    def __unicode__(self):
        return "[%d=%s]" % (self.id, self.name)


