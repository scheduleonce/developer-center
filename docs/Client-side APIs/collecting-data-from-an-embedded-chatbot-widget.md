---
title: Collecting data from an embedded chatbot widget
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
## Collect data from an embedded chatbot with JavaScript

OnceHub allows you to collect various chatbot events data from an embedded chatbot widget by adding a JavaScript function alongside the embed code in your website. The JavaScript function is executed every time a significant event happens with your chatbot. When the function executes, a JSON data payload object containing the event data is sent to the parent page (the page in which the chatbot is embedded).

This feature can be used to enable client-side integrations, or enrich customer data profiles, among other applications. [Learn more about use cases for collecting data from embedded chatbot widget](https://developers.oncehub.com/docs/use-cases-client-side-api) 

## Set up data collection from an embedded chatbot

Assuming you have your OnceHub chatbot already embedded on your website, add the following function to your website to start receiving the chatbot events:

```javascript
function oncehubEvent(e) {
  return (
    e.origin === "https://oncehub.com" &&
    e.data.type &&
    e.data.type.indexOf("oncehub.") === 0
  );
}

window.addEventListener("message", function (e) {
  if (oncehubEvent(e)) {
    /* Get the event name */
    console.log("Event name:", e.data.type);

    /* Get the event payload */
    console.log("Event details:", e.data.payload);
    // Add your custom code to handle the event payload
  }
});

```

> 📘 Note
> 
> Note: The `oncehubEvent` function is used in the example above just to filter out other events that might be coming from other 3rd party code. It is not mandatory but recommended.

That’s it!

Now your embedded chatbot will send important events to the parent page

## Events and their payload

The following table lists all the events that will be sent, when they are sent and their payload.

> 📘 Note
> 
> All events are prefixed with `oncehub` namespace. This makes sure that we do not conflict with other events from other third party code running on your page.

### `oncehub.widget.loaded`

**Fired when**: Chatbot widget is first loaded, on page load.

**Payload example**:

```json
{  
  "type": "oncehub.widget.loaded",  
  "payload": {  
    "bot_name": "example bot"  
  }  
}
```

<br />

### `oncehub.widget.opened`

**Fired when**: Visitor clicks anywhere to interact with the chatbot.

**Payload example**:

```json
{
  "type": "oncehub.widget.opened",
  "payload": {
    "bot_name": "example bot",
    "bot_id": "BOT-1234"
  }
}
```

<br />

### `oncehub.widget.closed`

**Fired when**: Visitor closes the chatbot widget.

**Payload example**:

```json
{
  "type": "oncehub.widget.closed",
  "payload": {
    "bot_name": "example bot",
    "bot_id": "BOT-1234"
  }
}
```

<br />

### `oncehub.widget.button_clicked`

**Fired when**: Visitor clicks on an button during the chatbot conversation.

**Payload example**:

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

<br />

### `oncehub.conversation.started`

**Fired when**: Visitor starts interacting with the chatbot.

**Payload example**:

```json
{
  "type": "oncehub.conversation.started",
  "payload": {
    "bot_name": "example bot",
    "bot_id": "BOT-1234"
  }
}
```