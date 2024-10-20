"use client";

import { CursorArea } from "@/registry/components/cursor-area";
import { CursorArrowRippleIcon } from "@heroicons/react/24/solid";

export default function CursorAreaDemo() {
  return (
    <>
      <div className="flex min-h-64 w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-border px-8 md:hidden">
        <CursorArrowRippleIcon className="size-6 text-accent-600" />
        <p className="text-muted-foreground mt-4 text-center font-medium">
          Not available on mobile
        </p>
        <p className="mt-2 max-w-prose text-center text-sm text-muted-forground">
          This component is not available on mobile devices. Please view this
          page on a desktop device.
        </p>
      </div>
      <CursorArea className="hidden w-full md:block">
        <div className="flex min-h-64 w-full items-center justify-center rounded-lg border-2 border-dashed border-border">
          <p className="text-muted-foreground font-medium">Hover me</p>
        </div>
      </CursorArea>
    </>
  );
}
