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
[block:callout]
{
  "type": "info",
  "body": "The OnceHub Webhooks API is currently only supported with ScheduleOnce bookings."
}
[/block]

[block:api-header]
{
  "title": "What are Webhooks?"
}
[/block]
Our Webhooks API is an advanced feature that can be used to build integrations with third party applications. It is suitable for developers or technically savvy users with scripting or programming knowledge. Using OnceHub Webhooks you can develop custom integrations with your own web applications, services, or data warehouse.
[block:api-header]
{
  "title": "The OnceHub Webhooks API"
}
[/block]
The OnceHub Webhooks API is used to communicate with third-party web services. Webhook subscriptions are configured with a POST URL and an array of User-specified [event triggers](https://developers.oncehub.com/v1.0.0/reference#event-triggers) representing different booking lifecycle events. 

Multiple Webhook subscriptions can be associated with the same OnceHub account. This lets you create different triggers for different [booking lifecycle events](https://developers.oncehub.com/docs/webhook-event-triggers). 

An HTTP POST message is used to push relevant booking data to the Webhook URL, and is triggered whenever the defined lifecycle event occurs. The data is sent as JSON key-value pairs (KVPs) to your receiving server when a booking lifecycle event occurs in your OnceHub account. For example, you can create a Webhook that sends customer details whenever a new booking is scheduled. 
[block:api-header]
{
  "title": "Managing your Webhooks"
}
[/block]
Webhook subscriptions can be created, deleted, and retrieved via the Webhooks API. You can also view and delete your Webhooks from the <a target="_blank" href="https://app.oncehub.com/scheduleonce/Integration-API.aspx">ScheduleOnce > Setup > Integrations > API Integration</a> page. [Learn more about managing Webhook subscriptions](https://developers.oncehub.com/v1.0.0/docs/managing-webhook-subscriptions) 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bd3d3b3-API_Integration_page_with_navigation_menu.png",
        "API Integration page with navigation menu.png",
        3360,
        1380,
        "#edeeef"
      ],
      "caption": "Figure 1: API Integration page with navigation menu"
    }
  ]
}
[/block]