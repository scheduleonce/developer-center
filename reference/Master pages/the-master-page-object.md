---
title: The master page object
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
The master page object contains the name, label and URL for master pages on your account and indicates whether the master page is enabled to receive bookings. [Learn more about master pages](https://help.oncehub.com/help/introduction-to-master-pages)
[block:parameters]
{
  "data": {
    "0-2": "String representing the object’s type. Objects of the same type share the same value. The type here is `master_page`.",
    "0-0": "`object`",
    "0-1": "*string*",
    "h-0": "Field",
    "h-1": "Type",
    "h-2": "Description",
    "2-0": "`name`",
    "2-1": "*string*",
    "3-0": "`label`",
    "3-1": "*string*",
    "1-0": "`id`",
    "1-1": "*string*",
    "4-0": "`url`",
    "4-1": "*string*",
    "1-2": "Unique identifier for the object.",
    "2-2": "The customer facing name of the master page.",
    "3-2": "The internal label of the master page.",
    "4-2": "The URL of the master page.",
    "5-0": "`active`",
    "5-1": "*boolean*",
    "5-2": "True if this master page is enabled and accepts bookings."
  },
  "cols": 3,
  "rows": 6
}
[/block]

[block:api-header]
{
  "title": "MASTER PAGE",
  "sidebar": true
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "{\n  \"id\": \"MP-73E6RHFU77\",\n  \"object\": \"master_page\",\n  \"name\": \"Star Software LLC\",\n  \"label\": \"Dana\",\n  \"url\": \"https://go.oncehub.com/dana\",\n  \"active\": true\n}",
      "language": "json",
      "name": "Sample master page"
    }
  ],
  "sidebar": true
}
[/block]