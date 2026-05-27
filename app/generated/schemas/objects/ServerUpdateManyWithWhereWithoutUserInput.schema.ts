import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { ServerScalarWhereInputObjectSchema as ServerScalarWhereInputObjectSchema } from './ServerScalarWhereInput.schema';
import { ServerUpdateManyMutationInputObjectSchema as ServerUpdateManyMutationInputObjectSchema } from './ServerUpdateManyMutationInput.schema';
import { ServerUncheckedUpdateManyWithoutUserInputObjectSchema as ServerUncheckedUpdateManyWithoutUserInputObjectSchema } from './ServerUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServerScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ServerUpdateManyMutationInputObjectSchema), z.lazy(() => ServerUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const ServerUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.ServerUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUpdateManyWithWhereWithoutUserInput>;
export const ServerUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
