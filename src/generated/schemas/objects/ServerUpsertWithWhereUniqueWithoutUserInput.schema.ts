import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerUpdateWithoutUserInputObjectSchema as ServerUpdateWithoutUserInputObjectSchema } from './ServerUpdateWithoutUserInput.schema';
import { ServerUncheckedUpdateWithoutUserInputObjectSchema as ServerUncheckedUpdateWithoutUserInputObjectSchema } from './ServerUncheckedUpdateWithoutUserInput.schema';
import { ServerCreateWithoutUserInputObjectSchema as ServerCreateWithoutUserInputObjectSchema } from './ServerCreateWithoutUserInput.schema';
import { ServerUncheckedCreateWithoutUserInputObjectSchema as ServerUncheckedCreateWithoutUserInputObjectSchema } from './ServerUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServerWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ServerUpdateWithoutUserInputObjectSchema), z.lazy(() => ServerUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => ServerCreateWithoutUserInputObjectSchema), z.lazy(() => ServerUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const ServerUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.ServerUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUpsertWithWhereUniqueWithoutUserInput>;
export const ServerUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
