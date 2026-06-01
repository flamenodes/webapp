import * as z from 'zod';
export const RazorpayConfigAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    mode: z.number(),
    testKeyId: z.number(),
    testKeySecret: z.number(),
    prodKeyId: z.number(),
    prodKeySecret: z.number(),
    gstin: z.number(),
    companyName: z.number(),
    companyAddress: z.number(),
    companyCity: z.number(),
    companyZip: z.number(),
    companyCountry: z.number(),
    pteroNodeMode: z.number(),
    pteroNodeId: z.number(),
    updatedAt: z.number(),
    createdAt: z.number()
  }).optional(),
  _sum: z.object({
    pteroNodeId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    pteroNodeId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    mode: z.string().nullable(),
    testKeyId: z.string().nullable(),
    testKeySecret: z.string().nullable(),
    prodKeyId: z.string().nullable(),
    prodKeySecret: z.string().nullable(),
    gstin: z.string().nullable(),
    companyName: z.string().nullable(),
    companyAddress: z.string().nullable(),
    companyCity: z.string().nullable(),
    companyZip: z.string().nullable(),
    companyCountry: z.string().nullable(),
    pteroNodeMode: z.string().nullable(),
    pteroNodeId: z.number().int().nullable(),
    updatedAt: z.date().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    mode: z.string().nullable(),
    testKeyId: z.string().nullable(),
    testKeySecret: z.string().nullable(),
    prodKeyId: z.string().nullable(),
    prodKeySecret: z.string().nullable(),
    gstin: z.string().nullable(),
    companyName: z.string().nullable(),
    companyAddress: z.string().nullable(),
    companyCity: z.string().nullable(),
    companyZip: z.string().nullable(),
    companyCountry: z.string().nullable(),
    pteroNodeMode: z.string().nullable(),
    pteroNodeId: z.number().int().nullable(),
    updatedAt: z.date().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()});