import * as z from 'zod';
import { TicketPrioritySchema } from '../enums/TicketPriority.schema';
const makeSchema = () => z.object({
    set: TicketPrioritySchema.optional()
}).strict();
export const EnumTicketPriorityFieldUpdateOperationsInputObjectSchema = makeSchema();
export const EnumTicketPriorityFieldUpdateOperationsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=EnumTicketPriorityFieldUpdateOperationsInput.schema.js.map