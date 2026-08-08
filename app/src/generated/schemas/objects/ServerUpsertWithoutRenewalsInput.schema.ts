import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { ServerUpdateWithoutRenewalsInputObjectSchema as ServerUpdateWithoutRenewalsInputObjectSchema } from './ServerUpdateWithoutRenewalsInput.schema';
import { ServerUncheckedUpdateWithoutRenewalsInputObjectSchema as ServerUncheckedUpdateWithoutRenewalsInputObjectSchema } from './ServerUncheckedUpdateWithoutRenewalsInput.schema';
import { ServerCreateWithoutRenewalsInputObjectSchema as ServerCreateWithoutRenewalsInputObjectSchema } from './ServerCreateWithoutRenewalsInput.schema';
import { ServerUncheckedCreateWithoutRenewalsInputObjectSchema as ServerUncheckedCreateWithoutRenewalsInputObjectSchema } from './ServerUncheckedCreateWithoutRenewalsInput.schema';
import { ServerWhereInputObjectSchema as ServerWhereInputObjectSchema } from './ServerWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ServerUpdateWithoutRenewalsInputObjectSchema), z.lazy(() => ServerUncheckedUpdateWithoutRenewalsInputObjectSchema)]),
  create: z.union([z.lazy(() => ServerCreateWithoutRenewalsInputObjectSchema), z.lazy(() => ServerUncheckedCreateWithoutRenewalsInputObjectSchema)]),
  where: z.lazy(() => ServerWhereInputObjectSchema).optional()
}).strict();
export const ServerUpsertWithoutRenewalsInputObjectSchema: z.ZodType<Prisma.ServerUpsertWithoutRenewalsInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUpsertWithoutRenewalsInput>;
export const ServerUpsertWithoutRenewalsInputObjectZodSchema = makeSchema();
