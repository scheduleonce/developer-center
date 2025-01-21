---
title: Introduction to the client-side APIs
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 📘
>
> The client-side APIs are currently only supported for booking pages and chatbots.

## What are the OnceHub client-side APIs?

Our client-side APIs are a collection of advanced features that can be used to build direct integrations with third party applications, using booking confirmation data sent via URL parameters and JavaScript. It is suitable for developers or technically savvy users with scripting or programming knowledge. You can use the OnceHub client-side APIs to develop custom integrations with your own web applications, services, or data warehouse.

## Redirecting booking confirmation data

Using automatic redirect, you can send booking confirmation data to the redirect page via URL parameters. This feature can be used to personalize the scheduling process by displaying a custom thank you message, or help you streamline your customer pipeline by enabling client-side integrations such as pre-populating a form, among other [client-side APIs use cases](https://developers.oncehub.com/docs/use-cases-client-side-api).

[Learn more about redirecting booking confirmation data](https://developers.oncehub.com/docs/redirecting-booking-confirmation-data) 

## Collecting data from an embedded booking page

If you have published your booking page using website embed, you can collect booking confirmation data from an embedded booking page by adding a JavaScript function to your embed code. [Use cases](https://developers.oncehub.com/docs/use-cases-client-side-api) include: enriching your guest data repository with high-value personal information submitted at the time of booking; and displaying a custom confirmation message inside the embedding frame or a pop-up.

[Learn more about collecting data from an embedded booking page](https://developers.oncehub.com/docs/collecting-data-from-an-embedded-booking-page) 

## Collecting data from a chatbot widget

If you have a OnceHub chatbot embedded on your page, you can collect usage data by adding a JavaScript function on your page to receive events from the chatbot. [Use cases](https://developers.oncehub.com/docs/use-cases-client-side-api) include sending usage data to third party analytics tools like Google Analytics.

[Learn more about collecting data from an embedded chatbot widget](https://developers.oncehub.com/docs/collecting-data-from-an-embedded-chatbot-widget)
