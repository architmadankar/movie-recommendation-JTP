from django.db import models

# Create your models here.

class Recommend(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=500)
    genre = models.TextField()
    
    def __str__(self) -> str:
        return str(self.title)