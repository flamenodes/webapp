import * as z from 'zod';
import { TicketStatusSchema } from '../enums/TicketStatus.schema';
const makeSchema = () => z.object({
    set: TicketStatusSchema.optional()
}).strict();
export const EnumTicketStatusFieldUpdateOperationsInputObjectSchema = makeSchema();
export const EnumTicketStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=EnumTicketStatusFieldUpdateOperationsInput.schema.js.map