---
title: Filtering your report data
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
You can filter your requests using various query parameters, so you are retrieving only the data most significant for your needs. All reporting objects have query parameters  (indicated as 'QUERY PARAMS') specified in their reference information:

* [Booking object](https://developers.oncehub.com/reference/list-all-bookings)
* [Booking page object](https://developers.oncehub.com/reference/list-all-booking-pages)
* [Event type object](https://developers.oncehub.com/reference/list-all-event-types)
* [Master page object](https://developers.oncehub.com/reference/list-all-master-pages)
* [User object](https://developers.oncehub.com/reference/list-all-users)
* [Booking calendar object](https://developers.oncehub.com/reference/list-all-booking-calendars)

## Popular examples

**status**: You may wish to evaluate all canceled bookings or no-shows, to spot trends.

**booking\_owner**: When you search by booking owner, you will see all bookings relevant to that owner. You can assess effectiveness (for instance, this owner has many more canceled, rescheduled, and/or no-show bookings than another), evaluate distribution in comparison to other booking owners, and have a full summary of that team member's contributions related to bookings.

**booking\_page** and/or **master\_page**: Similarly to the **booking\_owner** parameter,  you can assess effectiveness, evaluate distribution (especially if you use different pages for different campaigns), and have a full summary of a page's bookings in a given period of time.

**event\_type**: Determine which event types are most popular by retrieving multiple event type reports and comparing them. Evaluate customer behavior for one event type in comparison to another (for instance, one event type is canceled more than others).

**conversation**: Understand more about your customer's journey by confirming which bookings came from chats. If your booking came from a ChatOnce conversation, the payload will include its conversation ID.