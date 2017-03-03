#coding:utf8
from django.db import models
from django.utils import timezone


# Create your models here.
class Message(models.Model):
    """消息
    """
    id = models.AutoField(primary_key=True)

    dialog_id = models.BigIntegerField(db_index=True)
    sender_id = models.IntegerField()
    receiver_id = models.IntegerField()

    send_time = models.DateTimeField(default=timezone.now)
    content = models.TextField()

    class Meta:
        index_together = [["sender_id", "receiver_id"],]

    def __unicode__(self):
        return "[%d=%d=%s]" % (self.sender_id, self.receiver_id, self.content)

