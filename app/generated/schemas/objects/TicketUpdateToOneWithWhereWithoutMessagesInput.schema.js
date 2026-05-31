import * as z from 'zod';
import { TicketWhereInputObjectSchema as TicketWhereInputObjectSchema } from './TicketWhereInput.schema';
import { TicketUpdateWithoutMessagesInputObjectSchema as TicketUpdateWithoutMessagesInputObjectSchema } from './TicketUpdateWithoutMessagesInput.schema';
import { TicketUncheckedUpdateWithoutMessagesInputObjectSchema as TicketUncheckedUpdateWithoutMessagesInputObjectSchema } from './TicketUncheckedUpdateWithoutMessagesInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => TicketWhereInputObjectSchema).optional(),
    data: z.union([z.lazy(() => TicketUpdateWithoutMessagesInputObjectSchema), z.lazy(() => TicketUncheckedUpdateWithoutMessagesInputObjectSchema)])
}).strict();
export const TicketUpdateToOneWithWhereWithoutMessagesInputObjectSchema = makeSchema();
export const TicketUpdateToOneWithWhereWithoutMessagesInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketUpdateToOneWithWhereWithoutMessagesInput.schema.js.map