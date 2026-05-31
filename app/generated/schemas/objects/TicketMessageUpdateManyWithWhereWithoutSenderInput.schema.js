import * as z from 'zod';
import { TicketMessageScalarWhereInputObjectSchema as TicketMessageScalarWhereInputObjectSchema } from './TicketMessageScalarWhereInput.schema';
import { TicketMessageUpdateManyMutationInputObjectSchema as TicketMessageUpdateManyMutationInputObjectSchema } from './TicketMessageUpdateManyMutationInput.schema';
import { TicketMessageUncheckedUpdateManyWithoutSenderInputObjectSchema as TicketMessageUncheckedUpdateManyWithoutSenderInputObjectSchema } from './TicketMessageUncheckedUpdateManyWithoutSenderInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => TicketMessageScalarWhereInputObjectSchema),
    data: z.union([z.lazy(() => TicketMessageUpdateManyMutationInputObjectSchema), z.lazy(() => TicketMessageUncheckedUpdateManyWithoutSenderInputObjectSchema)])
}).strict();
export const TicketMessageUpdateManyWithWhereWithoutSenderInputObjectSchema = makeSchema();
export const TicketMessageUpdateManyWithWhereWithoutSenderInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketMessageUpdateManyWithWhereWithoutSenderInput.schema.js.map