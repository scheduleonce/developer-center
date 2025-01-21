---
title: Customer data enrichment (JavaScript function)
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
  "title": "Customer data enrichment function"
}
[/block]
The following shows the `SOAfterConfirmationFunction()` JavaScript function used to enable Customer data enrichment for embedded Booking pages:
[block:code]
{
  "codes": [
    {
      "code": "<script>\n  function SOAfterConfirmationFunction()\n  {\n    //logic using the data object passed to the function\n  }\n</script>;",
      "language": "javascript",
      "name": "SOAfterConfirmationFunction()"
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Customer data enrichment payload"
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
  "title": "Example data object"
}
[/block]
The following is an example of the Customer profile enrichment object returned when the `SOAfterConfirmationFunction()` is executed. The function is executed when a booking is successfully made in an embedded scheduling pane, and the data enrichment object containing booking data is sent to the parent page (the page in which the scheduling pane is embedded).
[block:code]
{
  "codes": [
    {
      "code": "{\n  \"errorStatus\": 0,\n  \"bookingInfo\": {\n    \"Version\": \"7.35\",\n    \"MeetingTimes\": [\n      {\n        \"UTCTime\": \"2018-04-25T06:45:00\",\n        \"CustomerTime\": \"2018-04-25T07:45:00\",\n        \"SOTime\": \"2018-04-25T09:45:00\"\n      }\n    ],\n    \"CancelRescheduleLink\":\n      \"https://secure.scheduleonce.com/financial?Params=IPLa6BkbZ-TXI0R*B2fXy8foErRlIIiq*-zghumtdE2JkL5lnKoWCA!!\",\n    \"Note\": \"I look forward to the meeting.\",\n    \"CalendarEvent\": {\n      \"ICS\":\n        \"https://app.scheduleonce.com/download.aspx?mid=%2fHCb2uQ9jCMYtd1a%2fd9B1Q%3d%3d&type=1\",\n      \"VCS\":\n        \"https://app.scheduleonce.com/download.aspx?mid=%2fHCb2uQ9jCMYtd1a%2fd9B1Q%3d%3d&type=3\"\n    },\n    \"statusCode\": \"1\",\n    \"Message\": null,\n    \"CustomerName\": \"Carrie Customer\",\n    \"CustomerEmail\": \"so.carrie.customer@gmail.com\",\n    \"CustomerPhone\": \"1-2025550195\",\n    \"EventTypeName\": \"Automatic booking - 15-minute meeting\"\n  }\n}\n",
      "language": "json",
      "name": "Example Customer profile enrichment data object"
    }
  ]
}
[/block]

[Learn more about how to enable Customer data enrichment](https://developers.scheduleonce.com/v2.0.0/docs/customer-data-enrichment)