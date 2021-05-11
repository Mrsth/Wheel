from django.contrib import admin
from .models import (FeedPost, BikeModel, ServiceRequestForm, BlogModel, 
                     BikeCompanyModel, OurServices)

admin.site.site_header = "Wheeler's Hospital"

# Register your models here.
@admin.register(FeedPost)
class FeedPost_Admin(admin.ModelAdmin):
    list_display =["post_content"]

@admin.register(BikeModel)
class BikeModel_Admin(admin.ModelAdmin):
    list_display = ["company", "model", "bike_number", "bike_color", "picture", "rider"]

@admin.register(ServiceRequestForm)
class ServiceRequestForm_Admin(admin.ModelAdmin):
    list_display = ['rider_name', 'bike_company', 'bike_model', 'bike_color', 'pickup', 'delivery', 'kmcovered', 'contact', 'problem', 'serviceDate', 'serviceTime', 'deliveryTime', 'completed']    

@admin.register(BlogModel)
class BlogModel_Admin(admin.ModelAdmin):
    list_display = ['blogTitle', 'blogImage', 'blogContent', 'blogLink']

@admin.register(BikeCompanyModel)
class BikeCompanyAdmin(admin.ModelAdmin):
    list_display = ["companyName"]

@admin.register(OurServices)
class OurServices(admin.ModelAdmin):
    list_display = ['serviceTitle', 'serviceContent', 'servicePhoto']

  