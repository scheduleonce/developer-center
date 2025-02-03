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
* Booking calendars

You can learn more about your current configuration on all these objects through the API.

## List all users, pages, or event types

You may wish to retrieve a list of all **[users](https://developers.oncehub.com/reference/list-all-users)** in your account, all **[booking pages](https://developers.oncehub.com/reference/list-all-booking-pages)**, all **[master pages](https://developers.oncehub.com/reference/list-all-master-pages)**, all **[event types](https://developers.oncehub.com/reference/list-all-event-types)** or all \*\*[booking calendars](https://developers.oncehub.com/reference/list-all-booking-calendars) .

Common use cases for retrieving all users include:

* An HR department that wishes to maintain an updated list of all OnceHub users, so they can review the list when hiring or terminating an employee
* A university wishing to maintain an updated list of all OnceHub users who are advisors (usually for admissions or advising departments)
* A medical clinic wishing to maintain an updated list of all OnceHub users available for booking medical appointments

You may also wish to [route users to a specific page](https://developers.oncehub.com/docs/using-the-oncehub-api#routing-to-a-specific-page) by employing logic in a drop-down menu or form.

## Get a single example

If you already have a specific ID for an event type, booking page, master page, or user from past data retrieval and your system requires full, expanded data on that specific object, you can use the GET request.

[Get a single booking page](https://developers.oncehub.com/reference/get-a-single-booking-page)\
[Get a single event type](https://developers.oncehub.com/reference/get-a-single-event-type)
[Get a single master page](https://developers.oncehub.com/reference/get-a-single-master-page)
[Get a single user](https://developers.oncehub.com/reference/get-a-single-user)
[Get a single booking calendar](https://developers.oncehub.com/reference/get-a-single-booking-calendar)

You will need to indicate the ID using the **id** path parameter.

## Sample objects

Sample booking page object:

```json
{
  "id": "BP-3F7JAWT4UA",
  "object": "booking_page",
  "name": "Andrea Hartie",
  "label": "AndreaHartie",
  "url": "https://go.oncehub.com/andreahartie",
  "active": true
}
```

Sample event type object:

```json
{
  "id": "ET-7I7PKDTFJS",
  "object": "event_type",
  "name": "Budget management",
  "description": "We analyze your current income, expenses and debt. From this we work with you to create a sound financial plan that will allow you to enjoy life and meet your financial obligations simultaneously."
}
```

Sample master page object:

```json
{
  "id": "MP-73E6RHFU77",
  "object": "master_page",
  "name": "Financial Services Inc.",
  "label": "financefirm",
  "url": "https://go.oncehub.com/financefirm",
  "active": true
}
```

Sample user object:

```json
{
  "id": "USR-FSD423423",
  "object": "user",
  "first_name": "Andrea",
  "last_name": "Hartie",
  "email": "AndreaHartie@example.com",
  "status": "active"
}
```

Sample booking calendar:

```json JSON
{
  "id": "BKC-LDJ878496X",
  "object": "booking_calendar",
  "subject": "Meeting with Gilad Goraly",
  "host": "USR-HYPGJXN3A8",
  "url": "https://oncehub.com/gilad15",
  "name": "Gilad Goraly booking calendar",
  "published": true,
  "duration_minutes": 30
}
```