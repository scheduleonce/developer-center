---
title: The booking object
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

The booking object is sent in standard JSON format inside the data object, which is nested under the event object in the Webhook payload. The booking object contains a tracking ID, booking data, cancel/reschedule data when relevant, Booking form submission data, Booking page, Master page, and event type data. [Learn more about the data object and the Webhook payload](https://developers.oncehub.com/docs/webhook-data-payload) 

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
        String representing the object’s type. Objects of the same type share the same value. The type here is `booking`.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `tracking_id`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        A unique ID automatically assigned to every booking.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `package_id`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        A unique ID automatically assigned to every Session package.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `subject`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        The name of the Service or Subject as defined in the Booking form.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `status`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        The status of the booking event. The booking can have any of the following statuses: Requested, Scheduled, Rescheduled, Completed, Canceled, or No-Show.
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
        The date and time when the booking was created.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `starting_time`
      </td>

      <td style={{ textAlign: "left" }}>
        *datetime*
      </td>

      <td style={{ textAlign: "left" }}>
        The date and time when the meeting is scheduled to start.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `owner`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        The owner of the booking. This is the User who originally accepted the booking, and remains unchanged even if the booking was reassigned to a new Booking page.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `duration_minutes`
      </td>

      <td style={{ textAlign: "left" }}>
        *integer*
      </td>

      <td style={{ textAlign: "left" }}>
        The length of the meeting, in minutes.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `virtual_or_physical_location`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        The virtual or physical location for the meeting.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `customer_time_zone_description`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        The time zone selected by the Customer.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `cancel_reschedule_link`
      </td>

      <td style={{ textAlign: "left" }}>
        *url*
      </td>

      <td style={{ textAlign: "left" }}>
        The Cancel/Reschedule link sent to the Customer.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `canceled_booking_tracking_id`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        The tracking ID of the booking that was canceled.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `cancel_reschedule_reason`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        The reason given for canceling or rescheduling a meeting.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `name_of_user_who_canceled_rescheduled`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        The name of the User who performed the cancellation or reschedule action.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `name_of_customer_who_canceled_rescheduled`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        The name of the Customer who performed the cancellation or reschedule action.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `form_submission`
      </td>

      <td style={{ textAlign: "left" }}>
        *hash*
      </td>

      <td style={{ textAlign: "left" }}>
        The object containing information entered by the Customer into the Booking form.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `form_submission.name`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        The name provided by the Customer in the Booking form.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `form_submission.email`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        The email provided by the Customer in the Booking form.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `form_submission.phone`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        The phone number provided by the Customer in the Booking form.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `form_submission.mobile_phone`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        The mobile phone number provided by the Customer in the Booking form.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `form_submission.note`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        The note provided by the Customer in the Booking form.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `form_submission.company`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        The company provided by your Customer in the Booking form.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `form_submission.guests`
      </td>

      <td style={{ textAlign: "left" }}>
        *array*
      </td>

      <td style={{ textAlign: "left" }}>
        List of additional attendees (emails) invited by the Customer.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `form_submission.custom_fields`
      </td>

      <td style={{ textAlign: "left" }}>
        *hash*
      </td>

      <td style={{ textAlign: "left" }}>
        The object containing custom Booking form fields.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `booking_page.public_name`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        The Customer-facing name of the Booking page used to make the booking.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `booking_page.internal_label`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        The internal name of the Booking page used to make the booking.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `booking_page.link`
      </td>

      <td style={{ textAlign: "left" }}>
        *url*
      </td>

      <td style={{ textAlign: "left" }}>
        The URL of the Booking page used to make the booking.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `booking_page.category`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        The Category to which the Booking page has been assigned.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `booking_page.time_zone_description`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        The time zone of the Booking page as defined in the Availability section.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `master_page.name`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        The Customer-facing name of the Master booking page used to make the booking.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `master_page.label`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        The internal name of the Master booking page used to make the booking. The label is defined in the left pane of the Master booking pages tab under Configuration.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `master_page.link`
      </td>

      <td style={{ textAlign: "left" }}>
        *url*
      </td>

      <td style={{ textAlign: "left" }}>
        The URL of the Master booking page used to make the booking.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `event_type.name`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        The name of the Service selected by the Customer.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `event_type.description`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        The description of the Service selected by the Customer.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `event_type.category`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        The Category of the Service selected by the Customer.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `external_calendar.type`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        The type of external calendar to which the booking was added.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `external_calendar.name`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
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
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        The id of the external calendar to which the booking was added.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `external_calendar.event_id`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        The id of the booking event that was created in the external calendar.
      </td>
    </tr>
  </tbody>
</Table>
