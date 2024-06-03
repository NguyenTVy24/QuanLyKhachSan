import uuid

from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.db import models

from app.custum_user_manager import CustomUserManager
from app.enum_type import SystemRoleEnum


# Create your models here.

class User(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=30, unique=True)
    full_name = models.CharField(max_length=128, null=False, blank=False)
    is_active = models.BooleanField(default=False, blank=True)
    password = models.CharField(max_length=128, blank=True)
    last_login = models.DateTimeField(blank=True, null=True)
    verify_code = models.CharField(max_length=10, blank=True)
    role = models.CharField(max_length=30, null=False, blank=False, choices=SystemRoleEnum.choices(),
                            default=SystemRoleEnum.USER)

    code_lifetime = models.DateTimeField(null=True, blank=True)
    status_kyc = models.BooleanField(default=False, blank=True)
    soft_delete = models.BooleanField(default=False, blank=True)
    device_token = models.CharField(max_length=256, null=True, blank=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = CustomUserManager()
