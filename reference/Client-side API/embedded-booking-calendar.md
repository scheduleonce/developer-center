---
title: Embedded booking calendar
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
```

<br />

## `oncehub.booking_calendar.time_slot_selected`

Payload example:

```json
```

## `booking.scheduled`

Payload example:

```json
```