---
id: managing-webhook-subscriptions
title: Managing Webhook Subscriptions
description: ""
slug: /webhooks/managing-webhook-subscriptions/
---

## Managing Webhook Subscriptions via the API

The Webhook API allows you to create, retrieve, and delete your webhook subscriptions.

Create new webhook subscriptions by sending a POST request to the **/webhooks** endpoint. The User must specify the name of the webhook subscription; no two webhooks associated with the same account can share the same name. Each webhook is also assigned a unique and secure alphanumeric ID when it is created. [Learn more about creating Webhooks via the API](/reference/booking-calendars/#tag/webhooks/post/webhooks)

You can retrieve a list of all webhook subscriptions associated with your account by passing a GET request to the **/webhooks** endpoint. You can also retrieve a single webhook subscription by passing the ID of the desired webhook object. [Learn more about retrieving Webhooks via the API](/reference/booking-calendars/#tag/webhooks/get/webhooks)

If for some reason you need to delete your webhook subscriptions, you can do so by sending a DELETE request to the **/webhooks** endpoint, along with the ID of the webhook you wish to delete. [Learn more about deleting Webhooks via the API](/reference/booking-calendars/#tag/webhooks/delete/webhooksid)

## Managing Webhook Subscriptions via the OnceHub Application

Webhook subscriptions can also be managed by the account administrator via the OnceHub application.

When a webhook subscription is successfully created, the webhook object will be available in your OnceHub account. You can view or delete webhook subscriptions associated with your account by navigating to the <a target="_blank" href="https://app.oncehub.com/integrations/api"> API & Webhooks Integration page</a>.

![API integration - Webhook subscription list](/img/screenshots/api-integration-webhook-subscription-list.png)
_Figure 1: API integration - Webhook subscription list_
