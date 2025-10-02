import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docs: [
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
        "overview/error-handling",
        "overview/expanding-responses",
        "overview/pagination",
        "overview/request-ids",
        "overview/api-versioning",
        "overview/deleted-resources",
      ],
    },
    {
      type: "category",
      label: "Webhooks",
      link: { type: "doc", id: "webhooks/introduction-to-webhooks" },
      items: [
        "webhooks/introduction-to-webhooks",
        "webhooks/using-webhooks",
        "webhooks/managing-webhook-subscriptions",
        "webhooks/webhook-signatures",
      ],
    },
    {
      type: "category",
      label: "Developer Support",
      link: { type: "doc", id: "developer-support/frequently-asked-questions" },
      items: [
        "developer-support/frequently-asked-questions",
        "developer-support/developer-terms-of-service",
        "developer-support/contact-us",
      ],
    },
    {
      type: "category",
      label: "Recipes",
      link: { type: "doc", id: "recipes/fetch-bookings-periodically" },
      items: ["recipes/fetch-bookings-periodically"],
    },
  ],
};

export default sidebars;
