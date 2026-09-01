const links = [
  { label: 'keeanferreira07@gmail.com', href: 'mailto:keeanferreira07@gmail.com' },
  { label: 'github.com/Keean07', href: 'https://github.com/Keean07' },
  { label: 'linkedin.com/in/keeanferreira', href: 'https://www.linkedin.com/in/keeanferreira/' },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line py-[clamp(4.5rem,11vw,8.5rem)]">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <span className="eyebrow">// contact</span>
        <h2 className="my-6 max-w-[16ch] font-mono text-[clamp(2rem,6vw,3.4rem)] font-medium tracking-[-0.03em]">
          Let&apos;s build something<span className="text-accent">_</span>
        </h2>
        <p className="max-w-[60ch] text-ink-mid">
          Open to games and graphics roles — remote, or relocating for the right team. The fastest
          way to reach me is email.
        </p>
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4 font-mono text-[0.9rem]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
              className="border-b border-line-strong pb-0.5 text-ink-mid transition-colors hover:border-accent hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
