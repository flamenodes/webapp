import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const NullableIntFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput>;
export declare const NullableIntFieldUpdateOperationsInputObjectZodSchema: z.ZodObject<{
    set: z.ZodOptional<z.ZodNumber>;
    increment: z.ZodOptional<z.ZodNumber>;
    decrement: z.ZodOptional<z.ZodNumber>;
    multiply: z.ZodOptional<z.ZodNumber>;
    divide: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
//# sourceMappingURL=NullableIntFieldUpdateOperationsInput.schema.d.ts.map