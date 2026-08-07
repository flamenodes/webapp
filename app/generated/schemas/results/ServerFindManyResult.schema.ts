import * as z from 'zod';
export const ServerFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  userId: z.string(),
  user: z.unknown().optional(),
  orderItemId: z.string(),
  orderItem: z.unknown().optional(),
  name: z.string(),
  type: z.string(),
  status: z.string(),
  ip: z.string().optional(),
  port: z.number().int().optional(),
  pterodactylServerId: z.number().int().optional(),
  expiresAt: z.date().optional(),
  resources: z.unknown().optional(),
  pterodactylData: z.unknown().optional(),
  suspended: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});