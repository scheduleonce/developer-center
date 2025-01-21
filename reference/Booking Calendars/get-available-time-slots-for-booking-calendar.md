---
title: Get available time slots for a booking calendar
excerpt: Returns a list of available time slots for a booking calendar
api:
  file: oncehub.json
  operationId: get-available-time-slots-for-booking-calendar
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 📘 Notes
> 
> 1. All datetime strings are [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) in full form. For example, `2024-11-29T09:30:00.000Z`.
> 2. The difference between `start_time` and `end_time` must be less than or equal to 30 days.