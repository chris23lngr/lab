import Image from "next/image";
import Link from "next/link";

export default async function AboutPage() {
  return (
    <>
      <section id="header">
        <div className="container pb-12 pt-32">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="h-12 w-12 overflow-hidden rounded-full border border-border ring-2 ring-accent-foreground/50">
              <Image
                src={"https://avatars.githubusercontent.com/u/41869956?v=8"}
                alt=""
                width={2048}
                height={2048}
              />
            </div>
            <p className="text-muted-foreground text-xs uppercase">
              A word from the author
            </p>
          </div>
        </div>
      </section>
      <section id="content" className="relative z-10">
        <article className="container mx-auto max-w-prose space-y-6 pb-24 leading-6 text-zinc-600 dark:text-zinc-300 [&_p]:inline-block">
          <p>
            Thanks for checking out{" "}
            <span className="font-semibold text-accent-600">lab/</span>
          </p>
          <p>
            This project is a collection of flexible and reusable components for
            building websites and web applications. Please{" "}
            <span className="font-medium text-foreground">
              don&apos;t consider this as a production-ready component library
            </span>
            , but rather as a playground for experimenting with different design
            patterns and component structures.
          </p>
          <p>
            I created this project since I always liked to build new things.
            When shadcn/ui came out, I was fascinated by the idea of creating
            components with a design system that is easy to use and customize.
          </p>
          <p>
            Most of the components in Flexify are based on the components from
            the amazing shadcn/ui library (I know they don&apos;t like to call
            it that...).
          </p>
          <p>For this project I used the following technologies and tools:</p>
          <ul className="!mt-4 list-disc space-y-1 pl-4">
            <li>
              <span>
                <Link
                  href={"https://ui.shadcn.com/"}
                  className="rounded-md font-medium transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  shadcn/ui
                </Link>{" "}
                for base Components
              </span>
            </li>
            <li>
              <span>
                <Link
                  href={"https://tailwindcss.com/"}
                  className="rounded-md font-medium transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Tailwindcss
                </Link>{" "}
                for Styling{" "}
              </span>
            </li>
            <li>
              <span>
                <Link
                  href={"https://www.framer.com/motion/"}
                  className="rounded-md font-medium transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Framer Motion
                </Link>{" "}
                for Animations
              </span>
            </li>
            <li>
              <span>
                <Link
                  href={"https://www.radix-ui.com/primitives"}
                  className="rounded-md font-medium transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Radix UI
                </Link>{" "}
                for accessible and flexible components
              </span>
            </li>
          </ul>
          <p>
            I hope you enjoy this project and maybe even learn something new. If
            you have any feedback or suggestions, feel free to reach out to.
          </p>
        </article>
      </section>
    </>
  );
}
