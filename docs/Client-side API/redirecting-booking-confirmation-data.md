---
title: Redirecting booking confirmation data
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
[block:api-header]
{
  "title": "Send data to your redirect page using URL parameters"
}
[/block]
OnceHub allows you to send booking confirmation data to the redirect page via URL parameters. Every time a booking is successfully scheduled on your Booking page, the Booking form submission data and information about the booking that was scheduled will be converted into key-value pairs (KVPs) and appended to the redirect URL. 

This feature can be used to create a custom confirmation page, enable client-side integrations, or enrich Customer data profiles, among other applications. [Learn more about use cases for redirecting booking confirmation data](https://developers.oncehub.com/v1.0.0/docs/use-cases-client-side-api) 
[block:api-header]
{
  "title": "Set up Automatic redirect with booking confirmation data"
}
[/block]
In order to send booking confirmation data to your redirect page, you must enable the <a target="_blank" href="https://help.oncehub.com/help/automatic-redirect">Automatic redirect</a> feature from the Booking form and redirect section of your Event type or Booking page:

1. Turn Automatic redirect to ON.
2. Enter the URL of your redirect page.
3. Click the checkbox to **Send booking confirmation data to redirect page**.
4. Click **Save** to apply these settings to your Booking page.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0405ccc-custom_confimation_page_automatic_redirect_settings.png",
        "custom confimation page automatic redirect settings.png",
        2216,
        1090,
        "#faf7f7"
      ],
      "caption": "Figure 1: Automatic redirect settings - Custom confirmation page"
    }
  ]
}
[/block]
That’s it! 

You have enabled redirecting booking confirmation data to your specified page via URL parameters.
[block:api-header]
{
  "title": "Example URL with booking confirmation data"
}
[/block]
The following is an example of a URL containing booking confirmation data that is sent to the redirect page:
[block:code]
{
  "codes": [
    {
      "code": "http://www.example.com/?Name=John%20Smith&Email=johnsmith@example.com&subject=Example%20Subject&company=Example%20Company&phone=1-2025550195&note=I%20look%20forward%20to%20the%20meeting.&bookingPage=financial&creationTime=2018-04-25T05:08:18.843Z&meetingTime=2018-04-25T10:45:00.000Z&timeZone=Eastern%20time&utcOffset=-5",
      "language": "text",
      "name": "Example URL with booking confirmation data"
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Booking confirmation data sent via URL parameters"
}
[/block]
Two types of booking confirmation data will be sent to your redirect page via URL parameters:
1. Booking form submission data
2. Booking data created when scheduling


**Booking form submission data**

Customer information submitted to the <a target="_blank" href="https://help.oncehub.com/help/introduction-to-the-booking-forms-editor">Booking form</a> will be added as URL parameters and sent to the custom confirmation page URL upon redirect. Any Booking form field (including <a target="_blank" href="https://help.oncehub.com/help/creating-and-editing-custom-fields">Custom fields</a>) for which the Customer has submitted data will be added to the redirect URL. Empty Booking form fields will not be added to the redirect URL.

The following table contains the parameter name and description of the fields sent:
[block:parameters]
{
  "data": {
    "h-0": "Parameter name",
    "h-1": "Description",
    "h-2": "",
    "0-0": "`Name`",
    "0-1": "The name provided by the Customer in the Booking form.",
    "0-2": "",
    "1-0": "`Email`",
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

Custom fields for which the Customer enters Booking submission data will be added to the URL when booking confirmation data is sent to the redirect page. The Custom field parameter name is the **Field name** as defined by the User (with spaces removed):
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cd63a62-Booking_form_editor_-_Defining_the_field_name_for_a_Custom_field.png",
        "Booking form editor - Defining the field name for a Custom field.png",
        686,
        592,
        "#f8f7f7"
      ],
      "caption": "Figure 2: Booking form editor - Defining the field name for a Custom field"
    }
  ]
}
[/block]
<a target="_blank" href="https://help.oncehub.com/help/creating-and-editing-custom-fields">Learn more about creating and editing Custom fields.</a>


**Booking data created when scheduling**

Booking data that is created when a new booking is scheduled will be added as URL parameters and sent to the redirect page. 

The following table contains the parameter name and description of the fields sent:
[block:parameters]
{
  "data": {
    "h-0": "Parameter name",
    "h-1": "Description",
    "h-2": "",
    "0-0": "`bookingPage`",
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

[block:api-header]
{
  "title": "Constraints"
}
[/block]
The following constraints are important to keep in mind when redirecting booking confirmation data:
* Booking confirmation data will only be sent to the redirect page when a booking is scheduled (not canceled, rescheduled, or reassigned).
* OnceHub does not impose length limits for fields passed in the redirect URL. If the length of the query string exceeds the URL character limit, the URL will be truncated and some data may not be sent.
* Booking confirmation data will not be sent to the redirect page if you are using a CRM record ID to <a target="_blank" href="https://help.oncehub.com/help/prepopulated-booking-forms">skip or prepopulate the booking form</a>, because this data is encrypted.