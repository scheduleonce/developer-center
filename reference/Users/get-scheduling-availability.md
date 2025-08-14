---
title: Get scheduling availability
deprecated: false
hidden: true
metadata:
  robots: index
---
This API endpoint allows you to retrieve a user's complete scheduling availability. The response provides a comprehensive view of when a user is available to be booked, breaking their schedule down into two key parts:

* **Weekly Availability:** A recurring, weekly schedule that defines the user's standard working hours for each day of the week.
* **Date-specific Overrides:** A list of exceptions to the weekly schedule. These can be used to block off time for holidays or add extra availability on specific dates.

By fetching this data, you can understand a user's availability and build applications that interact with their schedule.

Here is the general structure of the response:

| Field                                  | Type               | Description                                                                                                                                                                                                                              |
| :------------------------------------- | :----------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `object`                               | *string*           | String representing the object’s type. Objects of the same type share the same value. The value here is `schedule`.                                                                                                                      |
| `timezone`                             | *string*           | The user's timezone setting. Displayed in [IANA timezone format](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).                                                                                                          |
| `weekly`                               | *array of objects* | An array of objects defining the user's recurring weekly availability.                                                                                                                                                                   |
| `weekly.day`                           | *string*           | The day of the week, e.g., "Monday".                                                                                                                                                                                                     |
| `weekly.working_hours`                 | *array of objects* | An array of objects representing the available time slots for that day.                                                                                                                                                                  |
| `weekly.working_hours.start_time`      | *string*           | The start time of an availability slot in `HH:MM` format.                                                                                                                                                                                |
| `weekly.working_hours.end_time`        | *string*           | The end time of an availability slot in `HH:MM` format.                                                                                                                                                                                  |
| `weekly.working_hours.locations`       | *array of objects* | An array of objects defining the meeting locations available for this time slot. If multiple conferencing options are connected, they will be sent as separate location objects.                                                         |
| `weekly.working_hours.locations.type`  | *string*           | The type of meeting location. Possible values are `in_person_by_host`, `online_dynamic_link`, `online_static_link`, or `phone_by_guest`.                                                                                                 |
| `weekly.working_hours.locations.value` | *string*           | The value associated with the location type. For `in_person_by_host`, this is the physical address. For `online_dynamic_link`, it's the provider (e.g., "google\_meet", "zoom"). For `online_static_link`, it's a permanent meeting URL. |
| `weekly.working_hours.locations.id`    | *string*           | The unique identifier for an `in_person_by_host` location. This field is `null` for all other location types.                                                                                                                            |
| `overrides`                            | *array of objects* | An array of objects defining date-specific exceptions to the user's weekly availability.                                                                                                                                                 |
| `overrides.date`                       | *string*           | The specific date for the override in `YYYY-MM-DD` format.                                                                                                                                                                               |
| `overrides.day`                        | *string*           | The day of the week that corresponds to the override date.                                                                                                                                                                               |
| `overrides.working_hours`              | *array of objects* | The availability for the override date. The structure is identical to `weekly.working_hours`. An empty array means the user is unavailable for the entire day.                                                                           |