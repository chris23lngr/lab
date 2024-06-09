"use client";

import { cn } from "@/lib/utils";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { motion } from "framer-motion";
import React from "react";

/** ----------------------------------------
 *  Switch
 *  ----------------------------------------*/

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>((props, ref) => {
  const {
    className,
    checked: checkedProp,
    onCheckedChange: onCheckedChangeProp,
    defaultChecked = false,
    ...rest
  } = props;

  const [checked, setChecked] = React.useState(checkedProp ?? defaultChecked);

  const handleChange = (checked: boolean) => {
    setChecked((prevChecked) => !prevChecked);
    onCheckedChangeProp?.(checked);
  };

  return (
    <SwitchPrimitive.Root
      ref={ref}
      {...rest}
      checked={checked}
      onCheckedChange={handleChange}
      className={cn(
        "border-border focus-visible:ring-ring focus-visible:ring-offset-background data-[state=checked]:border-accent-foreground data-[state=checked]:bg-accent-500 w-12 rounded-full border p-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        className,
      )}
    >
      <SwitchPrimitive.Thumb ref={ref} {...rest} asChild>
        <motion.span
          className={cn(
            "bg-muted-forground block size-4 rounded-full transition-colors data-[state=checked]:bg-white ",
            className,
          )}
          initial={{
            ...(checked
              ? { transform: "translateX(1.375rem)" }
              : { transform: "translateX(0)" }),
          }}
          animate={{
            ...(checked
              ? { transform: "translateX(1.375rem)" }
              : { transform: "translateX(0)" }),
          }}
        />
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  );
});
Switch.displayName = "Switch";

export { Switch };
