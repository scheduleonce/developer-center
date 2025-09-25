---
title: The booking object
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
The booking object contains all of the relevant data about the booking. It includes booking data, booking lifecycle status, cancel/reschedule data (when relevant), booking form submission data, booking page, master page, and event type data.

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
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        String representing the object’s type. Objects of the same type share the same value. The type here is `booking`.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `id`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        Unique identifier for the object.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `tracking_id`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        A unique ID automatically assigned to every booking.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `subject`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        The name of the service or subject as defined in the booking form.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `status`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        The status of the booking event. The booking can have any of the following statuses: `requested`, `scheduled`, `rescheduled`, `completed`, `canceled` or `no_show`
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `in_trash`
      </td>

      <td style={{ textAlign: "left" }}>
        _boolean_
      </td>

      <td style={{ textAlign: "left" }}>
        The booking was moved to trash in the activity stream. While this value is true, the activity can still be found in the trash and has not been hard deleted yet.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `creation_time`
      </td>

      <td style={{ textAlign: "left" }}>
        _datetime_
      </td>

      <td style={{ textAlign: "left" }}>
        The date and time when the booking was created.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `starting_time`
      </td>

      <td style={{ textAlign: "left" }}>
        _datetime_
      </td>

      <td style={{ textAlign: "left" }}>
        The date and time when the meeting is scheduled to start.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `customer_timezone`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        The timezone selected by the customer when making the booking. Displayed in 

        [IANA timezone format](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

        .
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `last_updated_time`
      </td>

      <td style={{ textAlign: "left" }}>
        _datetime_
      </td>

      <td style={{ textAlign: "left" }}>
        The date and time the booking was last updated.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `owner`
      </td>

      <td style={{ textAlign: "left" }}>
        * string_, [expandable](expanding-responses)
      </td>

      <td style={{ textAlign: "left" }}>
        The ID of the owner of the booking. This is the User who originally accepted the booking, and remains unchanged even if the booking was reassigned to a new booking page.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `duration_minutes`
      </td>

      <td style={{ textAlign: "left" }}>
        _integer_
      </td>

      <td style={{ textAlign: "left" }}>
        The length of the meeting, in minutes.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `virtual_conferencing`
      </td>

      <td style={{ textAlign: "left" }}>
        _hash_
      </td>

      <td style={{ textAlign: "left" }}>
        The object containing information about the video conference in case of virtual meeting.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `virtual_conferencing.join_url`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        The URL to join the video conference meeting.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `location_description`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        Information about the physical location in case of physical meeting.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `rescheduled_booking_id`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        The ID of the booking that was rescheduled.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `cancel_reschedule_url`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        URL for cancelling and rescheduling the booking.

        * At the moment, only being sent out in webhooks.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `cancel_reschedule_information`
      </td>

      <td style={{ textAlign: "left" }}>
        _hash_
      </td>

      <td style={{ textAlign: "left" }}>
        An object containing information about the cancel / reschedule event.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `cancel_reschedule_information.reason`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        The reason given for canceling or rescheduling a meeting.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `cancel_reschedule_information.actioned_by`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        The person who actioned the cancel / reschedule. Valid options are `user` (person in your team) and `customer` (person who made the booking).
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `cancel_reschedule_information.user_id`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        If the cancel reschedule was done by the `user`, this field will contain their user id.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `attendees`
      </td>

      <td style={{ textAlign: "left" }}>
        _array_
      </td>

      <td style={{ textAlign: "left" }}>
        List of all meeting attendees (emails).
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `form_submission`
      </td>

      <td style={{ textAlign: "left" }}>
        _hash_
      </td>

      <td style={{ textAlign: "left" }}>
        The object containing information entered by the customer into the booking form. This will include any 

        [system fields](https://help.oncehub.com/help/editing-system-fields)

         and 

        [custom fields](https://help.oncehub.com/help/creating-and-editing-custom-fields)

         defined in your booking form.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `form_submission.name`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        The name provided by the customer in the booking form.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `form_submission.email`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        The email provided by the customer in the booking form.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `form_submission.phone`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        The phone number provided by the customer in the booking form.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `form_submission.mobile_phone`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        The mobile phone number provided by the customer in the booking form.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `form_submission.note`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        The note provided by the customer in the booking form.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `form_submission.company`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        The company provided by your customer in the booking form.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `form_submission.guests`
      </td>

      <td style={{ textAlign: "left" }}>
        _array_
      </td>

      <td style={{ textAlign: "left" }}>
        List of additional attendees (emails) invited by the customer.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `form_submission.custom_fields`
      </td>

      <td style={{ textAlign: "left" }}>
        _hash_
      </td>

      <td style={{ textAlign: "left" }}>
        The object containing custom Booking form fields.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `booking_page`
      </td>

      <td style={{ textAlign: "left" }}>
        * string_, [expandable](expanding-responses)
      </td>

      <td style={{ textAlign: "left" }}>
        The ID of the booking page used to make the booking.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `master_page`
      </td>

      <td style={{ textAlign: "left" }}>
        * string_, [expandable](expanding-responses)
      </td>

      <td style={{ textAlign: "left" }}>
        The ID of the master booking page used to make the booking.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `event_type`
      </td>

      <td style={{ textAlign: "left" }}>
        * string_, [expandable](expanding-responses)
      </td>

      <td style={{ textAlign: "left" }}>
        The ID of the service selected by customer.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `conversation`
      </td>

      <td style={{ textAlign: "left" }}>
        * string_, [expandable](expanding-responses)
      </td>

      <td style={{ textAlign: "left" }}>
        The ID of the conversation that this booking was scheduled from, `null` if the booking did not come from a conversation.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `external_calendar`
      </td>

      <td style={{ textAlign: "left" }}>
        _hash_
      </td>

      <td style={{ textAlign: "left" }}>
        Object containing information about the calendar used in the booking.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `external_calendar.type`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        Type of calendar, value can be one of `google`, `exchange`, `office_365`, or `icloud`.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `external_calendar.name`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        The name of the external calendar to which the booking was added.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `external_calendar.id`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        The ID of the external calendar to which the booking was added.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `external_calendar.event_id`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        The id of the booking event that was created in the external calendar.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `ics_url`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        A direct, publicly accessible URL that downloads an ICS (.ics) calendar file for the booking.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `utm_params`
      </td>

      <td style={{ textAlign: "left" }}>
        _hash_
      </td>

      <td style={{ textAlign: "left" }}>
        Object containing captured values for the 5 standard [UTM parameters](https://en.wikipedia.org/wiki/UTM_parameters). Not included in booking webhooks at this time.

        * If no UTM params exist on the booking, object will return `null`
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `contact`
      </td>

      <td style={{ textAlign: "left" }}>
        * string_, [expandable](expanding-responses)
      </td>

      <td style={{ textAlign: "left" }}>
        The ID of the contact the booking was scheduled with.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `booking_calendar`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        The ID of the booking calendar used to make this booking.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `cancel_url`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        URL for cancelling the booking.

        * Only sent for booking scheduled via booking calendars
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `reschedule_url`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        URL for rescheduling the booking.

        * Only sent for booking scheduled via booking calendars
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `custom_fields`
      </td>

      <td style={{ textAlign: "left" }}>
        _array of hash_
      </td>

      <td style={{ textAlign: "left" }}>
        Any custom fields that have been added to the field library for the meeting object type on your account will be listed in the array of custom fields.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `custom_fields.name`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        Name of the custom field.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `custom_fields.value`
      </td>

      <td style={{ textAlign: "left" }}>
        _any_
      </td>

      <td style={{ textAlign: "left" }}>
        Value of the custom field.
      </td>
    </tr>
  </tbody>
</Table>

## BOOKING

```json Sample booking object
{
  "object": "booking",
  "id": "BKNG-J4FR05BKEWEX",
  "tracking_id": "D36E0002",
  "subject": "Live demo",
  "status": "scheduled",
  "creation_time": "2020-03-22T09:48:48Z",
  "starting_time": "2020-03-22T04:30:00Z",
  "customer_timezone": "America/New_York",
  "last_updated_time": "2020-03-22T09:48:48Z",
  "owner": "USR-FSD423423",
  "duration_minutes": 60,
  "virtual_conferencing": {
    "join_url": "https://meet.google.com/izv-daci-fyi"
  },
  "location_description": "123 Office Street",
  "rescheduled_booking_id": "BKNG-J4FR05BKEWEX",
  "cancel_reschedule_information": {
    "reason": "Change in schedule",
    "actioned_by": "user",
    "user_id": "USR-FSD423423"
  },
  "attendees": ["andrea.hartie@example.com", "carrie.customer@gmail.com"],
  "form_submission": {
    "name": "Carrie Customer",
    "email": "carrie.customer@gmail.com",
    "phone": null,
    "mobile_phone": "1-2025550195",
    "note": "I want to discuss whether your product can work for our office.",
    "company": null,
    "guests": [],
    "custom_fields": [
      { "name": "Title", "value": "Executive Assistant" },
      { "name": "Office size", "value": "30-50 people" },
      { "name": "Industry", "value": "Lawnscaping services" }
    ]
  },
  "booking_page": "BP-X0LCRU5LES",
  "master_page": "MP-ZID28U5946",
  "event_type": "ET-7NC41GHIDZ",
  "conversation": "CVR-ZLS0AG3YXZTH",
  "ics_url": "https://oncehub.com/api/bookings/ics/62ad3bdd-a09f-dfbdffbef389-axs01j",
  "external_calendar": {
    "type": "google",
    "name": "andrea.hartie@example.com",
    "id": "andrea.hartie@example.com",
    "event_id": "8kvu74dda8kcv0gmmlm3folrhc"
  },
  "utm_params": {
    "source": "facebook",
    "medium": "social",
    "campaign": null,
    "term": null,
    "content": null
  },
  "contact": "CTC-262WER5NR9CG38",
  "booking_calendar": "BKC-03WJV0R52Z",
  "cancel_url": "https://oncehub.com/m/BKNG-3KM0HY2BF9SL/cancel",
  "reschedule_url": "https://oncehub.com/m/BKNG-3KM0HY2BF9SL",
	"custom_fields": [
    {
      "name": "discussion_points",
      "value": "Need support on new product"
    },
    {
      "name": "meeting_reason",
      "value": "Product demo"
    }
  ]
}
```
