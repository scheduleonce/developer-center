---
title: Reporting on Booking Activity
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
The booking object allows you to retrieve booking data for every booking created or updated in your OnceHub account.

## The Booking Object

The nested data object contains all of the booking information related to the booking lifecycle event, including the following:

* A booking object with a tracking ID
* The booking subject, duration, status, creation time, start time, location, and customer time zone
* Information about related cancellations or rescheduled bookings, when relevant
* Visitor data submitted in the booking form, including name, phone, email, company, time zone, as well as additional guests, note, and custom fields when relevant
* Booking page, master page, and event type data
* UTM parameters used in the booking process

## List All Bookings

You can request all bookings by using the GET request **[List all bookings](https://developers.oncehub.com/reference/list-all-bookings#/)**. This is usually requested with a specific data range, [booking owner](https://developers.oncehub.com/docs/filtering-your-report-data), or other query parameter in mind, filtered to your specific needs.

## Get a Single Booking

If you already have a specific booking ID from past data retrieval and your system requires full, expanded data on a specific booking, you can use the GET request **[Get a single booking](https://developers.oncehub.com/reference/get-a-single-booking)**.

You will need to indicate the booking ID using the **id** path parameter.

## Cancel a Booking

If you have a specific booking ID from past data retrieval, you can cancel a booking through the API, using a POST request.

You can also include a cancellation reason using string format, with parameter `cancellation_reason`. If you'd like a cancellation email sent, use parameter `send_cancellation_email` in boolean format. These are optional parameters.

## Request a Reschedule

If you have a specific booking ID from past data retrieval, you can request the customer reschedule a booking through the API, using a POST request.

You can also include a cancellation reason using string format, with parameter `reschedule_reason`. This is an optional parameter.

## Set Meetings as No-Show

If the customer did not attend the meeting, you can mark them as a no-show through a POST request. You will need to specify the exact booking ID.

## Sample Booking Object

Here you can see a sample booking object, which gives an idea of the information you can receive upon request.

```json
{
  "object": "booking",
  "id": "BKNG-J4FR05BKEWEX",
  "tracking_id": "D36E0002",
  "subject": "Live demo",
  "status": "scheduled",
  "creation_time": "2020-03-22T09:48:48Z",
  "starting_time": "2020-03-22T04:30:00Z",
  "last_updated_time": "2020-03-22T09:48:48Z",
  "owner": "USR-FSD423423",
  "duration_minutes": 60,
  "virtual_conferencing": {
    "join_url": "https://meet.google.com/izv-daci-fyi"
  },
  "location_description": "123 Office Street",
  "rescheduled_booking_id": "BKNG-J4FR05BKEWEX",
  "cancel_reschedule_information": {
    "reason": "Change in schedule",
    "actioned_by": "user",
    "user_id": "USR-FSD423423"
  },
  "form_submission": {
    "name": "Carrie Customer",
    "email": "so.carrie.customer@gmail.com",
    "phone": "",
    "mobile_phone": "1-2025550195",
    "note": "I want to discuss whether your product can work for our office.",
    "company": null,
    "guests": [""],
    "custom_fields": [
      { "name": "Title", "value": "Executive Assistant" },
      { "name": "Office size", "value": "30-50 people" },
      { "name": "Industry", "value": "Lawnscaping services" }
    ]
  },
  "booking_page": "BP-X0LCRU5LES",
  "master_page": "MP-ZID28U5946",
  "event_type": "ET-7NC41GHIDZ",
  "external_calendar": {
    "type": "google",
    "name": "andrea.hartie@example.com",
    "id": "andrea.hartie@example.com",
    "event_id": "8kvu74dda8kcv0gmmlm3folrhc"
 },
    "conversation": {
        "id": "CVR-36E9E6F220",
        "object": "conversation",
        "creation_time": "2021-07-13T09:38:18.315Z",
        "initiated_by": "bot",
        "last_updated_time": "2021-07-13T09:39:15.039Z",
        "contact": "CTC-N63N8YRX4Q",
        "owner": "",
        "status": "finished",
        "bot": "BOT-BC6705CA57",
        "website": "WEB-1DD6B568EA",
        "audience": null
 },
  "utm_params": {
    "source": "facebook",
    "medium": "social",
    "campaign": null,
    "term": null,
    "content": null
  }
}
```

## Filter the Booking Object

If you'd like to narrow the scope of your data payload, you can use [query parameters](https://developers.oncehub.com/reference/list-all-bookings) (indicated in reference material as QUERY PARAMS) to request only relevant data.