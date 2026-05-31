import * as z from 'zod';
import { TicketScalarWhereInputObjectSchema as TicketScalarWhereInputObjectSchema } from './TicketScalarWhereInput.schema';
import { TicketUpdateManyMutationInputObjectSchema as TicketUpdateManyMutationInputObjectSchema } from './TicketUpdateManyMutationInput.schema';
import { TicketUncheckedUpdateManyWithoutAssignedToInputObjectSchema as TicketUncheckedUpdateManyWithoutAssignedToInputObjectSchema } from './TicketUncheckedUpdateManyWithoutAssignedToInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => TicketScalarWhereInputObjectSchema),
    data: z.union([z.lazy(() => TicketUpdateManyMutationInputObjectSchema), z.lazy(() => TicketUncheckedUpdateManyWithoutAssignedToInputObjectSchema)])
}).strict();
export const TicketUpdateManyWithWhereWithoutAssignedToInputObjectSchema = makeSchema();
export const TicketUpdateManyWithWhereWithoutAssignedToInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketUpdateManyWithWhereWithoutAssignedToInput.schema.js.map