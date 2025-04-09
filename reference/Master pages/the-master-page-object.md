---
title: The master page object
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
The master page object contains the name, label and URL for master pages on your account and indicates whether the master page is enabled to receive bookings. [Learn more about master pages](https://help.oncehub.com/help/introduction-to-master-pages)

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
        String representing the object’s type. Objects of the same type share the same value. The type here is `master_page`.
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
        The customer facing name of the master page.
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
        The internal label of the master page.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `url`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        The URL of the master page.
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
        True if this master page is enabled and accepts bookings.
      </td>
    </tr>
  </tbody>
</Table>

## MASTER PAGE

```json Sample master page
{
  "id": "MP-73E6RHFU77",
  "object": "master_page",
  "name": "Star Software LLC",
  "label": "Dana",
  "url": "https://go.oncehub.com/dana",
  "active": true
}
```