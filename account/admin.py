#coding:utf8
from django.contrib import admin

# Register your models here.
from account.models import Account

class AccountAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'create_time')

admin.site.register(Account, AccountAdmin)

