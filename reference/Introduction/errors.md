---
title: Errors
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
## Overview of error responses

OnceHub uses conventional <a target="_blank" href="https://httpstatuses.com/">HTTP response codes</a> to indicate the success or failure of an API request.

Successful requests are given status codes in the `2xx` range, while unsuccessful requests have status codes in the `4xx` or `5xx` range.

`4xx` codes indicate an error that failed given the information provided (e.g., an invalid parameter, object not found, etc.); `5xx` codes indicate an error with OnceHub servers.

## Error structure

| Field     | Type     | Description                                                                      |
| :-------- | :------- | :------------------------------------------------------------------------------- |
| `type`    | *string* | The type of error returned. See the list below for the possible types of errors. |
| `message` | *string* | A human-readable message providing more details about the error.                 |
| `param`   | *string* | If the error is parameter-specific, the parameter related to the error.          |

The API returns error responses in JSON format, with the following structure:

## Error types

Error responses are categorized into four different types, corresponding to the following situations:

| Type                    | Description                                                                                                                                                                                         |
| :---------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `authentication_error`  | The server could not authenticate your request. Check to make sure you have entered a valid API key in the correct format, in the `API-Key` header.                                                 |
| `invalid_request_error` | One or more of the input parameters is not valid. Check that you have entered the correct values for all required parameters. URLs must be entered in full, and they must use the https\:// prefix. |
| `rate_limit_error`      | The amount of API requests per second has exceeded the allowed amount.                                                                                                                              |
| `api_error`             | There was an error on the OnceHub servers.                                                                                                                                                          |

## Error messages

In addition to the standard HTTP codes and error type specified in the table above, each error response includes a human-readable message that provides additional details that can help you troubleshoot why the request failed.

Here are a few examples:

```json 404 Not Found
{
  "type": "invalid_request_error",
  "message": "No such booking: '123'",
  "param": "id"
}
```
```json 409 Conflict
{
  "type": "invalid_request_error",
  "message": "A webhook subscription with this name already exists: 'New Bookings'",
  "param": "name"
}
```
```json 429 Too Many Requests
{
  "type": "rate_limit_error",
  "message": "Request rate limit exceeded"
}
```

## Rate limits

To ensure fair usage and maintain API stability, requests are subject to rate limiting based on both the account and the originating IP address:\
**Per Account**: You are limited to **5 requests per second**.
**Per IP Address**: You are limited to **200 requests per 5 minutes**.

> 📘 Tip
>
> Avoid periodically fetching entire resource collections just to check for updates. This can quickly consume your rate limit allowance. Instead, utilize our [Webhooks](https://developers.oncehub.com/reference/event-triggers)  to receive notifications proactively when data changes, leading to more efficient integration.