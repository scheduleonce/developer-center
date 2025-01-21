---
title: The Webhook object
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
## Data model description

Webhook subscriptions are configured with a unique ID, User-provided name and POST URL, and an array of User-specified event triggers representing different booking lifecycle events.

[Learn more about Webhook subscription configuration](https://developers.scheduleonce.com/v1.0.0/docs/introduction-to-webhooks) 

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
        Unique alphanumeric identifier for the object. The prefix of the Webhook ID is `WHK_`.
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
        String representing the object’s type. Objects of the same type share the same value. The value here is `webhook`.
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
        Name of the Webhook. This name is only used by you to easily differentiate between Webhooks in the app.
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
        The URL on your side to which we will send the event payload.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `events`
      </td>

      <td style={{ textAlign: "left" }}>
        *list*
      </td>

      <td style={{ textAlign: "left" }}>
        A list of events this Webhook will trigger for.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `creation_time`
      </td>

      <td style={{ textAlign: "left" }}>
        *timestamp*
      </td>

      <td style={{ textAlign: "left" }}>
        The time the Webhook was created.
      </td>
    </tr>
  </tbody>
</Table>
