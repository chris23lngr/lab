import { ComponentDisplay } from "@/components/component-display";
import { Index } from "@/registry";
import type { RegistryEntry } from "@/registry/schema";
import { ArrowLeftIcon, ArrowUpRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ComponentPageProps {
  params: {
    id: string;
  };
}

async function getComponent(id: string): Promise<RegistryEntry | null> {
  // Check if id exists in the registry
  // If it does, return the component

  const entry = Index[id];

  if (entry !== undefined) {
    return entry;
  }

  return null;
}

export default async function ComponentPage({
  params: { id },
}: ComponentPageProps) {
  const component = await getComponent(id);

  if (!component) {
    notFound();
  }

  return (
    <main className="py-24">
      {/* Topbar */}
      <section>
        <div className="container mb-20">
          <Link
            href={"/"}
            className="text-primary-500 hover:text-foreground focus-visible:ring-offset-background focus-visible:ring-ring flex w-fit items-center justify-start gap-2 rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          >
            <ArrowLeftIcon className="size-4" />
            <span>Go Back</span>
          </Link>
        </div>
      </section>

      {/* Header */}
      <section id="header">
        <div className="container">
          <p className="text-foreground text-2xl font-medium">
            {component.name}
          </p>
          <p className="text-muted-forground mt-4 w-full max-w-sm text-sm">
            {component.description}
          </p>
          <div className="divide-border mt-10 grid divide-y md:grid-cols-2 md:divide-x md:divide-y-0 ">
            <div className="pb-6 md:pb-0 md:pr-6">
              <p className="text-foreground text-sm font-medium">Built with</p>
              <div className="mt-4 flex max-w-md gap-2">
                {
                  // List dependencies
                  component.dependecies.map((dependency) => (
                    <Link
                      key={dependency.label}
                      href={dependency.url}
                      className="bg-card-background text-muted-forground hover:bg-accent-foreground hover:text-accent-900 hover:dark:text-foreground focus-visible:ring-ring focus-visible:ring-offset-background block cursor-pointer rounded-full px-2.5 py-1 text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0"
                    >
                      {dependency.label}
                    </Link>
                  ))
                }
              </div>
            </div>
            <div className="pt-6 md:pl-6 md:pt-0">
              <p className="text-foreground text-sm font-medium">Inspired by</p>
              <div className="mt-4 space-y-2">
                {component.inspirations.map((inspiration) => (
                  <Link
                    key={inspiration.label}
                    href={inspiration.url}
                    target="_blank"
                    className="text-muted-forground hover:text-foreground focus-visible:ring-offset-background focus-visible:ring-ring group flex w-fit items-center justify-start gap-2 rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  >
                    {inspiration.label}
                    <ArrowUpRightIcon className="group-hover:text-accent-500 size-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-24">
        <div className="container">
          <ComponentDisplay fileName={component.fileName} />
        </div>
      </section>
    </main>
  );
}
