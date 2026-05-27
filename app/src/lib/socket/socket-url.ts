const DEFAULT_SOCKET_SERVER_URL = 'http://localhost:4000'

export function getSocketServerUrl(env: Record<string, unknown> | undefined = (import.meta as any).env): string {
  const url = env?.VITE_SOCKET_SERVER_URL as string | undefined
  const trimmed = typeof url === 'string' ? url.trim() : ''
  return trimmed || DEFAULT_SOCKET_SERVER_URL
}
