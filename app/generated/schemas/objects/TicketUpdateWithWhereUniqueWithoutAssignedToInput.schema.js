import * as z from 'zod';
import { TicketWhereUniqueInputObjectSchema as TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema';
import { TicketUpdateWithoutAssignedToInputObjectSchema as TicketUpdateWithoutAssignedToInputObjectSchema } from './TicketUpdateWithoutAssignedToInput.schema';
import { TicketUncheckedUpdateWithoutAssignedToInputObjectSchema as TicketUncheckedUpdateWithoutAssignedToInputObjectSchema } from './TicketUncheckedUpdateWithoutAssignedToInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => TicketWhereUniqueInputObjectSchema),
    data: z.union([z.lazy(() => TicketUpdateWithoutAssignedToInputObjectSchema), z.lazy(() => TicketUncheckedUpdateWithoutAssignedToInputObjectSchema)])
}).strict();
export const TicketUpdateWithWhereUniqueWithoutAssignedToInputObjectSchema = makeSchema();
export const TicketUpdateWithWhereUniqueWithoutAssignedToInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketUpdateWithWhereUniqueWithoutAssignedToInput.schema.js.map