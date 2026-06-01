import * as z from 'zod';
export const WebSettingsUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  key: z.string(),
  value: z.unknown(),
  updatedAt: z.date(),
  createdAt: z.date()
}));