import * as z from 'zod';
const makeSchema = () => z.object({
    set: z.number().int().optional(),
    increment: z.number().int().optional(),
    decrement: z.number().int().optional(),
    multiply: z.number().int().optional(),
    divide: z.number().int().optional()
}).strict();
export const NullableIntFieldUpdateOperationsInputObjectSchema = makeSchema();
export const NullableIntFieldUpdateOperationsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=NullableIntFieldUpdateOperationsInput.schema.js.map