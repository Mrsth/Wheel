# Generated by Django 3.2 on 2021-05-10 12:36

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('KnoxApp1', '0008_rename_extenderuser_profile'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Profile',
            new_name='extenderUser',
        ),
    ]
