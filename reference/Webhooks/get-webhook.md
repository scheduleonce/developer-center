---
title: Get a single Webhook
excerpt: Returns a single Webhook subscription by ID.
api:
  file: oncehub.json
  operationId: get-webhook
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

To retrieve a single Webhook, pass the Webhook ID in the URL path.

You must authenticate the request by passing a valid API key in the API-Key header parameter. [Learn more about the API key](https://developers.oncehub.com/v1.0.0/docs/getting-your-api-key) 

## Returns

Returns a Webhook object that you have previously created if the call succeeded. Returns an error if something goes wrong. [Learn more about errors](https://developers.oncehub.com/v1.0.0/reference#errors).
