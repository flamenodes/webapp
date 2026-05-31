import * as z from 'zod';
import { TicketMessageWhereUniqueInputObjectSchema as TicketMessageWhereUniqueInputObjectSchema } from './TicketMessageWhereUniqueInput.schema';
import { TicketMessageUpdateWithoutTicketInputObjectSchema as TicketMessageUpdateWithoutTicketInputObjectSchema } from './TicketMessageUpdateWithoutTicketInput.schema';
import { TicketMessageUncheckedUpdateWithoutTicketInputObjectSchema as TicketMessageUncheckedUpdateWithoutTicketInputObjectSchema } from './TicketMessageUncheckedUpdateWithoutTicketInput.schema';
import { TicketMessageCreateWithoutTicketInputObjectSchema as TicketMessageCreateWithoutTicketInputObjectSchema } from './TicketMessageCreateWithoutTicketInput.schema';
import { TicketMessageUncheckedCreateWithoutTicketInputObjectSchema as TicketMessageUncheckedCreateWithoutTicketInputObjectSchema } from './TicketMessageUncheckedCreateWithoutTicketInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => TicketMessageWhereUniqueInputObjectSchema),
    update: z.union([z.lazy(() => TicketMessageUpdateWithoutTicketInputObjectSchema), z.lazy(() => TicketMessageUncheckedUpdateWithoutTicketInputObjectSchema)]),
    create: z.union([z.lazy(() => TicketMessageCreateWithoutTicketInputObjectSchema), z.lazy(() => TicketMessageUncheckedCreateWithoutTicketInputObjectSchema)])
}).strict();
export const TicketMessageUpsertWithWhereUniqueWithoutTicketInputObjectSchema = makeSchema();
export const TicketMessageUpsertWithWhereUniqueWithoutTicketInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketMessageUpsertWithWhereUniqueWithoutTicketInput.schema.js.map