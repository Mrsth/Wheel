from rest_framework import serializers
from django.contrib.auth.models import User
from .models import FeedPost, BikeModel, ServiceRequestForm, BlogModel, OurServices

#User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email", "password"]

    def create(self, validated_data):
        user = User.objects.create_user(
                validated_data["username"],
                validated_data["email"], 
                validated_data["password"],
                )   
        return user  

class FeedSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedPost
        fields = "__all__"

class ChangePasswordSerializer(serializers.ModelSerializer):
    # import pdb; pdb.set_trace();
    password = serializers.CharField(write_only=True, required=True)  
    password2 = serializers.CharField(write_only=True, required=True) 
    old_password = serializers.CharField(write_only=True, required=True) 

    class Meta:
        model = User
        fields = ['old_password', 'password', 'password2']

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password":"Password field doesn't match."})  
        return attrs

    def validate_old_password(self, value):
        user = self.context['request'].user
        if not user.check_password(value):
            raise serializers.ValidationError({"old_password":"old password is not correct"})            
        return value

    def update(self, instance, validated_data):
        instance.set_password(validated_data['password'])
        instance.save()   
        return instance  

class BikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = BikeModel
        fields = "__all__" 
          

class ServiceRequestFormSerializer(serializers.ModelSerializer):
    class Meta:
        model =  ServiceRequestForm
        fields = "__all__"   

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogModel
        fields = "__all__"

class OurServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = OurServices
        fields = "__all__"        
