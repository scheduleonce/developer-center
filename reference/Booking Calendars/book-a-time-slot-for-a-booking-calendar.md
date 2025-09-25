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
> 3. This endpoint doesn’t support booking calendars with required custom fields.
> 4. All datetime strings are [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) in full form. For example, `2024-11-29T09:30:00.000Z`.

<Callout icon="📘" theme="info">


  ### Using Custom Fields


  In addition to the standard fields, you can pass your own data by including custom key-value pairs within the `booking_form` object in the request body.

  * Field Name (Key): The key for each custom field must exactly match the mapped field name of the corresponding question configured in your Booking page's form settings.
  * Field Value: The data type of the value must match the question's type:
    * For Text and Picklist (single-select) questions, provide a string.
    * For Picklist (multi-select) questions, provide an array of strings.

  Please note that for picklist fields, any values that do not match a pre-configured option will be ignored by the system during booking.
</Callout>