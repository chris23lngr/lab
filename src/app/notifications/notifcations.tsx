"use client";

import { cn } from "@/lib/utils";
import {
  CheckBadgeIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from "@heroicons/react/20/solid";
import * as Portal from "@radix-ui/react-portal";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLMotionProps, motion } from "framer-motion";
import React from "react";
import { z } from "zod";

/** -----------------------------------------------------------------
 *  Context
 *  -----------------------------------------------------------------*/
const notificationDataSchema = z.object({
  type: z.enum(["success", "info", "warning", "error"]),
});

type NotificationData = z.infer<typeof notificationDataSchema>;

type NotificationsContextProps = {
  notifications: Notification[];
};

const NotificationsContext = React.createContext<NotificationsContextProps>(
  {} as NotificationsContextProps,
);

function useNotificationsContext() {
  const context = React.useContext(NotificationsContext);

  if (!context) {
    throw new Error(
      "NotificationsContext must be used within a NotificationsProvider",
    );
  }

  return context;
}

const rootVariants = cva("[--notifications-portal-offset:2rem] fixed z-[100]", {
  variants: {
    align: {
      top: "top-[var(--notifications-portal-offset)]",
      bottom: "bottom-[var(--notifications-portal-offset)]",
    },
    side: {
      left: "left-[var(--notifications-portal-offset)]",
      right: "right-[var(--notifications-portal-offset)]",
    },
  },
});

interface RootProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof rootVariants> {}

const Root = (props: RootProps) => {
  const { side = "right", align = "top", className, ...rest } = props;

  return (
    <Portal.Root asChild>
      <div className={cn(rootVariants({ side, align, className }))} {...rest}>
        <Notification data={{ type: "success" }}>
          <p>Hello World</p>
        </Notification>
        <Notification data={{ type: "warning" }}>
          <p>Hello World</p>
        </Notification>
        <Notification data={{ type: "error" }}>
          <p>Hello World</p>
        </Notification>
        <Notification data={{ type: "info" }}>
          <p>Hello World</p>
        </Notification>
      </div>
    </Portal.Root>
  );
};

const notificationIconVariants = cva("size-5", {
  variants: {
    type: {
      success: "text-green-500",
      error: "text-red-500",
      warning: "text-amber-500",
      info: "text-foreground",
    },
  },
});

interface NotificationProps extends HTMLMotionProps<"div"> {
  data: NotificationData;
  iconClassName?: string;
  dismissible?: boolean;
}

const Notification = React.forwardRef<HTMLDivElement, NotificationProps>(
  (props, ref) => {
    const {
      className,
      data: notifcationData,
      iconClassName,
      children,
      dismissible = true,
      ...rest
    } = props;

    const { type } = notifcationData;

    const Icon = React.useMemo(() => {
      switch (type) {
        case "success":
          return CheckBadgeIcon;
        case "error":
          return XCircleIcon;
        case "warning":
          return ExclamationTriangleIcon;
        case "info":
          return InformationCircleIcon;
        default:
          return CheckBadgeIcon;
      }
    }, [type]);

    return (
      <motion.div
        ref={ref}
        {...rest}
        className={cn(
          "flex items-start justify-start gap-2 rounded-lg border border-border bg-card-background px-4 py-3 shadow-lg",
          className,
        )}
        initial={{
          transform: "translateX(100%)",
        }}
        animate={{
          transform: "translateX(0%)",
        }}
      >
        <Icon
          className={cn(
            notificationIconVariants({ type, className: iconClassName }),
          )}
        />
        <>{children}</>
      </motion.div>
    );
  },
);
Notification.displayName = "Notification";

export { Root };
