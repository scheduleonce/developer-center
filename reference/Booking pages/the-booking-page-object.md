---
title: The booking page object (DRAFT)
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
[block:parameters]
{
  "data": {
    "h-0": "Field",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "`object`",
    "0-1": "*String*",
    "0-2": "String representing the object’s type. Objects of the same type share the same value. The type here is `booking_page`."
  },
  "cols": 3,
  "rows": 1
}
[/block]
The following is an example of a `booking_page` object. 
The `booking_page` object contains all of the relevant booking page data including the booking page unique id, publicly visible name and the booking page link
[block:code]
{
  "codes": [
    {
      "code": "{\n  \"id\": \"BP-3F7JAWT4UA\",\n  \"object\": \"booking_page\",\n  \"public_name\": \"Andrea Hartie\",\n  \"internal_label\": \"AndreaHartie\",\n  \"link\": \"https://go.oncehub.com/andreahartie\",\n  \"category\": \"Financial planning firm\",\n  \"time_zone_description\": \"(GMT-5) United States; Eastern time\"\n}",
      "language": "json",
      "name": "Example booking page"
    }
  ]
}
[/block]