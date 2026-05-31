import * as z from 'zod';
import { RazorpayConfigSelectObjectSchema as RazorpayConfigSelectObjectSchema } from './objects/RazorpayConfigSelect.schema';
import { RazorpayConfigWhereUniqueInputObjectSchema as RazorpayConfigWhereUniqueInputObjectSchema } from './objects/RazorpayConfigWhereUniqueInput.schema';
export const RazorpayConfigFindUniqueOrThrowSchema = z.object({ select: RazorpayConfigSelectObjectSchema.optional(), where: RazorpayConfigWhereUniqueInputObjectSchema }).strict();
export const RazorpayConfigFindUniqueOrThrowZodSchema = z.object({ select: RazorpayConfigSelectObjectSchema.optional(), where: RazorpayConfigWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=findUniqueOrThrowRazorpayConfig.schema.js.map