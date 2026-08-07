import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerUpdateWithoutUserInputObjectSchema as ServerUpdateWithoutUserInputObjectSchema } from './ServerUpdateWithoutUserInput.schema';
import { ServerUncheckedUpdateWithoutUserInputObjectSchema as ServerUncheckedUpdateWithoutUserInputObjectSchema } from './ServerUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServerWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ServerUpdateWithoutUserInputObjectSchema), z.lazy(() => ServerUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const ServerUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.ServerUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUpdateWithWhereUniqueWithoutUserInput>;
export const ServerUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
