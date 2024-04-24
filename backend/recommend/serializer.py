from rest_framework import serializers
from .models import *
class Serializer(serializers.ModelSerializer):
    class Meta:
        model = Recommend
        fields = '__all__'