---
title: Reporting on account objects
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
In your account, you have a number of objects you can configure, including:

* Users
* Event types
* Booking pages
* Master pages

You can learn more about your current configuration on all these objects through the API.
[block:api-header]
{
  "title": "List all users, pages, or event types"
}
[/block]
You may wish to retrieve a list of all **[users](https://developers.oncehub.com/reference/list-all-users)** in your account, all **[booking pages](https://developers.oncehub.com/reference/list-all-booking-pages)**, all **[master pages](https://developers.oncehub.com/reference/list-all-master-pages)**, or all **[event types](https://developers.oncehub.com/reference/list-all-event-types)**. 

Common use cases for retrieving all users include:
* An HR department that wishes to maintain an updated list of all OnceHub users, so they can review the list when hiring or terminating an employee
* A university wishing to maintain an updated list of all OnceHub users who are advisors (usually for admissions or advising departments)
* A medical clinic wishing to maintain an updated list of all OnceHub users available for booking medical appointments

You may also wish to [route users to a specific page](https://developers.oncehub.com/docs/using-the-oncehub-api#routing-to-a-specific-page) by employing logic in a drop-down menu or form.
[block:api-header]
{
  "title": "Get a single example"
}
[/block]
If you already have a specific ID for an event type, booking page, master page, or user from past data retrieval and your system requires full, expanded data on that specific object, you can use the GET request. 

[Get a single booking page](https://developers.oncehub.com/reference/get-a-single-booking-page)
[Get a single event type](https://developers.oncehub.com/reference/get-a-single-event-type)
[Get a single master page](https://developers.oncehub.com/reference/get-a-single-master-page)
[Get a single user](https://developers.oncehub.com/reference/get-a-single-user)


You will need to indicate the ID using the **id** path parameter.
[block:api-header]
{
  "title": "Sample objects"
}
[/block]
Sample booking page object:
[block:code]
{
  "codes": [
    {
      "code": "{\n  \"id\": \"BP-3F7JAWT4UA\",\n  \"object\": \"booking_page\",\n  \"name\": \"Andrea Hartie\",\n  \"label\": \"AndreaHartie\",\n  \"url\": \"https://go.oncehub.com/andreahartie\",\n  \"active\": true\n}",
      "language": "json"
    }
  ]
}
[/block]
Sample event type object:
[block:code]
{
  "codes": [
    {
      "code": "{\n  \"id\": \"ET-7I7PKDTFJS\",\n  \"object\": \"event_type\",\n  \"name\": \"Budget management\",\n  \"description\": \"We analyze your current income, expenses and debt. From this we work with you to create a sound financial plan that will allow you to enjoy life and meet your financial obligations simultaneously.\"\n}",
      "language": "json"
    }
  ]
}
[/block]
Sample master page object:
[block:code]
{
  "codes": [
    {
      "code": "{\n  \"id\": \"MP-73E6RHFU77\",\n  \"object\": \"master_page\",\n  \"name\": \"Financial Services Inc.\",\n  \"label\": \"financefirm\",\n  \"url\": \"https://go.oncehub.com/financefirm\",\n  \"active\": true\n}",
      "language": "json"
    }
  ]
}
[/block]
Sample user object:
[block:code]
{
  "codes": [
    {
      "code": "{\n  \"id\": \"USR-FSD423423\",\n  \"object\": \"user\",\n  \"first_name\": \"Andrea\",\n  \"last_name\": \"Hartie\",\n  \"email\": \"AndreaHartie@example.com\",\n  \"status\": \"active\"\n}",
      "language": "json"
    }
  ]
}
[/block]