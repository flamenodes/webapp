import * as z from 'zod';
import { TicketWhereUniqueInputObjectSchema as TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema';
import { TicketUpdateWithoutUserInputObjectSchema as TicketUpdateWithoutUserInputObjectSchema } from './TicketUpdateWithoutUserInput.schema';
import { TicketUncheckedUpdateWithoutUserInputObjectSchema as TicketUncheckedUpdateWithoutUserInputObjectSchema } from './TicketUncheckedUpdateWithoutUserInput.schema';
import { TicketCreateWithoutUserInputObjectSchema as TicketCreateWithoutUserInputObjectSchema } from './TicketCreateWithoutUserInput.schema';
import { TicketUncheckedCreateWithoutUserInputObjectSchema as TicketUncheckedCreateWithoutUserInputObjectSchema } from './TicketUncheckedCreateWithoutUserInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => TicketWhereUniqueInputObjectSchema),
    update: z.union([z.lazy(() => TicketUpdateWithoutUserInputObjectSchema), z.lazy(() => TicketUncheckedUpdateWithoutUserInputObjectSchema)]),
    create: z.union([z.lazy(() => TicketCreateWithoutUserInputObjectSchema), z.lazy(() => TicketUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const TicketUpsertWithWhereUniqueWithoutUserInputObjectSchema = makeSchema();
export const TicketUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketUpsertWithWhereUniqueWithoutUserInput.schema.js.map