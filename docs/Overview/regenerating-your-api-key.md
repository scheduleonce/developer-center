---
title: Regenerating your API key
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
## How to regenerate your API key

If you suspect that your secret API key has been compromised, you may wish to expire your existing API key and generate a new one.

You can do so by clicking on the Regenerate link on the <a target="_blank" href="https://app.oncehub.com/integrations/api"> API & Webhooks Integration page</a>. 

<Image title="API key - Regenerate link.png" alt={3358} src="https://files.readme.io/3d7e8b6-API_key_-_Regenerate_link.png">
  Figure 1: API key - Regenerate link
</Image>

## Effects of regenerating your API key

If an API key is regenerated, the old key will expire and can no longer be used for authentication. You will need to use the new key to access the API.

However, any Webhook subscriptions you created with the old key will still be active, even though the API key that originally authenticated them is now expired. Since Webhook subscriptions are not associated with a specific API key after they are created, the status of the Webhook is independent of your current API key. 

If you wish to delete a Webhook that you created with an old API key via the API, you will need to use the new API key to authenticate your DELETE request. [Learn more about managing Webhook subscriptions](https://developers.oncehub.com/docs/managing-webhook-subscriptions)
