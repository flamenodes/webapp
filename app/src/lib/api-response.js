export const successResponse = (message, data) => ({
    success: true,
    message,
    data,
});
export const errorResponse = (message, details) => ({
    success: false,
    message,
    error: {
        message,
        details,
    },
});
export const zodErrorResponse = (error) => errorResponse('Validation failed.', {
    issues: JSON.stringify(error.format()),
});
//# sourceMappingURL=api-response.js.map