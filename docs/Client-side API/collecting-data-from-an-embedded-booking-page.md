---
title: Collecting data from an embedded Booking page
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
## Collect data from an embedded Booking page with JavaScript

OnceHub allows you to collect booking confirmation data from an embedded Booking page by adding a JavaScript function alongside the embed code in your website. The JavaScript function is executed every time a booking is successfully scheduled in your embedded Booking page. When the function executes, a JSON data payload object containing booking confirmation data is sent to the parent page (the page in which the scheduling pane is embedded).

This feature can be used to create a custom confirmation page, enable client-side integrations, or enrich Customer data profiles, among other applications. [Learn more about use cases for collecting data from embedded Booking pages](https://developers.oncehub.com/v1.0.0/docs/use-cases-client-side-api) 

## Set up data collection from an embedded Booking page

In order to start collecting data from an embedded Booking page, you must first publish your Booking page using <a target="_blank" href="https://help.oncehub.com/help/website-embed">Website embed</a>. You can do this from the **ScheduleOnce > Share & Publish** section of your account. Simply copy the embed code generated for your selected Booking page, and paste it into your web page.

<Image title="website embed copy code.png" alt={1089} src="https://files.readme.io/d01b172-website_embed_copy_code.png">
  Figure 1: Website embed
</Image>

To implement the JavaScript data collection function, follow these steps:

1. Implement the `SOAfterConfirmationFunction()` function by pasting the code into the page in which your scheduling pane is embedded (the parent page). It is recommended to paste this function before the Booking page embed code, because the interpreters of some browsers do not support calling undefined functions. 
2. Define the parameter name you wish the function to call (this will be the name of the JSON object returned when the function executes, containing Customer booking data). The function takes one parameter. 
3. Implement the logic you wish to apply to the returned JSON object.

The following is an example code snippet showing the implementation of the `SOAfterConfirmationFunction()` function and an embedded Booking page:

```html SOAfterConfirmationFunction()
<script>
  function SOAfterConfirmationFunction(data) {
    // logic using the data object passed to the function
  }
</script>

<!-- ScheduleOnce embed START -->
< div id="SOIDIV_dana"
data-so-page="dana"
data-height="550"
data-style="border: 1px solid #d8d8d8; min-width: 290px; max-width: 900px;"
data-psz="00" > < /div> < script type="text/javascript"
src="https://cdn.oncehub.com/mergedjs/so.js" > < /script>
 <!-- ScheduleOnce embed END -->
```

That’s it!

Now your embedded Booking page will send Customer data to the parent page every time a booking is scheduled.

## Booking confirmation data payload

The following is an example of the booking confirmation data object returned when the `SOAfterConfirmationFunction()` is executed. The function is executed when a booking is successfully made in an embedded scheduling pane, and the object containing booking data is sent to the parent page (the page in which the scheduling pane is embedded).

The JSON object contains the following booking information represented by key-value pairs (KVPs):

* Customer name
* Customer phone number
* Customer email
* Event type name
* Meeting times - UTC, Customer time zone, and Booking page time zone
* Cancel/Reschedule link
* Customer note
* Calendar event files - ICS and VCS
* Error status and error codes (if relevant)

Below is a sample booking confirmation data payload:

```json Booking confirmation data JSON object
{
  "errorStatus": 0,
  "bookingInfo": {
    "Version": "7.35",
    "MeetingTimes": [
      {
        "UTCTime": "2018-04-25T06:45:00",
        "CustomerTime": "2018-04-25T07:45:00",
        "SOTime": "2018-04-25T09:45:00"
      }
    ],
    "CancelRescheduleLink": "https://go.oncehub.com/dana?Params=IPLa6BkbZ-TXI0R*B2fXy8foErRlIIiq*-zghumtdE2JkL5lnKoWCA!!",
    "Note": "I look forward to the meeting.",
    "CalendarEvent": {
      "ICS": "https://app.oncehub.com/scheduleonce/download.aspx?mid=%2fHCb2uQ9jCMYtd1a%2fd9B1Q%3d%3d&type=1",
      "VCS": "https://app.oncehub.com/scheduleonce/download.aspx?mid=%2fHCb2uQ9jCMYtd1a%2fd9B1Q%3d%3d&type=3"
    },
    "statusCode": "1",
    "Message": null,
    "CustomerName": "John Smith",
    "CustomerEmail": "johnsmith@example.com",
    "CustomerPhone": "1-2025550195",
    "EventTypeName": "Automatic booking - 15-minute meeting"
  }
}
```

The JSON object returned to the parent page upon execution of the `SOAfterConfirmationFunction()` function contains an error status (0 = function executed successfully; 1 = function did not execute successfully) and booking information. The following table describes the fields included in the `bookingInfo` payload:

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
        `Version`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        Payload version
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `MeetingTimes.UTCTime`
      </td>

      <td style={{ textAlign: "left" }}>
        *datetime*
      </td>

      <td style={{ textAlign: "left" }}>
        The starting date and time, in UTC.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `MeetingTimes.CustomerTime`
      </td>

      <td style={{ textAlign: "left" }}>
        *datetime*
      </td>

      <td style={{ textAlign: "left" }}>
        The starting date and time, in the Customer time zone.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `MeetingTimes.SOTime`
      </td>

      <td style={{ textAlign: "left" }}>
        *datetime*
      </td>

      <td style={{ textAlign: "left" }}>
        The starting date and time, in the Booking page time zone.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `CancelRescheduleLink`
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
        `Note`
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
        `CalendarEvent.ICS`
      </td>

      <td style={{ textAlign: "left" }}>
        *url*
      </td>

      <td style={{ textAlign: "left" }}>
        Files that can be downloaded and added to a calendar event.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `CalendarEvent.VCS`
      </td>

      <td style={{ textAlign: "left" }}>
        *url*
      </td>

      <td style={{ textAlign: "left" }}>
        Files that can be downloaded and added to a calendar event.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `statusCode`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        Error status: "1" = success; "0" = invalid request. Data can be accessed for a particular meeting only once from this api request.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `Message`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        Error message. For a server error: "Something went wrong on server". All other cases return "null".
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `CustomerName`
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
        `CustomerEmail`
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
        `CustomerPhone`
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
        `EventTypeName`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        The name of the Service selected by the Customer.
      </td>
    </tr>
  </tbody>
</Table>

## Constraints

The following constraints are important to keep in mind when implementing the data collection JavaScript function in your embedded Booking page:

* The function will only execute when a booking is scheduled (not canceled, rescheduled, or reassigned).
* The function is available for use with Booking pages published via Website embed only (not for Website button, Website widget, or stand-alone Booking pages).
* For security and privacy reasons, this function does not execute when your OnceHub account is integrated with a CRM and you are using the CRM record ID to <a target="_blank" href="https://help.oncehub.com/help/prepopulated-booking-forms">skip or pre-populate the Booking form</a>.
