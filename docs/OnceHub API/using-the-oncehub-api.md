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

## Monitor Your Team's Upcoming Meetings

Monitor your team’s upcoming meetings with by automating reports that grab data for bookings in a specific time range. For instance, you want to be delivered a report daily of that day's meetings. For this, you'll use the query parameters `starting_time.gt` and `starting_time.lt` to specify the starting times of the bookings.

[Learn more about reporting on booking activity](https://developers.oncehub.com/docs/reporting-on-booking-activity)

## Maintain Your Data Warehouse

Grab a one-time report or automate reports that grab new booking data. You can also use this data to evaluate trends in canceled and rescheduled appointments. You'll use the query parameter `last_updated_time.gt` to request any new, canceled, rescheduled, no-show, and completed bookings past a specific amount of time (the last time you requested it).

[Learn more about reporting on booking activity](https://developers.oncehub.com/docs/reporting-on-booking-activity)

## Retrieve Bookings Based on Creation Date

If you wish to evaluate the effectiveness of campaigns, see which times are popular for creating bookings, or have other interests that just require data from new bookings and not other updated bookings, you can use the query parameter `creation_time.gt`. This grabs any bookings created after a specific time.

[Learn more about reporting on booking activity](https://developers.oncehub.com/docs/reporting-on-booking-activity)

## Routing to a Specific Page

On your website, you can guide your visitors through a custom routing process, depending on who they are or what they provide you (for instance, they select a specific option for a form dropdown). You can show them relevant options for a specific page they should use to book with you, retrieved through the API and always up-to-date. You can do this by retrieving a list of all booking pages or all master pages, and filtering this through logic on your end that suits your business needs.

[Learn more about reporting on account objects](https://developers.oncehub.com/docs/reporting-on-account-objects)