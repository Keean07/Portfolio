import { useTheme } from '../hooks/useTheme';
import { CV_FILENAME, CV_URL } from '../lib/cv';

const linkCls = 'text-ink-mid transition-colors hover:text-ink';

export default function Nav() {
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/80 backdrop-blur-md">
      <div className="mx-auto flex h-[58px] max-w-[1120px] items-center justify-between gap-3 px-4 sm:h-[62px] sm:px-8">
        <a
          href="#top"
          className="whitespace-nowrap font-mono text-[0.9rem] font-semibold tracking-tight sm:text-[0.95rem]"
        >
          keean ferreira
          <span className="hidden font-normal text-ink-dim sm:inline">&nbsp;/ portfolio</span>
          <span
            className="text-accent motion-safe:animate-[blink_1.15s_steps(1)_infinite]"
            aria-hidden="true"
          >
            _
          </span>
        </a>

        <nav
          className="flex items-center gap-3 font-mono text-[0.8rem] sm:gap-6"
          aria-label="Primary"
        >
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
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            className="whitespace-nowrap rounded-full border border-line-strong px-2.5 py-1 text-ink-mid transition-colors hover:border-ink-dim hover:text-ink sm:px-3"
          >
            <span className="sm:hidden">{theme === 'dark' ? 'light' : 'dark'}</span>
            <span className="hidden sm:inline">{theme === 'dark' ? 'light mode' : 'dark mode'}</span>
          </button>
          <a
            className="inline-flex items-center gap-[0.5ch] whitespace-nowrap rounded-md bg-accent px-2.5 py-1.5 text-white transition-colors hover:bg-accent-strong sm:px-3"
            href={CV_URL}
            download={CV_FILENAME}
          >
            CV <span aria-hidden="true">↓</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
