import * as z from 'zod';
import { TicketWhereUniqueInputObjectSchema as TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema';
import { TicketUpdateWithoutUserInputObjectSchema as TicketUpdateWithoutUserInputObjectSchema } from './TicketUpdateWithoutUserInput.schema';
import { TicketUncheckedUpdateWithoutUserInputObjectSchema as TicketUncheckedUpdateWithoutUserInputObjectSchema } from './TicketUncheckedUpdateWithoutUserInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => TicketWhereUniqueInputObjectSchema),
    data: z.union([z.lazy(() => TicketUpdateWithoutUserInputObjectSchema), z.lazy(() => TicketUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const TicketUpdateWithWhereUniqueWithoutUserInputObjectSchema = makeSchema();
export const TicketUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketUpdateWithWhereUniqueWithoutUserInput.schema.js.map