---
title: Using the OnceHub API
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
With our API, you can request booking data that meets specific parameters and gather actionable data to suit your organization's needs. This includes scheduling advanced reports, collecting contact information to keep your database or CRM up-to-date, and many other possibilities.

## Monitor your team's upcoming bookings

Monitor your team’s upcoming bookings with scheduled data imports by automating reports that grab booking data for meetings in a specific time range. For instance, you want to be delivered a report daily of that day's meetings. For this, you'll use the query parameters **starting\_time.gt** and **starting\_time.lt** to specify the starting times of the bookings.

[Learn more about reporting on booking activity](https://developers.oncehub.com/docs/reporting-on-booking-activity)

## Maintain your data warehouse

Grab a one-time report or automate reports that grab new booking data. You can also use this data to evaluate trends in canceled and rescheduled appointments. You'll use the query parameter **last\_updated\_time.gt** to request any new, canceled, rescheduled, no-show, and completed bookings past a specific amount of time (the last time you requested it).

[Learn more about reporting on booking activity](https://developers.oncehub.com/docs/reporting-on-booking-activity)

## Retrieve bookings based on creation date

If you wish to evaluate the effectiveness of campaigns, see which times are popular for creating bookings, or have other interests that just require data from new bookings and not other updated bookings, you can use the query parameter **creation\_time.gt**. This grabs any bookings created after a specific time.

[Learn more about reporting on booking activity](https://developers.oncehub.com/docs/reporting-on-booking-activity)

## Routing to a specific page

On your website, you can guide your visitors through a custom routing process, depending on who they are or what they provide you (for instance, they select a specific option for a form dropdown). You can show them relevant options for a specific page they should use to book with you, retrieved through the API and always up-to-date. You can do this by retrieving a list of all booking pages or all master pages, and filtering this through logic on your end that suits your business needs.

[Learn more about reporting on account objects](https://developers.oncehub.com/docs/reporting-on-account-objects)