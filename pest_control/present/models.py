from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.utils import timezone
# Create your models here.

class Advice(models.Model):
    advice_title = models.CharField(
        _('Заголовок'),
        max_length=200
    )
    advice_text = models.TextField(
        _('Содержимое совета'),
        max_length=8172
    )
    created_at = models.DateTimeField(
        _('Дата создания'),
        default=timezone.now
    )
    def __str__(self):
        return self.advice_title

    class Meta:
        verbose_name = _('Совет')
        verbose_name_plural = _('Советы')


class Ensure(models.Model):
    ensure_name = models.CharField(
        _('Срок гарантии'),
        max_length=300
    )


    def __str__(self):
        return self.ensure_name

    class Meta:
        verbose_name = _('Гарантия')
        verbose_name_plural = _('Гарантии')

class Space(models.Model):
    space_name = models.CharField(
        _('Название площади'),
        max_length=200
    )

    price = models.IntegerField(
        _('Цена обработки')
    )

    ensure = models.ForeignKey(
        Ensure,
        verbose_name=_('Название площади')
    )

    def __str__(self):
        return self.space_name

    class Meta:
        verbose_name = _('Площадь')
        verbose_name_plural = _('Площади')
# Create your models here.
class Option(models.Model):
    option_name = models.CharField(
        _('Название варианта услуги'),
        max_length=200
    )
    spaces = models.ManyToManyField(
        Space,
        verbose_name=_('Помещения')
    )
    def __str__(self):
        return self.option_name

    class Meta:
        verbose_name = _('Вариант прдоставляемой услуги')
        verbose_name_plural = _('Варианты предоставляемых услуг')

class Service(models.Model):
    service_name = models.CharField(
        _('Название услуги'),
        max_length=200
    )

    options = models.ManyToManyField(
        Option,
        verbose_name=_('Варианты услуги')
    )

    service_description = models.TextField(
        _('Описание услуги'),
        max_length=8172
    )

    def __str__(self):
        return self.service_name

    class Meta:
        verbose_name = _('Услуга')
        verbose_name_plural = _('Услуги')