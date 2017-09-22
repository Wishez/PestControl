# -*- encoding: utf-8 -*-
from django.contrib import admin
from .models import *
# Register your models here.

class AdminQuestion(admin.ModelAdmin):
    list_display = ('author_name', 'email', 'asked_at',)
    search_fields = ('author_name', 'email', 'asked_at',)
    ordering = ('-asked_at',)
    date_hierarchy = 'asked_at'
    filter_fields = ('author_name', 'email', 'asked_at',)
    fieldsets = (
        (None, {
            "fields": (
                ('author_name', 'email',),
                ('question', 'asked_at',),
            )
        }),
    )

class AdminCallback(admin.ModelAdmin):
    list_display = ('full_name', 'phone', 'ordered_at',)
    search_fields = ('full_name', 'phone', 'ordered_at',)
    ordering = ('-ordered_at',)
    date_hierarchy = 'ordered_at'
    filter_fields = ('full_name', 'phone', 'ordered_at',)
    fieldsets = (
        (None, {
            "fields": (
                ('full_name', 'phone',),
                ('ordered_at',),
            )
        }),
    )

class AdminOrder(admin.ModelAdmin):
    list_display = ('full_name', 'phone', 'email', 'ordered_at', 'will_execute_at',)
    search_fields = ('ordered_at', 'will_execute_at', 'full_name', 'service', 'phone',)
    ordering = ('will_execute_at', 'ordered_at',)
    date_hierarchy = 'will_execute_at'
    filter_fields = ('ordered_at', 'will_execute_at', 'full_name', 'service',)
    fieldsets = (
        ('Личный данные', {
            "fields": (
                ('full_name', 'phone', 'email', ),
            )
        }),
        ('Выбор клиента', {
            "fields": (
                ('service', 'space',),
                ('ordered_at', 'will_execute_at',),
            )
        }),
    )


admin.site.register(Question, AdminQuestion)
admin.site.register(Callback, AdminCallback)
admin.site.register(Order, AdminOrder)