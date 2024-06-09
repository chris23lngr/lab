import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
  "font-medium rounded-lg flex justify-center items-center gap-1 text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none focus-visible:ring-ring",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-b from-accent-500 to-accent-600 text-white [&_svg]:text-zinc-300 hover:to-accent-500",
        outline:
          "border border-border [&_svg]:text-muted-forground hover:bg-foreground/5",
      },
      size: {
        default: "px-3 py-1.5 text-sm h-8 [&_svg]:size-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { asChild = false, variant, className, size, ...rest } = props;

    const Component = asChild ? Slot : "button";

    return (
      <Component
        ref={ref}
        {...rest}
        className={cn(buttonVariants({ variant, size, className }))}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
