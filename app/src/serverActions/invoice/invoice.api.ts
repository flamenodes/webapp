import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'

const wrapError = (message: string) => ({ success: false, message })

export const generateInvoice = createServerFn({ method: 'POST' })
  .validator((data) => z.object({ orderId: z.string(), razorpayData: z.record(z.any()).optional() }).parse(data))
  .handler(async ({ data }) => {
    const { runGenerateInvoice } = await import('./invoice.server')
    return runGenerateInvoice(data)
  })

export const adminGenerateInvoice = createServerFn({ method: 'POST' })
  .validator((data) => z.object({ orderId: z.string() }).parse(data))
  .handler(async ({ data }) => {
    const { runAdminGenerateInvoice } = await import('./invoice.server')
    return runAdminGenerateInvoice(data)
  })

export const regenerateAllInvoices = createServerFn({ method: 'POST' })
  .handler(async () => {
    const { runRegenerateAllInvoices } = await import('./invoice.server')
    return runRegenerateAllInvoices()
  })

export const getInvoices = createServerFn({ method: 'GET' })
  .handler(async () => {
    const { runGetInvoices } = await import('./invoice.server')
    return runGetInvoices()
  })

export const getInvoiceByOrderId = createServerFn({ method: 'GET' })
  .validator((data) => z.object({ orderId: z.string() }).parse(data))
  .handler(async ({ data }) => {
    const { runGetInvoiceByOrderId } = await import('./invoice.server')
    return runGetInvoiceByOrderId(data)
  })

export const getAllInvoices = createServerFn({ method: 'GET' })
  .handler(async () => {
    const { runGetAllInvoices } = await import('./invoice.server')
    return runGetAllInvoices()
  })

export const getOrdersWithoutInvoice = createServerFn({ method: 'GET' })
  .handler(async () => {
    const { runGetOrdersWithoutInvoice } = await import('./invoice.server')
    return runGetOrdersWithoutInvoice()
  })
