import * as z from 'zod';
import { RazorpayConfigCreateManyInputObjectSchema as RazorpayConfigCreateManyInputObjectSchema } from './objects/RazorpayConfigCreateManyInput.schema';
export const RazorpayConfigCreateManySchema = z.object({ data: z.union([RazorpayConfigCreateManyInputObjectSchema, z.array(RazorpayConfigCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const RazorpayConfigCreateManyZodSchema = z.object({ data: z.union([RazorpayConfigCreateManyInputObjectSchema, z.array(RazorpayConfigCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyRazorpayConfig.schema.js.map