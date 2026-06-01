import * as z from 'zod';
export const WebSettingsGroupByResultSchema = z.array(z.object({
  id: z.string(),
  key: z.string(),
  value: z.unknown(),
  updatedAt: z.date(),
  createdAt: z.date(),
  _count: z.object({
    id: z.number(),
    key: z.number(),
    value: z.number(),
    updatedAt: z.number(),
    createdAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    key: z.string().nullable(),
    updatedAt: z.date().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    key: z.string().nullable(),
    updatedAt: z.date().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()
}));