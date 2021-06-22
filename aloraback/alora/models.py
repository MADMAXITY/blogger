from django.db import models
from PIL import Image
# Create your models here.


class Posts(models.Model):
    name = models.CharField(max_length=255)
    text = models.TextField(max_length=2000)
    username = models.CharField(max_length=20)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ('-date',)
