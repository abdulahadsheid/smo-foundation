import type { ReactNode } from "react";
import Container from "@/components/shared/Container";

interface PageHeaderProps {
  title: string;
  intro?: ReactNode;
  children?: ReactNode;
}

/** PageHeader — the opening of every inner page: a large title and one plain paragraph */
export default function PageHeader({ title, intro, children }: PageHeaderProps) {
  return (
    <header className="border-b border-line pb-12 pt-14 md:pb-16 md:pt-20">
      <Container>
        <h1 className="max-w-[18ch] text-[2.5rem] md:text-[4rem]">{title}</h1>
        {intro && (
          <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-muted md:text-xl">{intro}</p>
        )}
        {children}
      </Container>
    </header>
  );
}
