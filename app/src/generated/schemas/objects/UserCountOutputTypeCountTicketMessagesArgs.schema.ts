import * as z from 'zod';
import { TicketMessageWhereInputObjectSchema as TicketMessageWhereInputObjectSchema } from './TicketMessageWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TicketMessageWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountTicketMessagesArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountTicketMessagesArgsObjectZodSchema = makeSchema();
