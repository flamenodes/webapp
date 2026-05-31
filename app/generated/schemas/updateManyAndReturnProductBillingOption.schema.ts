import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { ProductBillingOptionSelectObjectSchema as ProductBillingOptionSelectObjectSchema } from './objects/ProductBillingOptionSelect.schema';
import { ProductBillingOptionUpdateManyMutationInputObjectSchema as ProductBillingOptionUpdateManyMutationInputObjectSchema } from './objects/ProductBillingOptionUpdateManyMutationInput.schema';
import { ProductBillingOptionWhereInputObjectSchema as ProductBillingOptionWhereInputObjectSchema } from './objects/ProductBillingOptionWhereInput.schema';

export const ProductBillingOptionUpdateManyAndReturnSchema: z.ZodType<Prisma.ProductBillingOptionUpdateManyAndReturnArgs> = z.object({ select: ProductBillingOptionSelectObjectSchema.optional(), data: ProductBillingOptionUpdateManyMutationInputObjectSchema, where: ProductBillingOptionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProductBillingOptionUpdateManyAndReturnArgs>;

export const ProductBillingOptionUpdateManyAndReturnZodSchema = z.object({ select: ProductBillingOptionSelectObjectSchema.optional(), data: ProductBillingOptionUpdateManyMutationInputObjectSchema, where: ProductBillingOptionWhereInputObjectSchema.optional() }).strict();