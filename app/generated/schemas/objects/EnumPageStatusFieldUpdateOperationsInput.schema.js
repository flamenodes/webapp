import * as z from 'zod';
import { PageStatusSchema } from '../enums/PageStatus.schema';
const makeSchema = () => z.object({
    set: PageStatusSchema.optional()
}).strict();
export const EnumPageStatusFieldUpdateOperationsInputObjectSchema = makeSchema();
export const EnumPageStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=EnumPageStatusFieldUpdateOperationsInput.schema.js.map