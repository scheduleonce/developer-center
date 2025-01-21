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
[block:api-header]
{
  "title": "Overview of error responses"
}
[/block]
OnceHub uses conventional <a target="_blank" href="https://httpstatuses.com/">HTTP response codes</a> to indicate the success or failure of an API request. 

Successful requests are given status codes in the `2xx` range, while unsuccessful requests have status codes in the `4xx` or `5xx` range. 

`4xx` codes indicate an error that failed given the information provided (e.g., an invalid parameter, object not found, etc.); `5xx` codes indicate an error with OnceHub servers.
[block:api-header]
{
  "title": "Error structure"
}
[/block]

[block:parameters]
{
  "data": {
    "0-0": "`type`",
    "0-1": "*string*",
    "1-0": "`message`",
    "1-1": "*string*",
    "2-0": "`param`",
    "2-1": "*string*",
    "1-2": "A human-readable message providing more details about the error.",
    "0-2": "The type of error returned. See the list below for the possible types of errors.",
    "2-2": "If the error is parameter-specific, the parameter related to the error.",
    "h-0": "Field",
    "h-1": "Type",
    "h-2": "Description"
  },
  "cols": 3,
  "rows": 3
}
[/block]
The API returns error responses in JSON format, with the following structure:
[block:api-header]
{
  "title": "Error types"
}
[/block]
Error responses are categorized into four different types, corresponding to the following situations:
[block:parameters]
{
  "data": {
    "h-0": "Type",
    "h-1": "Description",
    "0-0": "`authentication_error`",
    "0-1": "The server could not authenticate your request. Check to make sure you have entered a valid API key in the correct format, in the `API-Key` header.",
    "1-0": "`invalid_request_error`",
    "1-1": "One or more of the input parameters is not valid. Check that you have entered the correct values for all required parameters. URLs must be entered in full, and they must use the https:// prefix.",
    "2-0": "`rate_limit_error`",
    "2-1": "The amount of API requests per second has exceeded the allowed amount.",
    "3-0": "`api_error`",
    "3-1": "There was an error on the OnceHub servers."
  },
  "cols": 2,
  "rows": 4
}
[/block]

[block:api-header]
{
  "title": "Error messages"
}
[/block]
In addition to the standard HTTP codes and error type specified in the table above, each error response includes a human-readable message that provides additional details that can help you troubleshoot why the request failed.

Here are a few examples:
[block:code]
{
  "codes": [
    {
      "code": "{\n  \"type\": \"invalid_request_error\",\n  \"message\": \"No such booking: '123'\",\n  \"param\": \"id\"\n}",
      "language": "json",
      "name": "404 Not Found"
    },
    {
      "code": "{\n  \"type\": \"invalid_request_error\",\n  \"message\": \"A webhook subscription with this name already exists: 'New Bookings'\",\n  \"param\": \"name\"\n}",
      "language": "json",
      "name": "409 Conflict"
    },
    {
      "code": "{\n  \"type\": \"rate_limit_error\",\n  \"message\": \"Request rate limit exceeded\"\n}",
      "language": "json",
      "name": "429 Too Many Requests"
    }
  ]
}
[/block]