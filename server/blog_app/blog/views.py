from rest_framework import viewsets
from .models import Post
from .serializers import PostSerializer
from rest_framework.response import Response
from rest_framework import status


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def create(self, request, *args, **kwargs):
        print("Incoming data:", request.data)  
        return super().create(request, *args, **kwargs)
