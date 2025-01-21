---
title: The webhook object
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
Webhook subscriptions are configured with a unique ID, User-provided name and POST URL, and an array of User-specified event triggers representing different booking lifecycle events.

[Learn more about webhook subscription configuration](https://developers.scheduleonce.com/docs/introduction-to-webhooks) 
[block:parameters]
{
  "data": {
    "0-0": "`id`",
    "h-0": "Field",
    "h-1": "Type",
    "0-1": "*string*",
    "1-0": "`object`",
    "1-1": "*string*",
    "3-0": "`name`",
    "3-1": "*string*",
    "4-0": "`url`",
    "4-1": "*string*",
    "5-0": "`events`",
    "h-2": "Description",
    "0-2": "Unique alphanumeric identifier for the object. The prefix of the Webhook ID is `WHK_`.",
    "1-2": "String representing the object’s type. Objects of the same type share the same value. The value here is `webhook`.",
    "3-2": "Name of the Webhook. This name is only used by you to easily differentiate between Webhooks in the app.",
    "4-2": "The URL on your side to which we will send the event payload.",
    "5-1": "*list*",
    "5-2": "A list of events this Webhook will trigger for.",
    "6-0": "`creation_time`",
    "6-1": "*timestamp*",
    "6-2": "The time the Webhook was created.",
    "7-0": "`secret`",
    "7-2": "The webhook secret, used to generate [webhook signatures](https://developers.oncehub.com/docs/webhook-signatures). Only returned at creation.",
    "7-1": "*string*",
    "2-0": "`api_version`",
    "2-1": "*string*",
    "2-2": "The API version events are rendered as for this webhook endpoint."
  },
  "cols": 3,
  "rows": 8
}
[/block]

[block:api-header]
{
  "title": "WEBHOOK",
  "sidebar": true
}
[/block]

[block:textarea]
{
  "text": "The following is an example of a webhook object with the name `Cancellations and No-shows`. This webhook subscription is configured to send POST messages to `https://requestbin.com/r/en2ways4mm55h` whenever a booking is canceled or set to \"no-show\" status (event triggers: `booking.canceled` and `booking.no_show`).",
  "sidebar": true
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "{\n  \"object\": \"webhook\",\n  \"id\": \"WHK-7JD9LBVZTQ\",\n  \"api_version\": \"v2\",\n  \"name\": \"Cancellations and No-shows\",\n  \"url\": \"https://requestbin.com/r/en2ways4mm55h\",\n  \"events\": [\"booking.canceled\", \"booking.no_show\"],\n  \"creation_time\": \"2020-03-19T07:51:11.290Z\",\n  \"secret\": \"d7686b8c83f04913929079aeae40189e\"\n}",
      "language": "json",
      "name": "Sample webhook"
    }
  ],
  "sidebar": true
}
[/block]