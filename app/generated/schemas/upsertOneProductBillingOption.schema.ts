import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { ProductBillingOptionSelectObjectSchema as ProductBillingOptionSelectObjectSchema } from './objects/ProductBillingOptionSelect.schema';
import { ProductBillingOptionIncludeObjectSchema as ProductBillingOptionIncludeObjectSchema } from './objects/ProductBillingOptionInclude.schema';
import { ProductBillingOptionWhereUniqueInputObjectSchema as ProductBillingOptionWhereUniqueInputObjectSchema } from './objects/ProductBillingOptionWhereUniqueInput.schema';
import { ProductBillingOptionCreateInputObjectSchema as ProductBillingOptionCreateInputObjectSchema } from './objects/ProductBillingOptionCreateInput.schema';
import { ProductBillingOptionUncheckedCreateInputObjectSchema as ProductBillingOptionUncheckedCreateInputObjectSchema } from './objects/ProductBillingOptionUncheckedCreateInput.schema';
import { ProductBillingOptionUpdateInputObjectSchema as ProductBillingOptionUpdateInputObjectSchema } from './objects/ProductBillingOptionUpdateInput.schema';
import { ProductBillingOptionUncheckedUpdateInputObjectSchema as ProductBillingOptionUncheckedUpdateInputObjectSchema } from './objects/ProductBillingOptionUncheckedUpdateInput.schema';

export const ProductBillingOptionUpsertOneSchema: z.ZodType<Prisma.ProductBillingOptionUpsertArgs> = z.object({ select: ProductBillingOptionSelectObjectSchema.optional(), include: ProductBillingOptionIncludeObjectSchema.optional(), where: ProductBillingOptionWhereUniqueInputObjectSchema, create: z.union([ ProductBillingOptionCreateInputObjectSchema, ProductBillingOptionUncheckedCreateInputObjectSchema ]), update: z.union([ ProductBillingOptionUpdateInputObjectSchema, ProductBillingOptionUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ProductBillingOptionUpsertArgs>;

export const ProductBillingOptionUpsertOneZodSchema = z.object({ select: ProductBillingOptionSelectObjectSchema.optional(), include: ProductBillingOptionIncludeObjectSchema.optional(), where: ProductBillingOptionWhereUniqueInputObjectSchema, create: z.union([ ProductBillingOptionCreateInputObjectSchema, ProductBillingOptionUncheckedCreateInputObjectSchema ]), update: z.union([ ProductBillingOptionUpdateInputObjectSchema, ProductBillingOptionUncheckedUpdateInputObjectSchema ]) }).strict();