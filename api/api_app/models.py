from django.db import models
from .storage import OverwriteStorage

def upload_path(instance, filname):
    return '/'.join(["temp.jpg"])

class Picture(models.Model):
    img = models.ImageField(upload_to=upload_path, storage=OverwriteStorage())