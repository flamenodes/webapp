import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { ServerCountOutputTypeCountRenewalsArgsObjectSchema as ServerCountOutputTypeCountRenewalsArgsObjectSchema } from './ServerCountOutputTypeCountRenewalsArgs.schema'

const makeSchema = () => z.object({
  renewals: z.union([z.boolean(), z.lazy(() => ServerCountOutputTypeCountRenewalsArgsObjectSchema)]).optional()
}).strict();
export const ServerCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ServerCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ServerCountOutputTypeSelect>;
export const ServerCountOutputTypeSelectObjectZodSchema = makeSchema();
