from django.db import models

class Employee(models.Model):
    fullname = models.CharField(max_length=255)
    date_of_birth = models.DateField()
    address = models.TextField()
    contact_number = models.CharField(max_length=15)
    emergency_contact = models.CharField(max_length=255)

    def __str__(self):
        return self.fullname
