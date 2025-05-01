---
title: Embedded chatbot widget
deprecated: false
hidden: false
metadata:
  robots: index
---
# List of supported events

<br />

| Event name                      | Fired when                                                  |
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