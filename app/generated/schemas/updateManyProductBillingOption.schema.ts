import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { ProductBillingOptionUpdateManyMutationInputObjectSchema as ProductBillingOptionUpdateManyMutationInputObjectSchema } from './objects/ProductBillingOptionUpdateManyMutationInput.schema';
import { ProductBillingOptionWhereInputObjectSchema as ProductBillingOptionWhereInputObjectSchema } from './objects/ProductBillingOptionWhereInput.schema';

export const ProductBillingOptionUpdateManySchema: z.ZodType<Prisma.ProductBillingOptionUpdateManyArgs> = z.object({ data: ProductBillingOptionUpdateManyMutationInputObjectSchema, where: ProductBillingOptionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProductBillingOptionUpdateManyArgs>;

export const ProductBillingOptionUpdateManyZodSchema = z.object({ data: ProductBillingOptionUpdateManyMutationInputObjectSchema, where: ProductBillingOptionWhereInputObjectSchema.optional() }).strict();