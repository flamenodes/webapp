import * as z from 'zod';
export const AnnouncementAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    title: z.number(),
    message: z.number(),
    type: z.number(),
    active: z.number(),
    priority: z.number(),
    link: z.number(),
    expiresAt: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    priority: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    priority: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    title: z.string().nullable(),
    message: z.string().nullable(),
    priority: z.number().int().nullable(),
    link: z.string().nullable(),
    expiresAt: z.date().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    title: z.string().nullable(),
    message: z.string().nullable(),
    priority: z.number().int().nullable(),
    link: z.string().nullable(),
    expiresAt: z.date().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});