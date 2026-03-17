---
id: embed-calendar-cohosts
title: Embed calendar with co-host selection
description: Add checkboxes that update an embedded OnceHub calendar to include co-hosts.
slug: /recipes/embed-calendar-cohosts/
---

# Embed Calendar With Co‑Host Selection

This recipe shows how to dynamically update the OnceHub Booking Calendar to show availability for specific team members based on user-selected checkboxes at runtime. It’s useful when you want guests to pick one or more team members and only show availability for the chosen co‑hosts.

## Prerequisites

- An active OnceHub Booking Page.
- The standard OnceHub embed script integrated into your page.
- The email addresses of the team members as configured in OnceHub.

## Example HTML

This implementation uses a list of checkboxes to dynamically update the Booking Calendar by appending the `co_hosts` parameter to the iframe URL. The JavaScript listens for selection changes and refreshes the iframe content in real-time.

```html
<div id="oncehub-container-wrapper">
  <div id="oncehub-target-div"></div>
</div>

<div id="team-selection">
  <label
    ><input type="checkbox" class="cohost-cb" value="sales-1@company.com" />
    Sales Lead</label
  >
  <label
    ><input type="checkbox" class="cohost-cb" value="tech-1@company.com" />
    Technical Lead</label
  >
</div>

<script src="https://embed.oncehub.com/calendar.js"></script>

<script>
  (function () {
    const checkboxes = document.querySelectorAll(".cohost-cb");
    let baseIframeSrc = "";

    /**
     * Updates the iframe's 'src' by appending or removing the 'co_hosts' query parameter.
     */
    function refreshCalendar() {
      // Find the iframe injected by OnceHub inside the wrapper
      const iframe = document.querySelector(
        "#oncehub-container-wrapper iframe",
      );

      // If the embed script hasn't finished injecting the iframe yet, exit
      if (!iframe) return;

      // Capture the original URL on the first interaction to preserve
      // original query parameters (e.g., booking page ID)
      if (!baseIframeSrc) baseIframeSrc = iframe.src;

      // Map selected checkboxes to a comma-separated list of emails
      const selected = Array.from(checkboxes)
        .filter((cb) => cb.checked)
        .map((cb) => cb.value);

      // Use the URL API to safely manipulate query parameters
      const url = new URL(baseIframeSrc);

      if (selected.length > 0) {
        // Appends ?co_hosts=email1,email2 to the URL
        url.searchParams.set("co_hosts", selected.join(","));
      } else {
        // Reverts to the default availability if no co-hosts are selected
        url.searchParams.delete("co_hosts");
      }

      // Updating the src triggers an automatic reload of the iframe content
      iframe.src = url.toString();
    }

    // Attach change listeners to all selection inputs
    checkboxes.forEach((cb) => cb.addEventListener("change", refreshCalendar));
  })();
</script>
```

> **Tip:** Ensure the custom script is placed after the OnceHub embed script to ensure the target container is available in the DOM.

## How It Works

1. **Capture Base State:** The script identifies the OnceHub iframe and saves its initial URL.
2. **Filter Logic:** When a user toggles a checkbox, the script aggregates the selected email addresses.
3. **URL Update:** The `co_hosts` query parameter is appended to the iframe URL, triggering an automatic refresh of the calendar with filtered availability.

## Tips

- **Case Sensitivity:** Ensure checkbox `value` attributes exactly match the OnceHub user's email address. If the case or spelling is incorrect, the `co_hosts` parameter will be ignored.
- **Asynchronous Loading:** Because the OnceHub script injects the iframe asynchronously, the script includes a safety check (if (!iframe)) to ensure the calendar is present before attempting an update.
- **URL Integrity:** The script uses a `baseIframeSrc` variable to store the original URL. This prevents query parameters from "stacking" or duplicating during multiple selections.
- **Availability Logic:** Selecting multiple `co_hosts` will only display time slots where all chosen team members are simultaneously free.

---

See also:

- [Embedding a calendar](../client-side-api/embedded-booking-calendar-events.md)
