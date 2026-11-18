/**
 * API base URL for HTTP requests.
 * - Production (Vercel): leave empty — requests use same-origin /api routes.
 * - Local dev: leave empty — the Vite dev server proxies /api to the local
 *   backend (VITE_API_PROXY_TARGET, default http://localhost:5001).
 */
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

export function apiUrl(path) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${API_BASE_URL}${normalized}`;
}
