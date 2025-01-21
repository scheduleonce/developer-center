---
title: The conversation object
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
[block:parameters]
{
  "data": {
    "h-0": "Field",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "`id`",
    "0-1": "_string_",
    "0-2": "Unique alphanumeric identifier for the object. The prefix of the Conversation ID is `CVR-`.",
    "1-0": "`object`",
    "1-1": "_string_",
    "1-2": "String representing the object’s type. Objects of the same type share the same value. The value here is `conversation`.",
    "2-0": "`creation_time`",
    "2-1": "_timestamp_",
    "2-2": "The date and time the conversation was created.",
    "3-0": "`initiated_by`",
    "3-1": "_string_",
    "3-2": "Either `bot` (auto reach out) or `contact` (website visitor clicked on a CTA).",
    "4-0": "`last_updated_time`",
    "4-1": "_string_",
    "4-2": "The date and time the conversation was last updated.",
    "5-0": "`last_interacted_time`",
    "5-1": "_string_",
    "5-2": "The date and time of the last conversation interaction.",
    "6-0": "`contact`",
    "6-1": "_string_, [expandable](expanding-responses)",
    "6-2": "The contact / customer involved in this conversation.",
    "7-0": "`owner`",
    "7-1": "_string_, [expandable](expanding-responses)",
    "7-2": "The owner (user object) of the conversation.",
    "8-0": "`status`",
    "8-1": "_string_",
    "8-2": "The status of the conversation. Can be one of the following:  \n`started` - The website visitor has responded with a first message and the conversation is active from this point.  \n`closed` - The conversation has been closed, this can be done by the conversation ending with a last message, or the visitor starting a different conversation.  \n`abandoned` - If there is no response from the visitor for more than 10 minutes the conversation is ended in an abandoned state.",
    "9-0": "`bot`",
    "9-1": "_string_, [expandable](expanding-responses)",
    "9-2": "The bot that facilitated the conversation.",
    "10-0": "`website`",
    "10-1": "_string_, [expandable](expanding-responses)",
    "10-2": "The website this conversation was triggered on.",
    "11-0": "`audience`",
    "11-1": "_string_, [expandable](expanding-responses)",
    "11-2": "The audience associated with this conversation.",
    "12-0": "`answers`",
    "12-1": "_array[hash]_",
    "12-2": "Answers to the questions asked during the conversation.",
    "13-0": "`bookings`",
    "13-1": "_array[string]_",
    "13-2": "Bookings that are associated to the conversation."
  },
  "cols": 3,
  "rows": 14,
  "align": [
    "left",
    "left",
    "left"
  ]
}
[/block]


## The website object

| Field    | Type     | Description                                                                                                        |
| :------- | :------- | :----------------------------------------------------------------------------------------------------------------- |
| `id`     | _string_ | Unique alphanumeric identifier for the object. The prefix of the Website ID is `WEB-`.                             |
| `object` | _string_ | String representing the object’s type. Objects of the same type share the same value. The value here is `website`. |
| `name`   | _string_ | The name of the website.                                                                                           |
| `url`    | _string_ | The URL of the website.                                                                                            |

## The audience object

| Field    | Type     | Description                                                                                                         |
| :------- | :------- | :------------------------------------------------------------------------------------------------------------------ |
| `id`     | _string_ | Unique alphanumeric identifier for the object. The prefix of the Audience ID is `AUD-`.                             |
| `object` | _string_ | String representing the object’s type. Objects of the same type share the same value. The value here is `audience`. |
| `name`   | _string_ | The name of the audience.                                                                                           |

## The bot object

| Field    | Type     | Description                                                                                                    |
| :------- | :------- | :------------------------------------------------------------------------------------------------------------- |
| `id`     | _string_ | Unique alphanumeric identifier for the object. The prefix of the Bot ID is `BOT-`.                             |
| `object` | _string_ | String representing the object’s type. Objects of the same type share the same value. The value here is `bot`. |
| `name`   | _string_ | The name of the bot.                                                                                           |

## CONVERSATION

[block:textarea]
{
  "text": "The following is an example of a conversation object.",
  "sidebar": true
}
[/block]


```json Sample conversation
{
  "object": "conversation",
  "id": "CVR-022EAEA41C",
  "creation_time": "2021-07-13T12:28:24Z",
  "initiated_by": "contact",
  "last_updated_time": "2021-07-13T12:33:54Z",
  "last_interacted_time ": "2021-07-13T12:33:54Z",
  "contact": "CTC-9QEG09XXYN",
  "owner": "USR-GNSBE50D6A",
  "status": "closed",
  "website": "WEB-B1D45D12BB",
  "audience": null,
  "bot": "BOT-62774A40FB",
  "answers": [
    {
      "id": "INT-5D22DCBE36",
      "internal_label": "",
      "question": "Full name",
      "value": "Carrie Customer"
    },
    {
      "id": "INT-4CC379BB35",
      "internal_label": "",
      "question": "Email address",
      "value": "so.carrie.customer@gmail.com"
    },
    {
      "id": "INT-013A1D5216",
      "internal_label": "",
      "question": "Meeting location",
      "value": "123 Office Street"
    }
  ],
  "bookings": ["BKNG-3KM0HY2BF9SL"]
}

```