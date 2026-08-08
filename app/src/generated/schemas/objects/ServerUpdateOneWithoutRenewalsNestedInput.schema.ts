import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { ServerCreateWithoutRenewalsInputObjectSchema as ServerCreateWithoutRenewalsInputObjectSchema } from './ServerCreateWithoutRenewalsInput.schema';
import { ServerUncheckedCreateWithoutRenewalsInputObjectSchema as ServerUncheckedCreateWithoutRenewalsInputObjectSchema } from './ServerUncheckedCreateWithoutRenewalsInput.schema';
import { ServerCreateOrConnectWithoutRenewalsInputObjectSchema as ServerCreateOrConnectWithoutRenewalsInputObjectSchema } from './ServerCreateOrConnectWithoutRenewalsInput.schema';
import { ServerUpsertWithoutRenewalsInputObjectSchema as ServerUpsertWithoutRenewalsInputObjectSchema } from './ServerUpsertWithoutRenewalsInput.schema';
import { ServerWhereInputObjectSchema as ServerWhereInputObjectSchema } from './ServerWhereInput.schema';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerUpdateToOneWithWhereWithoutRenewalsInputObjectSchema as ServerUpdateToOneWithWhereWithoutRenewalsInputObjectSchema } from './ServerUpdateToOneWithWhereWithoutRenewalsInput.schema';
import { ServerUpdateWithoutRenewalsInputObjectSchema as ServerUpdateWithoutRenewalsInputObjectSchema } from './ServerUpdateWithoutRenewalsInput.schema';
import { ServerUncheckedUpdateWithoutRenewalsInputObjectSchema as ServerUncheckedUpdateWithoutRenewalsInputObjectSchema } from './ServerUncheckedUpdateWithoutRenewalsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ServerCreateWithoutRenewalsInputObjectSchema), z.lazy(() => ServerUncheckedCreateWithoutRenewalsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ServerCreateOrConnectWithoutRenewalsInputObjectSchema).optional(),
  upsert: z.lazy(() => ServerUpsertWithoutRenewalsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ServerWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ServerWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ServerWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ServerUpdateToOneWithWhereWithoutRenewalsInputObjectSchema), z.lazy(() => ServerUpdateWithoutRenewalsInputObjectSchema), z.lazy(() => ServerUncheckedUpdateWithoutRenewalsInputObjectSchema)]).optional()
}).strict();
export const ServerUpdateOneWithoutRenewalsNestedInputObjectSchema: z.ZodType<Prisma.ServerUpdateOneWithoutRenewalsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUpdateOneWithoutRenewalsNestedInput>;
export const ServerUpdateOneWithoutRenewalsNestedInputObjectZodSchema = makeSchema();
