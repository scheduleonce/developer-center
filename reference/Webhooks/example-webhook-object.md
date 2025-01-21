---
title: Example Webhook object
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
## Sample Webhook object

The following is an example of a Webhook object with the name `Cancellations and No-shows`. This Webhook subscription is configured to send POST messages to `https://requestbin.com/r/en2ways4mm55h` whenever a booking is canceled or set to "no-show" status (event triggers: `booking.canceled` and `booking.no_show`).

```json Example Webhook object
{
  "object": "webhook",
  "id": "WHK-7JD9LBVZTQ",
  "name": "Cancellations and No-shows",
  "url": "https://requestbin.com/r/en2ways4mm55h",
  "events": ["booking.canceled", "booking.no_show"],
  "creation_time": "2018-03-19T07:51:11.290Z"
}
```
