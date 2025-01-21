---
title: Delete Webhook
excerpt: ''
api:
  file: oncehub.json
  operationId: delete-webhook
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
  "title": "Input parameters"
}
[/block]
To delete a Webhook subscription, pass the Webhook ID in the URL path.

You must authenticate the request by passing a valid API key in the API-Key header parameter. [Learn more about the API key](https://developers.oncehub.com/v1.0.0/docs/getting-your-api-key) 
[block:api-header]
{
  "title": "Returns"
}
[/block]
Deletes the Webhook and returns a `200` success code if the call succeeded. Returns an error if something goes wrong. [Learn more about errors](https://developers.oncehub.com/v1.0.0/reference#errors)