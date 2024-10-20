"use client";

import { CursorArea } from "@/registry/components/cursor-area";

export default function CursorAreaDemo() {
  return (
    <CursorArea className="w-full">
      <div className="flex min-h-64 w-full items-center justify-center rounded-lg border-2 border-dashed border-border">
        <p className="text-muted-foreground font-medium">Hover me</p>
      </div>
    </CursorArea>
  );
}
