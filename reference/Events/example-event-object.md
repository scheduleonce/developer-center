---
title: Example event object
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
## Sample event object

The following is an example of an event object. The object has a unique ID, object type `event`, time of creation, event type (the event that triggered the payload), API version, and `data` object. For a booking lifecycle event, the data object will contain a `booking` object with information about the relevant booking. [Learn more about the booking object](https://developers.oncehub.com/v1.0.0/reference#the-booking-object) 

```json Example event object
{
  "id": "EVNT-KN56U3YL7C",
  "object": "event",
  "creation_time": "2018-03-22T09:49:12Z",
  "type": "booking.scheduled",
  "api_version": "v1",
  "data": {}
}
```
