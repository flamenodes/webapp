import * as z from 'zod';
export const transformJsonNull = (v) => {
    if (v == null || v === 'DbNull')
        return null;
    if (v === 'JsonNull')
        return null;
    return v;
};
export const JsonValueSchema = z.lazy(() => z.union([
    z.string(), z.number(), z.boolean(), z.literal(null),
    z.record(z.string(), z.lazy(() => JsonValueSchema.optional())),
    z.array(z.lazy(() => JsonValueSchema)),
]));
export const InputJsonValueSchema = z.lazy(() => z.union([
    z.string(), z.number(), z.boolean(),
    z.record(z.string(), z.lazy(() => z.union([InputJsonValueSchema, z.literal(null)]))),
    z.array(z.lazy(() => z.union([InputJsonValueSchema, z.literal(null)]))),
]));
export const NullableJsonValue = z
    .union([JsonValueSchema, z.literal('DbNull'), z.literal('JsonNull'), z.literal(null)])
    .transform((v) => transformJsonNull(v));
//# sourceMappingURL=json-helpers.js.map