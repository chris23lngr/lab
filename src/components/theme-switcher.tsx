"use client";

import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import React from "react";

const ThemeSwitcher = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  const { className, ...rest } = props;

  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      ref={ref}
      {...rest}
      className={cn(
        "border-border focus-visible:ring-offset-background focus-visible:ring-ring relative flex size-8 items-center justify-center overflow-hidden rounded-full border p-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        className,
      )}
      onClick={toggleTheme}
    >
      <motion.span
        className="absolute left-1/2"
        initial={{
          transform: "translate(-50%, 150%)",
        }}
        animate={{
          ...(theme === "dark"
            ? { transform: "translate(-50%, 150%)" }
            : { transform: "translate(-50%, 0%)" }),
        }}
      >
        <SunIcon className="size-4" />
      </motion.span>
      <motion.span
        className="absolute left-1/2"
        initial={{
          transform: "translate(-50%, -150%)",
        }}
        animate={{
          ...(theme === "dark"
            ? { transform: "translate(-50%, 0%)" }
            : { transform: "translate(-50%, -150%)" }),
        }}
      >
        <MoonIcon className="size-4" />
      </motion.span>
    </button>
  );
});
ThemeSwitcher.displayName = "ThemeSwitcher";

export { ThemeSwitcher };
