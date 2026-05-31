import * as z from 'zod';
import { RazorpayConfigSelectObjectSchema as RazorpayConfigSelectObjectSchema } from './objects/RazorpayConfigSelect.schema';
import { RazorpayConfigUpdateInputObjectSchema as RazorpayConfigUpdateInputObjectSchema } from './objects/RazorpayConfigUpdateInput.schema';
import { RazorpayConfigUncheckedUpdateInputObjectSchema as RazorpayConfigUncheckedUpdateInputObjectSchema } from './objects/RazorpayConfigUncheckedUpdateInput.schema';
import { RazorpayConfigWhereUniqueInputObjectSchema as RazorpayConfigWhereUniqueInputObjectSchema } from './objects/RazorpayConfigWhereUniqueInput.schema';
export const RazorpayConfigUpdateOneSchema = z.object({ select: RazorpayConfigSelectObjectSchema.optional(), data: z.union([RazorpayConfigUpdateInputObjectSchema, RazorpayConfigUncheckedUpdateInputObjectSchema]), where: RazorpayConfigWhereUniqueInputObjectSchema }).strict();
export const RazorpayConfigUpdateOneZodSchema = z.object({ select: RazorpayConfigSelectObjectSchema.optional(), data: z.union([RazorpayConfigUpdateInputObjectSchema, RazorpayConfigUncheckedUpdateInputObjectSchema]), where: RazorpayConfigWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=updateOneRazorpayConfig.schema.js.map