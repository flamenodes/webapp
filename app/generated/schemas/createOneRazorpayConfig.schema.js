import * as z from 'zod';
import { RazorpayConfigSelectObjectSchema as RazorpayConfigSelectObjectSchema } from './objects/RazorpayConfigSelect.schema';
import { RazorpayConfigCreateInputObjectSchema as RazorpayConfigCreateInputObjectSchema } from './objects/RazorpayConfigCreateInput.schema';
import { RazorpayConfigUncheckedCreateInputObjectSchema as RazorpayConfigUncheckedCreateInputObjectSchema } from './objects/RazorpayConfigUncheckedCreateInput.schema';
export const RazorpayConfigCreateOneSchema = z.object({ select: RazorpayConfigSelectObjectSchema.optional(), data: z.union([RazorpayConfigCreateInputObjectSchema, RazorpayConfigUncheckedCreateInputObjectSchema]) }).strict();
export const RazorpayConfigCreateOneZodSchema = z.object({ select: RazorpayConfigSelectObjectSchema.optional(), data: z.union([RazorpayConfigCreateInputObjectSchema, RazorpayConfigUncheckedCreateInputObjectSchema]) }).strict();
//# sourceMappingURL=createOneRazorpayConfig.schema.js.map