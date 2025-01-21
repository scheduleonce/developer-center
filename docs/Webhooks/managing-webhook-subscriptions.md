---
title: Managing Webhook subscriptions
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
  "title": "Managing Webhook subscriptions via the API"
}
[/block]
The Webhook API allows you to create, retrieve, and delete your Webhook subscriptions. 

Create new Webhook subscriptions by sending a POST request to the **/webhooks** endpoint. The User must specify the name of the Webhook subscription; no two Webhooks associated with the same account can share the same name. Each Webhook is also assigned a unique and secure alphanumeric ID when it is created. [Learn more about creating Webhooks via the API](https://developers.oncehub.com/reference/create-a-webhook)

You can retrieve a list of all Webhook subscriptions associated with your account by passing a GET request to the **/webhooks** endpoint. You can also retrieve a single Webhook subscription by passing the ID of the desired Webhook object. [Learn more about retrieving Webhooks via the API](https://developers.oncehub.com/reference/list-all-webhooks)

If for some reason you need to delete your Webhook subscriptions, you can do so by sending a DELETE request to the **/webhooks** endpoint, along with the ID of the Webhook you wish to delete. [Learn more about deleting Webhooks via the API](https://developers.oncehub.com/reference/delete-a-webhook)
[block:api-header]
{
  "title": "Managing Webhook subscriptions via the OnceHub application"
}
[/block]
Webhook subscriptions can also be managed by the account Administrator via the OnceHub application. 

When a Webhook subscription is successfully created, the Webhook object will be available in your OnceHub account. You can view or delete Webhook subscriptions associated with your account by navigating to the <a target="_blank" href="https://app.oncehub.com/integrations/api"> API & Webhooks Integration page</a>.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/852d690-API_integration_-_Webhook_subscription_list.png",
        "API integration - Webhook subscription list.png",
        1918,
        698,
        "#efeff0"
      ],
      "caption": "Figure 1: API integration - Webhook subscription list"
    }
  ]
}
[/block]