import { siteConfig } from "@/lib/config/site";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import { CommandLineIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { ThemeSwitcher } from "./theme-switcher";

const Navbar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <nav
      ref={ref}
      {...rest}
      className={cn("fixed top-0 z-50 w-full", className)}
    >
      <div className="bg-background/20 container backdrop-blur-sm">
        <div className="flex w-full items-center justify-between py-4">
          <Link
            href={"/"}
            className="focus-visible:ring-offset-background focus-visible:ring-ring flex items-center justify-start rounded-md transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          >
            <CommandLineIcon className="text-accent-500 size-6" />
            <p className="text-foreground ms-2.5 text-lg font-semibold">lab/</p>
          </Link>
          <div className="flex items-center justify-center">
            <ul className="flex gap-6">
              {siteConfig.nav.map((item, index) => (
                <li
                  key={`nav-item-${index}`}
                  className="text-muted-forground hover:text-accent-500 text-sm transition-colors"
                >
                  <Link
                    href={item.href}
                    target={item.external ? "_blank" : "_self"}
                    className="focus-visible:ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  >
                    {item.label}
                    {item.external && (
                      <ArrowUpRightIcon className="ms-1.5 size-4" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <ThemeSwitcher className="ml-6" />
          </div>
        </div>
        <div className="bg-border h-px w-full" />
      </div>
    </nav>
  );
});
Navbar.displayName = "Navbar";

export { Navbar };
