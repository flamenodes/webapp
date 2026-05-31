import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const RazorpayConfigUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.RazorpayConfigUpdateManyMutationInput>;
export declare const RazorpayConfigUpdateManyMutationInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    mode: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    testKeyId: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.NullableStringFieldUpdateOperationsInput, unknown>>>]>>>;
    testKeySecret: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.NullableStringFieldUpdateOperationsInput, unknown>>>]>>>;
    prodKeyId: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.NullableStringFieldUpdateOperationsInput, unknown>>>]>>>;
    prodKeySecret: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.NullableStringFieldUpdateOperationsInput, unknown>>>]>>>;
    gstin: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.NullableStringFieldUpdateOperationsInput, unknown>>>]>>>;
    companyName: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.NullableStringFieldUpdateOperationsInput, unknown>>>]>>>;
    companyAddress: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.NullableStringFieldUpdateOperationsInput, unknown>>>]>>>;
    companyCity: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.NullableStringFieldUpdateOperationsInput, unknown>>>]>>>;
    companyZip: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.NullableStringFieldUpdateOperationsInput, unknown>>>]>>>;
    companyCountry: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.NullableStringFieldUpdateOperationsInput, unknown>>>]>>>;
    updatedAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodCoercedDate<unknown>, z.ZodLazy<z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFieldUpdateOperationsInput, unknown>>>]>>;
    createdAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodCoercedDate<unknown>, z.ZodLazy<z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFieldUpdateOperationsInput, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=RazorpayConfigUpdateManyMutationInput.schema.d.ts.map