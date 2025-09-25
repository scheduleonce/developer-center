---
id: responding-to-a-webhook-request
title: User-specified endpoint responses
description: ''
slug: /webhooks/responding-to-a-webhook-request/
---

## Responding to a Webhook POST message

When you create a Webhook subscription, you must specify the URL endpoint that will receive the HTTP POST messages triggered by the defined event types.

Your receiving server must be configured to receive the JSON event object. [Learn more about how to configure Webhook subscriptions](https://developers.oncehub.com/docs/managing-webhook-subscriptions) 

## Error codes

To acknowledge receipt of a Webhook data payload, your endpoint should return a `2xx` HTTP status code. All response codes outside this range, including `3xx` codes, will indicate to us that you did not receive the payload. 

A URL redirection or a "Not Modified" response will also be treated as a failed request. OnceHub will ignore any other information returned in the request headers or request body.

## Retry mechanism

If for some reason your endpoint does not successfully receive the Webhook payload, we will continue trying to send the HTTP POST message every hour, for up to three days. If your servers are unable to successfully receive the Webhook payload for more than three days, the retry protocol will be halted.