"use client";

import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { CheckCircleIcon } from "@heroicons/react/16/solid";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

/** ----------------------------------------
 *  Context
 *  ----------------------------------------*/
type BillingCycle = "monthly" | "yearly";

type PricingCardContextType = {
  billing: BillingCycle;
  onBillingChange: (billing: BillingCycle) => void;
  defaultBilling?: BillingCycle;
};

const PricingCardContext = React.createContext<PricingCardContextType>(
  {} as PricingCardContextType,
);

function usePricingCardContext() {
  const context = React.useContext(PricingCardContext);

  if (!context) {
    throw new Error(
      "usePricingCardContext must be used within a PricingCardProvider",
    );
  }

  return context;
}

/** ----------------------------------------
 *  Root
 *  ----------------------------------------*/

interface PricingCardRootProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultBilling?: BillingCycle;
}

const Root = React.forwardRef<HTMLDivElement, PricingCardRootProps>(
  (props, ref) => {
    const { className, defaultBilling = "yearly", ...rest } = props;

    const [billing, setBilling] = React.useState<BillingCycle>(defaultBilling);

    return (
      <PricingCardContext.Provider
        value={{ billing, onBillingChange: setBilling, defaultBilling }}
      >
        <div ref={ref} {...rest} className={className} />
      </PricingCardContext.Provider>
    );
  },
);
Root.displayName = "Root";

/** ----------------------------------------
 *  BillingSwitch
 *  ----------------------------------------*/
const BillingSwitch = React.forwardRef<
  React.ElementRef<typeof Switch>,
  React.ComponentPropsWithoutRef<typeof Switch>
>((props, ref) => {
  const { className, ...rest } = props;

  const { billing, onBillingChange } = usePricingCardContext();

  const [checked, setChecked] = React.useState<boolean>(billing === "yearly");

  React.useEffect(() => {
    onBillingChange(checked ? "yearly" : "monthly");
  }, [checked, onBillingChange]);

  return (
    <Switch
      ref={ref}
      {...rest}
      className={className}
      checked={checked}
      onCheckedChange={setChecked}
    />
  );
});
BillingSwitch.displayName = "BillingSwitch";

/** ----------------------------------------
 *  Card
 *  ----------------------------------------*/
interface PricingCardCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: string[];
  description: string;
}

const Card = React.forwardRef<HTMLDivElement, PricingCardCardProps>(
  (props, ref) => {
    const {
      name,
      price: { monthly: monthlyPrice, yearly: yearlyPrice },
      features,
      description,
      className,
      ...rest
    } = props;

    const { billing } = usePricingCardContext();

    const [priceDisplay, setPriceDisplay] = React.useState<number>(yearlyPrice);
    const intervalRef = React.useRef<NodeJS.Timeout>();

    const update = React.useCallback(() => {
      const targetPrice = billing === "yearly" ? yearlyPrice : monthlyPrice;

      if (priceDisplay == targetPrice) {
        clearInterval(intervalRef.current);
        return;
      }

      setPriceDisplay((prevPrice) =>
        priceDisplay < targetPrice ? prevPrice + 1 : prevPrice - 1,
      );
    }, [priceDisplay, billing, monthlyPrice, yearlyPrice]);

    React.useEffect(() => {
      if (intervalRef.current) clearInterval(intervalRef.current);

      intervalRef.current = setInterval(update, 50);

      return () => {
        clearInterval(intervalRef.current);
      };
    });

    return (
      <div
        ref={ref}
        {...rest}
        className={cn(
          "from-border to-border/0 rounded-xl bg-gradient-to-b p-px text-start",
          className,
        )}
      >
        <div className="bg-background w-full max-w-screen-sm rounded-xl p-8">
          <p className="text-accent-500 text-sm font-medium">{name}</p>
          <p className="text-foreground mt-4 flex items-center justify-start text-5xl font-medium">
            $<span className="w-16">{priceDisplay}</span>
            <motion.span className="text-muted-forground ms-1.5 inline-flex flex-col text-sm font-normal">
              per month
              <AnimatePresence>
                {billing === "yearly" && (
                  <motion.span
                    className="h-auto overflow-hidden"
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      ...(billing === "yearly"
                        ? { opacity: 1, height: "auto" }
                        : { opacity: 0, height: 0 }),
                    }}
                    exit={{ height: 0 }}
                  >
                    billed annually
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.span>
          </p>
          <p className="text-muted-forground mt-6 text-sm">{description}</p>
          <div className="bg-border my-6 h-px w-full" />
          <p className="text-muted-forground text-xs">
            <span className="text-foreground font-medium">{name}</span>{" "}
            includes:
          </p>
          <ul className="mt-4 space-y-2">
            {features.map((feature, index) => (
              <li
                key={`${index}-feature`}
                className="text-muted-forground flex items-center justify-start gap-2 text-sm"
              >
                <CheckCircleIcon className="text-accent-500 h-4 w-4 shrink-0" />
                <p>{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  },
);
Card.displayName = "Card";

export { BillingSwitch, Card, Root, usePricingCardContext };
