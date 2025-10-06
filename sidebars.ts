import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Multiple Sidebars for Product Separation
 * 
 * We maintain two separate sidebars for our two products:
 * - bookingCalendarsSidebar: For the Booking Calendars product (current/recommended)
 * - bookingPagesSidebar: For the Booking Pages product (legacy)
 * 
 * Both sidebars reference the same shared content (authentication, webhooks, errors, etc.)
 * This allows us to maintain a single source of truth while presenting separate documentation
 * for each product.
 */

/**
 * Shared content items used by both products
 */
const sharedOverview = [
  "shared/overview/introduction",
  "shared/overview/authentication",
  "shared/overview/error-handling",
  "shared/overview/expanding-responses",
  "shared/overview/pagination",
  "shared/overview/request-ids",
  "shared/overview/api-versioning",
  "shared/overview/deleted-resources",
];

const sharedWebhooks = [
  "shared/webhooks/introduction-to-webhooks",
  "shared/webhooks/using-webhooks",
  "shared/webhooks/managing-webhook-subscriptions",
  "shared/webhooks/webhook-signatures",
];

const sharedDeveloperSupport = [
  "shared/developer-support/frequently-asked-questions",
  "shared/developer-support/developer-terms-of-service",
  "shared/developer-support/contact-us",
];

const sharedRecipes = [
  "shared/recipes/fetch-bookings-periodically",
];

const sidebars: SidebarsConfig = {
  /**
   * Booking Calendars Sidebar
   * For the current/recommended Booking Calendars product
   * This sidebar is used by the "booking-calendars" doc plugin instance
   */
  "booking-calendars": [
    {
      type: "category",
      label: "Overview",
      link: {
        type: "doc",
        id: "shared/overview/introduction",
      },
      items: sharedOverview,
    },
    {
      type: "category",
      label: "Webhooks",
      link: { type: "doc", id: "shared/webhooks/introduction-to-webhooks" },
      items: sharedWebhooks,
    },
    {
      type: "category",
      label: "Developer Support",
      link: { type: "doc", id: "shared/developer-support/frequently-asked-questions" },
      items: sharedDeveloperSupport,
    },
    {
      type: "category",
      label: "Recipes",
      link: { type: "doc", id: "shared/recipes/fetch-bookings-periodically" },
      items: sharedRecipes,
    },
  ],

  /**
   * Booking Pages Sidebar
   * For the legacy Booking Pages product (still supported)
   * This sidebar is used by the "booking-pages" doc plugin instance
   */
  "booking-pages": [
    {
      type: "category",
      label: "Overview",
      link: {
        type: "doc",
        id: "shared/overview/introduction",
      },
      items: sharedOverview,
    },
    {
      type: "category",
      label: "Webhooks",
      link: { type: "doc", id: "shared/webhooks/introduction-to-webhooks" },
      items: sharedWebhooks,
    },
    {
      type: "category",
      label: "Developer Support",
      link: { type: "doc", id: "shared/developer-support/frequently-asked-questions" },
      items: sharedDeveloperSupport,
    },
    {
      type: "category",
      label: "Recipes",
      link: { type: "doc", id: "shared/recipes/fetch-bookings-periodically" },
      items: sharedRecipes,
    },
  ],
};

export default sidebars;
