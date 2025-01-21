---
title: The booking page object (DRAFT)
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
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
        *String*
      </td>

      <td style={{ textAlign: "left" }}>
        String representing the object’s type. Objects of the same type share the same value. The type here is `booking_page`.
      </td>
    </tr>
  </tbody>
</Table>

The following is an example of a `booking_page` object.\
The `booking_page` object contains all of the relevant booking page data including the booking page unique id, publicly visible name and the booking page link

```json Example booking page
{
  "id": "BP-3F7JAWT4UA",
  "object": "booking_page",
  "public_name": "Andrea Hartie",
  "internal_label": "AndreaHartie",
  "link": "https://go.oncehub.com/andreahartie",
  "category": "Financial planning firm",
  "time_zone_description": "(GMT-5) United States; Eastern time"
}
```
