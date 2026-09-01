import Section from './Section';

const skillGroups = [
  { label: 'Languages', items: ['C#', 'JavaScript', 'Python', 'C++', 'HTML/CSS'] },
  { label: 'Games & graphics', items: ['Unity', 'p5.js', 'WebGL', 'Shaders'] },
  { label: 'Data & ML', items: ['TensorFlow', 'NumPy', 'Jupyter'] },
];

const timeline = [
  {
    when: '2019 — 2023',
    what: 'BSc Computer Science',
    note: 'University of London — studied fully online, self-paced.',
  },
  {
    when: '2023',
    what: 'Final-year project: CoinHop',
    note: 'Solo-built and published a complete Unity game.',
  },
];

const Tag = ({ children }: { children: string }) => (
  <span className="rounded border border-line bg-panel px-2 py-0.5 font-mono text-[0.68rem] tracking-wide text-ink-mid">
    {children}
  </span>
);

const PanelLabel = ({ children }: { children: string }) => (
  <div className="mb-4 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-dim">{children}</div>
);

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="// about"
      title="Self-directed, remote by default, drawn to real-time work."
    >
      <div className="mt-[clamp(2.5rem,6vw,3.5rem)] grid gap-[clamp(2rem,6vw,4.5rem)] md:grid-cols-[1.15fr_0.85fr]">
        <div className="max-w-[60ch] space-y-[1.1rem] text-ink-mid">
          <p>
            I'm a Computer Science graduate (University of London, 2019–2023), based in South Africa.
            My degree ran the full width of the discipline — graphics programming, machine learning,
            computer security, databases, 3D animation, and computational maths — and I did all of it
            remotely while the university sat in London.
          </p>
          <p>
            What I keep returning to is work that renders, simulates, and responds: creative-coding
            sketches, a paint tool, game prototypes, a published Unity title. I want to build worlds
            people spend real time in, and I'm looking for a games or graphics team to do it with.
          </p>
        </div>

        <div>
          <PanelLabel>Focus</PanelLabel>
          <div className="space-y-[1.4rem]">
            {skillGroups.map((g) => (
              <div key={g.label}>
                <h3 className="mb-2 text-[0.9rem] font-semibold text-ink">{g.label}</h3>
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
