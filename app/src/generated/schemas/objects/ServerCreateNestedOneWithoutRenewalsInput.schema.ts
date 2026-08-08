import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { ServerCreateWithoutRenewalsInputObjectSchema as ServerCreateWithoutRenewalsInputObjectSchema } from './ServerCreateWithoutRenewalsInput.schema';
import { ServerUncheckedCreateWithoutRenewalsInputObjectSchema as ServerUncheckedCreateWithoutRenewalsInputObjectSchema } from './ServerUncheckedCreateWithoutRenewalsInput.schema';
import { ServerCreateOrConnectWithoutRenewalsInputObjectSchema as ServerCreateOrConnectWithoutRenewalsInputObjectSchema } from './ServerCreateOrConnectWithoutRenewalsInput.schema';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ServerCreateWithoutRenewalsInputObjectSchema), z.lazy(() => ServerUncheckedCreateWithoutRenewalsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ServerCreateOrConnectWithoutRenewalsInputObjectSchema).optional(),
  connect: z.lazy(() => ServerWhereUniqueInputObjectSchema).optional()
}).strict();
export const ServerCreateNestedOneWithoutRenewalsInputObjectSchema: z.ZodType<Prisma.ServerCreateNestedOneWithoutRenewalsInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerCreateNestedOneWithoutRenewalsInput>;
export const ServerCreateNestedOneWithoutRenewalsInputObjectZodSchema = makeSchema();
