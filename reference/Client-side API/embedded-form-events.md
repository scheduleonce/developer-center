---
title: Embedded form events
deprecated: false
hidden: true
metadata:
  robots: index
---
# List of supported events

| Event name                    | Fires when                                        |
| :---------------------------- | :------------------------------------------------ |
| `oncehub.form.loaded`         | Form is first loaded, on page load.               |
| `oncehub.form.started`        | Visitor starts interacting with the form.         |
| `oncehub.form.completed`      | Visitor completes the form.                       |
| `oncehub.form.button_clicked` | Visitor clicks on a button somewhere on the form. |

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
