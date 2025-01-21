---
title: Event triggers
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
  "title": "Supported event types"
}
[/block]
The following event types are supported. [Learn more about Webhook event triggers](https://developers.oncehub.com/v1.0.0/docs/webhook-event-triggers)
[block:parameters]
{
  "data": {
    "h-0": "Event type",
    "h-1": "Booking scenario",
    "0-0": "`booking`",
    "0-1": "All booking lifecycle events",
    "1-0": "`booking.scheduled`",
    "1-1": "Customer schedules a booking\nUser approves a booking requested by a Customer",
    "2-0": "`booking.rescheduled`",
    "2-1": "Customer reschedules a booking on the same booking page\nCustomer reschedules a booking following a request from the User to reschedule",
    "3-0": "`booking.canceled_then_rescheduled`",
    "3-1": "Customer cancels a booking and then reschedules on a different booking page",
    "4-0": "`booking.canceled_reschedule_requested`",
    "4-1": "User cancels and sends a request to the Customer to reschedule",
    "5-0": "`booking.canceled`",
    "5-1": "User or Customer cancels a booking",
    "6-0": "`booking.completed`",
    "6-1": "Booking end time has passed",
    "7-0": "`booking.no_show`",
    "7-1": "User sets the completed booking to No-show"
  },
  "cols": 2,
  "rows": 8
}
[/block]