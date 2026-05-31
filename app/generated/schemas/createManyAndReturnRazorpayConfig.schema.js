import * as z from 'zod';
import { RazorpayConfigSelectObjectSchema as RazorpayConfigSelectObjectSchema } from './objects/RazorpayConfigSelect.schema';
import { RazorpayConfigCreateManyInputObjectSchema as RazorpayConfigCreateManyInputObjectSchema } from './objects/RazorpayConfigCreateManyInput.schema';
export const RazorpayConfigCreateManyAndReturnSchema = z.object({ select: RazorpayConfigSelectObjectSchema.optional(), data: z.union([RazorpayConfigCreateManyInputObjectSchema, z.array(RazorpayConfigCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const RazorpayConfigCreateManyAndReturnZodSchema = z.object({ select: RazorpayConfigSelectObjectSchema.optional(), data: z.union([RazorpayConfigCreateManyInputObjectSchema, z.array(RazorpayConfigCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyAndReturnRazorpayConfig.schema.js.map