---
title: Example booking object
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
[block:api-header]
{
  "title": "Sample booking object"
}
[/block]
The following is an example of a `booking` object. The `booking` object is nested inside the `data` object, which is delivered inside the `event` object of the Webhook data payload. [Learn more about the `event` object](https://developers.oncehub.com/v1.0.0/reference#the-event-object)

The `booking` object contains all of the relevant booking data related to the booking lifecycle event that triggered the Webhook POST message. [Learn more about the Webhook data payload](https://developers.oncehub.com/v1.0.0/docs/webhook-data-payload) 
[block:code]
{
  "codes": [
    {
      "code": "{\n  \"id\": \"EVNT-KN56U3YL7C\",\n  \"object\": \"event\",\n  \"creation_time\": \"2018-03-22T09:49:12Z\",\n  \"type\": \"booking.scheduled\",\n  \"api_version\": \"v1\",\n  \"data\": {\n    \"object\": \"booking\",\n    \"tracking_id\": \"D36E0002\",\n    \"subject\": \"Live demo\",\n    \"status\": \"Scheduled\",\n    \"creation_time\": \"2018-03-22T09:48:48Z\",\n    \"starting_time\": \"2018-03-22T04:30:00Z\",\n    \"owner\": \"Andrea Hartie\",\n    \"package_id\": null,\n    \"duration_minutes\": 60,\n    \"virtual_or_physical_location\": \"123 Office Street\",\n    \"customer_time_zone_description\": \"(GMT-5) United States; Eastern time\",\n    \"cancel_reschedule_link\": \"https://go.oncehub.com/dana?Params=IPLa6BkbZ-QjWTEeZH3cb7afCgcinMNuLvaH-7mTZO4\",\n    \"canceled_booking_tracking_id\": null,\n    \"cancel_reschedule_reason\": null,\n    \"name_of_user_who_canceled_rescheduled\": null,\n    \"name_of_customer_who_canceled_rescheduled\": null,\n    \"form_submission\": {\n      \"name\": \"Carrie Customer\",\n      \"email\": \"so.carrie.customer@gmail.com\",\n      \"phone\": \"\",\n      \"mobile_phone\": \"1-2025550195\",\n      \"note\": \"I want to discuss whether your product can work for our office.\",\n      \"company\": null,\n      \"guests\": [\"\"],\n      \"custom_fields\": [\n        { \"name\": \"Title\", \"value\": \"Executive Assistant\" },\n        { \"name\": \"Office size\", \"value\": \"30-50 people\" },\n        { \"name\": \"Industry\", \"value\": \"Lawnscaping services\" }\n      ]\n    },\n    \"booking_page\": {\n      \"public_name\": \"Andrea Hartie\",\n      \"internal_label\": \"AndreaHartie\",\n      \"link\": \"https://go.oncehub.com/andreahartie\",\n      \"category\": \"Financial planning firm\",\n      \"time_zone_description\": \"(GMT-5) United States; Eastern time\"\n    },\n    \"master_page\": {\n      \"name\": \"Star Software LLC\",\n      \"label\": \"dana\",\n      \"link\": \"https://go.oncehub.com/dana\"\n    },\n    \"event_type\": {\n      \"name\": \"Live demo\",\n      \"description\":\n        \"Schedule a live demo with us for an in-depth look at our enterprise solutions.\",\n      \"category\": \"Sales\"\n    },\n      \"external_calendar\": {\n      \"type\": \"Google\",\n      \"name\": \"andrea.hartie@example.com\",\n      \"id\": \"andrea.hartie@example.com\",\n      \"event_id\": \"8kvu74dda8kcv0gmmlm3folrhc\"\n    }\n  }\n}",
      "language": "json",
      "name": "Example booking object"
    }
  ]
}
[/block]