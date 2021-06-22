from django.contrib import admin
from alora.models import Posts


class PostsAdmin(admin.ModelAdmin):
    pass


admin.site.register(Posts, PostsAdmin)
# Register your models here.
