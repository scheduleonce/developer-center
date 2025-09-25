---
id: the-event-type-object
title: The event type object
description: ''
slug: /event-types/the-event-type-object/
---

The event type object contains the name and description of the event types created inside your account to allow the easy use of event type id's to filter when retrieving other objects, such as bookings. [Learn more about event types](https://help.oncehub.com/help/introduction-to-event-types)

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
        String representing the object’s type. Objects of the same type share the same value. The type here is `event_type`.
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
        The name of the event type.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `description`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        A description of the event type.
      </td>
    </tr>
  </tbody>
</Table>

## EVENT TYPE

```json Sample event type
{
  "id": "ET-7I7PKDTFJS",
  "object": "event_type",
  "name": "Live demo",
  "description": "Schedule a live demo with us for an in-depth look at our enterprise solutions."
}
```