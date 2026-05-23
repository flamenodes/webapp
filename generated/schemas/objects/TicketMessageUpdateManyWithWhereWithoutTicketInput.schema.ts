import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { TicketMessageScalarWhereInputObjectSchema as TicketMessageScalarWhereInputObjectSchema } from './TicketMessageScalarWhereInput.schema';
import { TicketMessageUpdateManyMutationInputObjectSchema as TicketMessageUpdateManyMutationInputObjectSchema } from './TicketMessageUpdateManyMutationInput.schema';
import { TicketMessageUncheckedUpdateManyWithoutTicketInputObjectSchema as TicketMessageUncheckedUpdateManyWithoutTicketInputObjectSchema } from './TicketMessageUncheckedUpdateManyWithoutTicketInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TicketMessageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TicketMessageUpdateManyMutationInputObjectSchema), z.lazy(() => TicketMessageUncheckedUpdateManyWithoutTicketInputObjectSchema)])
}).strict();
export const TicketMessageUpdateManyWithWhereWithoutTicketInputObjectSchema: z.ZodType<Prisma.TicketMessageUpdateManyWithWhereWithoutTicketInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketMessageUpdateManyWithWhereWithoutTicketInput>;
export const TicketMessageUpdateManyWithWhereWithoutTicketInputObjectZodSchema = makeSchema();
