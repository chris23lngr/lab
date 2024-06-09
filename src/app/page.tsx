import { Button, buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/config/site";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section id="hero" className="relative">
        <div className="container relative z-10 flex min-h-[70svh] flex-col items-start justify-center py-32">
          <h1 className="text-foreground text-4xl font-medium">
            chris23lngr
            <span className="text-accent-500">/lab</span>
          </h1>
          <h2 className="text-muted-forground mt-4 max-w-screen-md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quos,
            autem culpa amet, animi consequuntur laboriosam vel aliquam tenetur
            explicabo aliquid nostrum eligendi nemo provident. Odio nihil quidem
            in pariatur.
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
          <p className="text-accent-500 font-mono text-xs font-medium uppercase tracking-widest">
            Handcrafted
          </p>
          <h3 className="text-foreground mt-4 text-3xl font-medium">
            Components
          </h3>

          <div className="mt-24 grid grid-cols-2 gap-8">
            <Link
              href={"/component/animated-pricing-card"}
              className="group relative z-10"
            >
              <div className="bg-card-background absolute -left-4 -top-4 z-0 h-[calc(100%+2rem)] w-[calc(100%+2rem)] rounded-xl opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="border-border bg-card-background relative z-10 min-h-32 w-full overflow-hidden rounded-lg border"></div>
              <p className="text-foreground relative z-10 mt-4 font-medium">
                Animated Pricing Card
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
