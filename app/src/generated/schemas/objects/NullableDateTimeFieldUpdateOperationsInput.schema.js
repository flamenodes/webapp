import * as z from 'zod';
const makeSchema = () => z.object({
    set: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional()
}).strict();
export const NullableDateTimeFieldUpdateOperationsInputObjectSchema = makeSchema();
export const NullableDateTimeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=NullableDateTimeFieldUpdateOperationsInput.schema.js.map