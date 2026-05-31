import * as z from 'zod';
import { RazorpayConfigSelectObjectSchema as RazorpayConfigSelectObjectSchema } from './objects/RazorpayConfigSelect.schema';
import { RazorpayConfigWhereUniqueInputObjectSchema as RazorpayConfigWhereUniqueInputObjectSchema } from './objects/RazorpayConfigWhereUniqueInput.schema';
import { RazorpayConfigCreateInputObjectSchema as RazorpayConfigCreateInputObjectSchema } from './objects/RazorpayConfigCreateInput.schema';
import { RazorpayConfigUncheckedCreateInputObjectSchema as RazorpayConfigUncheckedCreateInputObjectSchema } from './objects/RazorpayConfigUncheckedCreateInput.schema';
import { RazorpayConfigUpdateInputObjectSchema as RazorpayConfigUpdateInputObjectSchema } from './objects/RazorpayConfigUpdateInput.schema';
import { RazorpayConfigUncheckedUpdateInputObjectSchema as RazorpayConfigUncheckedUpdateInputObjectSchema } from './objects/RazorpayConfigUncheckedUpdateInput.schema';
export const RazorpayConfigUpsertOneSchema = z.object({ select: RazorpayConfigSelectObjectSchema.optional(), where: RazorpayConfigWhereUniqueInputObjectSchema, create: z.union([RazorpayConfigCreateInputObjectSchema, RazorpayConfigUncheckedCreateInputObjectSchema]), update: z.union([RazorpayConfigUpdateInputObjectSchema, RazorpayConfigUncheckedUpdateInputObjectSchema]) }).strict();
export const RazorpayConfigUpsertOneZodSchema = z.object({ select: RazorpayConfigSelectObjectSchema.optional(), where: RazorpayConfigWhereUniqueInputObjectSchema, create: z.union([RazorpayConfigCreateInputObjectSchema, RazorpayConfigUncheckedCreateInputObjectSchema]), update: z.union([RazorpayConfigUpdateInputObjectSchema, RazorpayConfigUncheckedUpdateInputObjectSchema]) }).strict();
//# sourceMappingURL=upsertOneRazorpayConfig.schema.js.map