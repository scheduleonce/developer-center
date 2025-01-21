---
title: Event triggers
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
## Supported event types

The following event types are supported. [Learn more about Webhook event triggers](https://developers.oncehub.com/v1.0.0/docs/webhook-event-triggers)

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th style={{ textAlign: "left" }}>
        Event type
      </th>

      <th style={{ textAlign: "left" }}>
        Booking scenario
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ textAlign: "left" }}>
        `booking`
      </td>

      <td style={{ textAlign: "left" }}>
        All booking lifecycle events
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `booking.scheduled`
      </td>

      <td style={{ textAlign: "left" }}>
        Customer schedules a booking\
        User approves a booking requested by a Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `booking.rescheduled`
      </td>

      <td style={{ textAlign: "left" }}>
        Customer reschedules a booking on the same booking page\
        Customer reschedules a booking following a request from the User to reschedule
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `booking.canceled_then_rescheduled`
      </td>

      <td style={{ textAlign: "left" }}>
        Customer cancels a booking and then reschedules on a different booking page
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `booking.canceled_reschedule_requested`
      </td>

      <td style={{ textAlign: "left" }}>
        User cancels and sends a request to the Customer to reschedule
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `booking.canceled`
      </td>

      <td style={{ textAlign: "left" }}>
        User or Customer cancels a booking
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `booking.completed`
      </td>

      <td style={{ textAlign: "left" }}>
        Booking end time has passed
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `booking.no_show`
      </td>

      <td style={{ textAlign: "left" }}>
        User sets the completed booking to No-show
      </td>
    </tr>
  </tbody>
</Table>
