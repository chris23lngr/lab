"use client";

import { cn } from "@/lib/utils";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import * as React from "react";

type TabsContextProps = {
  selected: string;
  setSelected: (value: string) => void;
  activeTrigger: React.RefObject<HTMLButtonElement>;
  orientation: "horizontal" | "vertical";
};

const TabsContext = React.createContext<TabsContextProps>(
  {} as TabsContextProps,
);

function useTabsContext() {
  const context = React.useContext(TabsContext);

  if (!context) {
    throw new Error("TabsContext must be used within a Tabs component");
  }

  return context;
}

/** -----------------------------------------------------------------
 * Root
 * -----------------------------------------------------------------*/
const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>
>((props, ref) => {
  const { className, defaultValue, orientation, ...rest } = props;
  const [selected, setSelected] = React.useState<string>(defaultValue || "");
  const activeTrigger = React.createRef<HTMLButtonElement>();

  return (
    <TabsContext.Provider
      value={{
        activeTrigger: activeTrigger,
        selected,
        setSelected,
        orientation: orientation || "horizontal",
      }}
    >
      <TabsPrimitive.Root
        ref={ref}
        onValueChange={setSelected}
        value={selected}
        defaultValue={defaultValue}
        orientation={orientation}
        {...rest}
      />
    </TabsContext.Provider>
  );
});
Tabs.displayName = TabsPrimitive.Root.displayName;

/** -----------------------------------------------------------------
 * TabsIndicator
 * -----------------------------------------------------------------*/
const TabsIndicator = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof motion.div>
>((props, ref) => {
  const { className, style, ...rest } = props;
  const { activeTrigger, selected, orientation } = useTabsContext();
  const [styles, setStyles] = React.useState<{
    offset: number;
    scale: number;
  }>({ offset: 0, scale: 0 });

  React.useEffect(() => {
    if (!activeTrigger.current) {
      return;
    }

    const offset =
      orientation == "horizontal"
        ? activeTrigger.current.offsetLeft
        : activeTrigger.current.offsetTop;

    const scale =
      orientation == "horizontal"
        ? activeTrigger.current.clientWidth
        : activeTrigger.current.clientHeight;
    setStyles({
      offset: offset,
      scale: scale,
    });
  }, [activeTrigger, selected, orientation]);

  return (
    <motion.div
      ref={ref}
      {...rest}
      className={cn(
        "absolute rounded-full bg-muted",
        orientation == "horizontal"
          ? "h-[calc(100%-8px)]"
          : "w-[calc(100%-8px)]",
        className,
      )}
      style={{
        ...style,
        ...(orientation == "horizontal"
          ? {
              left: 0,
            }
          : {
              top: 0,
            }),
      }}
      animate={{
        ...(orientation == "horizontal"
          ? {
              left: 0,
              transform: `translateX(${styles.offset}px)`,
              width: `${styles.scale}px`,
            }
          : {
              top: 0,
              transform: `translateY(${styles.offset}px)`,
              height: `${styles.scale}px`,
            }),
      }}
    />
  );
});
TabsIndicator.displayName = "TabsIndicator";

/** -----------------------------------------------------------------
 * TabsList
 * -----------------------------------------------------------------*/
const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => {
  const { orientation } = useTabsContext();

  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        "text-muted-foreground relative inline-flex items-center justify-center rounded-md",
        orientation == "horizontal" ? "h-10 " : "h-fit w-fit",
        className,
      )}
      {...props}
    />
  );
});
TabsList.displayName = TabsPrimitive.List.displayName;

/** -----------------------------------------------------------------
 * TabsTrigger
 * -----------------------------------------------------------------*/
const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>((props, ref) => {
  const { className, value, ...rest } = props;
  const context = React.useContext(TabsContext);

  if (!context) {
    throw new Error("TabsTrigger must be used within a Tabs component");
  }

  return (
    <TabsPrimitive.Trigger
      ref={value == context.selected ? context.activeTrigger : null}
      className={cn(
        "relative z-[1] inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium ring-offset-background transition-all  transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground",
        className,
      )}
      value={value}
      {...rest}
    />
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

/** -----------------------------------------------------------------
 * TabsContent
 * -----------------------------------------------------------------*/
const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsContent, TabsIndicator, TabsList, TabsTrigger };
