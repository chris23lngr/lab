import { cn } from "@/lib/utils";

function ComponentPreview({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...rest}
      className={cn(
        "border-border bg-card-background ring-border/50 ring-offset-background min-h-96 w-full rounded-xl border px-8 py-16 ring-1 ring-offset-4",
        className,
      )}
    />
  );
}
ComponentPreview.displayName = "ComponentPreview";

export { ComponentPreview };
