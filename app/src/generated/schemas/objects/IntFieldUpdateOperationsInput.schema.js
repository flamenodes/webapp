import * as z from 'zod';
const makeSchema = () => z.object({
    set: z.number().int().optional(),
    increment: z.number().int().optional(),
    decrement: z.number().int().optional(),
    multiply: z.number().int().optional(),
    divide: z.number().int().optional()
}).strict();
export const IntFieldUpdateOperationsInputObjectSchema = makeSchema();
export const IntFieldUpdateOperationsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=IntFieldUpdateOperationsInput.schema.js.map