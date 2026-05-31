import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketMessageMaxAggregateInputObjectSchema: z.ZodType<Prisma.TicketMessageMaxAggregateInputType>;
export declare const TicketMessageMaxAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodLiteral<true>>;
    ticketId: z.ZodOptional<z.ZodLiteral<true>>;
    senderId: z.ZodOptional<z.ZodLiteral<true>>;
    senderRole: z.ZodOptional<z.ZodLiteral<true>>;
    content: z.ZodOptional<z.ZodLiteral<true>>;
    createdAt: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketMessageMaxAggregateInput.schema.d.ts.map