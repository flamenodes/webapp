import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const SessionCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.SessionCreateOrConnectWithoutUserInput>;
export declare const SessionCreateOrConnectWithoutUserInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.SessionWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.SessionCreateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionCreateWithoutUserInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionUncheckedCreateWithoutUserInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=SessionCreateOrConnectWithoutUserInput.schema.d.ts.map