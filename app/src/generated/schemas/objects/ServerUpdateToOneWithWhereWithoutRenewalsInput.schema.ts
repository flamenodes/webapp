import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { ServerWhereInputObjectSchema as ServerWhereInputObjectSchema } from './ServerWhereInput.schema';
import { ServerUpdateWithoutRenewalsInputObjectSchema as ServerUpdateWithoutRenewalsInputObjectSchema } from './ServerUpdateWithoutRenewalsInput.schema';
import { ServerUncheckedUpdateWithoutRenewalsInputObjectSchema as ServerUncheckedUpdateWithoutRenewalsInputObjectSchema } from './ServerUncheckedUpdateWithoutRenewalsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServerWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ServerUpdateWithoutRenewalsInputObjectSchema), z.lazy(() => ServerUncheckedUpdateWithoutRenewalsInputObjectSchema)])
}).strict();
export const ServerUpdateToOneWithWhereWithoutRenewalsInputObjectSchema: z.ZodType<Prisma.ServerUpdateToOneWithWhereWithoutRenewalsInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUpdateToOneWithWhereWithoutRenewalsInput>;
export const ServerUpdateToOneWithWhereWithoutRenewalsInputObjectZodSchema = makeSchema();
