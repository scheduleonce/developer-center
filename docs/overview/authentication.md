---
sidebar_position: 4
title: Authentication
description: Generate and use API keys to authenticate requests to the OnceHub API with secure bearer token authentication.
---

# Authentication

## Getting Started

To start using the OnceHub API you will need an API key.

A unique and secure API key is generated for you the first time you access the API integration section of your account. This key will remain valid until you regenerate a new one or delete your account.

The API key is available in your OnceHub account, under <a target="_blank" href="https://app.oncehub.com/integrations/api">API & Webhooks Integration</a>. If you don't have an account, you can <a target="_blank" href="https://account.oncehub.com/signup">sign up for a free trial</a>.

## Viewing Your API Key

You can easily access and copy your API key from the API integration page:

![API key in the API integration page](/img/screenshots/api-key-in-the-api-integration-page.png)
_Figure 1: API key in the API integration page_

You can easily copy the API key from the API integration page to use when authenticating your HTTP requests in the API:

![API key - Copy link](/img/screenshots/api-key-copy-link.png)
_Figure 2: API key - Copy link_

## Using your API key to authenticate HTTP requests

Authenticate each HTTP request you send by passing your API key in the `API-Key` header.

All API requests must be made over <a target="_blank" href="http://en.wikipedia.org/wiki/HTTP_Secure">HTTPS</a>. Calls made over plain HTTP will fail. API requests without authentication will also fail.

### Example Request

Here's an example of how to include your API key in an HTTP request:

```http
GET /bookings HTTP/1.1
Host: api.oncehub.com
API-Key: your-api-key-here
Content-Type: application/json
```

If the API key passed to an endpoint is not recognized, you will receive an error message to help you troubleshoot the issue and successfully authenticate your request. [Learn more about error responses](/docs/overview/error-handling)

## Testing Your API Key

Once you have your API key, you can test it by making a simple request to our [validation endpoint](/reference/booking-calendars/#tag/authentication/get/test). This endpoint will confirm that your API key is valid and active.

## Regenerating Your API Key

If you suspect that your secret API key has been compromised, you may wish to expire your existing API key and generate a new one.

You can do so by clicking on the Regenerate link on the <a target="_blank" href="https://app.oncehub.com/integrations/api">API & Webhooks Integration page</a>.

![API key - Regenerate link](/img/screenshots/api-key-regenerate-link.png)
_Figure 3: API key - Regenerate link_

### Effects of Regenerating Your API Key

If an API key is regenerated, the old key will expire and can no longer be used for authentication. You will need to use the new key to access the API.

However, any webhook subscriptions you created with the old key will still be active, even though the API key that originally authenticated them is now expired. Since webhook subscriptions are not associated with a specific API key after they are created, the status of the webhook is independent of your current API key.

If you wish to delete a webhook that you created with an old API key via the API, you will need to use the new API key to authenticate your DELETE request. [Learn more about managing Webhook subscriptions](/docs/webhooks/managing-webhook-subscriptions)

## Security Best Practices

:::danger Keep your API key secret

Your API key carries many privileges, so be sure to keep it secret! Do not share your secret API key in publicly accessible areas such as GitHub, client-side code, and so forth.

:::

- **Use HTTPS only**: Never send your API key over unencrypted HTTP connections
- **Server-side only**: Keep your API key on your server and never expose it in client-side code
- **Environment variables**: Store your API key in environment variables or secure configuration files
- **Regular rotation**: Consider rotating your API key periodically for enhanced security
- **Monitor usage**: Keep track of your API usage to detect any unauthorized access

```

```
