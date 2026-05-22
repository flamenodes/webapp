import * as z from 'zod';
export const ServerGroupByResultSchema = z.array(z.object({
  id: z.string(),
  userId: z.string(),
  orderItemId: z.string(),
  name: z.string(),
  type: z.string(),
  status: z.string(),
  ip: z.string(),
  port: z.number().int(),
  expiresAt: z.date(),
  resources: z.unknown(),
  pterodactylData: z.unknown(),
  suspended: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    userId: z.number(),
    user: z.number(),
    orderItemId: z.number(),
    orderItem: z.number(),
    name: z.number(),
    type: z.number(),
    status: z.number(),
    ip: z.number(),
    port: z.number(),
    expiresAt: z.number(),
    resources: z.number(),
    pterodactylData: z.number(),
    suspended: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    port: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    port: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    orderItemId: z.string().nullable(),
    name: z.string().nullable(),
    type: z.string().nullable(),
    status: z.string().nullable(),
    ip: z.string().nullable(),
    port: z.number().int().nullable(),
    expiresAt: z.date().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    orderItemId: z.string().nullable(),
    name: z.string().nullable(),
    type: z.string().nullable(),
    status: z.string().nullable(),
    ip: z.string().nullable(),
    port: z.number().int().nullable(),
    expiresAt: z.date().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));