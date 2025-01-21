---
title: The contact object
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
[block:parameters]
{
  "data": {
    "h-0": "Field",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "`object`",
    "0-1": "_string_",
    "0-2": "String representing the object’s type. Objects of the same type share the same value. The type here is `contact`.",
    "1-0": "`id`",
    "1-1": "_string_",
    "1-2": "Unique identifier for the object.",
    "2-0": "`creation_time`",
    "2-1": "_datetime_",
    "2-2": "The date and time when the contact was created.",
    "3-0": "`last_updated_time`",
    "3-1": "_datetime_",
    "3-2": "The date and time when the contact was last updated. This can happen from any OnceHub product.",
    "4-0": "`last_interacted_time`",
    "4-1": "_datetime_",
    "4-2": "The date and time when the contact last interacted with a OnceHub product.",
    "5-0": "`owner`",
    "5-1": "_string_",
    "5-2": "The ID of the OnceHub user that is assigned ownership of the contact.",
    "6-0": "`company`",
    "6-1": "_string_",
    "6-2": "The name of the company that the contact works for.",
    "7-0": "`city`",
    "7-1": "_string_",
    "7-2": "The city where the contact is based.",
    "8-0": "`company_size`",
    "8-1": "_string_",
    "8-2": "If a text field is used to collect information about the size of the company where the contact works, this field can store the value.  \nIf a number field is used, see the `employees` field.",
    "9-0": "`country`",
    "9-1": "_string_",
    "9-2": "The country where the contact is based.",
    "10-0": "`email`",
    "10-1": "_string_",
    "10-2": "The email of the contact.",
    "11-0": "`first_name`",
    "11-1": "_string_",
    "11-2": "The first name of the contact.",
    "12-0": "`last_name`",
    "12-1": "_string_",
    "12-2": "The last name of the contact.",
    "13-0": "`job_title`",
    "13-1": "_string_",
    "13-2": "The job title of the contact.",
    "14-0": "`has_consent` ",
    "14-1": "_boolean_",
    "14-2": "A field specific to ChatOnce where a website visitor gives consent for the capture and processing of their data. This field can be used to avoid asking the same question to the same contact in the future.",
    "15-0": "`mobile_phone`",
    "15-1": "_string_",
    "15-2": "The mobile phone number for the contact.",
    "16-0": "`phone`",
    "16-1": "_string_",
    "16-2": "The phone number for the contact. This field is typically used for a work landline.",
    "17-0": "`employees`",
    "17-1": "_number_",
    "17-2": "If a number field is used to collect information about the size of the company where the contact works, this field can store the value.  \nCurrently a field of type _number_ can only be populated using ChatOnce.  \nIf a text field is used, see the `company_size` field.",
    "18-0": "`post_code`",
    "18-1": "_string_",
    "18-2": "The post code for the contact.",
    "19-0": "`salutation`",
    "19-1": "_string_",
    "19-2": "The salutation given to the contact if no name has been provided for the contact yet. A typical value populated here will be _website visitor_.",
    "20-0": "`state`",
    "20-1": "_string_",
    "20-2": "The state that the contact is based in. In countries that do not have states, this field can be used for provinces.",
    "21-0": "`street_address`",
    "21-1": "_string_",
    "21-2": "Street address of the contact. This is typically a work or office address.",
    "22-0": "`terms_of_service`",
    "22-1": "_boolean_",
    "22-2": "A field specific to ScheduleOnce where a contact accepts your company's terms of service when making a booking.",
    "23-0": "`timezone`",
    "23-1": "_string_",
    "23-2": "The time zone that the contact is based in. This is based of the last interaction they had with your OnceHub account (ScheduleOnce booking or ChatOnce conversation).",
    "24-0": "`bot`",
    "24-1": "_string_",
    "24-2": "Unique identifier for the chatbot that captured the contact. Will be null if the contact was captured by another object type.",
    "25-0": "`form`",
    "25-1": "_string_",
    "25-2": "Unique identifier for the form that captured the contact. Will be null if the contact was captured by another object type.",
    "26-0": "`custom_fields`",
    "26-1": "_array of hash_",
    "26-2": "Any custom fields that have been added to the contact fields library for your account will be listed in the array of custom fields.",
    "27-0": "`custom_fields.name`",
    "27-1": "_string_",
    "27-2": "Name of the custom field.",
    "28-0": "`custom_fields.value`",
    "28-1": "_string_",
    "28-2": "Value of the custom field."
  },
  "cols": 3,
  "rows": 29,
  "align": [
    "left",
    "left",
    "left"
  ]
}
[/block]

## CONTACT

```json Sample contact
{
  "object": "contact",
  "id": "CTC-J4FR05BKEW",
  "creation_time": "2020-03-22T09:48:48Z",
  "last_updated_time": "2020-03-22T09:48:48Z",
  "last_interacted_time": "2020-03-22T09:48:48Z",
  "owner": "USR-FSD423423",
  "city": "New York",
  "company_size": "30-50 people",
  "company": "Acme",
  "country": "USA",
  "email": "so.carrie.customer@gmail.com",
  "employees": null,
  "first_name": "Carrie",
  "has_consent": true,
  "job_title": "Product manager",
  "last_name": "Customer",
  "mobile_phone": "1-2025550195",
  "phone": null,
  "post_code": null,
  "salutation": null,
  "state": null,
  "street_address": null,
  "terms_of_sevice": true,
  "timezone": "America/New_York",
  "bot": "BOT-ABC123",
  "form": null,
  "custom_fields": [
    { "name": "reason_for_contacting", "value": "I want to do business" },
    { "name": "new_to_our_tool", "value": true }
  ]
}
```