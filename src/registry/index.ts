import type { Registry } from "./schema";

export const Index: Registry = {
  "animated-pricing-card": {
    id: "animated-pricing-card",
    name: "Animated Pricing Card",
    description:
      "Displays a pricing card, with a animated price, which changes on bill cycle.",
    fileName: "pricing-card",
    inspirations: [
      {
        label: "https://www.limitless.ai",
        url: "https://www.limitless.ai/#pricing",
      },
    ],
    dependecies: [
      {
        label: "framer-motion",
        url: "https://www.framer.com/motion/",
      },
      {
        label: "@radix-ui/react-switch",
        url: "https://www.radix-ui.com/primitives/docs/components/switch",
      },
      {
        label: "@heroicons/react",
        url: "https://heroicons.com/",
      },
    ],
  },
  "animated-tabs": {
    id: "animated-tabs",
    name: "Animated Tabs",
    description:
      "Displays a tab component, with a animated indicator, which changes on tab selection.",
    fileName: "animated-tabs",
    inspirations: [
      {
        label: "https://stripe.com",
        url: "https://stripe.com/de/payments#global-payments",
      },
    ],
    dependecies: [
      {
        label: "framer-motion",
        url: "https://www.framer.com/motion/",
      },
      {
        label: "@radix-ui/react-tabs",
        url: "https://www.radix-ui.com/primitives/docs/components/tabs",
      },
    ],
  },
};
