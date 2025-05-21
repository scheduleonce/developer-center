---
title: Embedded booking calendar events
deprecated: false
hidden: false
metadata:
  robots: index
---
# List of supported events

| Event name                                    | Fires when                                                                                  |
| :-------------------------------------------- | :------------------------------------------------------------------------------------------ |
| `oncehub.booking_calendar.loaded`             | Booking calendar is first loaded, on page load.                                             |
| `oncehub.booking_calendar.time_slot_selected` | Visitor selects a time slot and confirms it.                                                |
| `booking.scheduled`                           | visitor successfully completes the final step of the booking, and the meeting is scheduled. |

# Events payloads

## `oncehub.booking_calendar.loaded`

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

<br />

## `oncehub.booking_calendar.time_slot_selected`

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

## `booking.scheduled`

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
    "booking_calendar": "BKC-03WJV0R52Z",
    "cancel_url": "https://oncehub.com/m/BKNG-3KM0HY2BF9SL/cancel",
    "reschedule_url": "https://oncehub.com/m/BKNG-3KM0HY2BF9SL"
  }
}
```