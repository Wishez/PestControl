from django.contrib import admin
from .models import *

class AdviceAdminModel(admin.ModelAdmin):
    get_per_page = 10
    list_display = ('advice_title', 'created_at',)
    ordering = ('-created_at',)
    # date_hiearchy = 'created_at'
    filter_fields =  ('advice_title', 'created_at',)
    search_fields = ('advice_title',)

class ServiceAdminModel(admin.ModelAdmin):
    get_per_page = 10
    list_display = ('service_title',)
    # date_hiearchy = 'created_at'
    filter_fields =  ('service_title',)
    search_fields = ('service_title',)
    filter_horizontal = ('options',)



admin.site.register(Advice, AdviceAdminModel)
admin.site.register(Service)
admin.site.register(Option)
admin.site.register(Space)
admin.site.register(Ensure)

