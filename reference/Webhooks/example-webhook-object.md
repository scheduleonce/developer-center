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
[block:api-header]
{
  "title": "Sample Webhook object"
}
[/block]
The following is an example of a Webhook object with the name `Cancellations and No-shows`. This Webhook subscription is configured to send POST messages to `https://requestbin.com/r/en2ways4mm55h` whenever a booking is canceled or set to "no-show" status (event triggers: `booking.canceled` and `booking.no_show`).
[block:code]
{
  "codes": [
    {
      "code": "{\n  \"object\": \"webhook\",\n  \"id\": \"WHK-7JD9LBVZTQ\",\n  \"name\": \"Cancellations and No-shows\",\n  \"url\": \"https://requestbin.com/r/en2ways4mm55h\",\n  \"events\": [\"booking.canceled\", \"booking.no_show\"],\n  \"creation_time\": \"2018-03-19T07:51:11.290Z\"\n}",
      "language": "json",
      "name": "Example Webhook object"
    }
  ]
}
[/block]