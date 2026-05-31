import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketMessageCountAggregateInputObjectSchema: z.ZodType<Prisma.TicketMessageCountAggregateInputType>;
export declare const TicketMessageCountAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodLiteral<true>>;
    ticketId: z.ZodOptional<z.ZodLiteral<true>>;
    senderId: z.ZodOptional<z.ZodLiteral<true>>;
    senderRole: z.ZodOptional<z.ZodLiteral<true>>;
    content: z.ZodOptional<z.ZodLiteral<true>>;
    attachments: z.ZodOptional<z.ZodLiteral<true>>;
    createdAt: z.ZodOptional<z.ZodLiteral<true>>;
    _all: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketMessageCountAggregateInput.schema.d.ts.map