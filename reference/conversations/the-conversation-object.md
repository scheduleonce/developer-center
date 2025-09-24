---
id: the-conversation-object
title: The conversation object
slug: /reference/conversations/the-conversation-object/
---

## The conversation object

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
        `id`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        Unique alphanumeric identifier for the object. The prefix of the Conversation ID is `CVR-`.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `object`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        String representing the object’s type. Objects of the same type share the same value. The value here is `conversation`.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `creation_time`
      </td>

      <td style={{ textAlign: "left" }}>
        *timestamp*
      </td>

      <td style={{ textAlign: "left" }}>
        The date and time the conversation was created.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `initiated_by`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        Either `bot` (auto reach out) or `contact` (website visitor clicked on a CTA).
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `last_updated_time`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        The date and time the conversation was last updated.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `last_interacted_time`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        The date and time of the last conversation interaction.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `contact`
      </td>

      <td style={{ textAlign: "left" }}>

_string_, [expandable](/reference/introduction/expanding-responses/)
</td>

      <td style={{ textAlign: "left" }}>
        The contact / customer involved in this conversation.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `owner`
      </td>

      <td style={{ textAlign: "left" }}>

_string_, [expandable](/reference/introduction/expanding-responses/)
</td>

      <td style={{ textAlign: "left" }}>
        The owner (user object) of the conversation.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `status`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*
      </td>

      <td style={{ textAlign: "left" }}>
        The status of the conversation. Can be one of the following:
        `started`  - The website visitor has responded with a first message and the conversation is active from this point.
        `closed`  - The conversation has been closed, this can be done by the conversation ending with a last message, or the visitor starting a different conversation.
        `abandoned`  - If there is no response from the visitor for more than 10 minutes the conversation is ended in an abandoned state.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `bot`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*, [expandable](expanding-responses)
      </td>

      <td style={{ textAlign: "left" }}>
        The bot that facilitated the conversation.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `website`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*, [expandable](expanding-responses)
      </td>

      <td style={{ textAlign: "left" }}>
        The website this conversation was triggered on.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `audience`
      </td>

      <td style={{ textAlign: "left" }}>
        *string*, [expandable](expanding-responses)
      </td>

      <td style={{ textAlign: "left" }}>
        The audience associated with this conversation.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `answers`
      </td>

      <td style={{ textAlign: "left" }}>
        *array\[hash]*
      </td>

      <td style={{ textAlign: "left" }}>
        Answers to the questions asked during the conversation.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `bookings`
      </td>

      <td style={{ textAlign: "left" }}>
        *array\[string]*
      </td>

      <td style={{ textAlign: "left" }}>
        Bookings that are associated to the conversation.
      </td>
    </tr>

  </tbody>
</Table>

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
    },
    {
      "id": "INT-3129F3D394",
      "internal_label": null,
      "question": "Attachments",
      "value": "https://app.oncehub.com/download/attachment?trackingId=BKNG-3KM0HY2BF9SL"
    }
  ],
  "bookings": ["BKNG-3KM0HY2BF9SL"]
}
```
