import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const ServerCreateManySchema: z.ZodType<Prisma.ServerCreateManyArgs>;
export declare const ServerCreateManyZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodType<Prisma.ServerCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ServerCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyServer.schema.d.ts.map