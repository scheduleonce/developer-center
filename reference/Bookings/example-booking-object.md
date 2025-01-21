---
title: Example booking object
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
## Sample booking object

The following is an example of a `booking` object. The `booking` object is nested inside the `data` object, which is delivered inside the `event` object of the Webhook data payload. [Learn more about the `event` object](https://developers.oncehub.com/v1.0.0/reference#the-event-object)

The `booking` object contains all of the relevant booking data related to the booking lifecycle event that triggered the Webhook POST message. [Learn more about the Webhook data payload](https://developers.oncehub.com/v1.0.0/docs/webhook-data-payload) 

```json Example booking object
{
  "id": "EVNT-KN56U3YL7C",
  "object": "event",
  "creation_time": "2018-03-22T09:49:12Z",
  "type": "booking.scheduled",
  "api_version": "v1",
  "data": {
    "object": "booking",
    "tracking_id": "D36E0002",
    "subject": "Live demo",
    "status": "Scheduled",
    "creation_time": "2018-03-22T09:48:48Z",
    "starting_time": "2018-03-22T04:30:00Z",
    "owner": "Andrea Hartie",
    "package_id": null,
    "duration_minutes": 60,
    "virtual_or_physical_location": "123 Office Street",
    "customer_time_zone_description": "(GMT-5) United States; Eastern time",
    "cancel_reschedule_link": "https://go.oncehub.com/dana?Params=IPLa6BkbZ-QjWTEeZH3cb7afCgcinMNuLvaH-7mTZO4",
    "canceled_booking_tracking_id": null,
    "cancel_reschedule_reason": null,
    "name_of_user_who_canceled_rescheduled": null,
    "name_of_customer_who_canceled_rescheduled": null,
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
    "booking_page": {
      "public_name": "Andrea Hartie",
      "internal_label": "AndreaHartie",
      "link": "https://go.oncehub.com/andreahartie",
      "category": "Financial planning firm",
      "time_zone_description": "(GMT-5) United States; Eastern time"
    },
    "master_page": {
      "name": "Star Software LLC",
      "label": "dana",
      "link": "https://go.oncehub.com/dana"
    },
    "event_type": {
      "name": "Live demo",
      "description":
        "Schedule a live demo with us for an in-depth look at our enterprise solutions.",
      "category": "Sales"
    },
      "external_calendar": {
      "type": "Google",
      "name": "andrea.hartie@example.com",
      "id": "andrea.hartie@example.com",
      "event_id": "8kvu74dda8kcv0gmmlm3folrhc"
    }
  }
}
```
