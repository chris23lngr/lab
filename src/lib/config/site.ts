export const siteConfig = {
  repository: {
    url: "https://github.com/chris23lngr/lab",
  },
  nav: [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/components",
      label: "Components",
    },
    {
      href: "https://github.com/chris23lngr",
      label: "Github",
      external: true,
    },
  ],
};

export type SiteConfig = typeof siteConfig;
