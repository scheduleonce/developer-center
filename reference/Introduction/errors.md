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

`4xx` codes indicate an error that failed given the information provided (e.g., an invalid parameter, object not found, etc.); `5xx` codes indicate an error with OnceHub servers (these are rare).

## Error structure

The API returns error responses in JSON format, with the following structure:

```json 404 Not Found
{
  "type": "invalid_request_error",
  "message": "No existing Webhook subscription with this ID can be found."
}
```

## Error types

Error responses are categorized into four different types, corresponding to the following situations:

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th style={{ textAlign: "left" }}>
        Type
      </th>

      <th style={{ textAlign: "left" }}>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ textAlign: "left" }}>
        `authentication_error`
      </td>

      <td style={{ textAlign: "left" }}>
        The server could not authenticate your request. Check to make sure you have entered a valid API key in the correct format, in the `API-Key` header.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `invalid_request_error`
      </td>

      <td style={{ textAlign: "left" }}>
        One or more of the input parameters is not valid. Check that you have entered the correct values for all required parameters. URLs must be entered in full, and they must use the https\:// prefix.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `rate_limit_error`
      </td>

      <td style={{ textAlign: "left" }}>
        Too many requests hit the API too quickly.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `api_error`
      </td>

      <td style={{ textAlign: "left" }}>
        There was an error on the OnceHub servers. This type of error is rare.
      </td>
    </tr>
  </tbody>
</Table>

## Error messages

In addition to the standard HTTP codes and error type specified in the table above, each error response includes a human-readable message that provides additional details that can help you troubleshoot why the request failed.

For example, if you attempt to create a new Webhook subscription, but there is already a Webhook with the same name, you would receive the following error message:

```json 409 Conflict
{
  "type": "invalid_request_error",
  "message": "A Webhook subscription with this name already exists."
}
```
