import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export function PageHero({ eyebrow, title, subtitle, className }: PageHeroProps) {
  return (
    <header
      className={cn(
        "border-b border-slate-200/70 bg-gradient-to-br from-[#eef3fb] via-white to-[#f5f7fa] px-5 pb-10 pt-24 dark:border-slate-800/80 dark:from-[#0c1520] dark:via-[#0a1018] dark:to-[#08101B] sm:px-6 lg:px-8 lg:pb-12 lg:pt-24",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#074196] dark:text-[#568BD8] sm:text-sm">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#1e293b] dark:text-white md:text-4xl md:leading-tight">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#64748b] dark:text-white/75">
            {subtitle}
          </p>
        ) : null}
      </div>
    </header>
  );
}

type PageContentProps = {
  children: ReactNode;
  className?: string;
};

export function PageContent({ children, className }: PageContentProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 lg:px-8 lg:py-12",
        className,
      )}
    >
      {children}
    </div>
  );
}
