import * as z from 'zod';
export const ServerAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    userId: z.number(),
    orderItemId: z.number(),
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
    updatedAt: z.number(),
    pterodactylServerId: z.number(),
    orderItem: z.number(),
    user: z.number(),
    renewals: z.number()
  }).optional(),
  _sum: z.object({
    port: z.number().nullable(),
    pterodactylServerId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    port: z.number().nullable(),
    pterodactylServerId: z.number().nullable()
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
    expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
    pterodactylServerId: z.number().int().nullable()
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
    expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
    pterodactylServerId: z.number().int().nullable()
  }).nullable().optional()});