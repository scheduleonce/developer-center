---
title: Embedded form events
deprecated: false
hidden: true
metadata:
  robots: index
---
# List of supported events

| Event name                    | Fires when                                                  |
| :---------------------------- | :---------------------------------------------------------- |
| `oncehub.form.loaded`         | Chatbot widget is first loaded, on page load.               |
| `oncehub.form.started`        | Visitor starts interacting with the chatbot.                |
| `oncehub.form.completed`      | Visitor closes the chatbot widget.                          |
| `oncehub.form.button_clicked` | Visitor clicks on a button during the chatbot conversation. |

# Events payloads

## `oncehub.chatbot.loaded`

Payload example:

```json
{  
  "type": "oncehub.chatbot.loaded",  
  "payload": {  
    "bot_name": "example bot"  
  }  
}
```

## `oncehub.chatbot.started`

Payload example:

```json
{
  "type": "oncehub.chatbot.started",
  "payload": {
    "bot_name": "example bot",
    "bot_id": "BOT-1234"
  }
}
```

## `oncehub.chatbot.opened`

Payload example:

```json
{
  "type": "oncehub.chatbot.opened",
  "payload": {
    "bot_name": "example bot",
    "bot_id": "BOT-1234"
  }
}
```

## `oncehub.chatbot.closed`

Payload example:

```json
{
  "type": "oncehub.chatbot.closed",
  "payload": {
    "bot_name": "example bot",
    "bot_id": "BOT-1234"
  }
}
```

## `oncehub.chatbot.button_clicked`

Payload example:

```json
{
  "type": "oncehub.chatbot.button_clicked",
  "payload": {
    "bot_name": "example bot",
    "bot_id": "BOT-1234",
    "button_text": "confirm",
    "interaction_label": "schedule"
  }
}
```

<br />
