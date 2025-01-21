---
title: Introduction to the client-side API
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
[block:callout]
{
  "type": "info",
  "body": "The Client-side API is currently only supported for ScheduleOnce."
}
[/block]

[block:api-header]
{
  "title": "What is the OnceHub client-side API?"
}
[/block]
Our client-side API is a collection of advanced features that can be used to build direct integrations with third party applications, using booking confirmation data sent via URL parameters and JavaScript. It is suitable for developers or technically savvy users with scripting or programming knowledge. You can use the OnceHub client-side API to develop custom integrations with your own web applications, services, or data warehouse.

[block:api-header]
{
  "title": "Redirecting booking confirmation data"
}
[/block]
Using Automatic redirect, you can send booking confirmation data to the redirect page via URL parameters. This feature can be used to personalize the scheduling process by displaying a custom thank you message, or help you streamline your customer pipeline by enabling client-side integrations such as pre-populating a form, among other [client-side API use cases](https://developers.oncehub.com/v1.0.0/docs/use-cases-client-side-api).

[Learn more about redirecting booking confirmation data](https://developers.oncehub.com/v1.0.0/docs/redirecting-booking-confirmation-data) 
[block:api-header]
{
  "title": "Collecting data from an embedded Booking page"
}
[/block]
If you have published your Booking page using Website embed, you can collect booking confirmation data from an embedded Booking page by adding a JavaScript function to your embed code. [Use cases](https://developers.oncehub.com/v1.0.0/docs/use-cases-client-side-api) include: enriching your Customer data repository with high-value personal information submitted at the time of booking; and displaying a custom confirmation message inside the embedding frame or a pop-up.

[Learn more about collecting data from an embedded Booking page](https://developers.oncehub.com/v1.0.0/docs/collecting-data-from-an-embedded-booking-page)