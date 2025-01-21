---
title: The booking page object
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
The booking page object contains the customer facing name, internal label and URL for booking pages on your account and indicates whether the booking page is enabled to receive bookings. [Learn more about booking pages](https://help.oncehub.com/help/introduction-to-booking-pages)
[block:parameters]
{
  "data": {
    "h-0": "Field",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "`object`",
    "0-1": "*string*",
    "0-2": "String representing the object’s type. Objects of the same type share the same value. The type here is `booking_page`.",
    "1-0": "`id`",
    "1-1": "*string*",
    "1-2": "Unique identifier for the object.",
    "2-0": "`name`",
    "2-1": "*string*",
    "2-2": "The customer-facing name of the booking page.",
    "3-0": "`label`",
    "3-1": "*string*",
    "3-2": "The internal label of the booking page.",
    "4-0": "`url`",
    "4-1": "*url*",
    "4-2": "The URL of the booking page.",
    "5-0": "`active`",
    "5-1": "*boolean*",
    "5-2": "True if this booking page is enabled and accepts bookings.",
    "6-0": "`timezone`",
    "6-1": "*string*",
    "6-2": "The Booking page timezone. Displayed in [IANA timezone format](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)."
  },
  "cols": 3,
  "rows": 7
}
[/block]
.
[block:api-header]
{
  "title": "BOOKING PAGE",
  "sidebar": true
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "{\n  \"id\": \"BP-3F7JAWT4UA\",\n  \"object\": \"booking_page\",\n  \"name\": \"Andrea Hartie\",\n  \"label\": \"AndreaHartie\",\n  \"url\": \"https://go.oncehub.com/andreahartie\",\n  \"active\": true,\n  \"timezone\": \"America/Chicago\"\n}",
      "language": "json",
      "name": "Sample booking page"
    }
  ],
  "sidebar": true
}
[/block]