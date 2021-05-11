from django.shortcuts import render
from django.contrib.auth import login
from django.http import HttpResponse

# from django.core.mail import send_mail
# from smtplib import SMTP
# from socket import gaierror
# from django.conf import settings

import random
from twilio.rest import Client

from rest_framework import generics
from rest_framework.response import Response
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.parsers import MultiPartParser
from rest_framework.decorators import parser_classes
from rest_framework import viewsets
from rest_framework.mixins import ListModelMixin

from knox.models import AuthToken
from knox.views import LoginView
from django.contrib.auth.models import User

from .serializer import (UserSerializer, RegisterSerializer, FeedSerializer, ChangePasswordSerializer, BikeSerializer, ServiceRequestFormSerializer, BlogSerializer, OurServicesSerializer)
from .models import (FeedPost, BikeModel, ServiceRequestForm, BlogModel, OurServices)
from rest_framework.permissions import IsAuthenticated

from localStoragePy import localStoragePy
localStorage = localStoragePy('Myapp', 'json')

# Code for sending mail

# port  = 587
# smtp_server = "smtp.mailtrap.io"
# login = '1746fe31727005'
# password = 'bdbdf786ca0ea1'


# sender = "from@example.com"
# receiver = "1746fe31727005"

# message = f" Welcome to wheeler's hospital {receiver} from {sender}"


# def wheelmail():
#     try:
#         with smtplib.SMTP(smtp_server, port) as server:
#             # import pdb; pdb.set_trace();
#             server.login(login,password)
#             server.sendmail(sender, receiver, message)
#             print("Sent = ", message)
#         return Response({'MSG:': message})    
#     except (gaierror, ConnectionRefusedError):
#         print('Failed to connect to the server. Bad connection settings?')
#     except smtplib.SMTPServerDisconnected:
#         print('Failed to connect to the server. Wrong user/password?')
#     except smtplib.SMTPException as e:
#         print('SMTP error occurred: ' + str(e))     
     
    
#SMS CODE
# otp = random.randint(1000,9999)
# print("The OTP = ", otp)
# account_sid = 'ACf3948ea3cb3a73ee5f9d6aa9952bbadb'
# auth_token = 'cb1f5e9845e5325136ca1be996409e62'
# client = Client(account_sid, auth_token)

# message = client.messages.create(
#                      body="Your OTP number is"+str{opt},
#                      from_='+17272402246',
#                      to='+9779843354814'
#                  )

# print(message.sid)    



# Create your views here.
class RegisterAPI(generics.GenericAPIView, ListModelMixin):
  
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

    def get(self, request, *args, **kwargs):  
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        import pdb; pdb.set_trace();
        serializer = self.get_serializer(data = request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user":UserSerializer(user).data,
            "token":AuthToken.objects.create(user)[1],
        }) 

class LoginAPI(LoginView):
    serializer_class = UserSerializer
    permission_classes = (permissions.AllowAny,)

    def post(self, request, *args, **kwargs):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        login(request, user)
        user_data=super(LoginAPI, self).post(request,format=None)
        # user_data['uid'] = uid
        # import pdb;pdb.set_trace()
        return user_data  
    
    def get(self, request, pk=None,format=None):
        userDatas = User.objects.all() 
        userDatasSerializer = UserSerializer(userDatas, many=True)      
        return Response(userDatasSerializer.data)     

    
class FeedsAPI(APIView):
    def post(self, request, format=None):
        serializer = FeedSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, pk=None,format=None):
        feedDatas = FeedPost.objects.all() 
        feedSerializer = FeedSerializer(feedDatas, many=True)      
        return Response(feedSerializer.data) 

class ChangePasswordView(generics.UpdateAPIView):
    # import pdb; pdb.set_trace();
    queryset = User.objects.all()
    permission_classes = (IsAuthenticated,)
    serializer_class = ChangePasswordSerializer

   


class BikeViewset(APIView):
    def get(self, request, pk=None, format=None):
        id = pk
        if id is not None:
            bikedata = BikeModel.objects.get(id=id)
            serializer = BikeSerializer(bikedata)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        bikedatas = BikeModel.objects.all()
        serializer = BikeSerializer(bikedatas, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = BikeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

    def put(self, request, pk, format=None):
        id = pk
        bikedata = BikeModel.objects.get(id=id)
        serializer = BikeSerializer(bikedata, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  

    def patch(self, request, pk, format=None):
        id = pk
        bikedata = BikeModel.objects.get(pk=id)      
        serializer = BikeSerializer(bikedata, data=request.data, partial=True) 

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)   
    
    def delete(self, request, pk=None, format=None):
        id=pk
        data = BikeModel.objects.get(id=id)      
        data.delete()
        return Response({'msg':'Data deleted'})


class ServiceRequestFormViewset(APIView):
    def get(self, request, pk=None, format=None):
        id=pk
        if id is not None:
            serviceData = ServiceRequestForm.objects.get(id=id)
            serviceDataSerializer = ServiceRequestFormSerializer(serviceData)
            return Response(serviceDataSerializer.data)
        serviceDatas = ServiceRequestForm.objects.all()
        serviceDatasSerializer = ServiceRequestFormSerializer(serviceDatas, many=True)
        return Response(serviceDatasSerializer.data)

    def post(self, request, pk=None, format=None):
        serializer = ServiceRequestFormSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  
    
    def delete(self, request, pk=None, format=None):
        id=pk
        deletequery = ServiceRequestForm.objects.get(id=id)
        deletequery.delete() 
        return Response({'msg':'Record deleted successfully...'})  

    def put(self, request, pk, format=None):
        id = pk
        servicedata = ServiceRequestForm.objects.get(id=id)
        serviceserializer = ServiceRequestFormSerializer(servicedata, data=request.data)

        if serviceserializer.is_valid():
            serviceserializer.save()
            return Response(serviceserializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serviceserializer.errors, status=status.HTTP_400_BAD_REQUEST)  


class BlogViewSet(APIView):
    def get(self, request, pk=None,format=None):
        if pk is not None:
            blogData = BlogModel.objects.get(id=pk)
            blogDataSerializer = BlogSerializer(blogData)
            return Response(blogDataSerializer.data, status=status.HTTP_201_CREATED)
        blogdatas = BlogModel.objects.all()     
        blogdatasSerializer = BlogSerializer(blogdatas, many=True)   
        return Response(blogdatasSerializer.data)                
    
    def post(self, request, pk=None,format=None):
        serializer = BlogSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)   


class OurServicesViewset(generics.GenericAPIView, ListModelMixin):
    queryset = OurServices.objects.all()
    serializer_class = OurServicesSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)
        