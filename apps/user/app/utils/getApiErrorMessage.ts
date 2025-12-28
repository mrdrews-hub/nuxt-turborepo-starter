import type { ErrorResponse } from '~/types/ApiResponse'

export function getApiErrorMessage(err: unknown, fallback = 'Terjadi kesalahan'): string {
  const error = err as ErrorResponse
  return error?.message
    || fallback
}