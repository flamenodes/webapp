import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ServerCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.ServerCreateManyUserInputEnvelope>;
export declare const ServerCreateManyUserInputEnvelopeObjectZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ServerCreateManyUserInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerCreateManyUserInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.ServerCreateManyUserInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerCreateManyUserInput, unknown>>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=ServerCreateManyUserInputEnvelope.schema.d.ts.map