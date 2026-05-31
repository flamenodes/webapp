import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ServerUpdateManyAndReturnSchema: z.ZodType<Prisma.ServerUpdateManyAndReturnArgs>;
export declare const ServerUpdateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ServerSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ServerSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodType<Prisma.ServerUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.ServerWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyAndReturnServer.schema.d.ts.map