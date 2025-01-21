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
## Welcome to the OnceHub API

The OnceHub API is organized around the <a target="_blank" href="https://en.wikipedia.org/wiki/Representational_state_transfer">RESTful architectural style</a>.

Our API is designed to be understood by off-the-shelf HTTP clients through the use of Basic HTTP authentication, built-in HTTP verbs, and built-in [HTTP status codes](https://httpstatuses.com) for error responses. 

## Data Format

The API takes its input through user-provided headers and body parameters.

All API responses, including errors, are returned as JSON objects. Time data is represented in UTC - JSON format.

> 📘 Note that in order for our API to read the request from the user properly, all requests should have the following header:
>
> Content-type: application/json
