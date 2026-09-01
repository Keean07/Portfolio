import type { ReactNode } from 'react';

export default function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow: string;
  title?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-line py-[clamp(4.5rem,11vw,8.5rem)]">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <span className="eyebrow">{eyebrow}</span>
        {title && (
          <h2 className="mt-3 max-w-[34ch] font-mono text-[clamp(1.4rem,3vw,1.9rem)] font-medium leading-snug">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
