import * as z from 'zod';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';

export const ProductSchema = z.object({
  id: z.string(),
  planName: z.string(),
  icon: z.string().nullish(),
  badge: z.string().nullish(),
  category: ProductCategorySchema,
  price: z.number().int(),
  sortOrder: z.number().int(),
  featureCategory: z.string().default("Features"),
  inStock: z.boolean().default(true),
  discountId: z.string().nullish(),
  specs: z.any().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").default({}),
  deployMode: z.string().default("PTERODACTYL"),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
});

export type ProductType = z.infer<typeof ProductSchema>;
