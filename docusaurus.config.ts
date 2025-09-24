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
  url: "https://scheduleonce.github.io", // GitHub Pages URL (organization or user site root)
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/developer-center/", // Repo name with trailing slash

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
  // Additional docs plugin instance for /reference path parity
  plugins: [
    // Reference documentation (narrative + object model)
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "reference",
        path: "reference",
        routeBasePath: "reference",
        sidebarPath: require.resolve("./sidebars.reference.ts"),
        editUrl:
          "https://github.com/scheduleonce/developer-center/tree/redocosaurus/reference/",
        showLastUpdateTime: true,
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
  ],
  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "My Site",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docs",
          position: "left",
          label: "Docs",
        },
        { to: "/scalar/", label: "API Reference", position: "left" },
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
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "X",
              href: "https://x.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
