---
id: the-booking-page-object
title: The booking page object
description: ''
slug: /booking-pages/the-booking-page-object/
---

The booking page object contains the customer facing name, internal label and URL for booking pages on your account and indicates whether the booking page is enabled to receive bookings. [Learn more about booking pages](https://help.oncehub.com/help/introduction-to-booking-pages)

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th style={{ textAlign: "left" }}>
        Field
      </th>

      <th style={{ textAlign: "left" }}>
        Type
      </th>

      <th style={{ textAlign: "left" }}>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ textAlign: "left" }}>
        `object`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        String representing the object’s type. Objects of the same type share the same value. The type here is `booking_page`.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `id`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        Unique identifier for the object.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `name`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        The customer-facing name of the booking page.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `label`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        The internal label of the booking page.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `url`
      </td>

      <td style={{ textAlign: "left" }}>
        *url*
      </td>

      <td style={{ textAlign: "left" }}>
        The URL of the booking page.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `active`
      </td>

      <td style={{ textAlign: "left" }}>
        *boolean*
      </td>

      <td style={{ textAlign: "left" }}>
        True if this booking page is enabled and accepts bookings.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `timezone`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        The Booking page timezone. Displayed in [IANA timezone format](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
      </td>
    </tr>
  </tbody>
</Table>

.

## BOOKING PAGE

```json Sample booking page
{
  "id": "BP-3F7JAWT4UA",
  "object": "booking_page",
  "name": "Andrea Hartie",
  "label": "AndreaHartie",
  "url": "https://go.oncehub.com/andreahartie",
  "active": true,
  "timezone": "America/Chicago"
}
```