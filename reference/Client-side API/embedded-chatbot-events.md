---
title: Embedded chatbot events
deprecated: false
hidden: false
metadata:
  robots: index
---
# List of supported events

| Event name                       | Fires when                                                  |
| :------------------------------- | :---------------------------------------------------------- |
| `oncehub.chatbot.loaded`         | Chatbot widget is first loaded, on page load.               |
| `oncehub.chatbot.opened`         | Visitor clicks anywhere to interact with the chatbot.       |
| `oncehub.chatbot.started`        | Visitor starts interacting with the chatbot.                |
| `oncehub.chatbot.closed`         | Visitor closes the chatbot widget.                          |
| `oncehub.chatbot.button_clicked` | Visitor clicks on a button during the chatbot conversation. |

# Events payloads

## `oncehub.chatbot.loaded`

Payload example:

```json
{  
  "type": "oncehub.chatbot.loaded",  
  "payload": {
    "bot_id": "BOT-1234",
    "bot_name": "example bot"  
  }  
}
```

## `oncehub.chatbot.opened`

Payload example:

```json
{
  "type": "oncehub.chatbot.opened",
  "payload": {
		"bot_id": "BOT-1234",
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
		"bot_id": "BOT-1234",
    "bot_name": "example bot"
  }
}
```

##

## `oncehub.chatbot.closed`

Payload example:

```json
{
  "type": "oncehub.chatbot.closed",
  "payload": {
		"bot_id": "BOT-1234",
    "bot_name": "example bot"
  }
}
```

## `oncehub.chatbot.button_clicked`

Payload example:

```json
{
  "type": "oncehub.chatbot.button_clicked",
  "payload": {
		"bot_id": "BOT-1234",
    "bot_name": "example bot",
    "button_text": "confirm",
    "interaction_label": "schedule"
  }
}
```

<br />
