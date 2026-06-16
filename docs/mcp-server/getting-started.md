---
title: Getting Started with OnceHub Platform MCP Server
description: Step-by-step guide to configure your AI client with the OnceHub Platform MCP Server for automated meeting scheduling and booking management.
---

# Getting Started with the OnceHub Platform MCP Server

The OnceHub Platform MCP Server enables AI Assistants to interact directly with your OnceHub scheduling environment using the Model Context Protocol (MCP). Through natural-language conversations, AI Assistants can retrieve availability, schedule meetings, manage bookings, generate booking links, and update availability on your behalf.

## Before You Begin

To use the OnceHub Platform MCP Server, you will need:

- A valid OnceHub API Key
- An MCP compatible AI client

## Step 1: Generate an API Key

1. Sign in to your OnceHub account.
2. Click the gear icon in the top-right corner.
3. Select **Account Integrations**.
4. Open **APIs & Webhooks**.
5. Generate a new API Key.

Your API Key is used to authenticate requests to the MCP Server.

:::important
Store your API Key securely. OnceHub displays API keys only when they are generated and cannot retrieve them later.
:::

## Step 2: Configure Your MCP Client

Configure your MCP-compatible AI client to connect to the OnceHub Platform MCP Server endpoint:

```
https://mcp.oncehub.com/sse
```

Example configuration:

```json
{
  "servers": {
    "oncehub": {
      "url": "https://mcp.oncehub.com/sse",
      "type": "http",
      "headers": {
        "authorization": "Bearer YOUR_ONCEHUB_API_KEY"
      }
    }
  }
}
```

Replace `YOUR_ONCEHUB_API_KEY` with your actual OnceHub API Key.

For more information about API keys and authentication, see [Authentication](/docs/overview/authentication).

## Step 3: Connect to the OnceHub MCP Server

After configuring your MCP client, restart or reload the application if required.

Once connected, your AI Assistant can discover and invoke available OnceHub MCP tools automatically. These tools provide access to scheduling, booking management, availability management, and booking link workflows.

## Step 4: Start Using MCP Tools

The OnceHub Platform MCP Server provides 12 tools that enable AI Assistants to:

- Retrieve available meeting times
- Schedule meetings
- View and manage upcoming meetings
- Cancel meetings
- Request guest rescheduling
- Generate booking links
- Generate one-time-use links
- View Booking Calendars
- View Booking Hubs
- Manage date-specific availability
- Mark meetings as no-shows
- Review working hours

For a complete description of each tool, see [MCP Server Tools](/docs/mcp-server/tools).

## Example Prompts

Once connected, you can interact with your AI Assistant using natural language:

- "Show me available time slots next Tuesday."
- "Schedule a meeting with John Smith tomorrow at 2 PM."
- "What meetings do I have this week?"
- "Generate a one-time booking link for a client."
- "Ask Sarah to reschedule our meeting."
- "Block my availability this Friday."

## Prompting Tip

If your AI Assistant should schedule meetings using a specific Booking Calendar, include the Booking Calendar ID in your system instructions.

For example:

> If the user needs to schedule a consultation, use the OnceHub MCP scheduling tools with Booking Calendar ID: BKC-XXXXXXXX.

Alternatively, your AI Assistant can use the available MCP tools to retrieve and identify Booking Calendars dynamically before scheduling.
