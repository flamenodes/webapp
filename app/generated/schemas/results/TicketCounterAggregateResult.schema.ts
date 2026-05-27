import * as z from 'zod';
export const TicketCounterAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    seq: z.number()
  }).optional(),
  _sum: z.object({
    seq: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    seq: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    seq: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    seq: z.number().int().nullable()
  }).nullable().optional()});