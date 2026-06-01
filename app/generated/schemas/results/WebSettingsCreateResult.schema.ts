import * as z from 'zod';
export const WebSettingsCreateResultSchema = z.object({
  id: z.string(),
  key: z.string(),
  value: z.unknown(),
  updatedAt: z.date(),
  createdAt: z.date()
});