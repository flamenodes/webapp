import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { ProductBillingOptionSelectObjectSchema as ProductBillingOptionSelectObjectSchema } from './objects/ProductBillingOptionSelect.schema';
import { ProductBillingOptionIncludeObjectSchema as ProductBillingOptionIncludeObjectSchema } from './objects/ProductBillingOptionInclude.schema';
import { ProductBillingOptionWhereUniqueInputObjectSchema as ProductBillingOptionWhereUniqueInputObjectSchema } from './objects/ProductBillingOptionWhereUniqueInput.schema';

export const ProductBillingOptionDeleteOneSchema: z.ZodType<Prisma.ProductBillingOptionDeleteArgs> = z.object({ select: ProductBillingOptionSelectObjectSchema.optional(), include: ProductBillingOptionIncludeObjectSchema.optional(), where: ProductBillingOptionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProductBillingOptionDeleteArgs>;

export const ProductBillingOptionDeleteOneZodSchema = z.object({ select: ProductBillingOptionSelectObjectSchema.optional(), include: ProductBillingOptionIncludeObjectSchema.optional(), where: ProductBillingOptionWhereUniqueInputObjectSchema }).strict();