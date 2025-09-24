---
id: the-booking-calendar-object
title: The booking calendar object
description: ''
slug: /reference/booking-calendars/the-booking-calendar-object/
---

The booking calendar object contains the customer facing subject, internal name, URL for booking calendars on your account, meeting duration in minutes and indicates whether the booking calendar is published. [Learn more about booking calendars](https://help.oncehub.com/help/getting-started-with-booking-calendars)

| Field              | Type      | Description                                                                                                                |
| :----------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------- |
| `object`           | *string*  | String representing the object’s type. Objects of the same type share the same value. The type here is `booking_calendar`. |
| `id`               | *string*  | Unique identifier for the object.                                                                                          |
| `host`             | *string*  | The user id / team id of the booking calendar meeting host. Additional attendees are not included.                         |
| `name`             | *string*  | The internal label / name of the booking calendar.                                                                         |
| `subject`          | *string*  | The customer-facing subject of the booking calendar.                                                                       |
| `url`              | *url*     | The URL of the booking calendar.                                                                                           |
| `published`        | *boolean* | True if this booking calendar is enabled and accepts bookings.                                                             |
| `duration_minutes` | *number*  | Meeting duration in minutes.                                                                                               |

.

## BOOKING CALENDAR

```json Sample booking page
{
  "object": "booking_calendar",
  "id": "BKC-LDJ878496X",
  "subject": "Meeting with Gilad Goraly",
  "host": "USR-HYPGJXN3A8",
  "url": "https://oncehub.com/gilad15",
  "name": "Gilad Goraly booking calendar",
  "published": true,
  "duration_minutes": 30
}
```
