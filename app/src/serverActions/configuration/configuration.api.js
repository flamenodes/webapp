import { createServerFn } from '@tanstack/react-start';
import { getRequestHeaders } from '@tanstack/react-start/server';
import { prisma } from '#/db';
import { auth } from '@/lib/auth';
import { z } from 'zod';
const getConfigurationOptionsSchema = z.object({
    category: z.enum(['VPS', 'VDS', 'WEBHOST', 'DISCORD', 'DDOS_PROT', 'DEDICATED', 'MINECRAFT']),
});
const createConfigurationOptionSchema = z.object({
    name: z.string().min(1),
    label: z.string().min(1),
    description: z.string().optional(),
    type: z.enum(['SELECT', 'RADIO', 'TEXT', 'NUMBER']),
    required: z.boolean().default(true),
    category: z.enum(['VPS', 'VDS', 'WEBHOST', 'DISCORD', 'DDOS_PROT', 'DEDICATED', 'MINECRAFT']),
    sortOrder: z.number().default(0),
});
const createConfigurationValueSchema = z.object({
    optionId: z.string(),
    label: z.string().min(1),
    value: z.string().min(1),
    description: z.string().optional(),
    priceModifier: z.number().default(0),
    metadata: z.record(z.any()).optional(),
    sortOrder: z.number().default(0),
});
const updateConfigurationOptionSchema = createConfigurationOptionSchema.extend({
    id: z.string(),
});
const updateConfigurationValueSchema = createConfigurationValueSchema.extend({
    id: z.string(),
});
const deleteConfigurationOptionSchema = z.object({
    id: z.string(),
});
const deleteConfigurationValueSchema = z.object({
    id: z.string(),
});
const wrapSuccess = (message, data) => {
    if (data !== undefined) {
        return { success: true, message, data };
    }
    return { success: true, message };
};
const wrapError = (message) => ({ success: false, message });
async function requireAdmin() {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    if (!session?.user)
        throw new Error('Unauthorized');
    const role = session.user.role?.toLowerCase();
    if (role !== 'admin' && role !== 'owner')
        throw new Error('Forbidden');
    return session.user;
}
export const getConfigurationOptions = createServerFn({ method: 'GET' })
    .inputValidator((data) => getConfigurationOptionsSchema.parse(data))
    .handler(async ({ data }) => {
    const options = await prisma.configurationOption.findMany({
        where: { category: data.category },
        include: {
            values: {
                orderBy: { sortOrder: 'asc' },
            },
        },
        orderBy: { sortOrder: 'asc' },
    });
    return options;
});
export const getAllConfigurationOptions = createServerFn({ method: 'GET' }).handler(async () => {
    await requireAdmin();
    const options = await prisma.configurationOption.findMany({
        include: {
            values: {
                orderBy: { sortOrder: 'asc' },
            },
        },
        orderBy: [{ category: 'asc' }, { sortOrder: 'asc' }],
    });
    return options;
});
export const createConfigurationOption = createServerFn({ method: 'POST' })
    .inputValidator((data) => createConfigurationOptionSchema.parse(data))
    .handler(async ({ data }) => {
    await requireAdmin();
    const option = await prisma.configurationOption.create({
        data,
        include: { values: true },
    });
    return wrapSuccess('Configuration option created successfully', option);
});
export const updateConfigurationOption = createServerFn({ method: 'POST' })
    .inputValidator((data) => updateConfigurationOptionSchema.parse(data))
    .handler(async ({ data }) => {
    await requireAdmin();
    const { id, ...updateData } = data;
    const option = await prisma.configurationOption.update({
        where: { id },
        data: updateData,
        include: { values: true },
    });
    return wrapSuccess('Configuration option updated successfully', option);
});
export const deleteConfigurationOption = createServerFn({ method: 'POST' })
    .inputValidator((data) => deleteConfigurationOptionSchema.parse(data))
    .handler(async ({ data }) => {
    await requireAdmin();
    await prisma.configurationOption.delete({
        where: { id: data.id },
    });
    return wrapSuccess('Configuration option deleted successfully');
});
export const createConfigurationValue = createServerFn({ method: 'POST' })
    .inputValidator((data) => createConfigurationValueSchema.parse(data))
    .handler(async ({ data }) => {
    await requireAdmin();
    const value = await prisma.configurationValue.create({
        data,
    });
    return wrapSuccess('Configuration value created successfully', value);
});
export const updateConfigurationValue = createServerFn({ method: 'POST' })
    .inputValidator((data) => updateConfigurationValueSchema.parse(data))
    .handler(async ({ data }) => {
    await requireAdmin();
    const { id, ...updateData } = data;
    const value = await prisma.configurationValue.update({
        where: { id },
        data: updateData,
    });
    return wrapSuccess('Configuration value updated successfully', value);
});
export const deleteConfigurationValue = createServerFn({ method: 'POST' })
    .inputValidator((data) => deleteConfigurationValueSchema.parse(data))
    .handler(async ({ data }) => {
    await requireAdmin();
    await prisma.configurationValue.delete({
        where: { id: data.id },
    });
    return wrapSuccess('Configuration value deleted successfully');
});
//# sourceMappingURL=configuration.api.js.map