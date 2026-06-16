---
id: introduction
title: Introduction to the OnceHub Platform MCP Server
description: Learn how the OnceHub Platform MCP Server enables AI Assistants to interact directly with OnceHub scheduling workflows using the Model Context Protocol (MCP).
---

# Introduction to the OnceHub Platform MCP Server

The OnceHub Platform MCP Server enables AI Assistants to interact directly with OnceHub scheduling workflows using the Model Context Protocol (MCP).

Instead of directing users to a booking page and requiring them to schedule manually, AI Assistants can interact directly with OnceHub scheduling workflows through MCP tools.

This enables AI Assistants to retrieve availability, schedule meetings, manage bookings, generate booking links, and update availability through natural-language conversations.

The OnceHub Platform MCP Server provides a standardized interface on top of OnceHub's existing scheduling APIs, allowing MCP-compatible AI clients to securely access OnceHub scheduling capabilities without requiring custom integrations.

## Key Capabilities

The OnceHub Platform MCP Server enables AI Assistants to:

- Discover availability
- Schedule and manage meetings
- Generate booking links
- Manage user availability
- Access Booking Calendars and Booking Hubs
- Update meeting statuses

These capabilities are exposed through MCP tools that AI Assistants can invoke as needed during a conversation.

## Common Use Cases

The OnceHub Platform MCP Server is ideal for organizations that want to:

- Schedule meetings through AI-powered conversations
- Manage cancellations and rescheduling requests
- Provide conversational access to availability and scheduling information
- Integrate OnceHub scheduling into AI-driven workflows and applications

## Primary Endpoint

MCP-compatible AI Assistants communicate with the OnceHub Platform MCP Server using the public endpoint below:

```
https://mcp.oncehub.com/sse
```

You must configure this endpoint in your MCP-compatible AI Assistant and authenticate using a valid OnceHub API Key before invoking MCP tools.
