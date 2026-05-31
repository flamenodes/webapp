import * as z from 'zod';
import { TicketCreateWithoutMessagesInputObjectSchema as TicketCreateWithoutMessagesInputObjectSchema } from './TicketCreateWithoutMessagesInput.schema';
import { TicketUncheckedCreateWithoutMessagesInputObjectSchema as TicketUncheckedCreateWithoutMessagesInputObjectSchema } from './TicketUncheckedCreateWithoutMessagesInput.schema';
import { TicketCreateOrConnectWithoutMessagesInputObjectSchema as TicketCreateOrConnectWithoutMessagesInputObjectSchema } from './TicketCreateOrConnectWithoutMessagesInput.schema';
import { TicketUpsertWithoutMessagesInputObjectSchema as TicketUpsertWithoutMessagesInputObjectSchema } from './TicketUpsertWithoutMessagesInput.schema';
import { TicketWhereUniqueInputObjectSchema as TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema';
import { TicketUpdateToOneWithWhereWithoutMessagesInputObjectSchema as TicketUpdateToOneWithWhereWithoutMessagesInputObjectSchema } from './TicketUpdateToOneWithWhereWithoutMessagesInput.schema';
import { TicketUpdateWithoutMessagesInputObjectSchema as TicketUpdateWithoutMessagesInputObjectSchema } from './TicketUpdateWithoutMessagesInput.schema';
import { TicketUncheckedUpdateWithoutMessagesInputObjectSchema as TicketUncheckedUpdateWithoutMessagesInputObjectSchema } from './TicketUncheckedUpdateWithoutMessagesInput.schema';
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => TicketCreateWithoutMessagesInputObjectSchema), z.lazy(() => TicketUncheckedCreateWithoutMessagesInputObjectSchema)]).optional(),
    connectOrCreate: z.lazy(() => TicketCreateOrConnectWithoutMessagesInputObjectSchema).optional(),
    upsert: z.lazy(() => TicketUpsertWithoutMessagesInputObjectSchema).optional(),
    connect: z.lazy(() => TicketWhereUniqueInputObjectSchema).optional(),
    update: z.union([z.lazy(() => TicketUpdateToOneWithWhereWithoutMessagesInputObjectSchema), z.lazy(() => TicketUpdateWithoutMessagesInputObjectSchema), z.lazy(() => TicketUncheckedUpdateWithoutMessagesInputObjectSchema)]).optional()
}).strict();
export const TicketUpdateOneRequiredWithoutMessagesNestedInputObjectSchema = makeSchema();
export const TicketUpdateOneRequiredWithoutMessagesNestedInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketUpdateOneRequiredWithoutMessagesNestedInput.schema.js.map