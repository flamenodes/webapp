import * as z from 'zod';
import { TicketUpdateWithoutMessagesInputObjectSchema as TicketUpdateWithoutMessagesInputObjectSchema } from './TicketUpdateWithoutMessagesInput.schema';
import { TicketUncheckedUpdateWithoutMessagesInputObjectSchema as TicketUncheckedUpdateWithoutMessagesInputObjectSchema } from './TicketUncheckedUpdateWithoutMessagesInput.schema';
import { TicketCreateWithoutMessagesInputObjectSchema as TicketCreateWithoutMessagesInputObjectSchema } from './TicketCreateWithoutMessagesInput.schema';
import { TicketUncheckedCreateWithoutMessagesInputObjectSchema as TicketUncheckedCreateWithoutMessagesInputObjectSchema } from './TicketUncheckedCreateWithoutMessagesInput.schema';
import { TicketWhereInputObjectSchema as TicketWhereInputObjectSchema } from './TicketWhereInput.schema';
const makeSchema = () => z.object({
    update: z.union([z.lazy(() => TicketUpdateWithoutMessagesInputObjectSchema), z.lazy(() => TicketUncheckedUpdateWithoutMessagesInputObjectSchema)]),
    create: z.union([z.lazy(() => TicketCreateWithoutMessagesInputObjectSchema), z.lazy(() => TicketUncheckedCreateWithoutMessagesInputObjectSchema)]),
    where: z.lazy(() => TicketWhereInputObjectSchema).optional()
}).strict();
export const TicketUpsertWithoutMessagesInputObjectSchema = makeSchema();
export const TicketUpsertWithoutMessagesInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketUpsertWithoutMessagesInput.schema.js.map