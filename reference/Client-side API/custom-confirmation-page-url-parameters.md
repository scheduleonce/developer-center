---
title: Custom confirmation page (URL parameters)
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
[block:api-header]
{
  "title": "Booking form submission data (URL parameters)"
}
[/block]
Booking form submission data can be sent via URL parameters (together with booking data - see below) to a custom confirmation page upon redirect. The following table describes the parameter name, and description of the fields sent:
[block:parameters]
{
  "data": {
    "h-0": "Parameter name",
    "h-1": "Description",
    "h-2": "",
    "0-0": "`name`",
    "0-1": "The name provided by the Customer in the Booking form.",
    "0-2": "",
    "1-0": "`email`",
    "1-1": "The email provided by the Customer in the Booking form.",
    "1-2": "",
    "2-0": "`company`",
    "2-1": "The company provided by the Customer in the Booking form.",
    "2-2": "",
    "3-0": "`mobile`",
    "3-1": "The mobile phone number provided by the Customer in the Booking form.",
    "3-2": "",
    "4-0": "`phone`",
    "4-1": "The phone number provided by the Customer in the Booking form.",
    "4-2": "",
    "5-0": "`note`",
    "5-1": "The note provided by the Customer in the Booking form.",
    "5-2": "",
    "6-0": "`customerGuests`",
    "6-1": "List of additional attendees (emails) invited by the Customer.",
    "6-2": "",
    "7-0": "`location`",
    "7-1": "The location of the meeting.",
    "7-2": "",
    "8-0": "`<custom field name>`",
    "8-1": "The name of the User-defined Custom field."
  },
  "cols": 2,
  "rows": 9
}
[/block]
**How are Custom fields handled?**

Custom fields for which the Customer enters Booking submission data will be added to the redirect URL when sending booking confirmation data to a custom confirmation page. The Custom field parameter name is the **Field name** as defined by the User (with spaces removed):
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a458d36-Custom_field_name.png",
        "Custom field name.png",
        1038,
        633,
        "#f7f5f6"
      ],
      "caption": "ScheduleOnce Booking form editor - Defining the field name for a Custom field"
    }
  ]
}
[/block]
<a target="_blank" href="https://help.scheduleonce.com/customer/portal/articles/1924597-creating-custom-fields">Learn more about creating and editing Custom fields.</a>
[block:api-header]
{
  "title": "Booking data (URL parameters)"
}
[/block]
Booking data can be sent via URL parameters (together with booking form submission data - see above) to a custom confirmation page upon redirect. The following table describes the parameter name, URL syntax, and description of the fields sent:
[block:parameters]
{
  "data": {
    "h-0": "Parameter name",
    "h-1": "Description",
    "h-2": "",
    "0-0": "`bookingPageName`",
    "0-1": "The Customer-facing name of the Booking page used to make the booking.",
    "0-2": "",
    "1-0": "`subject`",
    "1-1": "The name of the Service or Subject as defined in the Booking form.",
    "1-2": "",
    "2-0": "`creationTime`",
    "2-1": "The date and time when the booking was created, in UTC.",
    "2-2": "",
    "3-0": "`meetingTime`",
    "3-1": "The starting date and time, in the Booking page time zone.",
    "3-2": "",
    "4-0": "`timeZone`",
    "4-1": "The time zone of the Booking page as defined in the Availability section.",
    "4-2": "",
    "5-0": "`utcOffset`",
    "5-1": "The UTC offset of the Booking page time zone, in integer.",
    "5-2": ""
  },
  "cols": 2,
  "rows": 6
}
[/block]
[Learn more about sending booking confirmation data via URL parameters to a custom confirmation page](https://developers.scheduleonce.com/v2.0.0/docs/custom-confirmation-page)