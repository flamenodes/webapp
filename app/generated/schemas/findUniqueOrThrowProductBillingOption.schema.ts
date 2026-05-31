import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { ProductBillingOptionSelectObjectSchema as ProductBillingOptionSelectObjectSchema } from './objects/ProductBillingOptionSelect.schema';
import { ProductBillingOptionIncludeObjectSchema as ProductBillingOptionIncludeObjectSchema } from './objects/ProductBillingOptionInclude.schema';
import { ProductBillingOptionWhereUniqueInputObjectSchema as ProductBillingOptionWhereUniqueInputObjectSchema } from './objects/ProductBillingOptionWhereUniqueInput.schema';

export const ProductBillingOptionFindUniqueOrThrowSchema: z.ZodType<Prisma.ProductBillingOptionFindUniqueOrThrowArgs> = z.object({ select: ProductBillingOptionSelectObjectSchema.optional(), include: ProductBillingOptionIncludeObjectSchema.optional(), where: ProductBillingOptionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProductBillingOptionFindUniqueOrThrowArgs>;

export const ProductBillingOptionFindUniqueOrThrowZodSchema = z.object({ select: ProductBillingOptionSelectObjectSchema.optional(), include: ProductBillingOptionIncludeObjectSchema.optional(), where: ProductBillingOptionWhereUniqueInputObjectSchema }).strict();