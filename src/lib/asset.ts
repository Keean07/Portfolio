/**
 * Resolve a path that lives in `public/` against the deployment base path
 * (`import.meta.env.BASE_URL`, e.g. "/Portfolio/").
 *
 *   asset('images/avatar.jpg') -> '/Portfolio/images/avatar.jpg'
 *   asset('/coinhop.html')     -> '/Portfolio/coinhop.html'
 */
export function asset(path: string): string {
  return import.meta.env.BASE_URL + path.replace(/^\/+/, '');
}
