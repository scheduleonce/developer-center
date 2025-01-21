---
title: The teams object
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
The team object contains the name of the teams in your account.

| Field    | Type     | Description                                                                                                    |
| :------- | :------- | :------------------------------------------------------------------------------------------------------------- |
| `object` | _string_ | String representing the object’s type. Objects of the same type share the same value. The type here is `team`. |
| `id`     | _string_ | Unique identifier for the object.                                                                              |
| `name`   | _string_ | The name of the team.                                                                                          |

## TEAM

```json Sample user
{
  "object": "team",
  "id": "TM-GCJU8DLBTPY1",
  "name": "Sales"
}
```