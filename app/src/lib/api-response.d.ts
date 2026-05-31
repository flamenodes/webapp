import type { ZodError } from 'zod';
export type ApiSuccess<T> = {
    success: true;
    message: string;
    data: T;
};
export type ApiError = {
    success: false;
    message: string;
    error: {
        message: string;
        details?: Record<string, string | number | boolean | null>;
    };
};
export type ApiResponse<T> = ApiSuccess<T> | ApiError;
export declare const successResponse: <T>(message: string, data: T) => ApiSuccess<T>;
export declare const errorResponse: (message: string, details?: Record<string, string | number | boolean | null>) => ApiError;
export declare const zodErrorResponse: (error: ZodError) => ApiError;
//# sourceMappingURL=api-response.d.ts.map