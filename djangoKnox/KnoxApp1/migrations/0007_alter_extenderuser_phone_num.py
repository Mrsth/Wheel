# Generated by Django 3.2 on 2021-05-07 10:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('KnoxApp1', '0006_extenderuser'),
    ]

    operations = [
        migrations.AlterField(
            model_name='extenderuser',
            name='phone_num',
            field=models.CharField(max_length=20),
        ),
    ]
