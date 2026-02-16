---
sidebar_position: 1
title: Overview
description: Learn how to integrate with the OnceHub REST API to access booking data, manage calendars, and automate scheduling workflows.
---

## OnceHub Developer Center

[**The OnceHub Developer Center**](https://developers.oncehub.com/) provides tools and APIs for integrating OnceHub scheduling and booking capabilities into your websites, business workflows and AI agents. Our platform is designed for everyone who wants to build robust integrations that securely access booking data, manage scheduling and automate complex workflows using server-side **REST APIs**, **client-side APIs**, and **Model Context Protocol (MCP)** integrations.

## Integration Options

OnceHub offers a variety of integration approaches. Users can select the method that best aligns with their specific use case and technical environment:

- **Server-Side REST APIs:** Best for synchronizing booking data, managing scheduling resources, and automating backend workflows following REST principles.
- **Webhooks:** Essential for receiving real-time, event-driven notifications for bookings, updates, and cancellation events to keep your external systems perfectly synchronized.
- **Client-Side APIs:** Use these to embed OnceHub interfaces directly into web applications and interact with them using client-side event listeners. This approach supports capturing real-time events for chatbots, routing forms and booking pages.
- **URL Parameters & Embedding:** A powerful mechanism to **fetch data from** (pre-filling booking forms) or **pass information to** redirect parameters after a booking is completed.
- **MCP Server:** Designed for integrating OnceHub into Model Context Protocol (MCP) environments for AI-driven scheduling and automation workflows.

## Developer Center Structure

The OnceHub Developer Center is organized into two sections:

### Documentation

Covers shared concepts and platform standards across all integration types:

- Authentication and API keys
- Client configuration and embedded components
- URL parameter reference
- API versioning, rate limits, pagination, and error handling
- MCP integration guidelines
- Webhook event delivery and validation

### API Reference

Provides detailed endpoint documentation for OnceHub products:

- [**Booking Calendars API:**](https://developers.oncehub.com/reference/booking-calendars/) Manage bookings, Booking Calendars, webhook event types, users, teams and scheduling resources.
- [**Booking Pages API (Classic):**](https://developers.oncehub.com/reference/booking-pages/#tag/authentication) Access and manage data related to booking pages.

Each reference includes supported endpoints, parameters, authentication requirements and example responses.

## Getting Started

Select your preferred integration method to begin. Most methods require an active OnceHub account and valid API credentials.

### To Use REST API or MCP Server

1. [**Sign up**](https://account.oncehub.com/signup) for a OnceHub account if you don’t have one.
2. Create your API keys using the [**Authentication guide**](https://developers.oncehub.com/reference/booking-pages/#description/introduction).
3. Choose between Rest APIs for standard integrations or the MCP Server for AI-driven workflows.

### To Use Client-Side API

- Use the Website embed feature to publish your Booking page or Booking calendar directly on your site.
- Add a [**JavaScript function**](https://developers.oncehub.com/docs/client-side-api/embed-events/) to your embed code to collect real-time booking confirmation data or trigger custom analytics.

### To Use Webhooks

- Use the [**Webhooks API**](https://developers.oncehub.com/reference/booking-calendars/#tag/webhooks/POST/webhooks) (via POST request) to create a new subscription.
- Select specific [**event types**](https://developers.oncehub.com/reference/booking-calendars/#tag/webhook-events) (e.g., `booking.scheduled`) from the array of available booking lifecycle triggers.
- Provide a secure POST URL where OnceHub will send real-time JSON payloads whenever the defined events occur.

### To Use URL Parameters & Embedding

- Map your custom field names in the Booking Calendar's form settings to ensure data is correctly identified.
- Append parameters to your OnceHub URL to push data and pre-fill guest information in both [**Booking Forms**](https://help.oncehub.com/help/pre-filling-guest-information-in-your-booking-calendar) and [**Routing Forms**](https://help.oncehub.com/help/embedding-your-routing-form-on-your-website) for a frictionless scheduling experience.
- [**Configure a redirect page**](https://developers.oncehub.com/docs/client-side-api/redirecting-booking-confirmation-data/) to automatically capture system-generated data and submission data via URL parameters upon booking completion.
