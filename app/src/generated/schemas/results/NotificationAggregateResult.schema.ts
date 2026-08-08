import * as z from 'zod';
export const NotificationAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    userId: z.number(),
    type: z.number(),
    title: z.number(),
    message: z.number(),
    read: z.number(),
    createdAt: z.number(),
    link: z.number(),
    metadata: z.number(),
    user: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    type: z.string().nullable(),
    title: z.string().nullable(),
    message: z.string().nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
    link: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    type: z.string().nullable(),
    title: z.string().nullable(),
    message: z.string().nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
    link: z.string().nullable()
  }).nullable().optional()});