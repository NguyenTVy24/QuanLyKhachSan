class TemplateMail(object):
    SUBJECT_MAIL_VERIFICATION = 'Verify your Account with OTP code'

    SUBJECT_MAIL_REGISTER_ACCOUNT = 'Verify Your Account Registration with OTP Code'

    CONTENT_MAIL_VERIFICATION = lambda full_name, otp_code: F"""<div>
    <p>Hello {full_name}</p>
    <p> We have received a request to reset the password for your account. To proceed with the password reset
      process, please use the following OTP (One-Time Password) code: {otp_code}.</p>
    <p> Thank you for choosing PetShop.</p>
    <p>Best regards,</p>
    <p> PetShop Team</p>
  </div>"""

    CONTENT_MAIL_REGISTER_ACCOUNT = lambda full_name, otp_code: F"""<div>
    <p>Dear {full_name}</p>
    <p> Thank you for registering with PetShop! To complete the registration process and verify your account,
     please use the following OTP (One-Time Password) code: {otp_code}.</p>
    <p> Thank you for choosing PetShop.</p>
    <p>Best regards,</p>
    <p> PetShop Team</p>
  </div>"""
