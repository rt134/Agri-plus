from django.db import models

def upload_path(instance, filname):
    return '/'.join(["temp.jpg"])

class Picture(models.Model):
    img = models.ImageField(blank=False, null=False, upload_to=upload_path)