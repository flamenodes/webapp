import * as z from 'zod';
import { TicketWhereUniqueInputObjectSchema as TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema';
import { TicketCreateWithoutMessagesInputObjectSchema as TicketCreateWithoutMessagesInputObjectSchema } from './TicketCreateWithoutMessagesInput.schema';
import { TicketUncheckedCreateWithoutMessagesInputObjectSchema as TicketUncheckedCreateWithoutMessagesInputObjectSchema } from './TicketUncheckedCreateWithoutMessagesInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => TicketWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => TicketCreateWithoutMessagesInputObjectSchema), z.lazy(() => TicketUncheckedCreateWithoutMessagesInputObjectSchema)])
}).strict();
export const TicketCreateOrConnectWithoutMessagesInputObjectSchema = makeSchema();
export const TicketCreateOrConnectWithoutMessagesInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketCreateOrConnectWithoutMessagesInput.schema.js.map