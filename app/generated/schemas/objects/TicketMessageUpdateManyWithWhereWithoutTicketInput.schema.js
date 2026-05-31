import * as z from 'zod';
import { TicketMessageScalarWhereInputObjectSchema as TicketMessageScalarWhereInputObjectSchema } from './TicketMessageScalarWhereInput.schema';
import { TicketMessageUpdateManyMutationInputObjectSchema as TicketMessageUpdateManyMutationInputObjectSchema } from './TicketMessageUpdateManyMutationInput.schema';
import { TicketMessageUncheckedUpdateManyWithoutTicketInputObjectSchema as TicketMessageUncheckedUpdateManyWithoutTicketInputObjectSchema } from './TicketMessageUncheckedUpdateManyWithoutTicketInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => TicketMessageScalarWhereInputObjectSchema),
    data: z.union([z.lazy(() => TicketMessageUpdateManyMutationInputObjectSchema), z.lazy(() => TicketMessageUncheckedUpdateManyWithoutTicketInputObjectSchema)])
}).strict();
export const TicketMessageUpdateManyWithWhereWithoutTicketInputObjectSchema = makeSchema();
export const TicketMessageUpdateManyWithWhereWithoutTicketInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketMessageUpdateManyWithWhereWithoutTicketInput.schema.js.map