---
id: index
title: Authentication
description: ''
slug: /introduction/authentication/index/
---

## Your API key

The API key is available in your OnceHub account, under <a target="_blank" href="https://app.oncehub.com/scheduleonce/Integration-API.aspx">ScheduleOnce > Setup > Integrations > API Integration</a>. If you don't have an account, you can <a target="_blank" href="https://account.oncehub.com/signup">sign up for a free trial</a>. 

[Learn more about accessing and managing your API key](https://developers.oncehub.com/docs/getting-your-api-key) 

## Using your API key to authenticate HTTP requests

Authenticate each HTTP request you send by passing your API key in the `API-Key` header. 

All API requests must be made over <a target="_blank" href="http://en.wikipedia.org/wiki/HTTP_Secure">HTTPS</a>. Calls made over plain HTTP will fail. API requests without authentication will also fail. 

> 🚧 Keep your API key secret
>
> Your API key carries many privileges, so be sure to keep it secret! Do not share your secret API key in publicly accessible areas such as GitHub, client-side code, and so forth.