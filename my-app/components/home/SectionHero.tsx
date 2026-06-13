import type { ReactNode } from "react";

type SectionHeroProps = {
  title: string;
  subtitle: ReactNode;
  titleGradientClass: string;
};

export default function SectionHero({
  title,
  subtitle,
  titleGradientClass,
}: SectionHeroProps) {
  return (
    <main className="mx-auto flex h-[calc(100vh-45rem)] max-w-7xl flex-col items-center justify-start px-6 py-10 text-center">
      <h1
        className={`animated-title-gradient app-font-heading ${titleGradientClass} w-fit bg-clip-text text-4xl font-bold text-transparent md:text-5xl`}
      >
        {title}
      </h1>
      <p className="mt-4 max-w-3xl text-lg text-muted-foreground">{subtitle}</p>
    </main>
  );
}
