from rest_framework import serializers
from .models import *
from django.contrib.auth.password_validation import validate_password
class RegSerial(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ['password', 'username']
        extra_kwargs = {
            'password' : {'write_only':True}
        }
    def save(self):
        acc = Account(
            username = self.validated_data['username']
        )
        password = self.validated_data['password']
        acc.set_password(password)
        acc.save()
        return acc

class UserSerial(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ['id','username']

class PassChangeSerial(serializers.Serializer):
    old = serializers.CharField(required = True)
    new = serializers.CharField(required = True)
    
    def validate_new_pswd(self, value):
        validate_password(value)
        return value