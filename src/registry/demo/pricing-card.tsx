"use client";

import { Label } from "@/components/ui/label";
import * as PricingCard from "@/registry/components/pricing-card";

export default function PricingCardDemo() {
  return (
    <PricingCard.Root className="flex flex-col items-center justify-center">
      <div className="max-w-md text-center">
        <p className="text-foreground text-xl font-medium">
          Pricing designed for everyone
        </p>
        <p className="text-muted-forground mb-8 mt-2 text-sm">
          We offer a range of plans for all types of businesses. Whether
          you&apos;re just starting out or have a large team.
        </p>
        <div className="flex items-center justify-center gap-2">
          <PricingCard.BillingSwitch id="billingSwitch" defaultChecked={true} />
          <Label htmlFor="billingSwitch">
            Yearly billing
            <span className="text-muted-forground ms-1 font-normal">
              (20% off)
            </span>
          </Label>
        </div>
        <PricingCard.Card
          className="mt-12"
          name="Starter"
          description="For small teams or solopreneurs"
          price={{
            monthly: 28,
            yearly: 16,
          }}
          features={[
            "Unlimited projects",
            "No per-user fees",
            "5 team members",
          ]}
        />
      </div>
    </PricingCard.Root>
  );
}
