import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ServerUpdateManySchema: z.ZodType<Prisma.ServerUpdateManyArgs>;
export declare const ServerUpdateManyZodSchema: z.ZodObject<{
    data: z.ZodType<Prisma.ServerUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.ServerWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyServer.schema.d.ts.map