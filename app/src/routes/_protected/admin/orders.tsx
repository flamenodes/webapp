import { createFileRoute } from '@tanstack/react-router'
import { useSuspenseQuery, useMutation, useQueryClient, useQuery } from '@tanstack/react-query'
import {
  getAllOrders, createManualOrder, generatePaymentLink,
  updateOrderStatus, getAllProducts,
  getPendingCustomOrders, deliverCustomOrder, deleteOrder,
  deployOrder, deployCustomOrder,
} from '@/serverActions/admin/orders.api'
import { useState } from 'react'
import { OrdersDataTable } from '@/components/admin/orders/OrdersDataTable'
import { DeployOrderDialog } from '@/components/admin/orders/DeployOrderDialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Field, FieldLabel, FieldDescription } from '@/components/ui/field'
import { Plus, Loader2, Link as LinkIcon, Copy, Check, Wrench, Server, Package } from 'lucide-react'
import { toast } from 'sonner'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export const Route = createFileRoute('/_protected/admin/orders')({
  head: () => ({ meta: [{ title: 'Orders | Flame Nodes Admin' }] }),
  component: OrdersPage,
})

function OrdersPage() {
  const qc = useQueryClient()
  const { data: orders } = useSuspenseQuery({ queryKey: ['admin-orders'], queryFn: () => getAllOrders() })
  const { data: products } = useSuspenseQuery({ queryKey: ['admin-products'], queryFn: () => getAllProducts() })
  const { data: pendingResponse } = useQuery({
    queryKey: ['pending-custom-orders'],
    queryFn: () => getPendingCustomOrders(),
    refetchInterval: 30_000,
  })
  const pendingCustom = pendingResponse?.data || []

  const [open, setOpen] = useState(false)
  const [paymentLinkModal, setPaymentLinkModal] = useState<{ orderId: string; link: string } | null>(null)
  const [copiedLink, setCopiedLink] = useState(false)
  const [deliverSheet, setDeliverSheet] = useState<string | null>(null) // orderId
  const [deliverForm, setDeliverForm] = useState({ serverName: '', ip: '', port: '', notes: '' })
  const [deployDialog, setDeployDialog] = useState<string | null>(null) // orderId

  const [form, setForm] = useState({
    userEmail: '',
    orderType: 'EXISTING' as 'EXISTING' | 'CUSTOM',
    productId: '',
    planName: '',
    price: '',
    category: 'MINECRAFT' as 'VPS' | 'VDS' | 'WEBHOST' | 'DISCORD' | 'DDOS_PROT' | 'DEDICATED' | 'MINECRAFT',
    quantity: '1',
    billingPeriod: 'MONTHLY' as 'HOURLY' | 'DAILY' | 'MONTHLY' | 'QUARTERLY' | 'SEMIANNUALLY' | 'YEARLY' | 'CUSTOM',
    customDays: '',
    pteroServerId: '',
    linkDirectly: false,
  })

  const resetForm = () =>
    setForm({
      userEmail: '',
      orderType: 'EXISTING',
      productId: '',
      planName: '',
      price: '',
      category: 'MINECRAFT',
      quantity: '1',
      billingPeriod: 'MONTHLY',
      customDays: '',
      pteroServerId: '',
      linkDirectly: false,
    })

  const createOrderMutation = useMutation({
    mutationFn: (data: typeof form) => createManualOrder({ data }),
    onSuccess: (result) => {
      qc.invalidateQueries({ queryKey: ['admin-orders'] })
      if (result.success && result.data?.paymentLink) {
        setPaymentLinkModal({ orderId: result.data.orderId, link: result.data.paymentLink })
      }
      toast.success(result.message || 'Order created successfully')
      setOpen(false)
      resetForm()
    },
    onError: (error: any) => toast.error(error.message || 'Failed to create order'),
  })

  const generateLinkMutation = useMutation({
    mutationFn: (orderId: string) => generatePaymentLink({ data: { orderId } }),
    onSuccess: (result) => {
      if (result.success && result.data) {
        setPaymentLinkModal({ orderId: result.data.orderId, link: result.data.paymentLink })
        toast.success('Payment link generated')
      } else {
        toast.error(result.message || 'Failed to generate payment link')
      }
    },
    onError: () => toast.error('Failed to generate payment link'),
  })

  const updateStatusMutation = useMutation({
    mutationFn: ({ orderId, status }: { orderId: string; status: string }) =>
      updateOrderStatus({ data: { orderId, status } }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['admin-orders'] })
      toast.success('Order status updated')
    },
    onError: () => toast.error('Failed to update order status'),
  })

  const deliverMutation = useMutation({
    mutationFn: (data: { orderId: string; serverName: string; ip?: string; port?: number; notes?: string }) =>
      deliverCustomOrder({ data }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['admin-orders'] })
      qc.invalidateQueries({ queryKey: ['pending-custom-orders'] })
      setDeliverSheet(null)
      setDeliverForm({ serverName: '', ip: '', port: '', notes: '' })
      toast.success('Order delivered successfully!')
    },
    onError: () => toast.error('Failed to deliver order'),
  })

  const deleteMutation = useMutation({
    mutationFn: (orderId: string) => deleteOrder({ data: { orderId } }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['admin-orders'] })
      qc.invalidateQueries({ queryKey: ['pending-custom-orders'] })
      toast.success('Order and associated servers deleted')
    },
    onError: (error: any) => toast.error(error?.message || 'Failed to delete order'),
  })

  const deployMutation = useMutation({
    mutationFn: (orderId: string) => deployOrder({ data: { orderId } }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['admin-orders'] })
      setDeployDialog(null)
      toast.success('Deployment started via queue')
    },
    onError: (error: any) => toast.error(error?.message || 'Failed to deploy order'),
  })

  const deployCustomMutation = useMutation({
    mutationFn: (data: {
      orderId: string
      serverName: string
      panelUrl?: string
      username?: string
      password?: string
      message: string
    }) => deployCustomOrder({ data }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['admin-orders'] })
      setDeployDialog(null)
      toast.success('Order deployed successfully')
    },
    onError: (error: any) => toast.error(error?.message || 'Failed to deploy order'),
  })

  const handleCopyLink = () => {
    if (paymentLinkModal?.link) {
      navigator.clipboard.writeText(paymentLinkModal.link)
      setCopiedLink(true)
      setTimeout(() => setCopiedLink(false), 2000)
      toast.success('Payment link copied to clipboard')
    }
  }

  const openDeliverSheet = (orderId: string, productName: string) => {
    setDeliverForm({ serverName: productName, ip: '', port: '', notes: '' })
    setDeliverSheet(orderId)
  }

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="px-5 py-6 max-w-screen-2xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
            <p className="text-sm text-muted-foreground mt-1">Manage customer orders and generate payment links.</p>
          </div>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Create Order
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle>Create Manual Order</SheetTitle>
              </SheetHeader>
              <div className="space-y-4 mt-6 px-6">
                <Field>
                  <FieldLabel>Customer Email <span className="text-destructive">*</span></FieldLabel>
                  <Input
                    type="email"
                    placeholder="customer@example.com"
                    value={form.userEmail}
                    onChange={(e) => setForm((f) => ({ ...f, userEmail: e.target.value }))}
                  />
                  <FieldDescription>Email of the customer placing the order.</FieldDescription>
                </Field>

                <Field>
                  <FieldLabel>Product</FieldLabel>
                  <RadioGroup
                    value={form.orderType}
                    onValueChange={(v) => setForm((f) => ({ ...f, orderType: v as any }))}
                    className="grid grid-cols-2 gap-2"
                  >
                    <label
                      className={`flex items-start gap-2 rounded-lg border p-3 cursor-pointer transition-colors ${
                        form.orderType === 'EXISTING'
                          ? 'border-primary/50 bg-primary/5'
                          : 'hover:border-border'
                      }`}
                    >
                      <RadioGroupItem value="EXISTING" id="existing-product" className="mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Existing product</p>
                        <p className="text-xs text-muted-foreground">Pick a template from the catalog — recommended</p>
                      </div>
                    </label>
                    <label
                      className={`flex items-start gap-2 rounded-lg border p-3 cursor-pointer transition-colors ${
                        form.orderType === 'CUSTOM'
                          ? 'border-warning/50 bg-warning/5'
                          : 'hover:border-border'
                      }`}
                    >
                      <RadioGroupItem value="CUSTOM" id="custom-product" className="mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Custom</p>
                        <p className="text-xs text-muted-foreground">One-off name &amp; price — not recommended</p>
                      </div>
                    </label>
                  </RadioGroup>
                </Field>

                {form.orderType === 'EXISTING' ? (
                  <Field>
                    <FieldLabel>Product <span className="text-destructive">*</span></FieldLabel>
                    <Select value={form.productId} onValueChange={(v) => setForm((f) => ({ ...f, productId: v }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a product" />
                      </SelectTrigger>
                      <SelectContent>
                        {products.map((product) => (
                          <SelectItem key={product.id} value={product.id}>
                            {product.planName} - ₹{product.price}/mo
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FieldDescription>Product template to include in the order.</FieldDescription>
                  </Field>
                ) : (
                  <>
                    <Field>
                      <FieldLabel>Plan Name <span className="text-destructive">*</span></FieldLabel>
                      <Input
                        placeholder="e.g. Custom Minecraft 4GB"
                        value={form.planName}
                        onChange={(e) => setForm((f) => ({ ...f, planName: e.target.value }))}
                      />
                    </Field>
                    <div className="grid grid-cols-2 gap-3">
                      <Field>
                        <FieldLabel>Price (₹) <span className="text-destructive">*</span></FieldLabel>
                        <Input
                          type="number"
                          min="0"
                          placeholder="e.g. 499"
                          value={form.price}
                          onChange={(e) => setForm((f) => ({ ...f, price: e.target.value }))}
                        />
                      </Field>
                      <Field>
                        <FieldLabel>Category <span className="text-destructive">*</span></FieldLabel>
                        <Select
                          value={form.category}
                          onValueChange={(v) => setForm((f) => ({ ...f, category: v as any }))}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="MINECRAFT">Minecraft</SelectItem>
                            <SelectItem value="VPS">VPS</SelectItem>
                            <SelectItem value="VDS">VDS</SelectItem>
                            <SelectItem value="DEDICATED">Dedicated</SelectItem>
                            <SelectItem value="WEBHOST">Web Hosting</SelectItem>
                            <SelectItem value="DISCORD">Discord Bot</SelectItem>
                            <SelectItem value="DDOS_PROT">DDoS Protection</SelectItem>
                          </SelectContent>
                        </Select>
                      </Field>
                    </div>
                  </>
                )}

                <div className="grid grid-cols-2 gap-3">
                  <Field>
                    <FieldLabel>Billing Period</FieldLabel>
                    <Select
                      value={form.billingPeriod}
                      onValueChange={(v) => setForm((f) => ({ ...f, billingPeriod: v as any }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="HOURLY">Hourly</SelectItem>
                        <SelectItem value="DAILY">Daily</SelectItem>
                        <SelectItem value="MONTHLY">Monthly</SelectItem>
                        <SelectItem value="QUARTERLY">Quarterly</SelectItem>
                        <SelectItem value="SEMIANNUALLY">Semi-annually</SelectItem>
                        <SelectItem value="YEARLY">Yearly</SelectItem>
                        <SelectItem value="CUSTOM">Custom days</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field>
                    <FieldLabel>Quantity</FieldLabel>
                    <Input
                      type="number"
                      min="1"
                      value={form.quantity}
                      onChange={(e) => setForm((f) => ({ ...f, quantity: e.target.value }))}
                    />
                  </Field>
                </div>

                {form.billingPeriod === 'CUSTOM' && (
                  <Field>
                    <FieldLabel>Custom Days <span className="text-destructive">*</span></FieldLabel>
                    <Input
                      type="number"
                      min="1"
                      placeholder="e.g. 45"
                      value={form.customDays}
                      onChange={(e) => setForm((f) => ({ ...f, customDays: e.target.value }))}
                    />
                  </Field>
                )}

                <Field>
                  <FieldLabel>Pterodactyl Server ID <span className="text-destructive">*</span></FieldLabel>
                  <Input
                    type="number"
                    min="1"
                    placeholder="e.g. 42"
                    value={form.pteroServerId}
                    onChange={(e) => setForm((f) => ({ ...f, pteroServerId: e.target.value }))}
                  />
                  <FieldDescription>Numeric ID of the already-provisioned server on the panel.</FieldDescription>
                </Field>

                <Field>
                  <FieldLabel>Delivery Mode</FieldLabel>
                  <RadioGroup
                    value={form.linkDirectly ? 'direct' : 'pending'}
                    onValueChange={(v) => setForm((f) => ({ ...f, linkDirectly: v === 'direct' }))}
                    className="grid grid-cols-2 gap-2"
                  >
                    <label
                      className={`flex items-start gap-2 rounded-lg border p-3 cursor-pointer transition-colors ${
                        form.linkDirectly ? 'border-primary/50 bg-primary/5' : 'hover:border-border'
                      }`}
                    >
                      <RadioGroupItem value="direct" id="deliver-now" className="mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Deliver now</p>
                        <p className="text-xs text-muted-foreground">Server exists — link &amp; mark delivered</p>
                      </div>
                    </label>
                    <label
                      className={`flex items-start gap-2 rounded-lg border p-3 cursor-pointer transition-colors ${
                        !form.linkDirectly ? 'border-primary/50 bg-primary/5' : 'hover:border-border'
                      }`}
                    >
                      <RadioGroupItem value="pending" id="pending-link" className="mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Pending + payment link</p>
                        <p className="text-xs text-muted-foreground">Customer pays first, then server is linked</p>
                      </div>
                    </label>
                  </RadioGroup>
                </Field>

                <Button
                  className="w-full mt-2"
                  onClick={() => createOrderMutation.mutate(form)}
                  disabled={
                    createOrderMutation.isPending ||
                    !form.userEmail ||
                    !form.pteroServerId ||
                    (form.orderType === 'EXISTING' && !form.productId) ||
                    (form.orderType === 'CUSTOM' && (!form.planName || !form.price)) ||
                    (form.billingPeriod === 'CUSTOM' && !form.customDays)
                  }
                >
                  {createOrderMutation.isPending ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                  Create Order
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Manual Deliveries Section */}
        {pendingCustom.length > 0 && (
          <Card className="border-orange-500/30 bg-orange-500/5">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Wrench className="w-4 h-4 text-orange-500" />
                Pending Manual Deliveries
                <Badge className="bg-orange-500/15 text-orange-500 border-orange-500/20 ml-1">
                  {pendingCustom.length}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {pendingCustom.map((server: any) => {
                const item = server.orderItem
                const order = item?.order
                const product = item?.product
                return (
                  <div
                    key={server.id}
                    className="flex items-center justify-between p-3 rounded-lg border bg-background"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                        <Package className="w-4 h-4 text-orange-500" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">
                          {product?.planName || server.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {order?.user?.name || order?.user?.email} ·{' '}
                          Order #{order?.id?.slice(0, 8).toUpperCase()}
                        </p>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => openDeliverSheet(order?.id, product?.planName || server.name)}
                    >
                      <Server className="w-3 h-3 mr-1.5" />
                      Deliver
                    </Button>
                  </div>
                )
              })}
            </CardContent>
          </Card>
        )}

        <div className="rounded-xl">
          <OrdersDataTable
            data={orders}
            onGeneratePaymentLink={(orderId) => generateLinkMutation.mutate(orderId)}
            onUpdateStatus={(orderId, status) => updateStatusMutation.mutate({ orderId, status })}
            onDeleteOrder={(orderId) => {
              if (confirm('Are you sure you want to delete this order? All associated servers will be deleted, including from Pterodactyl if applicable.')) {
                deleteMutation.mutate(orderId)
              }
            }}
            onDeploy={(orderId) => setDeployDialog(orderId)}
            isGeneratingLink={generateLinkMutation.isPending}
          />
        </div>
      </div>

      <Sheet open={!!deliverSheet} onOpenChange={(o) => !o && setDeliverSheet(null)}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Deliver Order Manually</SheetTitle>
          </SheetHeader>
          <div className="space-y-4 mt-6">
            <p className="text-sm text-muted-foreground">
              Fill in the server details and click Deliver to mark this order as delivered and notify the customer.
            </p>

            <div className="space-y-2">
              <Label>Server Name <span className="text-destructive">*</span></Label>
              <Input
                placeholder="e.g. Minecraft Server #1"
                value={deliverForm.serverName}
                onChange={(e) => setDeliverForm((f) => ({ ...f, serverName: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label>IP Address</Label>
              <Input
                placeholder="e.g. 103.45.67.89"
                value={deliverForm.ip}
                onChange={(e) => setDeliverForm((f) => ({ ...f, ip: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label>Port</Label>
              <Input
                type="number"
                placeholder="e.g. 25565"
                value={deliverForm.port}
                onChange={(e) => setDeliverForm((f) => ({ ...f, port: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label>Delivery Notes (optional)</Label>
              <Textarea
                placeholder="Any notes for the customer or internal reference..."
                value={deliverForm.notes}
                onChange={(e) => setDeliverForm((f) => ({ ...f, notes: e.target.value }))}
                rows={3}
              />
            </div>

            <Button
              className="w-full"
              onClick={() => {
                if (!deliverSheet) return
                deliverMutation.mutate({
                  orderId: deliverSheet,
                  serverName: deliverForm.serverName,
                  ip: deliverForm.ip || undefined,
                  port: deliverForm.port ? Number(deliverForm.port) : undefined,
                  notes: deliverForm.notes || undefined,
                })
              }}
              disabled={deliverMutation.isPending || !deliverForm.serverName}
            >
              {deliverMutation.isPending ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Server className="w-4 h-4 mr-2" />
              )}
              Deliver Order
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      {paymentLinkModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setPaymentLinkModal(null)}>
          <div className="bg-card border rounded-xl p-6 max-w-lg w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Payment Link Generated</h3>
              <Badge variant="outline" className="text-xs">
                Order #{paymentLinkModal.orderId.slice(0, 8).toUpperCase()}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Share this payment link with the customer to complete the payment.
            </p>
            <div className="flex gap-2">
              <Input value={paymentLinkModal.link} readOnly className="font-mono text-xs" />
              <Button size="icon" variant="outline" onClick={handleCopyLink}>
                {copiedLink ? <Check className="w-4 h-4 text-success" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
            <div className="flex gap-2 mt-4">
              <Button variant="outline" className="flex-1" onClick={() => setPaymentLinkModal(null)}>
                Close
              </Button>
              <Button className="flex-1" onClick={() => window.open(paymentLinkModal.link, '_blank')}>
                <LinkIcon className="w-4 h-4 mr-2" />
                Open Link
              </Button>
            </div>
          </div>
        </div>
      )}

      <DeployOrderDialog
        open={!!deployDialog}
        onOpenChange={(open) => !open && setDeployDialog(null)}
        order={orders.find((o) => o.id === deployDialog) || null}
        onDeployPterodactyl={(orderId) => deployMutation.mutate(orderId)}
        onDeployCustom={(data) => deployCustomMutation.mutate(data)}
        isDeploying={deployMutation.isPending || deployCustomMutation.isPending}
      />
    </main>
  )
}

