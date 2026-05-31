import * as z from 'zod';
import { RazorpayConfigSelectObjectSchema as RazorpayConfigSelectObjectSchema } from './objects/RazorpayConfigSelect.schema';
import { RazorpayConfigWhereUniqueInputObjectSchema as RazorpayConfigWhereUniqueInputObjectSchema } from './objects/RazorpayConfigWhereUniqueInput.schema';
export const RazorpayConfigDeleteOneSchema = z.object({ select: RazorpayConfigSelectObjectSchema.optional(), where: RazorpayConfigWhereUniqueInputObjectSchema }).strict();
export const RazorpayConfigDeleteOneZodSchema = z.object({ select: RazorpayConfigSelectObjectSchema.optional(), where: RazorpayConfigWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=deleteOneRazorpayConfig.schema.js.map