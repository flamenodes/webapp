import * as z from 'zod';
const makeSchema = () => z.object({
    set: z.boolean().optional()
}).strict();
export const BoolFieldUpdateOperationsInputObjectSchema = makeSchema();
export const BoolFieldUpdateOperationsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=BoolFieldUpdateOperationsInput.schema.js.map