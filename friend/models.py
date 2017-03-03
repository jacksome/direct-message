#coding:utf8
from django.db import models
from django.utils import timezone


# Create your models here.
class Friend(models.Model):
    """联系人
    """
    id = models.AutoField(primary_key=True)
    account_id = models.IntegerField(db_index=True)
    friend_id = models.IntegerField()
    friend_name = models.CharField(max_length=255)

    create_time = models.DateTimeField(default=timezone.now)
    unread_msg_num = models.IntegerField(default=0)
    last_msg_time = models.DateTimeField(default=timezone.now)

    class Meta:
        unique_together = (("account_id", "friend_id"),)

    def __unicode__(self):
        return "[%d=%s]" % (self.account_id, self.friend_id)

