from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from .models import * 
from .serializer import *
from engine import recommend
# Create your views here.

class List(APIView):
    classes = [IsAuthenticated]
    def get(self):
        movies = Recommend.objects.all()
        serializer = Serializer(movies, many = True)
        return Response(status = 200, data = serializer.data)
    
class Suggest(APIView):
    classes = [IsAuthenticated]
    def post(self, request):
        movie = request.data.get('movie', None)
        List = recommend(movie)
        res = []
        for i in List:
            if Recommend.objects.filter(id=i).exists():
                mov = Recommend.objects.filter(id=i)[0]
                serializedData = Serializer(mov)
                res.append(serializedData.data)
        return Response( status=200, data = List)