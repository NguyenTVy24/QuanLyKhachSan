import random
from datetime import timedelta

from django.conf import settings
from django.utils import timezone
from django.core.mail import send_mail
from django.utils.html import strip_tags

from app.utils.template_mail import TemplateMail
from app.enum_type import TypeEmailEnum


def sent_mail_verification(user, type_mail):
    random_number = random.randint(0, 9999)

    verify_code = "{:04d}".format(random_number)
    user.verify_code = verify_code
    user.code_lifetime = timezone.now() + timedelta(minutes=10)
    user.save()
    message = ""
    template_mail = ""
    if type_mail == TypeEmailEnum.REGISTER:
        message = TemplateMail.CONTENT_MAIL_REGISTER_ACCOUNT(user.full_name, verify_code)
        template_mail = TemplateMail.SUBJECT_MAIL_REGISTER_ACCOUNT
    elif type_mail == TypeEmailEnum.RESET_PASSWORD:
        message = TemplateMail.CONTENT_MAIL_VERIFICATION(user.full_name, verify_code)
        template_mail = TemplateMail.SUBJECT_MAIL_VERIFICATION
    send_mail(
        template_mail,
        strip_tags(message),
        settings.EMAIL_HOST_USER,
        [user.email],
        fail_silently=False,
        html_message=message
    )
