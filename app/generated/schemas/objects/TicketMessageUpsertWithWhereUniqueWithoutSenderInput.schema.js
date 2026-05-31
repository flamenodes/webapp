import * as z from 'zod';
import { TicketMessageWhereUniqueInputObjectSchema as TicketMessageWhereUniqueInputObjectSchema } from './TicketMessageWhereUniqueInput.schema';
import { TicketMessageUpdateWithoutSenderInputObjectSchema as TicketMessageUpdateWithoutSenderInputObjectSchema } from './TicketMessageUpdateWithoutSenderInput.schema';
import { TicketMessageUncheckedUpdateWithoutSenderInputObjectSchema as TicketMessageUncheckedUpdateWithoutSenderInputObjectSchema } from './TicketMessageUncheckedUpdateWithoutSenderInput.schema';
import { TicketMessageCreateWithoutSenderInputObjectSchema as TicketMessageCreateWithoutSenderInputObjectSchema } from './TicketMessageCreateWithoutSenderInput.schema';
import { TicketMessageUncheckedCreateWithoutSenderInputObjectSchema as TicketMessageUncheckedCreateWithoutSenderInputObjectSchema } from './TicketMessageUncheckedCreateWithoutSenderInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => TicketMessageWhereUniqueInputObjectSchema),
    update: z.union([z.lazy(() => TicketMessageUpdateWithoutSenderInputObjectSchema), z.lazy(() => TicketMessageUncheckedUpdateWithoutSenderInputObjectSchema)]),
    create: z.union([z.lazy(() => TicketMessageCreateWithoutSenderInputObjectSchema), z.lazy(() => TicketMessageUncheckedCreateWithoutSenderInputObjectSchema)])
}).strict();
export const TicketMessageUpsertWithWhereUniqueWithoutSenderInputObjectSchema = makeSchema();
export const TicketMessageUpsertWithWhereUniqueWithoutSenderInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketMessageUpsertWithWhereUniqueWithoutSenderInput.schema.js.map