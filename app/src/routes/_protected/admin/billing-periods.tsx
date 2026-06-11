import { createFileRoute } from '@tanstack/react-router'
import { useSuspenseQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getProducts } from '@/serverActions/products/product.api'
import { createCustomBillingPeriod, updateCustomBillingPeriod, deleteCustomBillingPeriod } from '@/serverActions/admin/billing-period.api'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { Plus, Trash2, Clock } from 'lucide-react'
import { toast } from 'sonner'

export const Route = createFileRoute('/_protected/admin/billing-periods')({
  head: () => ({ meta: [{ title: 'Billing Periods | Flame Nodes Admin' }] }),
  component: BillingPeriodsPage,
})

function BillingPeriodsPage() {
  const { data } = useSuspenseQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  })
  const products = data?.data || []

  return (
    <main className="mx-auto w-full max-w-7xl p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Custom Billing Periods</h1>
        <p className="text-muted-foreground">Manage custom billing periods for products</p>
      </div>

      <div className="grid gap-4">
        {products.map((product: any) => (
          <ProductBillingCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}

function ProductBillingCard({ product }: { product: any }) {
  const qc = useQueryClient()
  const [open, setOpen] = useState(false)
  const [customDays, setCustomDays] = useState('')
  const [price, setPrice] = useState('')

  const customOptions = product.billingOptions?.filter((opt: any) => opt.billingPeriod === 'CUSTOM') || []

  const createMutation = useMutation({
    mutationFn: createCustomBillingPeriod,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['products'] })
      toast.success('Custom billing period created')
      setOpen(false)
      setCustomDays('')
      setPrice('')
    },
    onError: () => toast.error('Failed to create billing period'),
  })

  const deleteMutation = useMutation({
    mutationFn: deleteCustomBillingPeriod,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['products'] })
      toast.success('Custom billing period deleted')
    },
    onError: () => toast.error('Failed to delete billing period'),
  })

  const handleCreate = () => {
    if (!customDays || !price) {
      toast.error('Please fill all fields')
      return
    }
    createMutation.mutate({
      data: {
        productId: product.id,
        customDays: parseInt(customDays),
        price: parseInt(price),
      },
    })
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-semibold">{product.planName}</h3>
            <p className="text-sm text-muted-foreground">{product.category}</p>
          </div>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button size="sm">
                <Plus className="w-4 h-4 mr-1" /> Add Custom Period
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Add Custom Billing Period</SheetTitle>
              </SheetHeader>
              <div className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Label>Custom Days</Label>
                  <Input
                    type="number"
                    placeholder="e.g., 15"
                    value={customDays}
                    onChange={(e) => setCustomDays(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Price (₹)</Label>
                  <Input
                    type="number"
                    placeholder="e.g., 500"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <Button onClick={handleCreate} className="w-full" disabled={createMutation.isPending}>
                  Create
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {customOptions.length > 0 ? (
          <div className="space-y-2">
            {customOptions.map((option: any) => (
              <div key={option.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="font-medium">{option.customDays} Days</span>
                  <span className="text-sm text-muted-foreground">• ₹{option.price}</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => deleteMutation.mutate({ data: { id: option.id } })}
                  disabled={deleteMutation.isPending}
                >
                  <Trash2 className="w-4 h-4 text-destructive" />
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground text-center py-4">No custom billing periods</p>
        )}
      </CardContent>
    </Card>
  )
}
