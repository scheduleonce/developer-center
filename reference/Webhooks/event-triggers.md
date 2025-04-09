---
title: Event triggers
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
## Supported events

The following events are supported. [Learn more about Webhook event triggers](https://developers.oncehub.com/docs/webhook-event-triggers)

### Booking event triggers

Webhooks for booking events will contain the [booking object](the-booking-object) in the data payload.

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
        All booking lifecycle events.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `booking.scheduled`
      </td>

      <td style={{ textAlign: "left" }}>
        Customer schedules a booking.\
        User approves a booking requested by a Customer.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `booking.rescheduled`
      </td>

      <td style={{ textAlign: "left" }}>
        Customer reschedules a booking on the same booking page.\
        Customer reschedules a booking following a request from the User to reschedule.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `booking.canceled_then_rescheduled`
      </td>

      <td style={{ textAlign: "left" }}>
        Customer cancels a booking and then reschedules on a different booking page.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `booking.canceled_reschedule_requested`
      </td>

      <td style={{ textAlign: "left" }}>
        User cancels and sends a request to the Customer to reschedule.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `booking.canceled`
      </td>

      <td style={{ textAlign: "left" }}>
        User or Customer cancels a booking.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `booking.completed`
      </td>

      <td style={{ textAlign: "left" }}>
        Booking end time has passed.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `booking.no_show`
      </td>

      <td style={{ textAlign: "left" }}>
        User sets the completed booking to No-show.
      </td>
    </tr>
  </tbody>
</Table>

### Conversation event triggers

Webhooks for conversation events will contain the [conversation object](the-conversation-object) in the data payload.

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th style={{ textAlign: "left" }}>
        Event type
      </th>

      <th style={{ textAlign: "left" }}>
        Conversation scenario
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ textAlign: "left" }}>
        `conversation`
      </td>

      <td style={{ textAlign: "left" }}>
        All conversation lifecycle events.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `conversation.started`
      </td>

      <td style={{ textAlign: "left" }}>
        Website visitor starts interacting with a chatbot.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `conversation.closed`
      </td>

      <td style={{ textAlign: "left" }}>
        Website visitor reaches the end of the conversation flow.\
        Website visitor starts a new conversation with a different chatbot.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `conversation.abandoned`
      </td>

      <td style={{ textAlign: "left" }}>
        Website visitor stops interacting with a bot for more than 10 minutes.
      </td>
    </tr>
  </tbody>
</Table>