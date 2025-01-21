---
title: Custom confirmation page (URL parameters)
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
## Booking form submission data (URL parameters)

Booking form submission data can be sent via URL parameters (together with booking data - see below) to a custom confirmation page upon redirect. The following table describes the parameter name, and description of the fields sent:

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th style={{ textAlign: "left" }}>
        Parameter name
      </th>

      <th style={{ textAlign: "left" }}>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ textAlign: "left" }}>
        `name`
      </td>

      <td style={{ textAlign: "left" }}>
        The name provided by the Customer in the Booking form.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `email`
      </td>

      <td style={{ textAlign: "left" }}>
        The email provided by the Customer in the Booking form.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `company`
      </td>

      <td style={{ textAlign: "left" }}>
        The company provided by the Customer in the Booking form.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `mobile`
      </td>

      <td style={{ textAlign: "left" }}>
        The mobile phone number provided by the Customer in the Booking form.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `phone`
      </td>

      <td style={{ textAlign: "left" }}>
        The phone number provided by the Customer in the Booking form.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `note`
      </td>

      <td style={{ textAlign: "left" }}>
        The note provided by the Customer in the Booking form.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `customerGuests`
      </td>

      <td style={{ textAlign: "left" }}>
        List of additional attendees (emails) invited by the Customer.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `location`
      </td>

      <td style={{ textAlign: "left" }}>
        The location of the meeting.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `<custom field name>`
      </td>

      <td style={{ textAlign: "left" }}>
        The name of the User-defined Custom field.
      </td>
    </tr>
  </tbody>
</Table>

**How are Custom fields handled?**

Custom fields for which the Customer enters Booking submission data will be added to the redirect URL when sending booking confirmation data to a custom confirmation page. The Custom field parameter name is the **Field name** as defined by the User (with spaces removed):

<Image title="Custom field name.png" alt={1038} src="https://files.readme.io/a458d36-Custom_field_name.png">
  ScheduleOnce Booking form editor - Defining the field name for a Custom field
</Image>

<a target="_blank" href="https://help.scheduleonce.com/customer/portal/articles/1924597-creating-custom-fields">Learn more about creating and editing Custom fields.</a>

## Booking data (URL parameters)

Booking data can be sent via URL parameters (together with booking form submission data - see above) to a custom confirmation page upon redirect. The following table describes the parameter name, URL syntax, and description of the fields sent:

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th style={{ textAlign: "left" }}>
        Parameter name
      </th>

      <th style={{ textAlign: "left" }}>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ textAlign: "left" }}>
        `bookingPageName`
      </td>

      <td style={{ textAlign: "left" }}>
        The Customer-facing name of the Booking page used to make the booking.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `subject`
      </td>

      <td style={{ textAlign: "left" }}>
        The name of the Service or Subject as defined in the Booking form.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `creationTime`
      </td>

      <td style={{ textAlign: "left" }}>
        The date and time when the booking was created, in UTC.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `meetingTime`
      </td>

      <td style={{ textAlign: "left" }}>
        The starting date and time, in the Booking page time zone.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `timeZone`
      </td>

      <td style={{ textAlign: "left" }}>
        The time zone of the Booking page as defined in the Availability section.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `utcOffset`
      </td>

      <td style={{ textAlign: "left" }}>
        The UTC offset of the Booking page time zone, in integer.
      </td>
    </tr>
  </tbody>
</Table>

[Learn more about sending booking confirmation data via URL parameters to a custom confirmation page](https://developers.scheduleonce.com/v1.0.0/docs/custom-confirmation-page)
