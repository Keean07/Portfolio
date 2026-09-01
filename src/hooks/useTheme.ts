import { useCallback, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
const KEY = 'kf-theme';

function systemPrefersDark(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function stored(): Theme | null {
  try {
    const v = localStorage.getItem(KEY);
    return v === 'light' || v === 'dark' ? v : null;
  } catch {
    return null;
  }
}

/**
 * Theme is "system" until the visitor toggles. A choice is persisted and
 * written to <html data-theme>, which the CSS token layer reads.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => stored() ?? (systemPrefersDark() ? 'dark' : 'light'));
  const [explicit, setExplicit] = useState<boolean>(() => stored() !== null);

  useEffect(() => {
    const root = document.documentElement;
    if (explicit) {
      root.dataset.theme = theme;
      try {
        localStorage.setItem(KEY, theme);
      } catch {
        /* private mode — fine, session-only */
      }
    } else {
      delete root.dataset.theme;
    }
  }, [theme, explicit]);

  // follow the OS while the visitor hasn't chosen
  useEffect(() => {
    if (explicit) return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => setTheme(mq.matches ? 'dark' : 'light');
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [explicit]);

  const toggle = useCallback(() => {
    setExplicit(true);
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggle };
}
