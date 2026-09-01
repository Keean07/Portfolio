const links = [
  { label: 'keeanferreira07@gmail.com', href: 'mailto:keeanferreira07@gmail.com' },
  { label: 'github.com/Keean07', href: 'https://github.com/Keean07' },
  { label: 'linkedin.com/in/keeanferreira', href: 'https://www.linkedin.com/in/keeanferreira/' },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line py-[clamp(4rem,11vw,8.5rem)]">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-8">
        <span className="eyebrow">// contact</span>
        <h2 className="my-5 max-w-[14ch] font-mono text-[clamp(1.9rem,7vw,3.4rem)] font-medium tracking-[-0.03em] sm:my-6">
          Get in touch<span className="text-accent">_</span>
        </h2>
        <p className="max-w-[58ch] text-ink-mid">
          I&apos;m a software developer in Pretoria (GMT+2), working remotely with UK-based teams.
          Always happy to talk about interesting work — email is the fastest way to reach me.
        </p>
        <div className="mt-6 flex flex-col gap-3 font-mono text-[0.88rem] sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-4 sm:text-[0.9rem]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
              className="w-fit border-b border-line-strong pb-0.5 text-ink-mid transition-colors hover:border-accent hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
