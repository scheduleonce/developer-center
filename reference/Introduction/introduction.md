---
title: Introduction
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
  "title": "Welcome to the OnceHub API"
}
[/block]
The OnceHub API is organized around the <a target="_blank" href="https://en.wikipedia.org/wiki/Representational_state_transfer">RESTful architectural style</a>.

Our API is designed to be understood by off-the-shelf HTTP clients through the use of Basic HTTP authentication, built-in HTTP verbs, and built-in HTTP status codes for error responses. 
[block:api-header]
{
  "title": "Data Format"
}
[/block]
The API takes its input through user-provided headers and body parameters.

All API responses, including errors, are returned as JSON objects. Time data is represented in UTC - JSON format.
[block:callout]
{
  "type": "info",
  "body": "Note that in order for our API to read your request properly it should be JSON formatted with the right [content-type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) header:\n```\nContent-type: application/json\n```"
}
[/block]