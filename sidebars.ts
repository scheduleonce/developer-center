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
        "overview/introduction",
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
        "webhooks/introduction-to-webhooks",
        "webhooks/managing-webhook-subscriptions",
        "webhooks/using-webhooks",
        "webhooks/webhook-signatures",
      ],
    },
    {
      type: "category",
      label: "Recipes",
      link: { type: "doc", id: "recipes/fetch-bookings-periodically" },
      items: ["recipes/fetch-bookings-periodically"],
    },
    {
      type: "category",
      label: "Developer Support",
      link: {
        type: "doc",
        id: "developer-support/frequently-asked-questions",
      },
      items: [
        "developer-support/frequently-asked-questions",
        "developer-support/developer-terms-of-service",
        "developer-support/contact-us",
      ],
    },
  ],
};

export default sidebars;
