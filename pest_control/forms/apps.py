# -*- encoding: utf-8 -*-
from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _

class FormsConfig(AppConfig):
    name = 'forms'
    verbose_name = _('Пользовательские запросы')
