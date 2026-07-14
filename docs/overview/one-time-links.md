---
sidebar_position: 9
title: Create a One-Time Link
description: Create single-use booking links for Booking Calendars and Master Pages with support for co-hosts, pre-filled forms, and UTM tracking.
---

# Create a One-Time Link

One-time links are single-use URLs that allow a visitor to schedule a meeting. Once the link has been used to successfully book a meeting, it expires and cannot be used again. Links that are never consumed are automatically deleted after 90 days.

This feature is available for both **Booking Calendars** and **Master Pages**.

## Use Cases

- **Exclusive invitations:** Send a unique booking link to a specific guest so only they can schedule a meeting.
- **Lead generation:** Generate a one-time link after a form submission or chatbot conversation to route the visitor to book immediately.
- **Limited-time offers:** Create urgency by providing a single-use scheduling link as part of a promotion.
- **Multi-participant meetings:** Pre-add co-hosts from your account so they are automatically included when the meeting is booked.

## Create a One-Time Booking Calendar Link

```http
POST /booking-calendars/{id}/one-time-links
```

### Path Parameters

| Parameter | Type     | Description                                        |
| :-------- | :------- | :------------------------------------------------- |
| `id`      | _string_ | ID of the booking calendar (e.g. `BKC-8DJNDNL86G`) |

### Request Body

| Parameter          | Type       | Default | Description                                                                                                                                                                                                      |
| :----------------- | :--------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hide_url_params`  | _boolean_  | `true`  | When set to `true`, the API generates a short one-time-use link with no visible query parameters.                                                                                                                |
| `oh_cohosts`       | _string[]_ | —       | List of co-host email addresses to add to the booking. Co-hosts must belong to the same account, have a scheduling license, and must not be deleted. Passed as `?oh_cohosts=email1,email2` in the generated URL. |
| `booking_form`     | _object_   | —       | Pre-fill guest information (name, email, phone, and custom fields) in the booking form.                                                                                                                          |
| `utm_params`       | _object_   | —       | Attach UTM tracking parameters (`source`, `medium`, `campaign`, `term`, `content`).                                                                                                                              |
| `booking_settings` | _object_   | —       | Configure booking settings such as co-hosts, host assignment, duration, and steps to skip.                                                                                                                       |

#### Booking Form Object

| Parameter             | Type               | Description                                                                                             |
| :-------------------- | :----------------- | :------------------------------------------------------------------------------------------------------ |
| `name`                | _string_           | Name of the guest.                                                                                      |
| `email`               | _string_           | Email of the guest.                                                                                     |
| `phone`               | _string_           | Phone of the guest.                                                                                     |
| `string_custom_field` | _string_           | Placeholder for a custom field that accepts a single text value. Replace with your `mapped_field_name`. |
| `array_custom_field`  | _array of strings_ | Placeholder for a custom field that accepts multiple values. Replace with your `mapped_field_name`.     |

#### UTM Parameters Object

| Parameter  | Type     | Description                                                           |
| :--------- | :------- | :-------------------------------------------------------------------- |
| `source`   | _string_ | Identifies which site sent the traffic (e.g., `facebook`).            |
| `medium`   | _string_ | Identifies what type of link was used (e.g., `social`).               |
| `campaign` | _string_ | Identifies a specific promotion or campaign (e.g., `webinar_signup`). |
| `term`     | _string_ | Identifies search terms (e.g., `online+meeting+scheduler`).           |
| `content`  | _string_ | Identifies what was clicked (e.g., `logolink`).                       |

#### Booking Settings Object

| Parameter          | Type       | Default | Description                                                                                                                                                                                                                                                       |
| :----------------- | :--------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `host`             | _string_   | —       | Email of the team member who should host the booking. Only supported on team booking calendars. If the host is not a part of the team or doesn't have a license, the host is ignored and the distribution method continues as configured.                         |
| `co_hosts`         | _string_   | —       | Comma-separated list of co-host email addresses to add to the booking. Co-hosts must belong to the same account, have a scheduling license, and must not be deleted. Use commas to separate multiple addresses (e.g., `cohost1@example.com,cohost2@example.com`). |
| `duration_minutes` | _integer_  | —       | The meeting duration in minutes. Must be one of the durations configured in the Booking Calendar settings. When set, the guest cannot change the duration. If an unsupported duration is passed, this parameter is ignored.                                       |
| `skip`             | _string[]_ | —       | List of booking flow steps to skip (e.g., `contact_info`, `questions`, `co_hosts`).                                                                                                                                                                               |

### Example Request

```http
POST /booking-calendars/BKC-8DJNDNL86G/one-time-links
Content-Type: application/json
API-Key: your-api-key

{
  "hide_url_params": true,
  "oh_cohosts": [
    "cohost1@example.com",
    "cohost2@example.com"
  ],
  "booking_form": {
    "name": "Carrie Customer",
    "email": "carrie.customer@example.com"
  },
  "utm_params": {
    "source": "facebook",
    "medium": "social",
    "campaign": "webinar_signup"
  },
  "booking_settings": {
    "host": "teamlead@example.com",
    "co_hosts": "cohost3@example.com,cohost4@example.com",
    "duration_minutes": 30,
    "skip": ["contact_info"]
  }
}
```

### Response

A successful response returns the one-time link details. By default, `hide_url_params` is `true`, so the generated URL is short with no visible query parameters.

```json
{
  "id": "QUHVEKLPD93M",
  "url": "https://oncehub.com/.QUHVEKLPD93M",
  "creation_time": "2024-06-18T14:28:19Z"
}
```

If `hide_url_params` is set to `false`, the response also includes the consolidated `url_params` string:

```json
{
  "id": "QUHVEKLPD93M",
  "url": "https://oncehub.com/.QUHVEKLPD93M",
  "creation_time": "2024-06-18T14:28:19Z",
  "url_params": "oh_cohosts=cohost1%40example.com%2Ccohost2%40example.com&utm_source=facebook"
}
```

| Field           | Type     | Description                                                                                               |
| :-------------- | :------- | :-------------------------------------------------------------------------------------------------------- |
| `id`            | _string_ | Unique identifier for the one-time link.                                                                  |
| `url`           | _string_ | The one-time booking URL.                                                                                 |
| `creation_time` | _string_ | ISO 8601 timestamp when the link was created.                                                             |
| `url_params`    | _string_ | Consolidated query string parameters appended to the URL. Only present when `hide_url_params` is `false`. |

### Errors

| Status Code | Error Type              | Example Message                                                               |
| :---------- | :---------------------- | :---------------------------------------------------------------------------- |
| `400`       | `invalid_request_error` | `This booking calendar does not allow creation of one time links: 'BKC-1234'` |
| `401`       | `authentication_error`  | Missing or invalid API key.                                                   |
| `404`       | `invalid_request_error` | `No such booking calendar: '123'`                                             |
| `429`       | `rate_limit_error`      | Too many requests.                                                            |

## Create a One-Time Master Page Link

```http
POST /master-pages/{id}/one-time-links
```

### Path Parameters

| Parameter | Type     | Description                                  |
| :-------- | :------- | :------------------------------------------- |
| `id`      | _string_ | ID of the master page (e.g. `BP-EHM6JU50Q3`) |

### Example Request

```http
POST /master-pages/BP-EHM6JU50Q3/one-time-links
API-Key: your-api-key
```

### Response

```json
{
  "id": "S617NW9C",
  "url": "https://go.oncehub.com/.S617NW9C",
  "creation_time": "2023-12-08T10:21:01Z"
}
```

### Errors

| Status Code | Error Type              | Example Message                                |
| :---------- | :---------------------- | :--------------------------------------------- |
| `400`       | `invalid_request_error` | `This master page is deleted: 'BP-EHM6JU50Q3'` |
| `401`       | `authentication_error`  | Missing or invalid API key.                    |
| `404`       | `invalid_request_error` | `No such master page: '123'`                   |
| `429`       | `rate_limit_error`      | Too many requests.                             |

## URL Query Parameters

You can append the following query parameters to the generated one-time link URL to customize the booking experience.

| Parameter          | Type      | Description                                                                                                                                                                                                                                                                                                           |
| :----------------- | :-------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `host`             | _string_  | Email of the team member who should host the booking. Only supported on team booking calendars. The host must be a member of the team selected on the booking calendar. If the host is not part of the team or doesn't have a license, this parameter is ignored and the distribution method continues as configured. |
| `duration_minutes` | _integer_ | Meeting duration in minutes. Must be one of the durations configured in the booking calendar settings. When set, the guest cannot change the duration. If an unsupported duration is passed, this parameter is ignored and the duration dropdown is shown as normal.                                                  |

## Important Notes

:::note
One-time links are only available for **published** Booking Calendars.
:::

:::warning
One-time links that haven't been consumed will be automatically deleted after 90 days.
:::

:::tip
Once a booking is made using a one-time link, it expires immediately and cannot be reused.
:::

## See Also

- [Authentication](/docs/overview/authentication)
- [Error Handling](/docs/overview/error-handling)
- [Embed Calendar with Co-hosts](/docs/recipes/embed-calendar-cohosts)
