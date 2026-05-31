import * as z from 'zod';
import { TicketScalarWhereInputObjectSchema as TicketScalarWhereInputObjectSchema } from './TicketScalarWhereInput.schema';
import { TicketUpdateManyMutationInputObjectSchema as TicketUpdateManyMutationInputObjectSchema } from './TicketUpdateManyMutationInput.schema';
import { TicketUncheckedUpdateManyWithoutUserInputObjectSchema as TicketUncheckedUpdateManyWithoutUserInputObjectSchema } from './TicketUncheckedUpdateManyWithoutUserInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => TicketScalarWhereInputObjectSchema),
    data: z.union([z.lazy(() => TicketUpdateManyMutationInputObjectSchema), z.lazy(() => TicketUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const TicketUpdateManyWithWhereWithoutUserInputObjectSchema = makeSchema();
export const TicketUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketUpdateManyWithWhereWithoutUserInput.schema.js.map