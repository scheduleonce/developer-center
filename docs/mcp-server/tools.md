---
title: MCP Server Tools
description: Reference documentation for the Get available time slots and Schedule a meeting tools.
---

# MCP Server Tools

The OnceHub Platform MCP Server exposes a standardized set of tools that allow AI Agents to interact with the OnceHub Booking API. These tools follow the same logic and scheduling rules as configured in your OnceHub account.

## 1. Get Available Time Slots

The **Get available time slots** (`get_booking_time_slots`) tool allows an AI Agent to retrieve a list of valid, bookable time slots for a specific Booking Calendar within a defined date range.

### How It Works

The tool queries the specified Booking Calendar's configuration and respects all active scheduling settings found on the **Booking Settings** tab, including:

- Availability
- Busy times from connected calendar
- Buffer settings

:::note
The only exception to the Booking Settings tab is Bookable days. Instead, the search window is strictly determined by the `start_time` and `end_time` parameters provided in the tool request.
:::

### Date Range Rules

- **Maximum Range**: The duration between the start and end time must be less than or equal to 30 days.
- **Default Range**: If no range is provided, the tool searches the next 7 days by default.
- **Validation**: The start date cannot be in the past, and the `end_time` must not be earlier than the `start_time`.

### Parameters

- `calendar_id` (string, required): The unique Booking Calendar ID (for example, `BKC-XXXXXXXXXX`).
- `start_time` (string, optional): Filter slots from this datetime in ISO 8601 format (for example, `2026-02-15T09:00:00Z`).
- `end_time` (string, optional): Filter slots until this datetime in ISO 8601 format (for example, `2026-02-28T17:00:00Z`).
- `timeout` (integer, optional): Request timeout in seconds. Default: 30.

### Example Response

```json
{
  "success": true,
  "status_code": 200,
  "calendar_id": "BKC-XXXXXXXXXX",
  "total_slots": 5,
  "data": [
    {
      "start_time": "2026-02-10T10:00:00Z",
      "end_time": "2026-02-10T11:00:00Z"
    },
    {
      "start_time": "2026-02-10T14:00:00Z",
      "end_time": "2026-02-10T15:00:00Z"
    }
  ]
}
```

### AI Agent Usage

This tool serves as the first step in a conversational booking process.

- **User prompt**: "Find me a time slot next Tuesday morning."

- **Agent action**: The AI Agent calls the `get_booking_time_slots` tool to retrieve available times for the user to choose from.

## 2. Schedule A Meeting

The **Schedule a meeting** (`schedule_meeting`) tool allows an AI Agent to book a specific time slot on a Booking Calendar using details provided by the user.

### How It Works

After a user selects a time slot from the results of **Get available time slots**, the AI Agent should call this tool to pass the guest details, target slot time, and finalize the booking. Use this tool only after a valid slot has been returned by the availability tool.

### Parameters

- `calendar_id` (string, required): ID of the Booking Calendar (for example, `BKC-XXXXXXXXXX`).
- `start_time` (string, required): The exact start time chosen from the available slots in ISO 8601 format (for example, `2026-02-10T10:00:00Z`).
- `guest_time_zone` (string, required): The guest's timezone in IANA format (for example, `America/New_York` or `Europe/London`).
- `guest_name` (string, required): The guest's full name.
- `guest_email` (string, required): The guest's email address for confirmation notifications.
- `guest_phone` (string, optional): The guest's phone number in E.164 format (for example, `+15551234567`).
- `location_type` (string, optional): The meeting mode. Supported values include `virtual`, `virtual_static`, `physical`, and `guest_phone`.
- `location_value` (string, optional): Location details based on the selected `location_type` (for example, a URL for `virtual`, a physical address for `physical`).
- `custom_fields` (object, optional): Key-value pairs representing custom form fields (for example, `{"company": "Acme", "interests": ["Demo"]}`).
- `timeout` (integer, optional): Request timeout in seconds. Default: 30.

### Example Response

```json
{
  "success": true,
  "status_code": 200,
  "booking_id": "BKG-123456789",
  "confirmation": {
    "guest_name": "John Doe",
    "guest_email": "john@example.com",
    "scheduled_time": "2026-02-10T10:00:00Z",
    "timezone": "America/New_York"
  }
}
```

### AI Agent Usage

This tool serves as the final step in the booking workflow.

- **User prompt**: "That 10:00 AM slot works perfectly. Let's book it."

- **Agent action**: The AI Agent collects any missing required details, such as the guest name and email, and calls the `schedule_meeting` tool to confirm the appointment.
