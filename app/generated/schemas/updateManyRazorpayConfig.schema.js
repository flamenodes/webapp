import * as z from 'zod';
import { RazorpayConfigUpdateManyMutationInputObjectSchema as RazorpayConfigUpdateManyMutationInputObjectSchema } from './objects/RazorpayConfigUpdateManyMutationInput.schema';
import { RazorpayConfigWhereInputObjectSchema as RazorpayConfigWhereInputObjectSchema } from './objects/RazorpayConfigWhereInput.schema';
export const RazorpayConfigUpdateManySchema = z.object({ data: RazorpayConfigUpdateManyMutationInputObjectSchema, where: RazorpayConfigWhereInputObjectSchema.optional() }).strict();
export const RazorpayConfigUpdateManyZodSchema = z.object({ data: RazorpayConfigUpdateManyMutationInputObjectSchema, where: RazorpayConfigWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=updateManyRazorpayConfig.schema.js.map