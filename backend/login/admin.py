from login.models import Account
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
# Register your models here.

class Admin(UserAdmin):
    readonly_fields = ('date_joined', 'last_login')
    list_display = ('username', 'last_login', 'is_admin')
    search_fields = ()
    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()

    
admin.site.register(Account, Admin)