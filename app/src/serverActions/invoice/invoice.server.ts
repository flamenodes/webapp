import { getSession } from '@/handlers/auth.handler'
import { prisma } from '@/db'
import { hasPermissionFn } from '@/lib/has-permission'
import easyinvoice from 'easyinvoice'
import { uploadInvoicePDF } from './upload-invoice'

const wrapSuccess = <T>(message: string, data?: T) => ({ success: true, message, data })
const wrapError = (message: string) => ({ success: false, message })

async function requireAdmin() {
  const session = await getSession()
  const permission = await hasPermissionFn({ data: { permissions: { products: ['read'] } } })
  if (!permission) throw new Error('Permission denied')
  return session?.user
}

async function buildAndSaveInvoice(orderId: string, razorpayData?: Record<string, any> | null) {
  await prisma.invoice.deleteMany({ where: { orderId } })

  const [order, razorpayConfig] = await Promise.all([
    prisma.order.findUnique({
      where: { id: orderId },
      include: { items: { include: { product: true, server: true } }, user: { include: { billingAddress: true } } },
    }),
    prisma.razorpayConfig.findFirst(),
  ])

  if (!order) throw new Error('Order not found')

  // Invoice date = order start (purchase) date. Due date = the server's
  // expiry — the day the paid-for period ends — falling back to the order
  // item expiry, then the order date.
  const invoiceDate = new Date(order.createdAt)
  const linkedServer = order.items.map((i) => i.server).find(Boolean)
  const dueDate = linkedServer?.expiresAt ?? order.items[0]?.expiresAt ?? invoiceDate

  const invoiceCount = await prisma.invoice.count()
  const invoiceNumber = `INV-${new Date().getFullYear()}-${String(invoiceCount + 1).padStart(6, '0')}`

  const invoiceData = {
    sender: {
      company: razorpayConfig?.companyName || 'Flame Nodes',
      address: razorpayConfig?.companyAddress || '',
      city: razorpayConfig?.companyCity || '',
      zip: razorpayConfig?.companyZip || '',
      country: razorpayConfig?.companyCountry || 'India',
      custom1: razorpayConfig?.gstin ? `GSTIN: ${razorpayConfig.gstin}` : '',
    },
    client: {
      company: `${order.user.billingAddress?.firstName ?? ''} ${order.user.billingAddress?.lastName ?? ''}`.trim() || order.user.name || 'Customer',
      address: order.user.billingAddress?.address || 'N/A',
      city: [order.user.billingAddress?.city, order.user.billingAddress?.state].filter(Boolean).join(', ') || 'N/A',
      zip: order.user.billingAddress?.zip || 'N/A',
      country: order.user.billingAddress?.country || 'India',
      custom1: `Email: ${order.user.email}`,
      custom2: order.user.billingAddress?.phone ? `Phone: ${order.user.billingAddress.phone}` : `Customer ID: ${order.user.id.slice(0, 8)}`,
    },
    information: {
      number: invoiceNumber,
      date: invoiceDate.toLocaleDateString('en-IN'),
      'due-date': dueDate.toLocaleDateString('en-IN'),
    },
    products: order.items.map((item) => ({
      quantity: item.quantity,
      description: `${item.productName} (${item.billingPeriod.toLowerCase()})`,
      'tax-rate': 18,
      price: item.unitPrice,
    })),
    'bottom-notice': 'Thank you for your business. Please contact support@flamenodes.com for any queries.',
    settings: {
      currency: 'INR',
      'tax-notation': 'GST',
      'margin-top': 25,
      'margin-right': 25,
      'margin-left': 25,
      'margin-bottom': 25,
    },
  }

  const result = await easyinvoice.createInvoice(invoiceData)
  const pdfBuffer = Buffer.from(result.pdf, 'base64')
  const pdfUrl = await uploadInvoicePDF(pdfBuffer, `${invoiceNumber}.pdf`)

  return prisma.invoice.create({
    data: { orderId: order.id, invoiceNumber, pdfUrl, razorpayData: razorpayData ?? null },
  })
}

export async function runGenerateInvoice(data: { orderId: string; razorpayData?: Record<string, any> }) {
  const session = await getSession()
  if (!session?.user) return wrapError('Unauthorized')

  const order = await prisma.order.findFirst({
    where: { id: data.orderId, userId: session.user.id },
    select: { id: true, status: true },
  })

  if (!order) return wrapError('Order not found')
  if (order.status !== 'PAID' && order.status !== 'DELIVERED')
    return wrapError('Invoice can only be generated for completed orders')

  try {
    const invoice = await buildAndSaveInvoice(data.orderId, data.razorpayData)
    return wrapSuccess('Invoice generated successfully', invoice)
  } catch (error) {
    console.error('Invoice generation error:', error)
    return wrapError('Failed to generate invoice')
  }
}

export async function runAdminGenerateInvoice(data: { orderId: string }) {
  await requireAdmin()
  try {
    const invoice = await buildAndSaveInvoice(data.orderId)
    return wrapSuccess('Invoice generated successfully', invoice)
  } catch (error) {
    console.error('Invoice generation error:', error)
    return wrapError('Failed to generate invoice')
  }
}

export async function runRegenerateAllInvoices() {
  await requireAdmin()

  const orders = await prisma.order.findMany({
    where: { status: { in: ['PAID', 'DELIVERED'] } },
    select: { id: true },
  })

  let success = 0
  let failed = 0
  for (const order of orders) {
    try {
      await buildAndSaveInvoice(order.id)
      success++
    } catch {
      failed++
    }
  }

  return wrapSuccess(`Regenerated ${success} invoices${failed ? `, ${failed} failed` : ''}`)
}

export async function runGetInvoices() {
  const session = await getSession()
  if (!session?.user) return wrapError('Unauthorized')

  const invoices = await prisma.invoice.findMany({
    where: { order: { userId: session.user.id } },
    include: { order: { include: { items: true } } },
    orderBy: { createdAt: 'desc' },
  })

  return wrapSuccess('Invoices fetched successfully', invoices)
}

export async function runGetInvoiceByOrderId(data: { orderId: string }) {
  const session = await getSession()
  if (!session?.user) throw new Error('Unauthorized')

  const invoice = await prisma.invoice.findUnique({
    where: { orderId: data.orderId },
    include: { order: { include: { items: true, user: true } } },
  })

  if (!invoice || invoice.order.userId !== session.user.id) throw new Error('Invoice not found')
  return invoice
}

export async function runGetAllInvoices() {
  await requireAdmin()

  const invoices = await prisma.invoice.findMany({
    include: { order: { include: { items: true, user: true } } },
    orderBy: { createdAt: 'desc' },
  })

  return wrapSuccess('Invoices fetched successfully', invoices)
}

export async function runGetOrdersWithoutInvoice() {
  await requireAdmin()

  const orders = await prisma.order.findMany({
    where: { status: { in: ['PAID', 'DELIVERED'] }, invoice: null },
    include: { user: { select: { id: true, name: true, email: true } }, items: true },
    orderBy: { createdAt: 'desc' },
  })

  return wrapSuccess('Orders without invoices fetched', orders)
}
