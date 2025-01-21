---
title: Webhook event triggers
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
## Booking lifecycle events

When you create a Webhook subscription, you must define the set of events that will trigger POST messages to your URL endpoint. These events represent the booking lifecycle scenarios you wish to receive notifications about. [Learn more about the event object sent in the Webhook data payload](https://developers.oncehub.com/reference/events)

## Specific and composite event triggers

OnceHub provides two types of lifecycle [event triggers](https://developers.oncehub.com/reference/event-triggers): Specific and composite. Specific triggers are based on an **individual** event (e.g. a booking is scheduled, or a booking is canceled, or a conversation is closed). The composite `booking` event trigger includes **all** of the booking lifecycle event triggers.

The following is a list of booking lifecycle event triggers that are available to you:

**Specific booking event triggers**  
`booking.scheduled`  
`booking.rescheduled`  
`booking.canceled_then_rescheduled`  
`booking.canceled_reschedule_requested`  
`booking.canceled`  
`booking.completed`  
`booking.no_show`

**Specific conversation event triggers**

`conversation.started`  
`conversation.closed`  
`conversation.abandoned`

**Composite booking event triggers**  
`booking` (includes all of the specific booking event triggers listed above)

## Booking scenarios - Automatic booking

The following summarizes the various booking scenarios that will send a data payload to your server, when you are using Automatic booking.

**Scheduling:**

- You will receive a `booking.scheduled` event when a booking is scheduled by your Customer.

**Rescheduling by the Customer:**

- You will receive a `booking.rescheduled` event when a Customer reschedules a booking with the same User.
- You will receive a `booking.canceled_then_rescheduled` event when a Customer cancels a booking with one User, and reschedules a booking with a different User.

**Rescheduling requested by the User:**

- You will receive a `booking.canceled_reschedule_requested` event when the User requests to reschedule.
- You will receive a `booking.rescheduled` event when the Customer reschedules a booking following the User's request to reschedule.

**Canceling:**

- You will receive a `booking.canceled` event when a booking is canceled by either the Customer or the User.

## Booking scenarios - Booking with approval

The following summarizes the various booking scenarios that will send a data payload to your server, when you are using Booking with approval.

**Booking requested by the Customer:**

- You will not receive a notification at the time a booking is requested by the Customer.
- You will receive a `booking.scheduled` event once the booking request is approved by the User.

**Rescheduling requested by the Customer:**

- You will not receive a notification at the time a reschedule is requested by the Customer.
- If the Customer requested to reschedule a booking with the same User, you will receive a `booking.rescheduled` event once the request is approved by the User.
- If the Customer requested to reschedule a booking with a different User, you will receive a `booking.canceled_then_rescheduled` event once the request is approved by the User.

**Rescheduling requested by the User:**

- You will receive a `booking.canceled_reschedule_requested` event when the User requests to reschedule.
- You will not receive a notification at the time the Customer requests the rescheduled booking.
- You will receive a `booking.rescheduled` event once the Customer's request is approved by the User.

**Canceling:**

- You will receive a `booking.canceled` event when a booking is canceled by either the Customer or the User.

## Additional booking scenarios

**After the scheduled meeting time has passed:**

- You will receive a `booking.completed` event once the scheduled meeting end time has passed.
- You will receive a `booking.no_show` event if the User sets the status of the completed meeting to No-show.

**Receive notifications for all booking scenarios:**

- If you wish to receive data payloads for all of the booking scenarios described above, you can configure your Webhook subscription with the `booking` event trigger. This will cause POST messages to be sent to your URL endpoint whenever any of the above booking scenarios occur. Note: There is no `booking` event type - the specific event type (e.g. `booking.scheduled`, `booking.canceled`, etc.) that triggered the POST message will be specified in the data payload.

**Session packages**

- Bookings scheduled as part of a Session package follow the same Webhook event trigger rules as single bookings.

## Passing events to the Webhook object

To set the booking lifecycle event triggers for your Webhook subscription, you must pass an array of events in the body of the HTTP request. [Learn more about configuring event triggers when you create a Webhook subscription](https://developers.oncehub.com/reference/create-a-webhook) 

The following is an example of a Webhook object with two event triggers (`booking.scheduled` and `booking.rescheduled`) defined:

```json
{
  "name": "New Webhook",
  "url": "https://my.url.endpoint/",
  "events": ["booking.scheduled", "booking.rescheduled"]
}
```

## Failed event triggers

If for any reason your event trigger fails to post, OnceHub retries posting the failed event data at regular intervals. 

For instance, if a booking event fails to post, we retry after 35 seconds. If that fails, we try again 3 minutes later, and again 72 minutes after up until maximum backoff time of 6 hours. 

This continues for 72 hours. If after 72 hours it still fails, we stop attempting to post it.