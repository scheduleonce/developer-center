---
title: The contact object
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
        String representing the object’s type. Objects of the same type share the same value. The type here is `contact`.
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
        `creation_time`
      </td>

      <td style={{ textAlign: "left" }}>
        _datetime_
      </td>

      <td style={{ textAlign: "left" }}>
        The date and time when the contact was created.
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
        The date and time when the contact was last updated. This can happen from any OnceHub product.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `last_interacted_time`
      </td>

      <td style={{ textAlign: "left" }}>
        _datetime_
      </td>

      <td style={{ textAlign: "left" }}>
        The date and time when the contact last interacted with a OnceHub product.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `owner`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        The ID of the OnceHub user that is assigned ownership of the contact.
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
        The status of the contact. The contact can have one of the following statuses: `Qualified` , `Marketing qualified`, `Sales qualified` or `Disqualified`.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `company`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        The name of the company that the contact works for.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `city`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        The city where the contact is based.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `company_size`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        If a text field is used to collect information about the size of the company where the contact works, this field can store the value.
        If a number field is used, see the `employees` field.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `country`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        The country where the contact is based.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `email`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        The email of the contact.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `first_name`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        The first name of the contact.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `last_name`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        The last name of the contact.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `job_title`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        The job title of the contact.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `has_consent`
      </td>

      <td style={{ textAlign: "left" }}>
        _boolean_
      </td>

      <td style={{ textAlign: "left" }}>
        A field specific to ChatOnce where a website visitor gives consent for the capture and processing of their data. This field can be used to avoid asking the same question to the same contact in the future.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `mobile_phone`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        The mobile phone number for the contact.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `phone`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        The phone number for the contact. This field is typically used for a work landline.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `employees`
      </td>

      <td style={{ textAlign: "left" }}>
        _number_
      </td>

      <td style={{ textAlign: "left" }}>
        If a number field is used to collect information about the size of the company where the contact works, this field can store the value.
        Currently a field of type _number_ can only be populated using ChatOnce.
        If a text field is used, see the `company_size` field.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `post_code`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        The post code for the contact.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `salutation`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        The salutation given to the contact if no name has been provided for the contact yet. A typical value populated here will be _website visitor_.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `state`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        The state that the contact is based in. In countries that do not have states, this field can be used for provinces.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `street_address`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        Street address of the contact. This is typically a work or office address.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `terms_of_service`
      </td>

      <td style={{ textAlign: "left" }}>
        _boolean_
      </td>

      <td style={{ textAlign: "left" }}>
        A field specific to ScheduleOnce where a contact accepts your company's terms of service when making a booking.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `timezone`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        The time zone that the contact is based in. This is based of the last interaction they had with your OnceHub account (ScheduleOnce booking or ChatOnce conversation).
        Displayed in

        [IANA timezone format](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

        .
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `bot`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        Unique identifier for the chatbot that captured the contact. Will be null if the contact was captured by another object type.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `form`
      </td>

      <td style={{ textAlign: "left" }}>
        _string_
      </td>

      <td style={{ textAlign: "left" }}>
        Unique identifier for the form that captured the contact. Will be null if the contact was captured by another object type.
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
        Any custom fields that have been added to the field library for the contact object type on your account will be listed in the array of custom fields.
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
    { "name": "new_to_our_tool", "value": true },
    {
      "name": "attachments",
      "value": [
        {
          "fileName": "BKNG-46K9MB0ZFTN5",
          "link": "https://app.oncehub.com/download/attachment?trackingId=BKNG-46K9MB0ZFTN5"
        }
      ]
    }
  ]
}
```
