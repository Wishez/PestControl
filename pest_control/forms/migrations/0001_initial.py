# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-09-05 09:58
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('present', '0002_advice_created_at'),
    ]

    operations = [
        migrations.CreateModel(
            name='Callback',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=200, verbose_name='Заказчик')),
                ('phone', models.CharField(max_length=30, verbose_name='Телефон')),
                ('ordered_at', models.DateTimeField(default=django.utils.timezone.now, verbose_name='Время оформления звонка')),
            ],
            options={
                'verbose_name': 'Обратные вызовы',
            },
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=200, verbose_name='Имя заказчика')),
                ('phone', models.CharField(max_length=30, verbose_name='Телефон')),
                ('email', models.EmailField(max_length=100, verbose_name='E-mail')),
                ('ordered_at', models.DateTimeField(default=django.utils.timezone.now, verbose_name='Время оформления заказа')),
                ('will_execute_at', models.DateTimeField(blank=True, default=None, null=True, verbose_name='Время выполнения заказа')),
                ('service', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='present.Service', verbose_name='Выбранная услуга')),
                ('space', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='present.Space', verbose_name='Обрабатываемое помещение')),
            ],
            options={
                'verbose_name': 'Заказы',
            },
        ),
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('author_name', models.CharField(max_length=200, verbose_name='Автор вопроса')),
                ('email', models.EmailField(max_length=100, verbose_name='E-mail')),
                ('question', models.TextField(max_length=1024, verbose_name='Вопрос')),
                ('asked_at', models.DateTimeField(default=django.utils.timezone.now, verbose_name='Вопрос задан')),
            ],
            options={
                'verbose_name': 'Вопросы',
            },
        ),
    ]
