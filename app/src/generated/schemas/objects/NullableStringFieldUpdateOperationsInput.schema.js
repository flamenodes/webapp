import * as z from 'zod';
const makeSchema = () => z.object({
    set: z.string().optional()
}).strict();
export const NullableStringFieldUpdateOperationsInputObjectSchema = makeSchema();
export const NullableStringFieldUpdateOperationsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=NullableStringFieldUpdateOperationsInput.schema.js.map