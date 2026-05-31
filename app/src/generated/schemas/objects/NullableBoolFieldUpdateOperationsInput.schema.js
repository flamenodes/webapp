import * as z from 'zod';
const makeSchema = () => z.object({
    set: z.boolean().optional()
}).strict();
export const NullableBoolFieldUpdateOperationsInputObjectSchema = makeSchema();
export const NullableBoolFieldUpdateOperationsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=NullableBoolFieldUpdateOperationsInput.schema.js.map