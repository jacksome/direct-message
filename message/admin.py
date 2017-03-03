#coding:utf8
from django.contrib import admin

# Register your models here.
from message.models import Message

class MessageAdmin(admin.ModelAdmin):
    list_display = ('id', 'dialog_id', 'sender_id', 'receiver_id',
            'send_time', 'content')

admin.site.register(Message, MessageAdmin)

