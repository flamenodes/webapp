import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { ProductBillingOptionSelectObjectSchema as ProductBillingOptionSelectObjectSchema } from './objects/ProductBillingOptionSelect.schema';
import { ProductBillingOptionIncludeObjectSchema as ProductBillingOptionIncludeObjectSchema } from './objects/ProductBillingOptionInclude.schema';
import { ProductBillingOptionWhereUniqueInputObjectSchema as ProductBillingOptionWhereUniqueInputObjectSchema } from './objects/ProductBillingOptionWhereUniqueInput.schema';

export const ProductBillingOptionFindUniqueSchema: z.ZodType<Prisma.ProductBillingOptionFindUniqueArgs> = z.object({ select: ProductBillingOptionSelectObjectSchema.optional(), include: ProductBillingOptionIncludeObjectSchema.optional(), where: ProductBillingOptionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProductBillingOptionFindUniqueArgs>;

export const ProductBillingOptionFindUniqueZodSchema = z.object({ select: ProductBillingOptionSelectObjectSchema.optional(), include: ProductBillingOptionIncludeObjectSchema.optional(), where: ProductBillingOptionWhereUniqueInputObjectSchema }).strict();