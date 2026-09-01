import KnotCanvas from './KnotCanvas';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid min-h-[clamp(420px,64vh,600px)] max-w-[1120px] items-center gap-8 px-4 py-[clamp(2rem,6vw,4rem)] sm:gap-10 sm:px-8 md:grid-cols-[1.15fr_0.85fr]">
        <div className="anim-fade-up relative z-10">
          <span className="eyebrow">Computer Science BSc &middot; graphics &amp; games</span>

          <h1 className="my-5 font-mono text-[clamp(1.9rem,5.4vw,3.3rem)] font-medium leading-[1.15] tracking-[-0.03em] sm:my-6">
            Graphics &amp; games,
            <br />
            from my <span className="text-accent">degree</span>.
          </h1>

          <p className="max-w-[46ch] text-ink-mid">
            I&apos;m a software developer now — three years in, working across enterprise systems
            and full-stack web. The projects here are from my Computer Science degree, which leaned
            into real-time graphics, creative coding, and games.
          </p>

          <div className="mt-7 flex flex-wrap gap-3 font-mono text-[0.85rem] sm:mt-8 sm:gap-3.5">
            <a
              href="#work"
              className="inline-flex items-center gap-[0.6ch] rounded-md bg-accent px-4 py-2.5 text-white transition-transform hover:-translate-y-0.5 hover:bg-accent-strong motion-reduce:hover:translate-y-0 sm:px-5 sm:py-3"
            >
              View the work <span aria-hidden="true">↓</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-md border border-line-strong px-4 py-2.5 text-ink-mid transition-transform hover:-translate-y-0.5 hover:border-ink-dim hover:text-ink motion-reduce:hover:translate-y-0 sm:px-5 sm:py-3"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="anim-fade-up-delayed relative order-first flex min-h-[200px] items-center justify-center self-stretch opacity-90 sm:min-h-[240px] md:order-none md:min-h-0 md:opacity-100">
          <KnotCanvas />
          <p className="absolute bottom-0 right-0 hidden text-right font-mono text-[0.68rem] leading-[1.7] tracking-wide text-ink-dim lg:block">
            p(t) = ((2 + cos 3t) &middot; cos 2t,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(2 + cos 3t) &middot; sin 2t, -sin 3t)
          </p>
        </div>
      </div>
    </section>
  );
}
