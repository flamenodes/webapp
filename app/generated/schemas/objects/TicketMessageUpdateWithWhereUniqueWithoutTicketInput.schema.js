import * as z from 'zod';
import { TicketMessageWhereUniqueInputObjectSchema as TicketMessageWhereUniqueInputObjectSchema } from './TicketMessageWhereUniqueInput.schema';
import { TicketMessageUpdateWithoutTicketInputObjectSchema as TicketMessageUpdateWithoutTicketInputObjectSchema } from './TicketMessageUpdateWithoutTicketInput.schema';
import { TicketMessageUncheckedUpdateWithoutTicketInputObjectSchema as TicketMessageUncheckedUpdateWithoutTicketInputObjectSchema } from './TicketMessageUncheckedUpdateWithoutTicketInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => TicketMessageWhereUniqueInputObjectSchema),
    data: z.union([z.lazy(() => TicketMessageUpdateWithoutTicketInputObjectSchema), z.lazy(() => TicketMessageUncheckedUpdateWithoutTicketInputObjectSchema)])
}).strict();
export const TicketMessageUpdateWithWhereUniqueWithoutTicketInputObjectSchema = makeSchema();
export const TicketMessageUpdateWithWhereUniqueWithoutTicketInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketMessageUpdateWithWhereUniqueWithoutTicketInput.schema.js.map