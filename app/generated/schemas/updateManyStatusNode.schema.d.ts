import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const StatusNodeUpdateManySchema: z.ZodType<Prisma.StatusNodeUpdateManyArgs>;
export declare const StatusNodeUpdateManyZodSchema: z.ZodObject<{
    data: z.ZodType<Prisma.StatusNodeUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.StatusNodeWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyStatusNode.schema.d.ts.map