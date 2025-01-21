---
title: Book a time slot
excerpt: Book a time from the available time slots
api:
  file: oncehub.json
  operationId: book-a-time-slot-for-a-booking-calendar
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
> 1. This endpoint is designed to be used with the "[Get available time slots](https://developers.oncehub.com/reference/get-available-time-slots-for-booking-calendar)" endpoint. First, retrieve available time slots for a specific time range, and then use this endpoint to book one of those slots.
> 2. You can only select a location from those offered within the available time slots.
> 3. All datetime strings are [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) in full form. For example, `2024-11-29T09:30:00.000Z`.