import { useTheme } from '../hooks/useTheme';

const linkCls = 'text-ink-mid transition-colors hover:text-ink';

export default function Nav() {
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/80 backdrop-blur-md">
      <div className="mx-auto flex h-[62px] max-w-[1120px] items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="flex items-baseline gap-[0.5ch] font-mono text-[0.95rem] font-semibold tracking-tight"
        >
          keean ferreira <span className="font-normal text-ink-dim">/ portfolio</span>
          <span className="text-accent motion-safe:animate-[blink_1.15s_steps(1)_infinite]">_</span>
        </a>

        <nav className="flex items-center gap-4 font-mono text-[0.8rem] sm:gap-8" aria-label="Primary">
          <a className={`hidden sm:inline ${linkCls}`} href="#work">
            work
          </a>
          <a className={`hidden sm:inline ${linkCls}`} href="#about">
            about
          </a>
          <a className={`hidden sm:inline ${linkCls}`} href="#contact">
            contact
          </a>
          <span className="hidden h-[18px] w-px bg-line-strong sm:block" aria-hidden="true" />
          <button
            type="button"
            onClick={toggle}
            aria-pressed={theme === 'light'}
            className="rounded-full border border-line-strong px-3 py-1 text-ink-mid transition-colors hover:border-ink-dim hover:text-ink"
          >
            {theme === 'dark' ? 'light mode' : 'dark mode'}
          </button>
          <a
            className="rounded-md bg-accent px-3 py-1.5 text-white transition-colors hover:bg-accent-strong"
            href="#contact"
          >
            CV ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
