import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ServerCreateOneSchema: z.ZodType<Prisma.ServerCreateArgs>;
export declare const ServerCreateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ServerSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ServerSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.ServerInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ServerInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.ServerCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerCreateInput, unknown>>, z.ZodType<Prisma.ServerUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerUncheckedCreateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=createOneServer.schema.d.ts.map