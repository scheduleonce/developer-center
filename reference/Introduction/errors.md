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

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th style={{ textAlign: "left" }}>
        Field
      </th>

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
        `type`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        The type of error returned. See the list below for the possible types of errors.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `message`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        A human-readable message providing more details about the error.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `param`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        If the error is parameter-specific, the parameter related to the error.
      </td>
    </tr>
  </tbody>
</Table>

The API returns error responses in JSON format, with the following structure:

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
        The amount of API requests per second has exceeded the allowed amount.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `api_error`
      </td>

      <td style={{ textAlign: "left" }}>
        There was an error on the OnceHub servers.
      </td>
    </tr>
  </tbody>
</Table>

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
