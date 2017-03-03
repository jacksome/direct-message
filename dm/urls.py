"""dm URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin
import landing.views
import account.views
import friend.views
import message.views


urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),

    url(r'^$', landing.views.landing),

    url(r'^login/$', account.views.login),
    url(r'^auth/$', account.views.auth),
    url(r'^register/$', account.views.register),
    url(r'^logout/$', account.views.logout),

    url(r'^friend/all/', friend.views.query_friend),
    url(r'^friend/add/', friend.views.add_friend),
    url(r'^friend/del/', friend.views.delete_friend),
    url(r'^friend/changed/', friend.views.query_friend_changed),

    url(r'^message/all/', message.views.query_message),
    url(r'^message/send/', message.views.send_message),
    url(r'^message/del/', message.views.delete_message),
    url(r'^message/new/', message.views.query_new_message),
]

