---
title: The Webhook object
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
Webhook subscriptions are configured with a unique ID, User-provided name and POST URL, and an array of User-specified event triggers representing different booking lifecycle events.

[Learn more about Webhook subscription configuration](https://developers.scheduleonce.com/v1.0.0/docs/introduction-to-webhooks) 
[block:parameters]
{
  "data": {
    "0-0": "`id`",
    "h-0": "Field",
    "h-1": "Type",
    "0-1": "*string*",
    "1-0": "`object`",
    "1-1": "*string*",
    "2-0": "`name`",
    "2-1": "*string*",
    "3-0": "`url`",
    "3-1": "*string*",
    "4-0": "`events`",
    "h-2": "Description",
    "0-2": "Unique alphanumeric identifier for the object. The prefix of the Webhook ID is `WHK_`.",
    "1-2": "String representing the object’s type. Objects of the same type share the same value. The value here is `webhook`.",
    "2-2": "Name of the Webhook. This name is only used by you to easily differentiate between Webhooks in the app.",
    "3-2": "The URL on your side to which we will send the event payload.",
    "4-1": "*list*",
    "4-2": "A list of events this Webhook will trigger for.",
    "5-0": "`creation_time`",
    "5-1": "*timestamp*",
    "5-2": "The time the Webhook was created."
  },
  "cols": 3,
  "rows": 6
}
[/block]