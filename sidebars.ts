import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Single unified sidebar for all documentation
 * The docs are shared between Booking Calendars and Booking Pages products
 * Product separation is handled at the API Reference level only
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: "category",
      label: "Overview",
      link: {
        type: "doc",
        id: "overview/introduction",
      },
      items: [
        "overview/authentication",
        "overview/api-versioning",
        "overview/rate-limits",
        "overview/pagination",
        "overview/expanding-responses",
        "overview/deleted-resources",
        "overview/error-handling",
        "overview/request-ids",
      ],
    },
    {
      type: "category",
      label: "Webhooks",
      link: { type: "doc", id: "webhooks/introduction-to-webhooks" },
      items: [
        "webhooks/managing-webhook-subscriptions",
        "webhooks/using-webhooks",
        "webhooks/webhook-signatures",
      ],
    },
    {
      type: "category",
      label: "Client-Side API",
      link: { type: "doc", id: "client-side-api/introduction" },
      items: [
        "client-side-api/embed-events",
        "client-side-api/embedded-booking-calendar-events",
        "client-side-api/collecting-data-from-embedded-booking-page",
        "client-side-api/embedded-chatbot-events",
        "client-side-api/embedded-form-events",
        "client-side-api/redirecting-booking-confirmation-data",
      ],
    },
    {
      type: "category",
      label: "MCP Server",
      link: { type: "doc", id: "mcp-server/introduction" },
      items: ["mcp-server/getting-started", "mcp-server/tools"],
    },
    {
      type: "category",
      label: "Recipes",
      link: { type: "doc", id: "recipes/fetch-bookings-periodically" },
      items: [],
    },
    {
      type: "doc",
      id: "faq",
      label: "FAQ",
    },
  ],
};

export default sidebars;
