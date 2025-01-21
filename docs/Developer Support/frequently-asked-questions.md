---
title: FAQs
excerpt: Frequently asked questions
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
  "title": "Why isn't my API key working?"
}
[/block]
There may be a typo in the key.
An account administrator might have regenerated the key.
[block:api-header]
{
  "title": "How can I test that the Webhook subscription is configured correctly?"
}
[/block]
You can use a service like <a target="_blank" href="https://webhook.site/">Webhook Tester</a> to test your endpoint and make sure you are configured correctly to start receiving booking data. 
[block:api-header]
{
  "title": "How can I sign up for a trial account?"
}
[/block]
To use the API you will need a OnceHub account. If you don't have an account yet, you can <a target="_blank" href="https://account.oncehub.com/signup">sign up for a trial account here</a>.
[block:api-header]
{
  "title": "Why am I not receiving a data payload from my Webhook subscription?"
}
[/block]
Check that you have enabled the correct event triggers. [Learn more about event triggers](https://developers.oncehub.com/docs/webhook-event-triggers)

Check that your endpoint is set up correctly. [Learn more about configuring your Webhook subscriptions](https://developers.oncehub.com/docs/using-webhooks)
[block:api-header]
{
  "title": "Why am I seeing `null` fields in the Webhook payload?"
}
[/block]
The Webhook payload returns a consistent data structure no matter what booking event type triggered it. For any given booking event type, some of the fields in the data object of the Webhook payload will not be relevant. Fields with no values will appear as `null`.
[block:api-header]
{
  "title": "If my server is down will you send the payload again?"
}
[/block]
Yes. If for some reason your endpoint does not successfully receive the Webhook payload, we will continue trying to send the HTTP POST message every hour, for up to three days.