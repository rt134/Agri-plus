# Generated by Django 2.2.24 on 2021-09-01 03:44

import api_app.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_app', '0005_auto_20210901_0340'),
    ]

    operations = [
        migrations.AlterField(
            model_name='picture',
            name='img',
            field=models.ImageField(upload_to=api_app.models.upload_path),
        ),
    ]
