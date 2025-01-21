---
title: The event object
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
The event object is sent in the webhook payload, in standard JSON format and contains a unique ID, the event that triggered the payload (e.g. `booking.scheduled`), the time the event occurred, the API version, and a nested data object. [Learn more about the event object and the webhook payload](https://developers.oncehub.com/docs/webhook-data-payload) 
[block:parameters]
{
  "data": {
    "h-0": "Field",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "`id`",
    "1-0": "`object`",
    "2-0": "`creation_time`",
    "3-0": "`type`",
    "4-0": "`api_version`",
    "5-0": "`data`",
    "0-1": "*string*",
    "1-1": "*string*",
    "2-1": "*datetime*",
    "3-1": "*string*",
    "4-1": "*string*",
    "5-1": "*hash*",
    "0-2": "Unique alphanumeric identifier for the object. The prefix of the event ID is `EVNT_`.",
    "1-2": "String representing the object’s type. Objects of the same type share the same value. The value here is `event`.",
    "2-2": "The time the `event` object was created.",
    "3-2": "The type of the event. See below for the event types we currently support.",
    "4-2": "The OnceHub API version used to render the `data` object.",
    "5-2": "The object containing relevant data associated with the event that triggered the payload."
  },
  "cols": 3,
  "rows": 6
}
[/block]

[block:api-header]
{
  "title": "EVENT",
  "sidebar": true
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "{\n  \"id\": \"EVNT-KN56U3YL7C\",\n  \"object\": \"event\",\n  \"creation_time\": \"2020-03-22T09:49:12Z\",\n  \"type\": \"booking.scheduled\",\n  \"api_version\": \"v2\",\n  \"data\": {}\n}",
      "language": "json",
      "name": "Sample event"
    }
  ],
  "sidebar": true
}
[/block]