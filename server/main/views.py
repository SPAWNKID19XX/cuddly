from django.shortcuts import render
from django.conf import settings
from django.core.mail import send_mail

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import serializers


class ContactSerializer(serializers.Serializer):
    name = serializers.CharField()
    email = serializers.EmailField()
    phone = serializers.CharField()
    subject = serializers.CharField()
    message = serializers.CharField()


class ContactView(APIView):
    def post(self, request):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            name = serializer.validated_data['name']
            email = serializer.validated_data['email']
            phone = serializer.validated_data['phone']
            subject = serializer.validated_data['subject']
            message = serializer.validated_data['message']

            send_mail(
                subject=f"Contact from {email}",
                message=
f"""
Dear {name},

Thank you for getting in touch with us.

We have received your message and will get back to you as soon as possible. Below is a copy of your inquiry for your records:

-------------------------
📌 Subject: {subject}
📞 Phone: {phone}
📧 Email: {email}

📝 Message:
{message}
-------------------------
Our team will review your request and respond promptly. If you need immediate assistance, please don’t hesitate to call us.

Best regards,  
Customer Support Team  
CuddlyFreeze.Lda
""",
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.DEFAULT_FROM_EMAIL, email],
                fail_silently=False,
            )

            return Response({'success': True}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
