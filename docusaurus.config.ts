import { themes as prismThemes } from "prism-react-renderer";
import { visit } from "unist-util-visit";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "OnceHub Developer Center",
  tagline: "Build powerful scheduling integrations with OnceHub APIs",
  favicon: "img/favicon.png",

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
        docs: {
          // Single docs plugin with multiple sidebars for product separation
          path: "docs",
          routeBasePath: "docs",
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
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    // Product Badge Enhancement Plugin
    "./src/plugins/productBadgePlugin.js",
    // Booking Calendars API Reference
    [
      "@scalar/docusaurus",
      {
        id: "booking-calendars-api",
        label: "Booking Calendars",
        route: "/reference/booking-calendars",
        showNavLink: false,
        configuration: {
          url: "/booking-calendars-api.yaml",
          documentDownloadType: "original",
          hideDarkModeToggle: true,
          hideModels: true,
          theme: "alternate",
        },
      },
    ],
    // Booking Pages API Reference (Classic)
    [
      "@scalar/docusaurus",
      {
        id: "booking-pages-api",
        label: "Booking Pages",
        route: "/reference/booking-pages",
        showNavLink: false,
        configuration: {
          url: "/booking-pages-api.yaml",
          documentDownloadType: "original",
          hideDarkModeToggle: true,
          hideModels: true,
          theme: "alternate",
        },
      },
    ],
    // OnceHub v1 API Reference (Deprecated)
    [
      "@scalar/docusaurus",
      {
        id: "oncehub-v1-api",
        label: "OnceHub v1 (Deprecated)",
        route: "/reference/oncehub-v1",
        showNavLink: false,
        configuration: {
          url: "/oncehub-v1.yaml",
          documentDownloadType: "original",
          hideDarkModeToggle: true,
          hideModels: true,
          theme: "alternate",
        },
      },
    ],
    [
      "@signalwire/docusaurus-plugin-llms-txt",
      {
        ui: {
          copyPageContent: {
            buttonLabel: "Copy Page",
            display: {
              docs: true,
            },
          },
        },
      },
    ],
  ],
  themes: ["@signalwire/docusaurus-theme-llms-txt"],
  themeConfig: {
    // Replace with your project's social card
    image: "/img/docusaurus-social-card.jpg",
    algolia: {
      // The application ID provided by Algolia
      appId: "BLX1JTJWWV",
      // Public API key: it is safe to commit it
      apiKey: "42069158effaf087c1a7669a3a640f40",
      indexName: "OnceHub Developer Center",
      // Optional: see doc section below
      contextualSearch: true,
      // Optional: Algolia search parameters
      searchParameters: {},
      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: "search",
    },
    navbar: {
      title: "",
      logo: {
        alt: "OnceHub Developer Center",
        src: "/img/logo-light.png",
        srcDark: "/img/logo-dark.png",
        href: "/",
        target: "_self",
        height: 27,
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          label: "Documentation",
          position: "left",
        },
        {
          type: "dropdown",
          label: "API Reference",
          position: "left",
          items: [
            {
              to: "/reference/booking-calendars/",
              label: "Booking Calendars",
            },
            {
              to: "/reference/booking-pages/",
              label: "Booking Pages (Classic)",
            },
            {
              to: "/docs/client-side-api/introduction/",
              label: "Client Side APIs",
            },
          ],
        },
        {
          href: "https://help.oncehub.com",
          label: "Help Center",
          position: "right",
        },
        {
          href: "https://www.youtube.com/playlist?list=PLbDqoI6OzOkkaEHwtL-GcZZl573tDbtMc",
          label: "Tutorials",
          position: "right",
        },
        {
          href: "https://www.oncehub.com/",
          label: "Website",
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
              label: "OnceHub v1 (Deprecated)",
              to: "/reference/oncehub-v1/",
            },
          ],
        },
        {
          title: "Legal & Help",
          items: [
            {
              label: "Trust Center",
              href: "https://www.oncehub.com/trustcenter",
            },
            {
              label: "API Terms of Service",
              href: "https://www.oncehub.com/trustcenter/legal/api-terms-of-use",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Live Chat",
              href: "https://www.oncehub.com/live-chat-support",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OnceHub.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
