---
title: The event type object
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
The event type object contains the name and description of the event types created inside your account to allow the easy use of event type id's to filter when retrieving other objects, such as bookings. [Learn more about event types](https://help.oncehub.com/help/introduction-to-event-types)
[block:parameters]
{
  "data": {
    "0-2": "String representing the object’s type. Objects of the same type share the same value. The type here is `event_type`.",
    "0-0": "`object`",
    "0-1": "*string*",
    "h-0": "Field",
    "h-1": "Type",
    "h-2": "Description",
    "1-0": "`id`",
    "1-1": "*string*",
    "1-2": "Unique identifier for the object.",
    "2-0": "`name`",
    "2-1": "*string*",
    "3-0": "`description`",
    "3-1": "*string*",
    "2-2": "The name of the event type.",
    "3-2": "A description of the event type."
  },
  "cols": 3,
  "rows": 4
}
[/block]

[block:api-header]
{
  "title": "EVENT TYPE",
  "sidebar": true
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "{\n  \"id\": \"ET-7I7PKDTFJS\",\n  \"object\": \"event_type\",\n  \"name\": \"Live demo\",\n  \"description\": \"Schedule a live demo with us for an in-depth look at our enterprise solutions.\"\n}",
      "language": "json",
      "name": "Sample event type"
    }
  ],
  "sidebar": true
}
[/block]