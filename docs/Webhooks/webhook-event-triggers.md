---
title: Webhook Event Triggers
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
## Booking Lifecycle Events

When you create a webhook subscription, you must define the set of events that will trigger POST messages to your URL endpoint. These events represent the booking lifecycle scenarios you wish to receive notifications about. [Learn more about the event object sent in the webhook data payload](https://developers.oncehub.com/reference/events)

## Specific and Composite Event Triggers

OnceHub provides two types of lifecycle [event triggers](https://developers.oncehub.com/reference/event-triggers): Specific and composite. Specific triggers are based on an **individual** event (e.g. a booking is scheduled, or a booking is canceled, or a conversation is closed). The composite `booking` event trigger includes **all** of the booking lifecycle event triggers.

The following is a list of booking lifecycle event triggers that are available to you:

**Specific booking event triggers**\
`booking.scheduled`
`booking.rescheduled`
`booking.canceled_then_rescheduled`
`booking.canceled_reschedule_requested`
`booking.canceled`
`booking.completed`
`booking.no_show`

**Specific conversation event triggers**

`conversation.started`\
`conversation.closed`
`conversation.abandoned`

**Composite booking event triggers**\
`booking` (includes all of the specific booking event triggers listed above)

## Booking Scenarios - Automatic Booking

The following summarizes the various booking scenarios that will send a data payload to your server, when you are using Automatic booking.

**Scheduling:**

* You will receive a `booking.scheduled` event when a booking is scheduled by your guest.

**Rescheduling by the guest:**

* You will receive a `booking.rescheduled` event when a guest reschedules a booking with the same user.
* You will receive a `booking.canceled_then_rescheduled` event when a guest cancels a booking with one user, and reschedules a booking with a different user.

**Rescheduling requested by the user:**

* You will receive a `booking.canceled_reschedule_requested` event when the user requests to reschedule.
* You will receive a `booking.rescheduled` event when the guest reschedules a booking following the user's request to reschedule.

**Canceling:**

* You will receive a `booking.canceled` event when a booking is canceled by either the guest or the user.

## Booking Scenarios - Booking with Approval

The following summarizes the various booking scenarios that will send a data payload to your server, when you are using Booking with approval.

**Booking requested by the guest:**

* You will not receive a notification at the time a booking is requested by the guest.
* You will receive a `booking.scheduled` event once the booking request is approved by the user.

**Rescheduling requested by the guest:**

* You will not receive a notification at the time a reschedule is requested by the guest.
* If the guest requested to reschedule a booking with the same user, you will receive a `booking.rescheduled` event once the request is approved by the user.
* If the guest requested to reschedule a booking with a different user, you will receive a `booking.canceled_then_rescheduled` event once the request is approved by the user.

**Rescheduling requested by the user:**

* You will receive a `booking.canceled_reschedule_requested` event when the user requests to reschedule.
* You will not receive a notification at the time the guest requests the rescheduled booking.
* You will receive a `booking.rescheduled` event once the guest's request is approved by the user.

**Canceling:**

* You will receive a `booking.canceled` event when a booking is canceled by either the guest or the user.

## Additional Booking Scenarios

**After the scheduled meeting time has passed:**

* You will receive a `booking.completed` event once the scheduled meeting end time has passed.
* You will receive a `booking.no_show` event if the user sets the status of the completed meeting to No-show.

**Receive notifications for all booking scenarios:**

* If you wish to receive data payloads for all of the booking scenarios described above, you can configure your webhook subscription with the `booking` event trigger. This will cause POST messages to be sent to your URL endpoint whenever any of the above booking scenarios occur. Note: There is no `booking` event type - the specific event type (e.g. `booking.scheduled`, `booking.canceled`, etc.) that triggered the POST message will be specified in the data payload.

**Session packages**

* Bookings scheduled as part of a Session package follow the same webhook event trigger rules as single bookings.

## Passing Events to the Webhook Object

To set the booking lifecycle event triggers for your webhook subscription, you must pass an array of events in the body of the HTTP request. [Learn more about configuring event triggers when you create a Webhook subscription](https://developers.oncehub.com/reference/create-a-webhook)

The following is an example of a webhook object with two event triggers (`booking.scheduled` and `booking.rescheduled`) defined:

```json
{
  "name": "New Webhook",
  "url": "https://my.url.endpoint/",
  "events": ["booking.scheduled", "booking.rescheduled"]
}
```

## Failed Event Triggers

If for any reason your event trigger fails to post, OnceHub retries posting the failed event data at regular intervals.

For instance, if a booking event fails to post, we retry after 35 seconds. If that fails, we try again 3 minutes later, and again 72 minutes after up until maximum backoff time of 6 hours.

This continues for 72 hours. If after 72 hours it still fails, we stop attempting to post it.