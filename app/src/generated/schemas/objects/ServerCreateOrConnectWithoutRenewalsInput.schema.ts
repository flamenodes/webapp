import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerCreateWithoutRenewalsInputObjectSchema as ServerCreateWithoutRenewalsInputObjectSchema } from './ServerCreateWithoutRenewalsInput.schema';
import { ServerUncheckedCreateWithoutRenewalsInputObjectSchema as ServerUncheckedCreateWithoutRenewalsInputObjectSchema } from './ServerUncheckedCreateWithoutRenewalsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ServerCreateWithoutRenewalsInputObjectSchema), z.lazy(() => ServerUncheckedCreateWithoutRenewalsInputObjectSchema)])
}).strict();
export const ServerCreateOrConnectWithoutRenewalsInputObjectSchema: z.ZodType<Prisma.ServerCreateOrConnectWithoutRenewalsInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerCreateOrConnectWithoutRenewalsInput>;
export const ServerCreateOrConnectWithoutRenewalsInputObjectZodSchema = makeSchema();
