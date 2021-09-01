from rest_framework import viewsets
from django.http import HttpResponse
from .serializers import PictureSerializer
from .models import Picture

class PictureViewSet(viewsets.ModelViewSet):
    queryset = Picture.objects.all()
    serializer_class = PictureSerializer

    def post(self, request, *args, **kwargs):
        image = request.data['img']
        Picture.objects.create(img=image)
        return HttpResponse({'message': 'Image Uploaded'}, status=200)