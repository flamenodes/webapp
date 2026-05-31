import * as z from 'zod';
import { RazorpayConfigOrderByWithRelationInputObjectSchema as RazorpayConfigOrderByWithRelationInputObjectSchema } from './objects/RazorpayConfigOrderByWithRelationInput.schema';
import { RazorpayConfigWhereInputObjectSchema as RazorpayConfigWhereInputObjectSchema } from './objects/RazorpayConfigWhereInput.schema';
import { RazorpayConfigWhereUniqueInputObjectSchema as RazorpayConfigWhereUniqueInputObjectSchema } from './objects/RazorpayConfigWhereUniqueInput.schema';
import { RazorpayConfigScalarFieldEnumSchema } from './enums/RazorpayConfigScalarFieldEnum.schema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const RazorpayConfigFindFirstSelectSchema = z.object({
    id: z.boolean().optional(),
    mode: z.boolean().optional(),
    testKeyId: z.boolean().optional(),
    testKeySecret: z.boolean().optional(),
    prodKeyId: z.boolean().optional(),
    prodKeySecret: z.boolean().optional(),
    gstin: z.boolean().optional(),
    companyName: z.boolean().optional(),
    companyAddress: z.boolean().optional(),
    companyCity: z.boolean().optional(),
    companyZip: z.boolean().optional(),
    companyCountry: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    createdAt: z.boolean().optional()
}).strict();
export const RazorpayConfigFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    mode: z.boolean().optional(),
    testKeyId: z.boolean().optional(),
    testKeySecret: z.boolean().optional(),
    prodKeyId: z.boolean().optional(),
    prodKeySecret: z.boolean().optional(),
    gstin: z.boolean().optional(),
    companyName: z.boolean().optional(),
    companyAddress: z.boolean().optional(),
    companyCity: z.boolean().optional(),
    companyZip: z.boolean().optional(),
    companyCountry: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    createdAt: z.boolean().optional()
}).strict();
export const RazorpayConfigFindFirstSchema = z.object({ select: RazorpayConfigFindFirstSelectSchema.optional(), orderBy: z.union([RazorpayConfigOrderByWithRelationInputObjectSchema, RazorpayConfigOrderByWithRelationInputObjectSchema.array()]).optional(), where: RazorpayConfigWhereInputObjectSchema.optional(), cursor: RazorpayConfigWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RazorpayConfigScalarFieldEnumSchema, RazorpayConfigScalarFieldEnumSchema.array()]).optional() }).strict();
export const RazorpayConfigFindFirstZodSchema = z.object({ select: RazorpayConfigFindFirstSelectSchema.optional(), orderBy: z.union([RazorpayConfigOrderByWithRelationInputObjectSchema, RazorpayConfigOrderByWithRelationInputObjectSchema.array()]).optional(), where: RazorpayConfigWhereInputObjectSchema.optional(), cursor: RazorpayConfigWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RazorpayConfigScalarFieldEnumSchema, RazorpayConfigScalarFieldEnumSchema.array()]).optional() }).strict();
//# sourceMappingURL=findFirstRazorpayConfig.schema.js.map