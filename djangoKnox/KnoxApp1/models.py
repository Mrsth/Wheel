from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
from django.conf import settings
from datetime import datetime
from django.core.exceptions import ValidationError

# Create your models here.
class extenderUser(models.Model):
    phone_num = models.CharField(max_length=20)
    user = models.OneToOneField(User, on_delete=models.CASCADE)

class FeedPost(models.Model):
    post_content = models.TextField()

    def __str__(self):
        return self.post_content

class BikeCompanyModel(models.Model):
    companyName = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.companyName

class BikeModel(models.Model):
    company = models.ForeignKey(BikeCompanyModel, to_field='companyName', on_delete=models.CASCADE)
    model = models.CharField(max_length=50)  
    bike_number = models.CharField(max_length=50)
    bike_color = models.CharField(max_length=50)
    picture = models.ImageField(upload_to='images', null=True, blank=True) 
    rider = models.ForeignKey(User, to_field='username', on_delete=models.CASCADE) 

    def __str__(self):
        return self.rider.username   


class ServiceRequestForm(models.Model):

    def validate_date(value):
        if value==datetime.now().date():
            pass
        elif value>datetime.now().date():
            raise ValidationError("Don't input future date")  
        elif value<datetime.now().date():
            raise ValidationError('Don\'t input past date')         

    rider_name = models.CharField(max_length=50)
    bike_company = models.CharField(max_length=50)
    bike_model = models.CharField(max_length=50)
    bike_color = models.CharField(max_length=50)
    pickup = models.CharField(max_length=50)
    delivery = models.CharField(max_length=50)
    kmcovered = models.CharField(max_length=50)
    contact = models.CharField(max_length=50)
    problem = models.CharField(max_length=500)
    completed = models.CharField(max_length=100, default="Not Completed")
    serviceDate = models.DateField(validators=[validate_date]) 
    serviceTime = models.TimeField()
    deliveryTime = models.TimeField()

    def __str__(self):
        return self.rider_name


class BlogModel(models.Model):
    blogTitle = models.CharField(max_length=500);
    blogImage = models.ImageField();
    blogContent = models.TextField();   
    blogLink = models.CharField(max_length=500 ,blank=True, null=True);  

    def __str__(self):
        return self.blogTitle  

class OurServices(models.Model):
    serviceTitle = models.CharField(max_length=255)
    serviceContent = models.TextField()
    servicePhoto = models.ImageField()

    def __str__(self):
        return self.serviceTitle


