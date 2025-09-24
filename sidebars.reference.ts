import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// Initial reference sidebar; will be expanded after conversion
const sidebars: SidebarsConfig = {
  reference: [
    {
      type: "category",
      label: "Bookings",
      link: {
        type: "generated-index",
        title: "Bookings",
        description: "Booking object model & related endpoints",
      },
      items: [
        "bookings/the-booking-object",
        "bookings/list-all-bookings",
        "bookings/get-a-single-booking",
        "bookings/cancel-booking",
        "bookings/request-reschedule",
        "bookings/no-show",
      ],
    },
    {
      type: "category",
      label: "Booking Calendars",
      link: {
        type: "generated-index",
        title: "Booking Calendars",
        description: "Manage booking calendars & availability",
      },
      items: [
        "booking-calendars/the-booking-calendar-object",
        "booking-calendars/list-all-booking-calendars",
        "booking-calendars/get-a-single-booking-calendar",
        "booking-calendars/get-available-time-slots-for-booking-calendar",
        "booking-calendars/book-a-time-slot-for-a-booking-calendar",
        "booking-calendars/booking-calendars-create-a-one-time-link",
      ],
    },
    {
      type: "category",
      label: "Booking Pages",
      link: {
        type: "generated-index",
        title: "Booking Pages",
        description: "Booking page objects & retrieval",
      },
      items: [
        "booking-pages/the-booking-page-object",
        "booking-pages/list-all-booking-pages",
        "booking-pages/get-a-single-booking-page",
      ],
    },
    {
      type: "category",
      label: "Users",
      link: {
        type: "generated-index",
        title: "Users",
        description: "User object & availability endpoints",
      },
      items: [
        "users/the-user-object",
        "users/list-all-users",
        "users/get-a-single-user",
        "users/delete-a-user",
        "users/the-scheduling-availability-object",
        "users/get-scheduling-availability",
        "users/update-scheduling-availability",
      ],
    },
    {
      type: "category",
      label: "Contacts",
      link: {
        type: "generated-index",
        title: "Contacts",
        description: "Contact object and management endpoints",
      },
      items: [
        "contacts/the-contact-object",
        "contacts/list-all-contacts",
        "contacts/get-a-single-contact",
        "contacts/delete-a-contact",
      ],
    },
    {
      type: "category",
      label: "Webhooks",
      link: {
        type: "generated-index",
        title: "Webhooks",
        description: "Webhook events & management",
      },
      items: [
        "webhooks/the-webhook-object",
        "webhooks/the-event-object",
        "webhooks/event-triggers",
        "webhooks/list-all-webhooks",
        "webhooks/get-a-single-webhook",
        "webhooks/create-a-webhook",
        "webhooks/delete-a-webhook",
        "webhooks/responding-to-a-webhook-request",
      ],
    },
    {
      type: "category",
      label: "Teams",
      link: {
        type: "generated-index",
        title: "Teams",
        description: "Team object & management",
      },
      items: [
        "teams/the-team-object",
        "teams/list-all-teams",
        "teams/get-a-single-team",
      ],
    },
    {
      type: "category",
      label: "Introduction",
      link: {
        type: "generated-index",
        title: "API Concepts",
        description: "Core API concepts & conventions",
      },
      items: [
        "introduction/introduction",
        "introduction/authentication/index",
        "introduction/authentication/validate-api-key",
        "introduction/errors",
        "introduction/pagination",
        "introduction/expanding-responses",
        "introduction/deleted-resources",
        "introduction/requesd-ids",
        "introduction/versioning",
      ],
    },
    {
      type: "category",
      label: "Client-side API",
      link: {
        type: "generated-index",
        title: "Client-side API",
        description: "Embedded widget events",
      },
      items: [
        "client-side-api/embedded-booking-calendar-events",
        "client-side-api/embed-events",
        "client-side-api/embedded-chatbot-events",
        "client-side-api/embedded-form-events",
      ],
    },
    {
      type: "category",
      label: "OnceHub",
      link: {
        type: "generated-index",
        title: "OnceHub Platform",
        description: "Getting started platform guides",
      },
      items: ["oncehub/getting-started-with-your-api"],
    },
    {
      type: "category",
      label: "ReadMe Config",
      link: {
        type: "generated-index",
        title: "ReadMe Config",
        description: "Legacy reference config docs",
      },
      items: [
        "readmeconfig/getting-started",
        "readmeconfig/intro-authentication",
        "readmeconfig/my-requests",
      ],
    },
    {
      type: "category",
      label: "Conversations",
      link: {
        type: "generated-index",
        title: "Conversations",
        description: "Conversation object",
      },
      items: ["conversations/the-conversation-object"],
    },
    {
      type: "category",
      label: "Event Types",
      link: {
        type: "generated-index",
        title: "Event Types",
        description: "Event type object & listing",
      },
      items: [
        "event-types/the-event-type-object",
        "event-types/list-all-event-types",
        "event-types/get-a-single-event-type",
      ],
    },
  ],
};

export default sidebars;
