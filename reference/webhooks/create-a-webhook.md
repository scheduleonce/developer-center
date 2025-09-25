---
id: create-a-webhook
title: Create a webhook
description: Creates a webhook subscription.
operationId: create-a-webhook
slug: /webhooks/create-a-webhook/
---

## Input parameters

When creating the webhook, you should provide a `name`, a `url` for receiving POST messages, and an array of `events` in the request body.

You may specify specific booking lifecycle events you wish to subscribe to, or you can pass the `booking` event to trigger the POST payload message whenever any of the supported booking lifecycle events occurs. [Learn more about events](/reference/webhooks/the-event-object/)

Make sure that you pass the full URL. For security reasons, we only accept HTTPS URLs.

Returns the webhook object if the call succeeded. Returns an error if something goes wrong. [Learn more about errors](/reference/introduction/errors/)
