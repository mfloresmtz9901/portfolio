# Generated by Django 5.0.10 on 2025-01-08 16:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_remove_user_name_user_first_name_user_last_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='phone_number',
            field=models.CharField(default='', max_length=12),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='user',
            name='user_bio',
            field=models.TextField(blank=True, null=True),
        ),
    ]
