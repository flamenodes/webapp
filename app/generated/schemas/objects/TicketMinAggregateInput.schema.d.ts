import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketMinAggregateInputObjectSchema: z.ZodType<Prisma.TicketMinAggregateInputType>;
export declare const TicketMinAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodLiteral<true>>;
    ticketId: z.ZodOptional<z.ZodLiteral<true>>;
    title: z.ZodOptional<z.ZodLiteral<true>>;
    description: z.ZodOptional<z.ZodLiteral<true>>;
    status: z.ZodOptional<z.ZodLiteral<true>>;
    priority: z.ZodOptional<z.ZodLiteral<true>>;
    userId: z.ZodOptional<z.ZodLiteral<true>>;
    assignedToId: z.ZodOptional<z.ZodLiteral<true>>;
    channelName: z.ZodOptional<z.ZodLiteral<true>>;
    createdAt: z.ZodOptional<z.ZodLiteral<true>>;
    updatedAt: z.ZodOptional<z.ZodLiteral<true>>;
    closedAt: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketMinAggregateInput.schema.d.ts.map