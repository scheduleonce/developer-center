---
title: The booking calendar object
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
The booking calendar object contains the customer facing subject, internal name, URL for booking calendars on your account, meeting duration in minutes and indicates whether the booking calendar is published. [Learn more about booking calendars](https://help.oncehub.com/help/getting-started-with-booking-calendars)

| Field              | Type      | Description                                                                                                                |
| :----------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------- |
| `object`           | _string_  | String representing the object’s type. Objects of the same type share the same value. The type here is `booking_calendar`. |
| `id`               | _string_  | Unique identifier for the object.                                                                                          |
| `host`             | _string_  | The user id / team id of the booking calendar meeting host. Additional attendees are not included.                         |
| `name`             | _string_  | The internal label / name of the booking calendar.                                                                         |
| `subject`          | _string_  | The customer-facing subject of the booking calendar.                                                                       |
| `url`              | _url_     | The URL of the booking calendar.                                                                                           |
| `published`        | _boolean_ | True if this booking calendar is enabled and accepts bookings.                                                             |
| `duration_minutes` | _number_  | Meeting duration in minutes.                                                                                               |

.

## BOOKING CALENDAR

```json Sample booking page
{
  "object": "booking_calendar",
  "id": "BKC-LDJ878496X",
  "subject": "Meeting with Andrea Hartie",
  "host": "USR-HYPGJXN3A8",
  "url": "https://oncehub.com/andreahartie",
  "name": "Andrea Hartie booking calendar",
  "published": true,
  "duration_minutes": 30
}
```
