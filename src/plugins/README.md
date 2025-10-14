# Product Badge Plugin

This Docusaurus plugin displays visual badges on API documentation to indicate which product features belong to.

**Location:** `src/plugins/productBadgePlugin.js`

## Features

- **Booking Calendars Only** badge (teal) for properties exclusive to Booking Calendars
- **Booking Pages Only** badge (orange) for properties exclusive to Booking Pages (Classic)
- Automatically styled via client-side JavaScript when pages load
- Responsive to theme changes (light/dark mode)

## How It Works

The plugin uses **text-based detection** to find and style badge text in the API documentation. It scans for specific text patterns and applies CSS classes to create visual badges.

### Badge Text Format

Add badge text directly in OpenAPI descriptions using this format:

```yaml
properties:
  ics_url:
    type: string
    description: |
      **BOOKING CALENDARS ONLY**

      URL to download an ICS calendar file for this booking.

  master_page:
    type: object
    description: |
      **BOOKING PAGES ONLY**

      Reference to the master page used to create this booking.
```

### Query Parameters

For query parameters, add the badge at the beginning of the description:

```yaml
parameters:
  - name: booking_calendar
    in: query
    description: |
      **BOOKING CALENDARS ONLY**

      Only return bookings from a specific booking calendar.
    schema:
      type: string
```

## Supported Badge Text

- `**BOOKING CALENDARS ONLY**` - Shows teal badge with dark text
- `**BOOKING PAGES ONLY**` - Shows orange badge with dark text

## Current Implementation

The plugin is currently applied to the following fields:

### Booking Schema Properties

**Booking Calendars Only:**

- `ics_url` - Direct URL to download ICS calendar file
- `booking_calendar` - Reference to booking calendar
- `cancel_url` - URL for canceling the booking
- `reschedule_url` - URL for rescheduling the booking

**Booking Pages Only:**

- `booking_page` - Reference to booking page
- `master_page` - Reference to master page
- `event_type` - Reference to event type

### Query Parameters (List Bookings)

**Booking Calendars Only:**

- `booking_calendar` - Filter by booking calendar ID
- `host` - Filter by host user ID

**Booking Pages Only:**

- `booking_page` - Filter by booking page ID
- `master_page` - Filter by master page ID
- `event_type` - Filter by event type ID

## Adding More Product-Specific Fields

To add badges to new fields:

1. **Add badge text** to the description in the OpenAPI schema:

   ```yaml
   description: |
     **BOOKING CALENDARS ONLY**

     Your field description here.
   ```

2. **Add x-product extension** (for filtering in product variants):

   ```yaml
   x-product: booking-calendars # or booking-pages
   ```

3. **Rebuild API variants:**

   ```bash
   npm run openapi:build-variants
   ```

4. The badge will automatically be styled when the page loads.

## Plugin Configuration

The plugin is configured in `docusaurus.config.ts`:

```javascript
plugins: [
  "./src/plugins/productBadgePlugin.js",
  // ... other plugins
];
```

## Technical Details

- **Detection:** Scans for `<strong>` elements containing badge text
- **Styling:** Applies CSS classes via JavaScript
- **Timing:** Runs on page load, route changes, and periodically for async content
- **Themes:** Supports both light and dark themes with optimized contrast
- **Logging:** Uses `console.debug()` for quiet operation
