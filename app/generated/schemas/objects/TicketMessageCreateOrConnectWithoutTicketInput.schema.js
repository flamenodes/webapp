import * as z from 'zod';
import { TicketMessageWhereUniqueInputObjectSchema as TicketMessageWhereUniqueInputObjectSchema } from './TicketMessageWhereUniqueInput.schema';
import { TicketMessageCreateWithoutTicketInputObjectSchema as TicketMessageCreateWithoutTicketInputObjectSchema } from './TicketMessageCreateWithoutTicketInput.schema';
import { TicketMessageUncheckedCreateWithoutTicketInputObjectSchema as TicketMessageUncheckedCreateWithoutTicketInputObjectSchema } from './TicketMessageUncheckedCreateWithoutTicketInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => TicketMessageWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => TicketMessageCreateWithoutTicketInputObjectSchema), z.lazy(() => TicketMessageUncheckedCreateWithoutTicketInputObjectSchema)])
}).strict();
export const TicketMessageCreateOrConnectWithoutTicketInputObjectSchema = makeSchema();
export const TicketMessageCreateOrConnectWithoutTicketInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketMessageCreateOrConnectWithoutTicketInput.schema.js.map