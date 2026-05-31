import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ConfigurationValueCreateManyOptionInputEnvelopeObjectSchema: z.ZodType<Prisma.ConfigurationValueCreateManyOptionInputEnvelope>;
export declare const ConfigurationValueCreateManyOptionInputEnvelopeObjectZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ConfigurationValueCreateManyOptionInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueCreateManyOptionInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.ConfigurationValueCreateManyOptionInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueCreateManyOptionInput, unknown>>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=ConfigurationValueCreateManyOptionInputEnvelope.schema.d.ts.map