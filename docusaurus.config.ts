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
  url: "https://your-azure-static-web-app.azurestaticapps.net", // Update with your Azure Static Web App URL
  // Set the /<baseUrl>/ pathname under which your site is served
  // For Azure Static Web Apps, use root path
  baseUrl: "/", // Root path for Azure Static Web App

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "scheduleonce", // GitHub org/user
  projectName: "developer-center", // Repo name
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

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
          routeBasePath: "docs",
          sidebarPath: "./sidebars.ts",
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      "@scalar/docusaurus",
      {
        label: "API Reference",
        route: "/reference", // Root path for Azure Static Web App
        showNavLink: false, // We'll add our own navbar item for better control
        configuration: {
          spec: {
            // url: "https://developers.oncehub.com/openapi/oncehub.json"
            url: "/openapi.json",
          },
          hideDownloadButton: true,
          hideDarkModeToggle: true, // Let Docusaurus handle theme switching
          theme: "alternate", // Use alternate theme for better Docusaurus integration
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
          to: "/docs/overview/introduction-to-the-scheduleonce-api",
          position: "left",
          label: "Docs",
        },
        { to: "/reference/", label: "API Reference", position: "left" },
        {
          href: "https://github.com/facebook/docusaurus",
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
              label: "Documentation",
              to: "/docs/overview/introduction-to-the-scheduleonce-api",
            },
          ],
        },
        {
          title: "API",
          items: [
            {
              label: "API Reference",
              to: "/reference/",
            },
            {
              label: "Webhooks",
              to: "/docs/webhooks/introduction-to-webhooks/",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Developer Support",
              to: "/docs/developer-support/frequently-asked-questions/",
            },
            {
              label: "Contact Us",
              to: "/docs/developer-support/contact-us/",
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
