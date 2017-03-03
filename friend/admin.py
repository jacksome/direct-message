#coding:utf8
from django.contrib import admin

# Register your models here.
from friend.models import Friend

class FriendAdmin(admin.ModelAdmin):
    list_display = ('id', 'account_id', 'friend_id', 'friend_name',
            'create_time', 'unread_msg_num', 'last_msg_time')

admin.site.register(Friend, FriendAdmin)

