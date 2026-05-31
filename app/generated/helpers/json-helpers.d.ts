import * as z from 'zod';
export type JsonPrimitive = string | number | boolean | null;
export type JsonValue = JsonPrimitive | JsonValue[] | {
    [k: string]: JsonValue;
};
export type InputJsonValue = JsonPrimitive | InputJsonValue[] | {
    [k: string]: InputJsonValue | null;
};
export type NullableJsonInput = JsonValue | 'JsonNull' | 'DbNull' | null;
export declare const transformJsonNull: (v?: NullableJsonInput) => JsonValue;
export declare const JsonValueSchema: z.ZodType<JsonValue>;
export declare const InputJsonValueSchema: z.ZodType<InputJsonValue>;
export declare const NullableJsonValue: z.ZodPipe<z.ZodUnion<readonly [z.ZodType<JsonValue, unknown, z.core.$ZodTypeInternals<JsonValue, unknown>>, z.ZodLiteral<"DbNull">, z.ZodLiteral<"JsonNull">, z.ZodLiteral<null>]>, z.ZodTransform<string | number | boolean | JsonValue[] | {
    [k: string]: JsonValue;
} | null, JsonValue>>;
//# sourceMappingURL=json-helpers.d.ts.map