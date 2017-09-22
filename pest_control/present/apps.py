# -*- encoding: utf-8 -*-
from django.apps import AppConfig
from django.utils.translation import ugettext_lazy as _

class PresentConfig(AppConfig):
    name = 'present'
    verbose_name=_('Информация для представления')
