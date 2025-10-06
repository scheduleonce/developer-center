import { themes as prismThemes } from "prism-react-renderer";
import { visit } from "unist-util-visit";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "My Site",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  // Use environment variable to determine deployment target
  url: process.env.DOCUSAURUS_URL || "https://developers.oncehub.com", // Default to production
  // Set the /<baseUrl>/ pathname under which your site is served
  // For Azure Static Web Apps, use root path
  baseUrl: "/", // Root path for Azure Static Web App

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "scheduleonce", // GitHub org/user
  projectName: "developer-center", // Repo name
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  trailingSlash: true,

  presets: [
    [
      "classic",
      {
        docs: false, // Disable default docs, we'll use multiple instances
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    // Booking Calendars Documentation (current/recommended product)
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "booking-calendars",
        path: "docs",
        routeBasePath: "docs/booking-calendars",
        sidebarPath: "./sidebars.ts",
        editUrl:
          "https://github.com/scheduleonce/developer-center/tree/main/",
        remarkPlugins: [
          function legacyImage() {
            return (tree: any) => {
              visit(tree, (node: any) => {
                if (
                  node.type === "mdxJsxFlowElement" &&
                  node.name === "Image"
                ) {
                  const srcAttr = node.attributes?.find(
                    (a: any) => a.name === "src"
                  );
                  if (srcAttr) {
                    const altAttr = node.attributes?.find(
                      (a: any) => a.name === "alt"
                    );
                    const titleAttr = node.attributes?.find(
                      (a: any) => a.name === "title"
                    );
                    node.type = "image";
                    node.url = srcAttr.value;
                    node.alt = String(altAttr?.value || "");
                    node.title = titleAttr?.value;
                    delete node.name;
                    delete node.attributes;
                  }
                }
              });
            };
          },
        ],
      },
    ],
    // Booking Pages Documentation (legacy product)
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "booking-pages",
        path: "docs",
        routeBasePath: "docs/booking-pages",
        sidebarPath: "./sidebars.ts",
        editUrl:
          "https://github.com/scheduleonce/developer-center/tree/main/",
        remarkPlugins: [
          function legacyImage() {
            return (tree: any) => {
              visit(tree, (node: any) => {
                if (
                  node.type === "mdxJsxFlowElement" &&
                  node.name === "Image"
                ) {
                  const srcAttr = node.attributes?.find(
                    (a: any) => a.name === "src"
                  );
                  if (srcAttr) {
                    const altAttr = node.attributes?.find(
                      (a: any) => a.name === "alt"
                    );
                    const titleAttr = node.attributes?.find(
                      (a: any) => a.name === "title"
                    );
                    node.type = "image";
                    node.url = srcAttr.value;
                    node.alt = String(altAttr?.value || "");
                    node.title = titleAttr?.value;
                    delete node.name;
                    delete node.attributes;
                  }
                }
              });
            };
          },
        ],
      },
    ],
    // Booking Calendars API Reference
    [
      "@scalar/docusaurus",
      {
        id: "booking-calendars-api",
        label: "Booking Calendars API",
        route: "/reference/booking-calendars",
        showNavLink: false,
        configuration: {
          spec: {
            url: "/booking-calendars-api.yaml",
          },
          hideDownloadButton: true,
          hideDarkModeToggle: true,
          theme: "alternate",
        },
      },
    ],
    // Booking Pages API Reference (legacy)
    [
      "@scalar/docusaurus",
      {
        id: "booking-pages-api",
        label: "Booking Pages API",
        route: "/reference/booking-pages",
        showNavLink: false,
        configuration: {
          spec: {
            url: "/booking-pages-api.yaml",
          },
          hideDownloadButton: true,
          hideDarkModeToggle: true,
          theme: "alternate",
        },
      },
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: "/img/docusaurus-social-card.jpg",
    navbar: {
      title: "", // Remove title to make logo more prominent
      logo: {
        alt: "OnceHub Developer Center",
        src: "/img/logo-small.png",
        href: "/", // Make logo clickable to home
        target: "_self",
        height: 32, // Set height, let width scale proportionally
      },
      items: [
        {
          type: "dropdown",
          label: "Docs",
          position: "left",
          items: [
            {
              to: "/docs/booking-calendars/shared/overview/introduction",
              label: "Booking Calendars",
            },
            {
              to: "/docs/booking-pages/shared/overview/introduction",
              label: "Booking Pages (Legacy)",
            },
          ],
        },
        {
          type: "dropdown",
          label: "API Reference",
          position: "left",
          items: [
            {
              to: "/reference/booking-calendars/",
              label: "Booking Calendars API",
            },
            {
              to: "/reference/booking-pages/",
              label: "Booking Pages API (Legacy)",
            },
          ],
        },
        {
          href: "https://github.com/scheduleonce/developer-center",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Booking Calendars",
              to: "/docs/booking-calendars/shared/overview/introduction",
            },
            {
              label: "Booking Pages (Legacy)",
              to: "/docs/booking-pages/shared/overview/introduction",
            },
          ],
        },
        {
          title: "API",
          items: [
            {
              label: "Booking Calendars API",
              to: "/reference/booking-calendars/",
            },
            {
              label: "Booking Pages API",
              to: "/reference/booking-pages/",
            },
            {
              label: "Webhooks",
              to: "/docs/booking-calendars/shared/webhooks/introduction-to-webhooks/",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Developer Support",
              to: "/docs/booking-calendars/shared/developer-support/frequently-asked-questions/",
            },
            {
              label: "Contact Us",
              to: "/docs/booking-calendars/shared/developer-support/contact-us/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OnceHub. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
