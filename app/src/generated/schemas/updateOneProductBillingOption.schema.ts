import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { ProductBillingOptionSelectObjectSchema as ProductBillingOptionSelectObjectSchema } from './objects/ProductBillingOptionSelect.schema';
import { ProductBillingOptionIncludeObjectSchema as ProductBillingOptionIncludeObjectSchema } from './objects/ProductBillingOptionInclude.schema';
import { ProductBillingOptionUpdateInputObjectSchema as ProductBillingOptionUpdateInputObjectSchema } from './objects/ProductBillingOptionUpdateInput.schema';
import { ProductBillingOptionUncheckedUpdateInputObjectSchema as ProductBillingOptionUncheckedUpdateInputObjectSchema } from './objects/ProductBillingOptionUncheckedUpdateInput.schema';
import { ProductBillingOptionWhereUniqueInputObjectSchema as ProductBillingOptionWhereUniqueInputObjectSchema } from './objects/ProductBillingOptionWhereUniqueInput.schema';

export const ProductBillingOptionUpdateOneSchema: z.ZodType<Prisma.ProductBillingOptionUpdateArgs> = z.object({ select: ProductBillingOptionSelectObjectSchema.optional(), include: ProductBillingOptionIncludeObjectSchema.optional(), data: z.union([ProductBillingOptionUpdateInputObjectSchema, ProductBillingOptionUncheckedUpdateInputObjectSchema]), where: ProductBillingOptionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProductBillingOptionUpdateArgs>;

export const ProductBillingOptionUpdateOneZodSchema = z.object({ select: ProductBillingOptionSelectObjectSchema.optional(), include: ProductBillingOptionIncludeObjectSchema.optional(), data: z.union([ProductBillingOptionUpdateInputObjectSchema, ProductBillingOptionUncheckedUpdateInputObjectSchema]), where: ProductBillingOptionWhereUniqueInputObjectSchema }).strict();