---
title: Getting your API key
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
## Get started

To start using the OnceHub API you will need an API key. 

A unique and secure API key is generated for you the first time you access the API integration section of your account. This key will remain valid until you [regenerate a new one](https://developers.oncehub.com/docs/regenerating-your-api-key) or delete your account.

## Viewing your API key

The API key is available to view in your OnceHub account in the <a target="_blank" href="https://app.oncehub.com/integrations/api"> API & Webhooks Integration</a> page:

<Image title="API key in the API integration page.png" alt={3358} src="https://files.readme.io/2d6ddc4-API_key_in_the_API_integration_page.png">
  Figure 1: API key in the API integration page
</Image>

You can easily copy the API key from the API integration page to use when authenticating your HTTP requests in the API:

<Image title="API key - Copy link.png" alt={3358} src="https://files.readme.io/ccb40ac-API_key_-_Copy_link.png">
  Figure 2: API key - Copy link
</Image>

## Validating your API key

You can validate your API key using the **/test** endpoint. [Learn more about validating your API key](https://developers.oncehub.com/reference/validate-api-key)

> 🚧 Your API key carries many privileges, so be sure to keep it secret! Do not share your secret API key in publicly accessible areas such as GitHub, client-side code, and so forth.

## Using your API key

You must authenticate each HTTP request that you send to a OnceHub API endpoint by passing your valid API key via an HTTP header. [Learn more about our endpoints and HTTP request types](https://developers.oncehub.com/v2.0.0/reference)

If the API key passed to an endpoint is not recognized, you will receive an error message to help you troubleshoot the issue and successfully authenticate your request. [Learn more about error responses](https://developers.oncehub.com/reference/errors)
