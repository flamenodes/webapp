import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { BillingAddressOrderByWithRelationInputObjectSchema as BillingAddressOrderByWithRelationInputObjectSchema } from './objects/BillingAddressOrderByWithRelationInput.schema';
import { BillingAddressWhereInputObjectSchema as BillingAddressWhereInputObjectSchema } from './objects/BillingAddressWhereInput.schema';
import { BillingAddressWhereUniqueInputObjectSchema as BillingAddressWhereUniqueInputObjectSchema } from './objects/BillingAddressWhereUniqueInput.schema';
import { BillingAddressCountAggregateInputObjectSchema as BillingAddressCountAggregateInputObjectSchema } from './objects/BillingAddressCountAggregateInput.schema';

export const BillingAddressCountSchema: z.ZodType<Prisma.BillingAddressCountArgs> = z.object({ orderBy: z.union([BillingAddressOrderByWithRelationInputObjectSchema, BillingAddressOrderByWithRelationInputObjectSchema.array()]).optional(), where: BillingAddressWhereInputObjectSchema.optional(), cursor: BillingAddressWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BillingAddressCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.BillingAddressCountArgs>;

export const BillingAddressCountZodSchema = z.object({ orderBy: z.union([BillingAddressOrderByWithRelationInputObjectSchema, BillingAddressOrderByWithRelationInputObjectSchema.array()]).optional(), where: BillingAddressWhereInputObjectSchema.optional(), cursor: BillingAddressWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BillingAddressCountAggregateInputObjectSchema ]).optional() }).strict();