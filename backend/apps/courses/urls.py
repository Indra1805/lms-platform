from django.urls import path
from .views import CourseListCreateView

# create your courses requests here

urlpatterns = [
    path("", CourseListCreateView.as_view()),
]