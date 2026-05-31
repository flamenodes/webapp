import * as z from 'zod';
import { RazorpayConfigSelectObjectSchema as RazorpayConfigSelectObjectSchema } from './objects/RazorpayConfigSelect.schema';
import { RazorpayConfigWhereUniqueInputObjectSchema as RazorpayConfigWhereUniqueInputObjectSchema } from './objects/RazorpayConfigWhereUniqueInput.schema';
export const RazorpayConfigFindUniqueSchema = z.object({ select: RazorpayConfigSelectObjectSchema.optional(), where: RazorpayConfigWhereUniqueInputObjectSchema }).strict();
export const RazorpayConfigFindUniqueZodSchema = z.object({ select: RazorpayConfigSelectObjectSchema.optional(), where: RazorpayConfigWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=findUniqueRazorpayConfig.schema.js.map