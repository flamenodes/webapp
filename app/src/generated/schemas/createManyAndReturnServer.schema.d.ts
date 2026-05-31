import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const ServerCreateManyAndReturnSchema: z.ZodType<Prisma.ServerCreateManyAndReturnArgs>;
export declare const ServerCreateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ServerSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ServerSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.ServerCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ServerCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyAndReturnServer.schema.d.ts.map