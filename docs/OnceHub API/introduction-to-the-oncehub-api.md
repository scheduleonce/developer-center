---
title: Introduction to the OnceHub API
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
  "title": "What can I do with the OnceHub API?"
}
[/block]
Our OnceHub API is an advanced feature suitable for developers with scripting or programming knowledge. Using the OnceHub API, you can retrieve data for your organization's customized needs.
[block:api-header]
{
  "title": "What kind of data can I retrieve?"
}
[/block]
The API offers two types of data for you to access: 

1. Data related to your bookings and conversations, including the booking creation time, appointment time, customer data, and more. You can use the [booking object](https://developers.oncehub.com/reference/the-booking-object) for this.

2. Internal account data. Objects include:
* [User](https://developers.oncehub.com/reference/the-user-object)
* [Event type](https://developers.oncehub.com/reference/the-event-type-object)
* [Booking page](https://developers.oncehub.com/reference/the-booking-page-object)
* [Master page](https://developers.oncehub.com/reference/the-master-page-object) 
[block:api-header]
{
  "title": "How do I filter the data?"
}
[/block]
By default, you will retrieve all information available for that object when you request the data. If your project has a narrower scope, you can use query parameters to retrieve only relevant information. [Learn more](https://developers.oncehub.com/docs/filtering-your-report-data)