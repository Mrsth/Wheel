# Generated by Django 3.2 on 2021-06-10 03:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('KnoxApp1', '0009_rename_profile_extenderuser'),
    ]

    operations = [
        migrations.AddField(
            model_name='servicerequestform',
            name='bike_number',
            field=models.CharField(default='', max_length=20),
            preserve_default=False,
        ),
    ]
