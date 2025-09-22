---
title: The user object
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
The user object contains the first name, last name and email of the users in your account and contains a status which indicates if the user has signed in or is still in invited status.

| Field        | Type     | Description                                                                                                        |
| :----------- | :------- | :----------------------------------------------------------------------------------------------------------------- |
| `object`     | _string_ | String representing the object’s type. Objects of the same type share the same value. The type here is `user`.     |
| `id`         | _string_ | Unique identifier for the object.                                                                                  |
| `first_name` | _string_ | User's first name.                                                                                                 |
| `last_name`  | _string_ | User's last name.                                                                                                  |
| `email`      | _string_ | User's email.                                                                                                      |
| `status`     | _string_ | The status of the user. The user can have one of the following statuses: `active` or `invited`.                    |
| `role_name`  | _string_ | The name of the role associated with the user, for example: `Administrator`, `Member`, `Team manager` .            |
| `timezone`   | _string_ | User's timezone. Displayed in [IANA timezone format](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) |
| `teams`      |          | The teams the user belongs to.                                                                                     |

## USER

```json Sample user
{
  "id": "USR-FSD423423",
  "object": "user",
  "first_name": "Andrea",
  "last_name": "Hartie",
  "email": "AndreaHartie@example.com",
  "status": "active",
  "role_name": "Member",
  "timezone": "America/Chicago"
}
```
