import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Chibi Engine',
  tagline: 'A modern and powerful TypeScript 2D game engine (WIP)',
  favicon: 'img/favicon.ico',


  // Set the production url of your site here
  url: 'https://chibiengine.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ChibiEngine', // Usually your GitHub org/user name.
  projectName: 'ChibiEngine', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    }
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    metadata: [
      {name: 'og:title', content: 'Chibi Engine — Modern TypeScript 2D Web Game Engine'},
      {
        name: 'description',
        content: 'A modern TypeScript 2D Web Game Engine built over PixiJS and taking advantage of modern web features to promote a maintainable and extendible programming method.'
      },
      {
        name: 'og:description',
        content: 'A modern TypeScript 2D Web Game Engine built over PixiJS and taking advantage of modern web features to promote a maintainable and extendible programming method.'
      },
      {name: 'keywords', content: 'typescript, game, engine, web, 2d, modern, extensible, oriented object, entity component system, ecs, pixi, pixijs, fast, powerful'},
    ],
    navbar: {
      title: 'Chibi Engine',
      // logo: {
      //   alt: 'Chibi Engine Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          href: 'https://github.com/ChibiEngine/ChibiEngine',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discussions',
              href: 'https://github.com/orgs/ChibiEngine/discussions',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ChibiEngine/ChibiEngine',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Chibi Engine`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
