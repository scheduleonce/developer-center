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

| Field           | Type        | Description                                                                                                                                   |
| :-------------- | :---------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`            | *string*    | Unique alphanumeric identifier for the object. The prefix of the Webhook ID is `WHK-`.                                                        |
| `object`        | *string*    | String representing the object’s type. Objects of the same type share the same value. The value here is `webhook`.                            |
| `api_version`   | *string*    | The API version events are rendered as for this webhook endpoint.                                                                             |
| `name`          | *string*    | Name of the Webhook. This name is only used by you to easily differentiate between Webhooks in the app.                                       |
| `url`           | *string*    | The URL on your side to which we will send the event payload.                                                                                 |
| `events`        | *list*      | A list of events this Webhook will trigger for.                                                                                               |
| `creation_time` | *timestamp* | The time the Webhook was created.                                                                                                             |
| `secret`        | *string*    | The webhook secret, used to generate [webhook signatures](https://developers.oncehub.com/docs/webhook-signatures). Only returned at creation. |

## WEBHOOK

The following is an example of a webhook object with the name `Cancellations and No-shows`. This webhook subscription is configured to send POST messages to `https://requestbin.com/r/en2ways4mm55h` whenever a booking is canceled or set to "no-show" status (event triggers: `booking.canceled` and `booking.no_show`).

```json
{
  "object": "webhook",
  "id": "WHK-7JD9LBVZTQ",
  "api_version": "v2",
  "name": "Cancellations and No-shows",
  "url": "https://requestbin.com/r/en2ways4mm55h",
  "events": ["booking.canceled", "booking.no_show"],
  "creation_time": "2020-03-19T07:51:11.290Z",
  "secret": "d7686b8c83f04913929079aeae40189e"
}
```