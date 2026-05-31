import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const SessionUpdateManySchema: z.ZodType<Prisma.SessionUpdateManyArgs>;
export declare const SessionUpdateManyZodSchema: z.ZodObject<{
    data: z.ZodType<Prisma.SessionUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.SessionWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManySession.schema.d.ts.map