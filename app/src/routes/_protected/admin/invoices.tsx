import { createFileRoute } from '@tanstack/react-router'
import { useSuspenseQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  getAllInvoices,
  adminGenerateInvoice,
  regenerateAllInvoices,
  getOrdersWithoutInvoice,
} from '@/serverActions/invoice/invoice.api'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FileText, Download, Search, RefreshCw, Loader2, Plus, AlertCircle } from 'lucide-react'
import { formatDistanceToNow } from '@/lib/date-utils'
import { useState } from 'react'
import { toast } from 'sonner'

export const Route = createFileRoute('/_protected/admin/invoices')({
  head: () => ({ meta: [{ title: 'Invoices Management | Admin' }] }),
  component: AdminInvoicesPage,
})

function AdminInvoicesPage() {
  const qc = useQueryClient()
  const { data: response } = useSuspenseQuery({
    queryKey: ['admin-invoices'],
    queryFn: () => getAllInvoices(),
  })
  const { data: missingResponse } = useSuspenseQuery({
    queryKey: ['orders-without-invoice'],
    queryFn: () => getOrdersWithoutInvoice(),
  })

  const invoices = response.data || []
  const ordersWithoutInvoice = missingResponse.data || []

  const [searchQuery, setSearchQuery] = useState('')
  const [generatingId, setGeneratingId] = useState<string | null>(null)

  const generateMutation = useMutation({
    mutationFn: (orderId: string) => adminGenerateInvoice({ data: { orderId } }),
    onMutate: (orderId) => setGeneratingId(orderId),
    onSettled: () => setGeneratingId(null),
    onSuccess: (res) => {
      qc.invalidateQueries({ queryKey: ['admin-invoices'] })
      qc.invalidateQueries({ queryKey: ['orders-without-invoice'] })
      if (res.success) toast.success('Invoice generated successfully')
      else toast.error(res.message)
    },
    onError: () => toast.error('Failed to generate invoice'),
  })

  const regenerateAllMutation = useMutation({
    mutationFn: () => regenerateAllInvoices(),
    onSuccess: (res) => {
      qc.invalidateQueries({ queryKey: ['admin-invoices'] })
      qc.invalidateQueries({ queryKey: ['orders-without-invoice'] })
      toast.success(res.message)
    },
    onError: () => toast.error('Failed to regenerate invoices'),
  })

  const filteredInvoices = invoices.filter((invoice) => {
    const query = searchQuery.toLowerCase()
    return (
      invoice.invoiceNumber.toLowerCase().includes(query) ||
      invoice.order.id.toLowerCase().includes(query) ||
      invoice.order.user.email.toLowerCase().includes(query) ||
      invoice.order.user.name.toLowerCase().includes(query)
    )
  })

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="px-5 py-6 max-w-screen-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Invoices Management</h1>
            <p className="text-sm text-muted-foreground mt-1">
              View and manage all customer invoices
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              {invoices.length} Total Invoices
            </Badge>
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                if (confirm('Regenerate ALL invoices for paid/delivered orders? This may take a while.')) {
                  regenerateAllMutation.mutate()
                }
              }}
              disabled={regenerateAllMutation.isPending}
            >
              {regenerateAllMutation.isPending ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <RefreshCw className="w-4 h-4 mr-2" />
              )}
              Regenerate All
            </Button>
          </div>
        </div>

        {/* Orders missing invoices */}
        {ordersWithoutInvoice.length > 0 && (
          <Card className="border-yellow-500/30 bg-yellow-500/5">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-yellow-500" />
                Orders Without Invoices
                <Badge className="bg-yellow-500/15 text-yellow-500 border-yellow-500/20 ml-1">
                  {ordersWithoutInvoice.length}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {ordersWithoutInvoice.map((order: any) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between p-3 rounded-lg border bg-background"
                >
                  <div>
                    <p className="font-medium text-sm">
                      {order.user.name || order.user.email}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Order #{order.id.slice(0, 8).toUpperCase()} · ₹{order.totalAmount.toLocaleString()}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => generateMutation.mutate(order.id)}
                    disabled={generatingId === order.id}
                  >
                    {generatingId === order.id ? (
                      <Loader2 className="w-3 h-3 mr-1.5 animate-spin" />
                    ) : (
                      <Plus className="w-3 h-3 mr-1.5" />
                    )}
                    Generate
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Search */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search by invoice number, order ID, or customer..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        {/* Invoices Table */}
        {filteredInvoices.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-16">
              <FileText className="w-16 h-16 text-muted-foreground/50 mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                {searchQuery ? 'No invoices found' : 'No invoices yet'}
              </h3>
              <p className="text-sm text-muted-foreground text-center max-w-md">
                {searchQuery
                  ? 'Try adjusting your search query'
                  : 'Invoices will appear here after customers complete payments'}
              </p>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b bg-muted/50">
                    <tr>
                      <th className="text-left p-4 font-medium text-sm">Invoice</th>
                      <th className="text-left p-4 font-medium text-sm">Customer</th>
                      <th className="text-left p-4 font-medium text-sm">Order ID</th>
                      <th className="text-left p-4 font-medium text-sm">Amount</th>
                      <th className="text-left p-4 font-medium text-sm">Date</th>
                      <th className="text-right p-4 font-medium text-sm">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredInvoices.map((invoice) => (
                      <tr key={invoice.id} className="border-b hover:bg-muted/30 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                              <FileText className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium text-sm">{invoice.invoiceNumber}</p>
                              <p className="text-xs text-muted-foreground">
                                {invoice.order.items.length} item{invoice.order.items.length !== 1 ? 's' : ''}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <div>
                            <p className="font-medium text-sm">{invoice.order.user.name || 'N/A'}</p>
                            <p className="text-xs text-muted-foreground">{invoice.order.user.email}</p>
                          </div>
                        </td>
                        <td className="p-4">
                          <code className="text-xs bg-muted px-2 py-1 rounded">
                            #{invoice.order.id.slice(0, 8).toUpperCase()}
                          </code>
                        </td>
                        <td className="p-4">
                          <p className="font-semibold">₹{invoice.order.totalAmount.toLocaleString()}</p>
                        </td>
                        <td className="p-4">
                          <p className="text-sm text-muted-foreground">
                            {formatDistanceToNow(new Date(invoice.createdAt))}
                          </p>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center justify-end gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-8"
                              onClick={() => window.open(invoice.pdfUrl, '_blank')}
                            >
                              <Download className="w-3 h-3 mr-1.5" />
                              Download
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 w-8 p-0"
                              title="Regenerate invoice"
                              onClick={() => {
                                if (confirm('Regenerate this invoice? The old invoice will be replaced.')) {
                                  generateMutation.mutate(invoice.orderId)
                                }
                              }}
                              disabled={generatingId === invoice.orderId}
                            >
                              {generatingId === invoice.orderId ? (
                                <Loader2 className="w-3 h-3 animate-spin" />
                              ) : (
                                <RefreshCw className="w-3 h-3" />
                              )}
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  )
}
