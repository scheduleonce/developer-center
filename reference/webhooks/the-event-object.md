---
id: the-event-object
title: The event object
description: ''
slug: /reference/webhooks/the-event-object/
---

The event object is sent in the webhook payload, in standard JSON format and contains a unique ID, the event that triggered the payload (e.g. `booking.scheduled`), the time the event occurred, the API version, and a nested data object. [Learn more about the event object and the webhook payload](https://developers.oncehub.com/docs/webhook-data-payload) 

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
        `id`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        Unique alphanumeric identifier for the object. The prefix of the event ID is `EVNT_`.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `object`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        String representing the object’s type. Objects of the same type share the same value. The value here is `event`.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `creation_time`
      </td>

      <td style={{ textAlign: "left" }}>
        *datetime*
      </td>

      <td style={{ textAlign: "left" }}>
        The time the `event` object was created.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `type`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        The type of the event. See below for the event types we currently support.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `api_version`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        The OnceHub API version used to render the `data` object.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `data`
      </td>

      <td style={{ textAlign: "left" }}>
        *hash*
      </td>

      <td style={{ textAlign: "left" }}>
        The object containing relevant data associated with the event that triggered the payload.
      </td>
    </tr>
  </tbody>
</Table>

## EVENT

```json Sample event
{
  "id": "EVNT-KN56U3YL7C",
  "object": "event",
  "creation_time": "2020-03-22T09:49:12Z",
  "type": "booking.scheduled",
  "api_version": "v2",
  "data": {}
}
```