export const siteConfig = {
  repository: {
    url: "https://github.com/chris23lngr/lab",
  },
  nav: [
    {
      href: "/about",
      label: "About",
    },
    {
      href: "https://github.com/chris23lngr",
      label: "Github",
      external: true,
    },
  ],
};

export type SiteConfig = typeof siteConfig;
