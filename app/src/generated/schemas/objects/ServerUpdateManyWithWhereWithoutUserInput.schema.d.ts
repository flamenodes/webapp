import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ServerUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.ServerUpdateManyWithWhereWithoutUserInput>;
export declare const ServerUpdateManyWithWhereWithoutUserInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.ServerScalarWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerScalarWhereInput, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ServerUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerUpdateManyMutationInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ServerUncheckedUpdateManyWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerUncheckedUpdateManyWithoutUserInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=ServerUpdateManyWithWhereWithoutUserInput.schema.d.ts.map