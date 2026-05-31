import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const UserMinAggregateInputObjectSchema: z.ZodType<Prisma.UserMinAggregateInputType>;
export declare const UserMinAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodLiteral<true>>;
    clientId: z.ZodOptional<z.ZodLiteral<true>>;
    name: z.ZodOptional<z.ZodLiteral<true>>;
    email: z.ZodOptional<z.ZodLiteral<true>>;
    emailVerified: z.ZodOptional<z.ZodLiteral<true>>;
    image: z.ZodOptional<z.ZodLiteral<true>>;
    createdAt: z.ZodOptional<z.ZodLiteral<true>>;
    updatedAt: z.ZodOptional<z.ZodLiteral<true>>;
    role: z.ZodOptional<z.ZodLiteral<true>>;
    banned: z.ZodOptional<z.ZodLiteral<true>>;
    banReason: z.ZodOptional<z.ZodLiteral<true>>;
    banExpires: z.ZodOptional<z.ZodLiteral<true>>;
    username: z.ZodOptional<z.ZodLiteral<true>>;
    firstname: z.ZodOptional<z.ZodLiteral<true>>;
    lastname: z.ZodOptional<z.ZodLiteral<true>>;
    displayUsername: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=UserMinAggregateInput.schema.d.ts.map