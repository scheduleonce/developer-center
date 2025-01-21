---
title: List all Webhooks
excerpt: Returns a list of your Webhook subscriptions, sorted by creation date.
api:
  file: oncehub.json
  operationId: list-webhooks
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
No body parameters are required.

You must authenticate the request by passing a valid API key in the `API-Key` header parameter. [Learn more about the API key](https://developers.oncehub.com/v1.0.0/docs/getting-your-api-key)
[block:api-header]
{
  "title": "Returns"
}
[/block]
Returns a list with a data property that contains an array of Webhooks if the call succeeded. Each entry in the array is a separate `webhook` object. The entries are sorted by creation date; the most recently created Webhook subscriptions appear first.

Returns an error if something goes wrong. [Learn more about errors](https://developers.oncehub.com/v1.0.0/reference#errors)