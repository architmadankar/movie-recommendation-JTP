from .models import *
from .serializer import *
from rest_framework.decorators import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response


# Create your views here.

class UserView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request, *args, **kwargs):
        user =  request.user
        userSerial = UserSerial(user)
        return Response(data= userSerial.data, status=200)

