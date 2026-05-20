import * as z from 'zod';

export const CartSchema = z.object({
  id: z.string(),
  userId: z.string(),
  couponCode: z.string().nullish(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
});

export type CartType = z.infer<typeof CartSchema>;
