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
[block:api-header]
{
  "title": "Data model description"
}
[/block]
The event object is sent in the Webhook payload, in standard JSON format and contains a unique ID, the event that triggered the payload (e.g. `booking.scheduled`), the time the event occurred, the API version, and a nested data object. [Learn more about the event object and the Webhook payload](https://developers.oncehub.com/v1.0.0/docs/webhook-data-payload) 
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