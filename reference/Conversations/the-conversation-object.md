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
\| Field                  | Type                                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |&#x20;&#x20;
\| :--------------------- | :------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
\| \`id\`                   | \_string\_                                    | Unique alphanumeric identifier for the object. The prefix of the Conversation ID is \`CVR-\`.                                                                                                                                                                                                                                                                                                                                                                                                           |
\| \`object\`               | \_string\_                                    | String representing the object’s type. Objects of the same type share the same value. The value here is \`conversation\`.                                                                                                                                                                                                                                                                                                                                                                               |
\| \`creation\_time\`        | \_timestamp\_                                 | The date and time the conversation was created.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
\| \`initiated\_by\`         | \_string\_                                    | Either \`bot\` (auto reach out) or \`contact\` (website visitor clicked on a CTA).                                                                                                                                                                                                                                                                                                                                                                                                                        |
\| \`last\_updated\_time\`    | \_string\_                                    | The date and time the conversation was last updated.                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
\| \`last\_interacted\_time\` | \_string\_                                    | The date and time of the last conversation interaction.                                                                                                                                                                                                                                                                                                                                                                                                                                               |
\| \`contact\`              | \_string\_, \[expandable]\(expanding-responses)  | The contact / customer involved in this conversation.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
\| \`owner\`                | \_string\_, \[expandable]\(expanding-responses)  | The owner (user object) of the conversation.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
\| \`status\`               | \_string\_                                    | The status of the conversation. Can be one of the following: \<br> - \`started\` - The website visitor has responded with a first message and the conversation is active from this point. \<br> - \`closed\` - The conversation has been closed, this can be done by the conversation ending with a last message, or the visitor starting a different conversation. \<br> - \`abandoned\` - If there is no response from the visitor for more than 10 minutes the conversation is ended in an abandoned state. |
\| \`bot\`                  | \_string\_, \[expandable]\(expanding-responses)  | The bot that facilitated the conversation.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
\| \`website\`              | \_string\_, \[expandable]\(expanding-responses)  | The website this conversation was triggered on.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
\| \`audience\`             | \_string\_, \[expandable]\(expanding-responses)  | The audience associated with this conversation.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
\| \`answers\`              | \_array\[hash]\_                               | Answers to the questions asked during the conversation.                                                                                                                                                                                                                                                                                                                                                                                                                                               |
\| \`bookings\`             | \_array\[string]\_                             | Bookings that are associated to the conversation.                                                                                                                                                                                                                                                                                                                                                                                                                                                     |


## The website object

| Field    | Type     | Description                                                                                                        |
| :------- | :------- | :----------------------------------------------------------------------------------------------------------------- |
| `id`     | *string* | Unique alphanumeric identifier for the object. The prefix of the Website ID is `WEB-`.                             |
| `object` | *string* | String representing the object’s type. Objects of the same type share the same value. The value here is `website`. |
| `name`   | *string* | The name of the website.                                                                                           |
| `url`    | *string* | The URL of the website.                                                                                            |

## The audience object

| Field    | Type     | Description                                                                                                         |
| :------- | :------- | :------------------------------------------------------------------------------------------------------------------ |
| `id`     | *string* | Unique alphanumeric identifier for the object. The prefix of the Audience ID is `AUD-`.                             |
| `object` | *string* | String representing the object’s type. Objects of the same type share the same value. The value here is `audience`. |
| `name`   | *string* | The name of the audience.                                                                                           |

## The bot object

| Field    | Type     | Description                                                                                                    |
| :------- | :------- | :------------------------------------------------------------------------------------------------------------- |
| `id`     | *string* | Unique alphanumeric identifier for the object. The prefix of the Bot ID is `BOT-`.                             |
| `object` | *string* | String representing the object’s type. Objects of the same type share the same value. The value here is `bot`. |
| `name`   | *string* | The name of the bot.                                                                                           |

## CONVERSATION

The following is an example of a conversation object.

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