from django.urls import path
from . import views
from django.contrib.auth.views import LoginView

urlpatterns = [
    path('', views.home, name='home'),
    path('login/', views.custom_login, name='login'),
    path('register/', views.register, name='register'),
    path('register/user', views.register_user, name='register_user'),
    path('register/resend_token', views.resend_token, name='resend_token'),
    path('contact/', views.contact, name='contact'),
    path('accounts/login/', LoginView.as_view(), {'template_name': 'app/login.html'}, name='login'),
]
