---
title: Collecting data from an embedded Booking page
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
  "title": "Collect data from an embedded Booking page with JavaScript"
}
[/block]
OnceHub allows you to collect booking confirmation data from an embedded Booking page by adding a JavaScript function alongside the embed code in your website. The JavaScript function is executed every time a booking is successfully scheduled in your embedded Booking page. When the function executes, a JSON data payload object containing booking confirmation data is sent to the parent page (the page in which the scheduling pane is embedded).

This feature can be used to create a custom confirmation page, enable client-side integrations, or enrich Customer data profiles, among other applications. [Learn more about use cases for collecting data from embedded Booking pages](https://developers.oncehub.com/v1.0.0/docs/use-cases-client-side-api) 
[block:api-header]
{
  "title": "Set up data collection from an embedded Booking page"
}
[/block]
In order to start collecting data from an embedded Booking page, you must first publish your Booking page using <a target="_blank" href="https://help.oncehub.com/help/website-embed">Website embed</a>. You can do this from the **ScheduleOnce > Share & Publish** section of your account. Simply copy the embed code generated for your selected Booking page, and paste it into your web page.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d01b172-website_embed_copy_code.png",
        "website embed copy code.png",
        1089,
        860,
        "#f7f6f6"
      ],
      "caption": "Figure 1: Website embed"
    }
  ]
}
[/block]
To implement the JavaScript data collection function, follow these steps:

1. Implement the `SOAfterConfirmationFunction()` function by pasting the code into the page in which your scheduling pane is embedded (the parent page). It is recommended to paste this function before the Booking page embed code, because the interpreters of some browsers do not support calling undefined functions. 
2. Define the parameter name you wish the function to call (this will be the name of the JSON object returned when the function executes, containing Customer booking data). The function takes one parameter. 
3. Implement the logic you wish to apply to the returned JSON object.

The following is an example code snippet showing the implementation of the `SOAfterConfirmationFunction()` function and an embedded Booking page:
[block:code]
{
  "codes": [
    {
      "code": "<script>\n  function SOAfterConfirmationFunction(data) {\n    // logic using the data object passed to the function\n  }\n</script>\n\n<!-- ScheduleOnce embed START -->\n< div id=\"SOIDIV_dana\"\ndata-so-page=\"dana\"\ndata-height=\"550\"\ndata-style=\"border: 1px solid #d8d8d8; min-width: 290px; max-width: 900px;\"\ndata-psz=\"00\" > < /div> < script type=\"text/javascript\"\nsrc=\"https://cdn.oncehub.com/mergedjs/so.js\" > < /script>\n <!-- ScheduleOnce embed END -->\n",
      "language": "html",
      "name": "SOAfterConfirmationFunction()"
    }
  ]
}
[/block]
That’s it!

Now your embedded Booking page will send Customer data to the parent page every time a booking is scheduled.

[block:api-header]
{
  "title": "Booking confirmation data payload"
}
[/block]
The following is an example of the booking confirmation data object returned when the `SOAfterConfirmationFunction()` is executed. The function is executed when a booking is successfully made in an embedded scheduling pane, and the object containing booking data is sent to the parent page (the page in which the scheduling pane is embedded).

The JSON object contains the following booking information represented by key-value pairs (KVPs):
* Customer name
* Customer phone number
* Customer email
* Event type name
* Meeting times - UTC, Customer time zone, and Booking page time zone
* Cancel/Reschedule link
* Customer note
* Calendar event files - ICS and VCS
* Error status and error codes (if relevant)

Below is a sample booking confirmation data payload:
[block:code]
{
  "codes": [
    {
      "code": "{\n  \"errorStatus\": 0,\n  \"bookingInfo\": {\n    \"Version\": \"7.35\",\n    \"MeetingTimes\": [\n      {\n        \"UTCTime\": \"2018-04-25T06:45:00\",\n        \"CustomerTime\": \"2018-04-25T07:45:00\",\n        \"SOTime\": \"2018-04-25T09:45:00\"\n      }\n    ],\n    \"CancelRescheduleLink\": \"https://go.oncehub.com/dana?Params=IPLa6BkbZ-TXI0R*B2fXy8foErRlIIiq*-zghumtdE2JkL5lnKoWCA!!\",\n    \"Note\": \"I look forward to the meeting.\",\n    \"CalendarEvent\": {\n      \"ICS\": \"https://app.oncehub.com/scheduleonce/download.aspx?mid=%2fHCb2uQ9jCMYtd1a%2fd9B1Q%3d%3d&type=1\",\n      \"VCS\": \"https://app.oncehub.com/scheduleonce/download.aspx?mid=%2fHCb2uQ9jCMYtd1a%2fd9B1Q%3d%3d&type=3\"\n    },\n    \"statusCode\": \"1\",\n    \"Message\": null,\n    \"CustomerName\": \"John Smith\",\n    \"CustomerEmail\": \"johnsmith@example.com\",\n    \"CustomerPhone\": \"1-2025550195\",\n    \"EventTypeName\": \"Automatic booking - 15-minute meeting\"\n  }\n}",
      "language": "json",
      "name": "Booking confirmation data JSON object"
    }
  ]
}
[/block]
The JSON object returned to the parent page upon execution of the `SOAfterConfirmationFunction()` function contains an error status (0 = function executed successfully; 1 = function did not execute successfully) and booking information. The following table describes the fields included in the `bookingInfo` payload:
[block:parameters]
{
  "data": {
    "1-0": "`MeetingTimes.UTCTime`",
    "h-0": "Field",
    "h-1": "Type",
    "h-2": "Description",
    "2-0": "`MeetingTimes.CustomerTime`",
    "3-0": "`MeetingTimes.SOTime`",
    "4-0": "`CancelRescheduleLink`",
    "5-0": "`Note`",
    "6-0": "`CalendarEvent.ICS`",
    "7-0": "`CalendarEvent.VCS`",
    "10-0": "`CustomerName`",
    "11-0": "`CustomerEmail`",
    "12-0": "`CustomerPhone`",
    "13-0": "`EventTypeName`",
    "0-0": "`Version`",
    "8-0": "`statusCode`",
    "9-0": "`Message`",
    "1-2": "The starting date and time, in UTC.",
    "3-2": "The starting date and time, in the Booking page time zone.",
    "2-2": "The starting date and time, in the Customer time zone.",
    "4-2": "The Cancel/Reschedule link sent to the Customer.",
    "4-1": "*url*",
    "5-2": "The note provided by the Customer in the Booking form.",
    "5-1": "*string*",
    "10-2": "The name provided by the Customer in the Booking form.",
    "11-2": "The email provided by the Customer in the Booking form.",
    "12-2": "The phone number provided by the Customer in the Booking form.",
    "13-2": "The name of the Service selected by the Customer.",
    "13-1": "*string*",
    "10-1": "*string*",
    "11-1": "*string*",
    "12-1": "*string*",
    "1-1": "*datetime*",
    "2-1": "*datetime*",
    "3-1": "*datetime*",
    "0-2": "Payload version",
    "0-1": "*string*",
    "6-2": "Files that can be downloaded and added to a calendar event.",
    "7-2": "Files that can be downloaded and added to a calendar event.",
    "6-1": "*url*",
    "7-1": "*url*",
    "8-2": "Error status: \"1\" = success; \"0\" = invalid request. Data can be accessed for a particular meeting only once from this api request.",
    "9-1": "*string*",
    "8-1": "*string*",
    "9-2": "Error message. For a server error: \"Something went wrong on server\". All other cases return \"null\"."
  },
  "cols": 3,
  "rows": 14
}
[/block]

[block:api-header]
{
  "title": "Constraints"
}
[/block]
The following constraints are important to keep in mind when implementing the data collection JavaScript function in your embedded Booking page:
* The function will only execute when a booking is scheduled (not canceled, rescheduled, or reassigned).
* The function is available for use with Booking pages published via Website embed only (not for Website button, Website widget, or stand-alone Booking pages).
* For security and privacy reasons, this function does not execute when your OnceHub account is integrated with a CRM and you are using the CRM record ID to <a target="_blank" href="https://help.oncehub.com/help/prepopulated-booking-forms">skip or pre-populate the Booking form</a>.