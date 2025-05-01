---
title: Client side events
deprecated: false
hidden: false
metadata:
  robots: index
---
Integrate Oncehub more deeply with your website by subscribing to client-side events from the embedded booking calendar or chatbot widget using JavaScript. These events function much like standard DOM events, notifying your code about important occurrences within the widget.

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

<br />

> 📘 Note
>
> The oncehubEvent function in the example verifies two things:
>
> 1. The event originates from [https://oncehub.com](https://oncehub.com).
> 2. The event data includes a type field starting with oncehub..
>
> This filtering ensures you only process events specifically sent by Oncehub, preventing conflicts with other message events on your page. All client-side events dispatched by Oncehub consistently use the `oncehub.` prefix, making this check effective. Verifying the origin is also recommended for security and robustness.