from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib import messages

from app.models import User
from app.utils.send_email import sent_mail_verification
from app.enum_type import TypeEmailEnum

# Create your views here.


def home(request):
    return render(request, 'home.html')


@login_required
def contact(request):
    return render(request, 'app/contact.html')


@login_required
def my_protected_view(request):
    # Mã xử lý cho view của bạn
    return render(request, 'my_template.html')


def custom_login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            # Redirect to success page or any other page after login
            return redirect('home')
        else:
            # Handle invalid login
            return render(request, 'registration/login.html', {'error': 'Invalid username or password'})
    else:
        return render(request, 'registration/login.html')


def register(request):
    return render(request, 'registration/register.html')


def register_user(request):
    if request.method == 'POST':
        email = request.POST['email']
        username = request.POST['username']
        password1 = request.POST['password1']
        password2 = request.POST['password2']

        if password1 == password2:
            if User.objects.filter(username=username).exists():
                messages.error(request, 'Username already exists')
            elif User.objects.filter(email=email).exists():
                messages.error(request, 'Email already registered')
            else:
                user = User.objects.create_user(username=username, email=email, password=password1)
                user.save()
                sent_mail_verification(user, TypeEmailEnum.REGISTER)
                messages.success(request, 'Your account has been created successfully')
                return redirect('login')
        else:
            messages.error(request, 'Passwords do not match')
    return render(request, 'registration/register.html')


def resend_token(request):
    if request.method == 'POST':
        return
