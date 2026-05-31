import * as z from 'zod';
import { TicketCreateWithoutMessagesInputObjectSchema as TicketCreateWithoutMessagesInputObjectSchema } from './TicketCreateWithoutMessagesInput.schema';
import { TicketUncheckedCreateWithoutMessagesInputObjectSchema as TicketUncheckedCreateWithoutMessagesInputObjectSchema } from './TicketUncheckedCreateWithoutMessagesInput.schema';
import { TicketCreateOrConnectWithoutMessagesInputObjectSchema as TicketCreateOrConnectWithoutMessagesInputObjectSchema } from './TicketCreateOrConnectWithoutMessagesInput.schema';
import { TicketWhereUniqueInputObjectSchema as TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema';
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => TicketCreateWithoutMessagesInputObjectSchema), z.lazy(() => TicketUncheckedCreateWithoutMessagesInputObjectSchema)]).optional(),
    connectOrCreate: z.lazy(() => TicketCreateOrConnectWithoutMessagesInputObjectSchema).optional(),
    connect: z.lazy(() => TicketWhereUniqueInputObjectSchema).optional()
}).strict();
export const TicketCreateNestedOneWithoutMessagesInputObjectSchema = makeSchema();
export const TicketCreateNestedOneWithoutMessagesInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketCreateNestedOneWithoutMessagesInput.schema.js.map