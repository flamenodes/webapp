import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const UserWhereUniqueInputObjectSchema: z.ZodType<Prisma.UserWhereUniqueInput>;
export declare const UserWhereUniqueInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    clientId: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    username: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
//# sourceMappingURL=UserWhereUniqueInput.schema.d.ts.map