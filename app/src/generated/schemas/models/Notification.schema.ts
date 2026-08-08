import * as z from 'zod';

export const NotificationSchema = z.object({
  id: z.string(),
  userId: z.string(),
  type: z.string().default("info"),
  title: z.string(),
  message: z.string(),
  read: z.boolean(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  link: z.string().nullish(),
  metadata: z.any().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").nullish(),
});

export type NotificationType = z.infer<typeof NotificationSchema>;
