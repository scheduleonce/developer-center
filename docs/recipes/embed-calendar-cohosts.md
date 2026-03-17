---
id: embed-calendar-cohosts
title: Embed calendar with co-host selection
description: Add checkboxes that update an embedded OnceHub calendar to include co-hosts.
slug: /recipes/embed-calendar-cohosts/
---

# Embed Calendar With Co‑Host Selection

This recipe shows how to add a list of checkboxes to your page and dynamically update OnceHub Booking Calendar iframe with a `co_hosts` query parameter based on the selections. It’s useful when you want visitors to pick one or more team members and only show availability for the chosen co‑hosts.

## Prerequisites

- A booking page created in OnceHub.
- Basic familiarity with HTML and vanilla JavaScript.
- The standard OnceHub embed script included on your page.

## Example HTML

Below is a minimal HTML page that embeds a calendar and presents a pair of checkboxes for two team members. The JavaScript watches for changes and rebuilds the iframe URL accordingly.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Team Calendar</title>
    <style>
      .hidden {
        display: none;
      }
    </style>
  </head>
  <body>
    <div id="oncehub-container-wrapper">
      <div id="oncehub-target-div"></div>
    </div>

    <label>
      <input type="checkbox" class="team-checkbox" value="user1@example.com" />
      User 1
    </label>
    <label>
      <input type="checkbox" class="team-checkbox" value="user2@example.com" />
      User 2
    </label>

    <div id="loading-msg" class="hidden">Loading…</div>

    <script src="https://embed.oncehub.com/calendar.js"></script>
    <script>
      document.addEventListener("DOMContentLoaded", () => {
        const checkboxes = document.querySelectorAll(".team-checkbox");
        const targetDiv = document.getElementById("oncehub-target-div");
        const loadingMsg = document.getElementById("loading-msg");

        // Variable to store the initial unmodified URL of the iframe
        let baseIframeSrc = null;

        // Function to find the iframe created by OnceHub
        function findIframe() {
          // OnceHub usually injects an iframe inside or replacing the target div
          // We look for an iframe within the wrapper or near the target div
          const wrapper = document.getElementById("oncehub-container-wrapper");
          return wrapper.querySelector("iframe");
        }

        // Function to update the URL
        function updateCalendarUrl() {
          const iframe = findIframe();

          if (!iframe) {
            console.log("Waiting for calendar widget to load...");
            return;
          }

          // Capture the base URL if we haven't yet (this is the clean URL without our params)
          if (!baseIframeSrc) {
            baseIframeSrc = iframe.src;
          }

          // Show loading indicator
          loadingMsg.classList.remove("hidden");

          // Get selected emails
          const selectedEmails = Array.from(checkboxes)
            .filter((cb) => cb.checked)
            .map((cb) => cb.value);

          let newSrc = baseIframeSrc;

          // If people are selected, append the co_hosts parameter
          if (selectedEmails.length > 0) {
            const coHostsParam = selectedEmails.join(",");

            // Check if URL already has query parameters to determine separator
            const separator = newSrc.includes("?") ? "&" : "?";
            newSrc = `${newSrc}${separator}co_hosts=${encodeURIComponent(coHostsParam)}`;
          }

          console.log("Updating iframe src to:", newSrc);

          // Update the iframe
          iframe.src = newSrc;

          // Hide loading indicator after a short delay (simulating load)
          setTimeout(() => {
            loadingMsg.classList.add("hidden");
          }, 1000);
        }

        // Attach event listeners to checkboxes
        checkboxes.forEach((cb) => {
          cb.addEventListener("change", updateCalendarUrl);
        });

        // IMPORTANT: Since the OnceHub script loads async, the iframe won't be there immediately.
        // We use a MutationObserver to watch for when the iframe is injected into the DOM.
        const observer = new MutationObserver((mutations) => {
          const iframe = findIframe();
          if (iframe && !baseIframeSrc) {
            // Iframe found! Initialize our base URL.
            baseIframeSrc = iframe.src;
            console.log("Calendar loaded. Base URL captured:", baseIframeSrc);
            // Disconnect observer as we don't need to watch anymore once we have the ref
            // (Optional: keep it if the widget destroys/recreates itself)
          }
        });

        // Start observing the wrapper for added nodes
        const wrapper = document.getElementById("oncehub-container-wrapper");
        observer.observe(wrapper, { childList: true, subtree: true });
      });
    </script>
  </body>
</html>
```

> **Note:** the JavaScript snippet above is the only custom code required; the rest of the page is standard HTML for embedding an OnceHub Booking Calendar. Place it below the embed script as shown.

## How It Works

1. When the page loads, an iframe is asynchronously injected by the OnceHub embed script.
2. The mutation observer captures the iframe’s initial `src` (without any query parameters).
3. Whenever a checkbox changes, the script rebuilds the URL with a `co_hosts` query string containing the selected emails and updates the iframe.
4. A simple loading indicator shows while the new calendar loads.

## Tips

- Use real email addresses corresponding to team members on your booking page.
- You can extend the checkbox list dynamically from an API or configuration.
- The `co_hosts` parameter accepts a comma‑separated list of emails; the script handles encoding and existing query strings automatically.

---

See also:

- [Embedding a calendar](../client-side-api/embedded-booking-calendar-events.md)
- [OnceHub API reference for co-hosts](../reference/...)
