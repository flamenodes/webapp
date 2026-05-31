import * as z from 'zod';
export declare const JsonNullValueFilterSchema: z.ZodEnum<{
    JsonNull: "JsonNull";
    DbNull: "DbNull";
    AnyNull: "AnyNull";
}>;
export type JsonNullValueFilter = z.infer<typeof JsonNullValueFilterSchema>;
//# sourceMappingURL=JsonNullValueFilter.schema.d.ts.map