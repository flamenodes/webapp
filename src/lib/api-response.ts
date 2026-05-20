import type { ZodError } from 'zod'

export type ApiSuccess<T> = {
  success: true
  message: string
  data: T
}

export type ApiError = {
  success: false
  message: string
  error: {
    message: string
    details?: Record<string, string | number | boolean | null>
  }
}

export type ApiResponse<T> = ApiSuccess<T> | ApiError

export const successResponse = <T>(message: string, data: T): ApiSuccess<T> => ({
  success: true,
  message,
  data,
})

export const errorResponse = (
  message: string,
  details?: Record<string, string | number | boolean | null>,
): ApiError => ({
  success: false,
  message,
  error: {
    message,
    details,
  },
})

export const zodErrorResponse = (error: ZodError) =>
  errorResponse('Validation failed.', {
    issues: JSON.stringify(error.format()),
  })
