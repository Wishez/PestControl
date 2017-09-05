from django.contrib import admin
from .models import *

class AdviceAdminModel(admin.ModelAdmin):
    get_per_page = 10
    list_display = ('advice_title', 'created_at',)
    ordering = ('-created_at',)
    date_hierarchy = 'created_at'
    filter_fields =  ('advice_title', 'created_at',)
    search_fields = ('advice_title',)

class ServiceAdminModel(admin.ModelAdmin):
    get_per_page = 10
    list_display = ('service_name',)
    filter_fields =  ('service_name',)
    search_fields = ('service_name',)
    filter_horizontal = ('options',)

class OptionAdminModel(admin.ModelAdmin):
    get_per_page = 10
    list_display = ('option_name',)
    filter_fields =  ('option_name',)
    search_fields = ('option_name',)
    filter_horizontal = ('spaces',)

class SpaceAdminModel(admin.ModelAdmin):
    get_per_page = 10
    list_display = ('space_name', 'price')
    filter_fields =  ('space_name',)
    search_fields = ('space_name',)
    # raw_id_fields = ('ensure',)

class EnsureAdminModel(admin.ModelAdmin):
    get_per_page = 10
    filter_fields =  ('ensure_name',)
    search_fields = ('ensure_name',)




admin.site.register(Advice, AdviceAdminModel)
admin.site.register(Service, ServiceAdminModel)
admin.site.register(Option, OptionAdminModel)
admin.site.register(Space, SpaceAdminModel)
admin.site.register(Ensure, EnsureAdminModel)

