# Product Badge Plugin

This Scalar plugin displays visual badges on schema properties to indicate which product they belong to.

**Location:** `src/plugins/ProductBadgePlugin.js`

## Features

- **Booking Calendars Only** badge (green) for properties exclusive to Booking Calendars
- **Booking Pages Only** badge (orange) for properties exclusive to Booking Pages (Classic)
- Automatically rendered next to property names in the API reference

## Usage

### In OpenAPI Schemas

Add the `x-product` extension to any property that is product-specific:

```yaml
properties:
  ics_url:
    x-product: booking-calendars
    type: string
    description: URL to download an ICS calendar file

  master_page:
    x-product: booking-pages
    type: string
    description: ID of the master page

  event_type:
    x-product: booking-pages
    type: string
    description: ID of the event type
```

### Supported Values

- `booking-calendars` - Shows green "Booking Calendars Only" badge
- `booking-pages` - Shows orange "Booking Pages Only" badge

Properties without the `x-product` extension are considered shared between both products.

## Current Implementation

The plugin is currently applied to the following fields in the `Booking` schema:

### Booking Calendars Only

- `ics_url` - Direct URL to download ICS calendar file
- `booking_calendar` - ID of the booking calendar
- `cancel_url` - URL for canceling the booking
- `reschedule_url` - URL for rescheduling the booking

### Booking Pages Only

- `booking_page` - Reference to booking page
- `master_page` - Reference to master page
- `event_type` - Reference to event type

## Adding More Product-Specific Fields

To mark additional fields as product-specific:

1. Open the relevant schema file in `openapi/components/schemas/`
2. Add `x-product: booking-calendars` or `x-product: booking-pages` to the property
3. Rebuild the OpenAPI variants: `npm run openapi:build-variants`
4. The badge will automatically appear in the API reference

## Plugin Configuration

The plugin is configured in `docusaurus.config.ts` for both API reference instances:

```javascript
const { ProductBadgePlugin } = require("./src/plugins/ProductBadgePlugin.js");

// In Scalar configuration
configuration: {
  spec: { url: "/booking-calendars-api.yaml" },
  plugins: [ProductBadgePlugin()],
}
```

## Customization

To customize the badge appearance, edit `src/plugins/ProductBadgePlugin.js`:

```javascript
const getProductConfig = (product) => {
  switch (product?.toLowerCase()) {
    case "booking-calendars":
      return {
        label: "Booking Calendars Only",
        color: "#10B981", // Badge text color
        bgColor: "#D1FAE5", // Badge background color
      };
    // ...
  }
};
```
