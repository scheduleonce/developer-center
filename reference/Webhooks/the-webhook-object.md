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
| Field           | Type        | Description                                                                                                                                                                                 |
| :-------------- | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`            | _string_    | Unique alphanumeric identifier for the object. The prefix of the Webhook ID is `WHK-`.                                                                                                        |
| `object`        | _string_    | String representing the object’s type. Objects of the same type share the same value. The value here is `webhook`.                                                                               |
| `api_version`   | _string_    | The API version events are rendered as for this webhook endpoint.                                                                                                                               |
| `name`          | _string_    | Name of the Webhook. This name is only used by you to easily differentiate between Webhooks in the app.                                                                                      |
| `url`           | _string_    | The URL on your side to which we will send the event payload.                                                                                                                                 |
| `events`        | _list_      | A list of events this Webhook will trigger for.                                                                                                                                             |
| `creation_time` | _timestamp_ | The time the Webhook was created.                                                                                                                                                            |
| `secret`        | _string_    | The webhook secret, used to generate [webhook signatures](https://developers.oncehub.com/docs/webhook-signatures). Only returned at creation. |

## WEBHOOK
The following is an example of a webhook object with the name `Cancellations and No-shows`. This webhook subscription is configured to send POST messages to `https://requestbin.com/r/en2ways4mm55h` whenever a booking is canceled or set to \"no-show\" status (event triggers: `booking.canceled` and `booking.no_show`).

```json
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
```