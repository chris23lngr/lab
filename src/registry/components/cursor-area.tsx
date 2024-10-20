"use client";

import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import React from "react";

interface CursorAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

const CursorArea = React.forwardRef<HTMLDivElement, CursorAreaProps>(
  (props, forwardRef) => {
    const { className, children, asChild, ...rest } = props;
    const ref = React.useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = React.useState(false);
    const [coords, setCoords] = React.useState({ x: 0, y: 0 });
    const Component = asChild ? Slot : "div";

    const onMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const { clientX, clientY } = e;
      const rect = ref.current.getBoundingClientRect();

      const inArea =
        clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom;

      setIsHovered(inArea);

      setCoords({ x: clientX - rect.left, y: clientY - rect.top });
    };

    React.useEffect(() => {
      document.addEventListener("mousemove", onMouseMove);
      return () => {
        document.removeEventListener("mousemove", onMouseMove);
      };
    }, []);

    return (
      <Component ref={ref} {...rest} className={cn("relative", className)}>
        {isHovered && (
          <div
            className="absolute left-0 top-0"
            style={{
              left: coords.x,
              top: coords.y,
            }}
          >
            <div className="font-display bg-green-400 px-2 py-1 text-base font-bold text-foreground shadow-md">
              <p>Developer</p>
            </div>
          </div>
        )}
        {children}
      </Component>
    );
  },
);
CursorArea.displayName = "CursorArea";

export { CursorArea };
