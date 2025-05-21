---
title: Embedded chatbot widget events
deprecated: false
hidden: false
metadata:
  robots: index
---
# List of supported events

| Event name                      | Fires when                                                  |
| :------------------------------ | :---------------------------------------------------------- |
| `oncehub.widget.loaded`         | Chatbot widget is first loaded, on page load.               |
| `oncehub.widget.opened`         | Visitor clicks anywhere to interact with the chatbot.       |
| `oncehub.widget.closed`         | Visitor closes the chatbot widget.                          |
| `oncehub.widget.button_clicked` | Visitor clicks on a button during the chatbot conversation. |
| `oncehub.conversation.started`  | Visitor starts interacting with the chatbot.                |

# Events payloads

## `oncehub.widget.loaded`

Payload example:

```json
{  
  "type": "oncehub.widget.loaded",  
  "payload": {  
    "bot_name": "example bot"  
  }  
}
```

## `oncehub.widget.opened`

Payload example:

```json
{
  "type": "oncehub.widget.opened",
  "payload": {
    "bot_name": "example bot",
    "bot_id": "BOT-1234"
  }
}
```

## `oncehub.widget.closed`

Payload example:

```json
{
  "type": "oncehub.widget.closed",
  "payload": {
    "bot_name": "example bot",
    "bot_id": "BOT-1234"
  }
}
```

## `oncehub.widget.button_clicked`

Payload example:

```json
{
  "type": "oncehub.widget.button_clicked",
  "payload": {
    "bot_name": "example bot",
    "bot_id": "BOT-1234",
    "button_text": "confirm",
    "interaction_label": "schedule"
  }
}
```

## `oncehub.conversation.started`

Payload example:

```json
{
  "type": "oncehub.conversation.started",
  "payload": {
    "bot_name": "example bot",
    "bot_id": "BOT-1234"
  }
}
```