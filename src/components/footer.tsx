import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Footer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <footer ref={ref} {...rest} className={cn("", className)}>
      <div className="container bg-background/20 backdrop-blur-sm">
        <div className="h-px w-full bg-border" />
        <div className="flex w-full flex-wrap gap-8 pb-10 pt-6">
          <p className="font-mono text-sm uppercase">Hello World</p>
          <p className="font-mono text-sm uppercase">
            Made by Christoph Langer
          </p>
          <Link
            href={"/"}
            className="ml-auto rounded-md text-sm font-medium text-muted-forground transition-colors hover:text-accent-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className="rounded-md text-sm font-medium text-muted-forground transition-colors hover:text-accent-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            About
          </Link>
        </div>
      </div>
    </footer>
  );
});
Footer.displayName = "Footer";

export { Footer };
