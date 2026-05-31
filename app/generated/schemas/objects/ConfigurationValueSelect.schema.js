import * as z from 'zod';
import { ConfigurationOptionArgsObjectSchema as ConfigurationOptionArgsObjectSchema } from './ConfigurationOptionArgs.schema';
const makeSchema = () => z.object({
    id: z.boolean().optional(),
    optionId: z.boolean().optional(),
    option: z.union([z.boolean(), z.lazy(() => ConfigurationOptionArgsObjectSchema)]).optional(),
    label: z.boolean().optional(),
    value: z.boolean().optional(),
    description: z.boolean().optional(),
    priceModifier: z.boolean().optional(),
    metadata: z.boolean().optional(),
    sortOrder: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
}).strict();
export const ConfigurationValueSelectObjectSchema = makeSchema();
export const ConfigurationValueSelectObjectZodSchema = makeSchema();
//# sourceMappingURL=ConfigurationValueSelect.schema.js.map