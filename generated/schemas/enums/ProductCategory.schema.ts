import * as z from 'zod';

export const ProductCategorySchema = z.enum(['VPS', 'VDS', 'WEBHOST', 'DISCORD', 'DDOS_PROT', 'DEDICATED', 'MINECRAFT'])

export type ProductCategory = z.infer<typeof ProductCategorySchema>;