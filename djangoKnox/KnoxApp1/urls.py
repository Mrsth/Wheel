from .views import (RegisterAPI, LoginAPI, FeedsAPI, ChangePasswordView, 
                    BikeViewset, ServiceRequestFormViewset, BlogViewSet, OurServicesViewset, BikeCompanyViewset)
from django.urls import path, include


urlpatterns = [
    path('register', RegisterAPI.as_view(), name='register'),
    path('login', LoginAPI.as_view(), name='login'),
    path('feed', FeedsAPI.as_view(), name='feed'),
    path('change_password/<int:pk>', ChangePasswordView.as_view(), name='change_password'),
    path('bike', BikeViewset.as_view(), name="bike"),
    path('bike/<int:pk>', BikeViewset.as_view(), name='bikepk'),
    path('service', ServiceRequestFormViewset.as_view(), name='service'),
    path('service/<int:pk>', ServiceRequestFormViewset.as_view(), name='service'),
    path('blog', BlogViewSet.as_view(), name='blog'),
    path('blog/<int:pk>', BikeViewset.as_view()),
    path('ourservices', OurServicesViewset.as_view()),
    path('company', BikeCompanyViewset.as_view())
    # path('mail', wheelmail),
    ]