---
title: MCP Server Tools
description: Reference documentation for all MCP Server tools including getting available time slots, scheduling meetings, managing calendars, and more.
---

# MCP Server Tools

The MCP Server exposes a set of tools that follow the same logic and rules as the existing OnceHub Booking API, but are accessed through the standardized MCP layer. All 12 tools are listed below:

### 1. Get Available Time Slots

The "Get available time slots" (`get_booking_time_slots`) tool allows an AI assistant to retrieve a list of bookable times for a specific Booking Calendar.

- **Function:** Retrieves a list of valid bookable time slots within a specified date range.
- **How It Works:** The tool queries your Booking Calendar's configuration to identify valid available time slots. It respects all supported scheduling settings found on the Booking Settings tab, including Availability, Busy times from connected calendar, and Buffer settings.

:::note
The only exception to the Booking Settings tab is Bookable days; instead, the search window is determined by the specific date range provided in the tool request.
:::

- **Usage:** Use this tool to be the first step in a conversational booking process. Use this tool when a user wants to find or choose from open slots (e.g., "Find me a time slot next Tuesday morning.").

### 2. Schedule A Meeting

The "Schedule a meeting" (`schedule_meeting`) tool allows an AI assistant to book a specific time slot on a Booking Calendar.

- **Function:** Creates a new booking on a Booking Calendar at a time selected from the available slots.
- **How It Works:** Once a time slot is selected from the results of "Get available time slots"; this tool creates the booking using the provided Guest name, Guest email, Selected Date (Format: YYYY-MM-DDTHH:MM:SSZ), Start Time (ISO 8601 format), Time Zone (IANA format), and matching Location details.
- **Usage:** Use this tool after presenting time options and receiving user confirmation to finalize and book the appointment (e.g., "Great, please go ahead and lock in that 3 PM slot for John.").

### 3. Get My Booking Calendars

The "Get my booking calendars" (`get_my_booking_calendars`) tool allows an AI assistant to retrieve the details and names of the Booking Calendars a User has access to.

- **Function:** Returns a list of all Booking Calendars where the User is the Host or Co-Host (either directly or through a team).
- **How It Works:** The tool identifies all Booking Calendars associated with the authenticated OnceHub profile.
- **Usage:** Use this tool when a user explicitly asks about their available Booking Calendars (e.g., "Which of my booking calendars can I use for this meeting?").

### 4. Get My Booking Hubs

The "Get my booking hubs" (`get_my_booking_hubs`) tool allows an AI assistant to retrieve the details and names of the Booking Hubs a User has access to.

- **Function:** Returns a list of all Booking Hubs where the User is the owner.
- **How It Works:** It queries the user's OnceHub account for Booking Hubs (Master pages).
- **Usage:** Use this tool when a user asks to see their master pages or Booking Hubs (e.g., "List all the booking hubs I currently have.").

### 5. Get Booking Link

The "Get booking link" (`get_booking_link`) tool allows an AI assistant to retrieve direct URLs for scheduling.

- **Function:** Retrieves Booking Calendar or Booking Hub links of the User.
- **How It Works:** It returns the public-facing URL that a guest would visit to book a meeting.
- **Usage:** Use this tool when a user requests a scheduling link (e.g., "Send me the link to my 'Consultation' booking calendar so I can share it.").

### 6. Get One-Time Use Link

The "Get one-time use link" (`get_one_time_use_link`) tool allows an AI assistant to generate single-use scheduling URLs.

- **Function:** Generates a unique, single-use booking link for a specific Booking Calendar that expires after one booking.
- **How It Works:** The tool creates a temporary link. Once a guest completes a booking using this link, the URL becomes invalid.
- **Usage:** Use this tool when a user wants to ensure a specific guest can only book exactly one slot (e.g., "Can you give me a single-use link for my client so they can only schedule one session?").

### 7. Get My Upcoming Meetings

The "Get my upcoming meetings" (`get_my_upcoming_meetings`) tool allows an AI assistant to retrieve visibility into the user's schedule.

- **Function:** Retrieves a list of all upcoming scheduled meetings.
- **How It Works:** It searches the user's account for all confirmed bookings from the current time onward.
- **Usage:** Use this tool when a user asks about their schedule (e.g., "Do I have anything scheduled for tomorrow morning?" or "When is my next meeting?").

### 8. Cancel Meeting

The "Cancel meeting" (`cancel_meeting`) tool allows an AI assistant to immediately cancel a scheduled event.

- **Function:** Cancels a scheduled meeting.
- **How It Works:** The AI assistant sends the Meeting ID to the server to process the cancellation across all integrated systems. The tool removes the event from OnceHub as well as both the host's and guest's connected calendars, and releases the time slot.
- **Usage:** Use this tool when a user requests to cancel an active meeting (e.g., "I can't make it to my 3 PM meeting today; please cancel it.").

### 9. Request Guest to Reschedule

The "Request guest to reschedule" (`request_guest_to_reschedule`) tool allows an AI assistant to manage the cancellation and re-booking request in one step.

- **Function:** Cancels the current meeting and sends a reschedule request notification to a guest to select a new time.
- **How It Works:** It marks the current meeting as canceled and automatically triggers an email to the guest containing a booking link to pick a new time slot.
- **Usage:** Use this tool when a user needs to move a meeting but wants the guest to select the new time (e.g., "Ask John to reschedule our meeting for next week.").

### 10. Update My Date-Specific Availability

The "Update my date-specific availability" (`update_my_date_specific_availability`) tool allows an AI assistant to modify the user's working hours for specific dates.

- **Function:** Updates the Date-Specific Override of the User's profile availability (not the individual Booking Calendar).
- **How It Works:** It applies a "Date-Specific Override" to the User's Profile. These changes automatically sync across any Booking Calendars that are set to use the user's profile availability, ensuring consistency across those specific scheduling links.
- **Usage:** Use this tool when a user requests an immediate modification to their availability on a specific date (e.g., "I'm going to be out of the office this Friday.").

### 11. Mark Meeting as No-Show

The "Mark meeting as no-show" (`mark_meeting_as_no_show`) tool allows an AI assistant to manage post-meeting status.

- **Function:** Updates a past meeting status to No-show.
- **How It Works:** The tool updates the record of a completed or past-due meeting to reflect that the guest was a no-show.
- **Usage:** Use this tool when a user updates a client's historical attendance details (e.g., "The client didn't show up for our 10 AM call; mark them as a no-show.").

### 12. Get My Working Hours

The "Get my working hours" (`get_my_working_hours`) tool allows an AI assistant to retrieve the User's current availability.

- **Function:** Retrieves the user's current availability, combining the regular weekly schedule and any date-specific adjustments.
- **How It Works:** It aggregates the User's usual weekly working hours and updates any applied date-specific overrides.
- **Usage:** Use this tool when a user asks about their upcoming working time blocks (e.g., "What does my availability look like for the next 7 days?").
