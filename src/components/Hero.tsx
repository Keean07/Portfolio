import KnotCanvas from './KnotCanvas';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid min-h-[clamp(460px,66vh,620px)] max-w-[1120px] items-center gap-8 px-5 py-[clamp(2.5rem,6vw,4rem)] sm:px-8 md:grid-cols-[1.05fr_0.95fr]">
        <div className="anim-fade-up relative z-10">
          <span className="eyebrow">Computer Science BSc &middot; Games &amp; graphics</span>

          <h1 className="my-6 font-mono text-[clamp(2.3rem,6vw,4rem)] font-medium leading-[1.12] tracking-[-0.03em]">
            I make things
            <br />
            that run on a <span className="text-accent">canvas</span>.
          </h1>

          <p className="max-w-[44ch] text-ink-mid">
            Building with code since 2019 — real-time graphics, creative-coding sketches, and a
            published Unity game. Now aiming at a career in games development, remote or relocating.
          </p>

          <div className="mt-8 flex flex-wrap gap-3.5 font-mono text-[0.85rem]">
            <a
              href="#work"
              className="inline-flex items-center gap-[0.6ch] rounded-md bg-accent px-5 py-3 text-white transition-transform hover:-translate-y-0.5 hover:bg-accent-strong motion-reduce:hover:translate-y-0"
            >
              View the work <span aria-hidden="true">↓</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-md border border-line-strong px-5 py-3 text-ink-mid transition-transform hover:-translate-y-0.5 hover:border-ink-dim hover:text-ink motion-reduce:hover:translate-y-0"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="anim-fade-up-delayed relative order-first flex min-h-[240px] items-center justify-center self-stretch opacity-90 md:order-none md:min-h-0 md:opacity-100">
          <KnotCanvas />
          <p className="absolute bottom-0 right-0 hidden text-right font-mono text-[0.68rem] leading-[1.7] tracking-wide text-ink-dim md:block">
            p(t) = ((2 + cos 3t) &middot; cos 2t,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(2 + cos 3t) &middot; sin 2t, -sin 3t)
          </p>
        </div>
      </div>
    </section>
  );
}
