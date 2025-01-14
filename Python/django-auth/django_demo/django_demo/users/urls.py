from django.urls import path
from users import views

app_name = "users"
urlpatterns = [
    path("user/", view=views.UserList.as_view(), name="user-list"),
    path("user/<pk>/", view=views.UserDetail.as_view(), name="user-detail"),
]
