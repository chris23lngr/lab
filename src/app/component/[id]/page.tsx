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
            className="flex w-fit items-center justify-start gap-2 rounded-md text-sm text-primary-500 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <ArrowLeftIcon className="size-4" />
            <span>Go Back</span>
          </Link>
        </div>
      </section>

      {/* Header */}
      <section id="header">
        <div className="container">
          <p className="text-2xl font-medium text-foreground">
            {component.name}
          </p>
          <p className="mt-4 w-full max-w-sm text-sm text-muted-forground">
            {component.description}
          </p>
          <div className="mt-10 grid divide-y divide-border md:grid-cols-2 md:divide-x md:divide-y-0 ">
            <div className="pb-6 md:pb-0 md:pr-6">
              <p className="text-sm font-medium text-foreground">Built with</p>
              <div className="mt-4 flex max-w-md flex-wrap gap-2">
                {
                  // List dependencies
                  component.dependecies.map((dependency) => (
                    <Link
                      key={dependency.label}
                      href={dependency.url}
                      className="block cursor-pointer rounded-full bg-card-background px-2.5 py-1 text-xs text-muted-forground transition-colors hover:bg-accent-foreground hover:text-accent-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:ring-offset-background hover:dark:text-foreground"
                    >
                      {dependency.label}
                    </Link>
                  ))
                }
              </div>
            </div>
            <div className="pt-6 md:pl-6 md:pt-0">
              <p className="text-sm font-medium text-foreground">Inspired by</p>
              <div className="mt-4 space-y-2">
                {component.inspirations.map((inspiration) => (
                  <Link
                    key={inspiration.label}
                    href={inspiration.url}
                    target="_blank"
                    className="group flex w-fit items-center justify-start gap-2 rounded-md text-sm text-muted-forground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {inspiration.label}
                    <ArrowUpRightIcon className="size-4 group-hover:text-accent-500" />
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
