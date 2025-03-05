from django.contrib import admin
from django.urls import path, include  # ✅ Must import include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('employees.urls')),  # ✅ Ensure this line is correct
]
