---
title: Introduction to Webhooks
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
## What are Webhooks?

Our Webhooks API is an advanced feature that can be used to build integrations with third party applications. It is suitable for developers or technically savvy users with scripting or programming knowledge. Using webhooks, you can develop custom integrations with your own web applications, services, or data warehouse.

## The Webhooks API

The Webhooks API is used to communicate with third-party web services. Webhook subscriptions are configured with a POST URL and an array of User-specified [event triggers](https://developers.oncehub.com/docs/webhook-event-triggers) representing different booking lifecycle events.

Multiple webhook subscriptions can be associated with the same OnceHub account. This lets you create different triggers for different booking and conversation lifecycle events.

An HTTP POST message is used to push relevant booking or conversation data to the webhook URL, and is triggered whenever the defined lifecycle event occurs. The data is sent as JSON key-value pairs (KVPs) to your receiving server when a booking lifecycle event occurs in your OnceHub account. For example, you can create a webhook that sends customer details whenever a new booking is scheduled.

## Managing your webhooks

Webhook subscriptions can be created, deleted, and retrieved via the webhooks API. You can also view and delete your webhooks from the <a target="_blank" href="https://app.oncehub.com/integrations/api">API Integration</a> page. [Learn more about managing Webhook subscriptions](https://developers.oncehub.com/docs/managing-webhook-subscriptions)

<Image alt={3360} border={false} caption="Figure 1: API Integration page with navigation menu" title="API Integration page with navigation menu.png" src="https://files.readme.io/bd3d3b3-API_Integration_page_with_navigation_menu.png" />