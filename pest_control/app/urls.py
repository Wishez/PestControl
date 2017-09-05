from . import views
from django.conf.urls import url
from forms.views import *
urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^order_callback/$', order_callback, name='order_callback'),
    url(r'^make_order/$', make_order, name='make_order'),
    url(r'^ask_question/$', ask_question, name='ask_question'),
]