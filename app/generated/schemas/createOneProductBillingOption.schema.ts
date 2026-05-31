import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { ProductBillingOptionSelectObjectSchema as ProductBillingOptionSelectObjectSchema } from './objects/ProductBillingOptionSelect.schema';
import { ProductBillingOptionIncludeObjectSchema as ProductBillingOptionIncludeObjectSchema } from './objects/ProductBillingOptionInclude.schema';
import { ProductBillingOptionCreateInputObjectSchema as ProductBillingOptionCreateInputObjectSchema } from './objects/ProductBillingOptionCreateInput.schema';
import { ProductBillingOptionUncheckedCreateInputObjectSchema as ProductBillingOptionUncheckedCreateInputObjectSchema } from './objects/ProductBillingOptionUncheckedCreateInput.schema';

export const ProductBillingOptionCreateOneSchema: z.ZodType<Prisma.ProductBillingOptionCreateArgs> = z.object({ select: ProductBillingOptionSelectObjectSchema.optional(), include: ProductBillingOptionIncludeObjectSchema.optional(), data: z.union([ProductBillingOptionCreateInputObjectSchema, ProductBillingOptionUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ProductBillingOptionCreateArgs>;

export const ProductBillingOptionCreateOneZodSchema = z.object({ select: ProductBillingOptionSelectObjectSchema.optional(), include: ProductBillingOptionIncludeObjectSchema.optional(), data: z.union([ProductBillingOptionCreateInputObjectSchema, ProductBillingOptionUncheckedCreateInputObjectSchema]) }).strict();