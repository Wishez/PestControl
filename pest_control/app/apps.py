# -*- encoding: utf-8 -*-
from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _

class AppConfig(AppConfig):
    name = 'app'
    verbose_name = _('Основное')
