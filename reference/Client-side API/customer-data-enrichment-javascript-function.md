---
title: Customer data enrichment (JavaScript function)
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
## Customer data enrichment function

The following shows the `SOAfterConfirmationFunction()` JavaScript function used to enable Customer data enrichment for embedded Booking pages:

```javascript SOAfterConfirmationFunction()
<script>
  function SOAfterConfirmationFunction()
  {
    //logic using the data object passed to the function
  }
</script>;
```

## Customer data enrichment payload

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

## Example data object

The following is an example of the Customer profile enrichment object returned when the `SOAfterConfirmationFunction()` is executed. The function is executed when a booking is successfully made in an embedded scheduling pane, and the data enrichment object containing booking data is sent to the parent page (the page in which the scheduling pane is embedded).

```json Example Customer profile enrichment data object
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
    "CancelRescheduleLink":
      "https://secure.scheduleonce.com/financial?Params=IPLa6BkbZ-TXI0R*B2fXy8foErRlIIiq*-zghumtdE2JkL5lnKoWCA!!",
    "Note": "I look forward to the meeting.",
    "CalendarEvent": {
      "ICS":
        "https://app.scheduleonce.com/download.aspx?mid=%2fHCb2uQ9jCMYtd1a%2fd9B1Q%3d%3d&type=1",
      "VCS":
        "https://app.scheduleonce.com/download.aspx?mid=%2fHCb2uQ9jCMYtd1a%2fd9B1Q%3d%3d&type=3"
    },
    "statusCode": "1",
    "Message": null,
    "CustomerName": "Carrie Customer",
    "CustomerEmail": "so.carrie.customer@gmail.com",
    "CustomerPhone": "1-2025550195",
    "EventTypeName": "Automatic booking - 15-minute meeting"
  }
}
```

[Learn more about how to enable Customer data enrichment](https://developers.scheduleonce.com/v1.0.0/docs/customer-data-enrichment)
