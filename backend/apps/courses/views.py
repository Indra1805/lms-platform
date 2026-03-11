from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated

from .models import Course
from .serializers import CourseSerializer
from common.permissions import IsAdmin

# create your courses views here

class CourseListCreateView(APIView):
    """
    GET  -> Public endpoint for listing published courses
    POST -> Admin only (create course)
    """

    def get_permissions(self):
        # Public access for course listing
        if self.request.method == "GET":
            return [AllowAny()]

        # Only authenticated users can attempt POST
        return [IsAuthenticated()]

    def get(self, request):
        """
        Return published courses for landing page / catalog
        """
        courses = Course.objects.filter(is_published=True).order_by("-created_at")

        serializer = CourseSerializer(courses, many=True, context={"request": request})

        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        """
        Only admins can create courses
        """

        if not IsAdmin().has_permission(request, self):
            return Response(
                {"detail": "Admin privileges required"},
                status=status.HTTP_403_FORBIDDEN
            )

        serializer = CourseSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save(created_by=request.user)

            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)