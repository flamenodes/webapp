import * as z from 'zod';
import { TicketTagPresetSelectObjectSchema as TicketTagPresetSelectObjectSchema } from './TicketTagPresetSelect.schema';
const makeSchema = () => z.object({
    select: z.lazy(() => TicketTagPresetSelectObjectSchema).optional()
}).strict();
export const TicketTagPresetArgsObjectSchema = makeSchema();
export const TicketTagPresetArgsObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketTagPresetArgs.schema.js.map