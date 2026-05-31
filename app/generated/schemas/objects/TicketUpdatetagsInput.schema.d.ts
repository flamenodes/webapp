import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketUpdatetagsInputObjectSchema: z.ZodType<Prisma.TicketUpdatetagsInput>;
export declare const TicketUpdatetagsInputObjectZodSchema: z.ZodObject<{
    set: z.ZodOptional<z.ZodArray<z.ZodString>>;
    push: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketUpdatetagsInput.schema.d.ts.map