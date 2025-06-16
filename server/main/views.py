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
                message=f"From: {name} <{email}>\n"
                        f"{subject}\n"
                        f"My phone number is {phone} contact me please\n{message}",
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.DEFAULT_FROM_EMAIL, email],
                fail_silently=False,
            )

            return Response({'success': True}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)