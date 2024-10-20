import { Button, buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/config/site";
import { Index } from "@/registry";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section id="hero" className="relative">
        <div className="container relative z-10 flex min-h-[70svh] flex-col items-start justify-center py-32">
          <h1 className="text-4xl font-medium text-foreground">
            chris23lngr
            <span className="text-accent-500">/lab</span>
          </h1>
          <h2 className="mt-4 max-w-screen-md text-muted-forground">
            A collection of flexible and reusable components for building
            websites and web applications using Tailwind CSS, RadixUI and
            shadcn/ui.
          </h2>
          <div className="mt-12 flex items-center justify-start gap-3">
            <Button>Components</Button>
            <Link
              target="_blank"
              className={buttonVariants({ variant: "outline" })}
              href={siteConfig.repository.url}
            >
              Github
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-32">
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent-500">
            Handcrafted
          </p>
          <h3 className="mt-4 text-3xl font-medium text-foreground">
            Components
          </h3>

          <div className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-2">
            {Object.values(Index).map((component) => (
              <Link
                key={component.id}
                href={`/component/${component.id}`}
                className="group"
              >
                <div className="rounded-lg border border-border bg-zinc-50 p-8 ring-4 ring-zinc-100 dark:bg-zinc-800 dark:ring-zinc-100/5">
                  <span className="block font-medium text-foreground">
                    {component.name}
                  </span>
                  <span className="mt-1 block text-sm text-muted-forground">
                    {component.description}
                  </span>

                  <ArrowRightIcon className="mt-8 size-6 transform transition-all group-hover:translate-x-6 group-hover:text-accent-600" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
