import * as z from 'zod';
import { RazorpayConfigSelectObjectSchema as RazorpayConfigSelectObjectSchema } from './objects/RazorpayConfigSelect.schema';
import { RazorpayConfigUpdateManyMutationInputObjectSchema as RazorpayConfigUpdateManyMutationInputObjectSchema } from './objects/RazorpayConfigUpdateManyMutationInput.schema';
import { RazorpayConfigWhereInputObjectSchema as RazorpayConfigWhereInputObjectSchema } from './objects/RazorpayConfigWhereInput.schema';
export const RazorpayConfigUpdateManyAndReturnSchema = z.object({ select: RazorpayConfigSelectObjectSchema.optional(), data: RazorpayConfigUpdateManyMutationInputObjectSchema, where: RazorpayConfigWhereInputObjectSchema.optional() }).strict();
export const RazorpayConfigUpdateManyAndReturnZodSchema = z.object({ select: RazorpayConfigSelectObjectSchema.optional(), data: RazorpayConfigUpdateManyMutationInputObjectSchema, where: RazorpayConfigWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=updateManyAndReturnRazorpayConfig.schema.js.map