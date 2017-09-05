from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.utils import timezone

from present.models import Service, Space
# Create your models here.

class Question(models.Model):
    author_name = models.CharField(
        _('Автор вопроса'),
        max_length=200
    )
    email = models.EmailField(
        _('E-mail'),
        max_length=100
    )
    question = models.TextField(
        _('Вопрос'),
        max_length=1024
    )

    asked_at = models.DateTimeField(
        _('Вопрос задан'),
        default=timezone.now
    )

    def __str__(self):
        return self.author_name

    class Meta:
        verbose_name = _('Вопрос')
        verbose_name_plural = _('Вопросы')


class Order(models.Model):
    full_name = models.CharField(
        _('Имя заказчика'),
        max_length=200
    )
    phone = models.CharField(
        _('Телефон'),
        max_length=30
    )
    email = models.EmailField(
        _('E-mail'),
        max_length=100
    )
    service = models.ForeignKey(
        Service,
        verbose_name=_('Выбранная услуга')
    )
    space = models.ForeignKey(
        Space,
        verbose_name=_('Обрабатываемое помещение')
    )
    ordered_at = models.DateTimeField(
        _('Время оформления заказа'),
        default=timezone.now
    )
    will_execute_at = models.DateTimeField(
        _('Время выполнения заказа'),
        default=None,
        blank=True,
        null=True
    )
    def __str__(self):
        return self.full_name

    class Meta:
        verbose_name = _('Заказ')
        verbose_name_plural = _('Заказы')


class Callback(models.Model):
    full_name = models.CharField(
        _('Заказчик'),
        max_length=200
    )
    phone = models.CharField(
        _('Телефон'),
        max_length=30
    )
    ordered_at = models.DateTimeField(
        _('Время оформления звонка'),
        default=timezone.now
    )

    def __str__(self):
        return self.full_name

    class Meta:
        verbose_name = _('Обратный вызов')
        verbose_name_plural = _('Обратные вызовы')