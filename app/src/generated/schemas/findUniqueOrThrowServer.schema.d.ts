import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const ServerFindUniqueOrThrowSchema: z.ZodType<Prisma.ServerFindUniqueOrThrowArgs>;
export declare const ServerFindUniqueOrThrowZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ServerSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ServerSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.ServerInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ServerInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.ServerWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=findUniqueOrThrowServer.schema.d.ts.map