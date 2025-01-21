---
title: Keep your data warehouse up to date
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
If you keep your own set of data in a separate location to keep your BI tools up to date or just to keep a backup of your booking data, the OnceHub API will make your life easy.
To get the initial data set into your system you can retrieve the full list of bookings programmatically and, at any interval that you prefer, you can retrieve any updated bookings from your OnceHub account filtering on the updated_after parameter.
The updated_after parameter will include any booking that has undergone any update.
Updates can include:
A new booking that has been created
Status updated (booking has been completed, cancelled, rescheduled, no-show)
Booking has been reassigned
You can find more information about the GET Bookings endpoint and its parameters in the [API reference.]()