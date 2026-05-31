import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ServerCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.ServerCreateOrConnectWithoutUserInput>;
export declare const ServerCreateOrConnectWithoutUserInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.ServerWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ServerCreateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerCreateWithoutUserInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ServerUncheckedCreateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerUncheckedCreateWithoutUserInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=ServerCreateOrConnectWithoutUserInput.schema.d.ts.map