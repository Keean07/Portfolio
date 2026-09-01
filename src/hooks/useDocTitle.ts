import { useEffect } from 'react';

const BASE = 'Keean Ferreira';

/** Sets document.title to "<page> — Keean Ferreira", restoring the base on unmount. */
export function useDocTitle(page?: string) {
  useEffect(() => {
    document.title = page ? `${page} — ${BASE}` : `${BASE} — Portfolio`;
    return () => {
      document.title = `${BASE} — Portfolio`;
    };
  }, [page]);
}
