"use client";

import { CheckBadgeIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import React from "react";

export default function TestPage() {
  const [opened, setOpened] = React.useState(false);

  return (
    <main>
      <section className="py-64">
        <div className="container">
          <div className="group relative mt-6 flex h-32 items-end justify-between">
            <div className="absolute z-0 flex -translate-y-4 scale-90 items-start justify-start gap-4 rounded-lg border border-border bg-card-background px-4 py-3 shadow-md transition-all group-hover:-translate-y-[calc(100%+1rem)] group-hover:scale-100">
              <div>
                <CheckBadgeIcon className="size-5 text-accent-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  Item created successfully
                </p>
                <p className="mt-0.5 text-sm text-muted-forground">
                  A new item was added to the collection.
                </p>
              </div>
              <XMarkIcon className="size-5 text-muted-forground" />
            </div>
            <div className="relative z-10 flex items-start justify-start gap-4 rounded-lg border border-border bg-card-background px-4 py-3 shadow-md">
              <div>
                <CheckBadgeIcon className="size-5 text-accent-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  Item created successfully
                </p>
                <p className="mt-0.5 text-sm text-muted-forground">
                  A new item was added to the collection.
                </p>
              </div>
              <XMarkIcon className="size-5 text-muted-forground" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

interface StatsBarProps extends React.HTMLAttributes<HTMLDivElement> {
  size: number;
}

const StatsBar = React.forwardRef<HTMLDivElement, StatsBarProps>(
  (props, ref) => {
    const { children, size, ...rest } = props;

    return (
      <motion.div
        className="w-1.5 rounded-full bg-accent-500 group-hover:bg-accent-300 group-hover:hover:bg-accent-500"
        initial={{ height: 0 }}
        animate={{
          height: `${size}%`,
        }}
      />
    );
  },
);
StatsBar.displayName = "StatsBar";
