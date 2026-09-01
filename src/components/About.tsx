import Section from './Section';

const skillPanels = [
  {
    label: 'Now',
    items: ['TypeScript', 'React', 'Node.js', 'SAP / ABAP', 'PostgreSQL', 'Docker'],
  },
  {
    label: 'In these projects',
    items: ['Unity', 'C#', 'p5.js', 'WebGL', 'TensorFlow', 'Python'],
  },
];

const timeline = [
  {
    when: '2019 — 2023',
    what: 'BSc Computer Science — First-Class Honours',
    note: 'University of London, studied online from South Africa.',
  },
  {
    when: '2023 — 2026',
    what: 'Software Developer — Lark & Stern Consulting',
    note: 'SAPUI5 / Fiori front ends and ABAP on S/4HANA for pharma clients.',
  },
  {
    when: '2026 — now',
    what: 'Software Engineer — BSI-Auto',
    note: 'Features and refactoring in large legacy codebases for dealership networks.',
  },
  {
    when: 'Ongoing',
    what: 'RealtyGenie — independent SaaS',
    note: 'A full-stack platform for South African real-estate agencies.',
  },
];

const Tag = ({ children }: { children: string }) => (
  <span className="rounded border border-line bg-panel px-2 py-0.5 font-mono text-[0.68rem] tracking-wide text-ink-mid">
    {children}
  </span>
);

const PanelLabel = ({ children }: { children: string }) => (
  <div className="mb-4 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-dim">
    {children}
  </div>
);

export default function About() {
  return (
    <Section id="about" eyebrow="// about" title="A software developer now — this is where I started.">
      <div className="mt-[clamp(2.5rem,6vw,3.5rem)] grid gap-[clamp(2rem,6vw,4rem)] md:grid-cols-[1.15fr_0.85fr]">
        <div className="max-w-[60ch] space-y-[1.1rem] text-ink-mid">
          <p>
            I&apos;m a software developer based in Pretoria, South Africa (GMT+2). I finished a
            First-Class Honours BSc in Computer Science through the University of London in 2023, and
            the three years since have gone into enterprise SAP development, full-stack web
            applications, and a SaaS product of my own.
          </p>
          <p>
            The work on this page is older — coursework and side projects from a degree that leaned
            hard into graphics, 3D, and games. It isn&apos;t what I do day to day anymore, but it&apos;s
            the stuff I most enjoyed building, so it stays.
          </p>
        </div>

        <div>
          <div className="grid gap-[1.4rem] sm:grid-cols-2 md:grid-cols-1">
            {skillPanels.map((g) => (
              <div key={g.label}>
                <PanelLabel>{g.label}</PanelLabel>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((i) => (
                    <Tag key={i}>{i}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <PanelLabel>Background</PanelLabel>
            <ul className="relative space-y-5 pl-6 before:absolute before:bottom-1.5 before:left-[3px] before:top-1.5 before:w-px before:bg-line-strong">
              {timeline.map((t) => (
                <li
                  key={t.what}
                  className="relative before:absolute before:-left-6 before:top-[7px] before:h-[7px] before:w-[7px] before:rounded-full before:bg-accent before:shadow-[0_0_0_3px_var(--accent-dim)]"
                >
                  <div className="font-mono text-[0.72rem] tabular-nums text-ink-dim">{t.when}</div>
                  <div className="mt-0.5 text-[0.98rem] font-semibold">{t.what}</div>
                  <div className="mt-0.5 text-[0.88rem] text-ink-mid">{t.note}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
