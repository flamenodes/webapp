import * as z from 'zod';
import { TicketWhereUniqueInputObjectSchema as TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema';
import { TicketCreateWithoutAssignedToInputObjectSchema as TicketCreateWithoutAssignedToInputObjectSchema } from './TicketCreateWithoutAssignedToInput.schema';
import { TicketUncheckedCreateWithoutAssignedToInputObjectSchema as TicketUncheckedCreateWithoutAssignedToInputObjectSchema } from './TicketUncheckedCreateWithoutAssignedToInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => TicketWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => TicketCreateWithoutAssignedToInputObjectSchema), z.lazy(() => TicketUncheckedCreateWithoutAssignedToInputObjectSchema)])
}).strict();
export const TicketCreateOrConnectWithoutAssignedToInputObjectSchema = makeSchema();
export const TicketCreateOrConnectWithoutAssignedToInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketCreateOrConnectWithoutAssignedToInput.schema.js.map