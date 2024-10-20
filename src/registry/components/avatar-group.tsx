"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

const AvatarGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className, children, ...rest } = props;
  const [hovered, setHovered] = React.useState<boolean>(false);

  return (
    <div
      ref={ref}
      {...rest}
      className={cn("flex w-fit items-center justify-start gap-2", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {React.Children.map(children, (child, index) => {
        return (
          <motion.div
            className={cn("rounded-full ring-4 ring-background")}
            style={{
              transform: `translateX(calc(${index}*-1.5rem))`,
            }}
            animate={{
              transform: hovered
                ? `translateX(0%)`
                : `translateX(calc(${index}*-1.5rem))`,
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
});
AvatarGroup.displayName = "AvatarGroup";

export { AvatarGroup };
