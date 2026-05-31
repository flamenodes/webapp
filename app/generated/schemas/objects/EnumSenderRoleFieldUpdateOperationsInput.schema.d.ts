import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const EnumSenderRoleFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumSenderRoleFieldUpdateOperationsInput>;
export declare const EnumSenderRoleFieldUpdateOperationsInputObjectZodSchema: z.ZodObject<{
    set: z.ZodOptional<z.ZodEnum<{
        USER: "USER";
        SUPPORT: "SUPPORT";
        ADMIN: "ADMIN";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=EnumSenderRoleFieldUpdateOperationsInput.schema.d.ts.map