import { getSession } from '@/handlers/auth.handler'
import { prisma } from '@/db'
import { hasPermissionFn } from '@/lib/has-permission'
import easyinvoice from 'easyinvoice'
import { uploadInvoicePDF } from './upload-invoice'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

const wrapSuccess = <T>(message: string, data?: T) => ({ success: true, message, data })
const wrapError = (message: string) => ({ success: false, message })

function createInvoiceTemplate(logoBase64: string) {
  return `<!doctype html>
<html><head><meta charset="utf-8"><style>
  * { box-sizing: border-box; }
  body { color: #202124; font-family: Arial, sans-serif; font-size: 10px; padding: 28px; }
  table { border-collapse: collapse; width: 100%; }
  .header td { vertical-align: top; width: 50%; }
  .brand img { height: 58px; width: 58px; object-fit: contain; }
  .brand-name { font-size: 16px; font-weight: bold; margin-top: 8px; }
  .muted { color: #62666b; line-height: 1.55; }
  .invoice-heading { color: #202124; font-size: 25px; margin: 0 0 12px; text-align: right; }
  .meta td { padding: 3px 0; }
  .meta td:first-child { color: #62666b; text-align: right; padding-right: 12px; }
  .meta td:last-child { font-weight: bold; text-align: right; }
  .parties { margin-top: 34px; }
  .parties td { vertical-align: top; width: 50%; }
  .section-label { color: #62666b; font-size: 9px; font-weight: bold; letter-spacing: .5px; margin-bottom: 7px; text-transform: uppercase; }
  .products { margin-top: 30px; }
  .products th { background: #f2f3f5; color: #30343a; font-size: 9px; padding: 10px 8px; text-align: left; }
  .products td { border-bottom: 1px solid #e5e7eb; padding: 10px 8px; }
  .right { text-align: right !important; }
  .totals { margin: 18px 0 0 auto; width: 48%; }
  .totals td { padding: 5px 4px; }
  .grand-total td { border-top: 1px solid #c9cdd2; font-size: 13px; font-weight: bold; padding-top: 10px; }
  .notice { border-top: 1px solid #e5e7eb; color: #62666b; margin-top: 36px; padding-top: 12px; }
</style></head><body>
  <table class="header"><tr>
    <td class="brand"><img src="data:image/png;base64,${logoBase64}"><div class="brand-name">%company-from%</div>
      <div class="muted">%address-from%<br>%city-from% %zip-from%<br>%country-from%<br>%sender-custom-1%</div>
    </td>
    <td><h1 class="invoice-heading">INVOICE</h1><table class="meta">
      <tr><td>Invoice number</td><td>%number%</td></tr>
      <tr><td>Invoice date</td><td>%date%</td></tr>
      <tr><td>Due date</td><td>%due-date%</td></tr>
    </table></td>
  </tr></table>
  <table class="parties"><tr>
    <td><div class="section-label">Billed to</div><strong>%company-to%</strong><div class="muted">%address-to%<br>%city-to% %zip-to%<br>%country-to%<br>%client-custom-1%<br>%client-custom-2%</div></td>
    <td><div class="section-label">Payment currency</div><strong>Rs (Indian Rupees)</strong></td>
  </tr></table>
  <table class="products"><thead><tr><th>%products-header-products%</th><th class="right">%products-header-quantity%</th><th class="right">%products-header-price%</th><th class="right">%products-header-total%</th></tr></thead>
    <tbody><products><tr><td>%description%</td><td class="right">%quantity%</td><td class="right">Rs %price%</td><td class="right">Rs %row-total%</td></tr></products></tbody>
  </table>
  <table class="totals">
    <tr><td>%subtotal-title%</td><td class="right">Rs %subtotal%</td></tr>
    <tax><tr><td>%tax-notation% (%tax-rate%%)</td><td class="right">Rs %tax%</td></tr></tax>
    <tr class="grand-total"><td>Total</td><td class="right">Rs %total%</td></tr>
  </table>
  <div class="notice">Thank you for your business. Please contact support@flamenodes.com for any queries.</div>
</body></html>`
}

async function requireAdmin() {
  const session = await getSession()
  const permission = await hasPermissionFn({ data: { permissions: { products: ['read'] } } })
  if (!permission) throw new Error('Permission denied')
  return session?.user
}

const INVOICE_NUMBER_ATTEMPTS = 5

/**
 * Next invoice number for the year, taken from the highest one already issued.
 *
 * Row count must not be used for this: `count()` is not a sequence. Rebuilding
 * an invoice deletes a row, which lowers the count, so the next order was handed
 * a number that was already taken and the insert died with P2002 on
 * `invoiceNumber`.
 */
async function nextInvoiceNumber(year: number) {
  const prefix = `INV-${year}-`
  const latest = await prisma.invoice.findFirst({
    where: { invoiceNumber: { startsWith: prefix } },
    // Zero-padded to six digits, so lexical order matches numeric order.
    orderBy: { invoiceNumber: 'desc' },
    select: { invoiceNumber: true },
  })

  const lastSequence = latest
    ? Number.parseInt(latest.invoiceNumber.slice(prefix.length), 10)
    : 0
  const nextSequence = Number.isFinite(lastSequence) ? lastSequence + 1 : 1

  return `${prefix}${String(nextSequence).padStart(6, '0')}`
}

export async function buildAndSaveInvoice(
  orderId: string,
  razorpayData?: Record<string, any> | null,
  forceRegenerate = false,
) {
  const [order, razorpayConfig, existingInvoice] = await Promise.all([
    prisma.order.findUnique({
      where: { id: orderId },
      include: { items: { include: { product: true, server: true } }, user: { include: { billingAddress: true } } },
    }),
    prisma.razorpayConfig.findFirst(),
    prisma.invoice.findUnique({ where: { orderId } }),
  ])

  if (!order) throw new Error('Order not found')
  // Payment verification can be retried (for example after a return URL).
  // Reuse the existing invoice instead of queueing another PDF for the order.
  if (existingInvoice && !forceRegenerate) return existingInvoice

  // Invoice date = order start (purchase) date. Due date = the server's
  // expiry — the day the paid-for period ends — falling back to the order
  // item expiry, then the order date.
  const invoiceDate = new Date(order.createdAt)
  const linkedServer = order.items.map((i) => i.server).find(Boolean)
  const dueDate = linkedServer?.expiresAt ?? order.items[0]?.expiresAt ?? invoiceDate
  const logo = await readFile(join(process.cwd(), 'public', 'flamenodes.png'))

  const invoiceData = {
    images: { logo: logo.toString('base64') },
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
    products: order.items.map((item) => ({
      quantity: item.quantity,
      description: `${item.productName} (${item.billingPeriod.toLowerCase()})`,
      taxRate: 18,
      price: item.unitPrice,
    })),
    bottomNotice: 'Thank you for your business. Please contact support@flamenodes.com for any queries.',
    settings: {
      currency: '',
      locale: 'en-IN',
      taxNotation: 'GST',
      marginTop: 25,
      marginRight: 25,
      marginLeft: 25,
      marginBottom: 25,
    },
  }

  // The number is embedded in the PDF, so a lost race means rendering again
  // with a fresh one.
  for (let attempt = 1; attempt <= INVOICE_NUMBER_ATTEMPTS; attempt++) {
    // Rebuilding keeps the order's original number — a document's number
    // should not change under the customer. Retries allocate a new one.
    const invoiceNumber =
      attempt === 1 && existingInvoice?.invoiceNumber
        ? existingInvoice.invoiceNumber
        : await nextInvoiceNumber(new Date().getFullYear())

    const result = await easyinvoice.createInvoice({
      ...invoiceData,
      customize: {
        template: Buffer.from(createInvoiceTemplate(logo.toString('base64'))).toString('base64'),
      },
      information: {
        number: invoiceNumber,
        date: invoiceDate.toLocaleDateString('en-IN'),
        dueDate: dueDate.toLocaleDateString('en-IN'),
      },
    })
    const pdfUrl = await uploadInvoicePDF(
      Buffer.from(result.pdf, 'base64'),
      `${invoiceNumber}.pdf`,
    )

    try {
      // Replace any previous invoice for this order, in one transaction, so the
      // order is never briefly left without one.
      return await prisma.$transaction(async (tx) => {
        await tx.invoice.deleteMany({ where: { orderId: order.id } })
        return tx.invoice.create({
          data: { orderId: order.id, invoiceNumber, pdfUrl, razorpayData: razorpayData ?? null },
        })
      })
    } catch (error: any) {
      // Another request may have invoiced this same order first — that is a
      // success, not a conflict.
      const raced = await prisma.invoice.findUnique({ where: { orderId: order.id } })
      if (raced) return raced

      if (error?.code !== 'P2002' || attempt === INVOICE_NUMBER_ATTEMPTS) throw error
    }
  }

  throw new Error('Could not allocate an invoice number')
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
      await buildAndSaveInvoice(order.id, null, true)
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
