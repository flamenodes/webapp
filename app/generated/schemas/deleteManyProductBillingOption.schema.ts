import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { ProductBillingOptionWhereInputObjectSchema as ProductBillingOptionWhereInputObjectSchema } from './objects/ProductBillingOptionWhereInput.schema';

export const ProductBillingOptionDeleteManySchema: z.ZodType<Prisma.ProductBillingOptionDeleteManyArgs> = z.object({ where: ProductBillingOptionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProductBillingOptionDeleteManyArgs>;

export const ProductBillingOptionDeleteManyZodSchema = z.object({ where: ProductBillingOptionWhereInputObjectSchema.optional() }).strict();