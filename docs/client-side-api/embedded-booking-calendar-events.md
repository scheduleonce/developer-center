---
title: Embedded booking events
description: Track embedded booking calendar events including calendar loaded, time slot selection, and booking completion with detailed payload data.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Embedded booking events

Subscribe to events from embedded booking calendars or booking pages to track visitor interactions and booking completions.

## List of supported events

<Tabs groupId="product" queryString className="product-tabs">
  <TabItem value="booking-calendars" label="Booking Calendars [New]" default>

| Event name                                    | Fires when                                                                                  |
| :-------------------------------------------- | :------------------------------------------------------------------------------------------ |
| `oncehub.booking_calendar.loaded`             | Booking calendar is first loaded, on page load.                                             |
| `oncehub.booking_calendar.time_slot_selected` | Visitor selects a time slot and confirms it.                                                |
| `oncehub.booking.scheduled`                   | Visitor successfully completes the final step of the booking, and the meeting is scheduled. |

  </TabItem>
  <TabItem value="booking-pages" label="Booking Pages [Classic]">

For Booking Pages, use the `SOAfterConfirmationFunction()` JavaScript function to collect booking confirmation data when a booking is scheduled. See [Collecting data from an embedded Booking page](/docs/client-side-api/collecting-data-from-embedded-booking-page) for the legacy implementation details.

The function executes when a booking is successfully completed and provides a comprehensive booking data payload.

  </TabItem>
</Tabs>

## Events payloads

<Tabs groupId="product" queryString className="product-tabs">
  <TabItem value="booking-calendars" label="Booking Calendars [New]" default>

### `oncehub.booking_calendar.loaded`

Payload example:

```json
{
  "type": "oncehub.booking_calendar.loaded",
  "payload": {
    "id": "BKC-LDJ878496X",
    "subject": "Meeting with Gilad Goraly",
    "host": "USR-HYPGJXN3A8",
    "url": "https://oncehub.com/gilad15",
    "name": "Gilad Goraly booking calendar",
    "duration_minutes": 30
  }
}
```

### `oncehub.booking_calendar.time_slot_selected`

Payload example:

```json
{
  "type": "oncehub.booking_calendar.time_slot_selected",
  "payload": {
    "id": "BKC-LDJ878496X",
    "subject": "Meeting with Gilad Goraly",
    "host": "USR-HYPGJXN3A8",
    "url": "https://oncehub.com/gilad15",
    "name": "Gilad Goraly booking calendar",
    "duration_minutes": 30,
    "starting_time": "2020-03-22T04:30:00Z",
    "customer_timezone": "America/New_York"
  }
}
```

### `oncehub.booking.scheduled`

Payload example:

```json
{
  "type": "oncehub.booking.scheduled",
  "payload": {
    "id": "BKNG-J4FR05BKEWEX",
    "subject": "Live demo",
    "status": "scheduled",
    "creation_time": "2020-03-22T09:48:48Z",
    "starting_time": "2020-03-22T04:30:00Z",
    "customer_timezone": "America/New_York",
    "host": "USR-FSD423423",
    "duration_minutes": 60,
    "location_description": "123 Office Street",
    "attendees": ["andrea.hartie@example.com", "carrie.customer@gmail.com"],
    "utm_params": {
      "source": "facebook",
      "medium": "social",
      "campaign": null,
      "term": null,
      "content": null
    },
    "ics_url": "https://oncehub.com/api/bookings/ics/62ad3bdd-a09f-dfbdffbef389-axs01j",
    "booking_calendar": "BKC-03WJV0R52Z",
    "cancel_url": "https://oncehub.com/m/BKNG-3KM0HY2BF9SL/cancel",
    "reschedule_url": "https://oncehub.com/m/BKNG-3KM0HY2BF9SL",
    "custom_fields": [
      {
        "name": "discussion_points",
        "value": "Need support on new product"
      },
      {
        "name": "meeting_reason",
        "value": "Product demo"
      }
    ]
  }
}
```

  </TabItem>
  <TabItem value="booking-pages" label="Booking Pages [Classic]">

### Booking confirmation data payload

The `SOAfterConfirmationFunction()` returns a comprehensive JSON object containing booking information. See the [Collecting data from an embedded Booking page](/docs/client-side-api/collecting-data-from-embedded-booking-page) documentation for the complete payload structure and implementation details.

The payload includes customer information (name, email, phone), meeting times in multiple time zones (UTC, customer time zone, booking page time zone), cancel/reschedule links, calendar event files (ICS and VCS), and error status codes.

  </TabItem>
</Tabs>
