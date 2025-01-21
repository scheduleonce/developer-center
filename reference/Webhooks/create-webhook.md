---
title: Create Webhook
excerpt: Creates a Webhook subscription.
api:
  file: oncehub.json
  operationId: create-webhook
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
## Input parameters

When creating the Webhook, you should provide a `name`, a `url` for receiving POST messages, and an array of `events` in the request body.

You may specify specific booking lifecycle events you wish to subscribe to, or you can pass the `booking` event to trigger the POST payload message whenever any of the supported booking lifecycle events occurs. [Learn more about events](https://developers.oncehub.com/v1.0.0/reference#the-event-object) 

Make sure that you pass the full URL. For security reasons, we only accept HTTPS URLs.

You must authenticate the request by passing a valid API key in the `API-Key` header parameter. [Learn more about the API key](https://developers.scheduleonce.com/v1.0.0/docs/getting-your-api-key) 

## Returns

Returns the Webhook object if the call succeeded. Returns an error if something goes wrong. [Learn more about errors](https://developers.oncehub.com/v1.0.0/reference#errors)
