"use client";

import React from "react";
import { ComponentPreview } from "./component-preview";

function ComponentDisplay({ fileName }: { fileName: string }) {
  const Preview = React.useMemo(() => {
    const Component =
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      React.lazy(() => import(`@/registry/demo/${fileName}`));

    if (!Component) {
      return (
        <p className="text-muted-foreground text-sm">
          Component{" "}
          <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm">
            Test
          </code>{" "}
          not found in registry.
        </p>
      );
    }

    return <Component />;
  }, [fileName]);

  return (
    <ComponentPreview>
      <React.Suspense
        fallback={
          <div className="flex h-full w-full items-center justify-center text-sm">
            <p className="text-forground font-mono text-base">Loading...</p>
          </div>
        }
      >
        {Preview}
      </React.Suspense>
    </ComponentPreview>
  );
}
ComponentDisplay.displayName = "ComponentDisplay";

export { ComponentDisplay };
