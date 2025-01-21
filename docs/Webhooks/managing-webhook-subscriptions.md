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
## Managing Webhook subscriptions via the API

The Webhook API allows you to create, retrieve, and delete your Webhook subscriptions. 

Create new Webhook subscriptions by sending a POST request to the **/webhooks** endpoint. The User must specify the name of the Webhook subscription; no two Webhooks associated with the same account can share the same name. Each Webhook is also assigned a unique and secure alphanumeric ID when it is created. [Learn more about creating Webhooks via the API](https://developers.oncehub.com/v1.0.0/reference#create-webhook)

You can retrieve a list of all Webhook subscriptions associated with your account by passing a GET request to the **/webhooks** endpoint. You can also retrieve a single Webhook subscription by passing the ID of the desired Webhook object. [Learn more about retrieving Webhooks via the API](https://developers.oncehub.com/v1.0.0/reference#list-webhooks)

If for some reason you need to delete your Webhook subscriptions, you can do so by sending a DELETE request to the **/webhooks** endpoint, along with the ID of the Webhook you wish to delete. [Learn more about deleting Webhooks via the API](https://developers.oncehub.com/v1.0.0/reference#delete-webhook)

## Managing Webhook subscriptions via the OnceHub application

Webhook subscriptions can also be managed by the account Administrator via the OnceHub application. 

When a Webhook subscription is successfully created, the Webhook object will be available in your OnceHub account. You can view or delete Webhook subscriptions associated with your account by navigating to <a target="_blank" href="https://app.oncehub.com/scheduleonce/Integration-API.aspx">ScheduleOnce > Setup > Integrations > API Integration</a>.

<Image title="API integration - Webhook subscription list.png" alt={1918} src="https://files.readme.io/852d690-API_integration_-_Webhook_subscription_list.png">
  Figure 1: API integration - Webhook subscription list
</Image>
