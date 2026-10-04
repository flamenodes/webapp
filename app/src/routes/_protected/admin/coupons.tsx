import { createFileRoute } from '@tanstack/react-router'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useMemo, useState } from 'react'
import {
  createCoupon,
  deleteCoupon,
  getCoupons,
  updateCoupon,
} from '#/serverActions/billing/coupon.api'
import { Badge } from '#/components/ui/badge'
import { Button } from '#/components/ui/button'
import { Checkbox } from '#/components/ui/checkbox'
import { Input } from '#/components/ui/input'
import { Label } from '#/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '#/components/ui/select'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '#/components/ui/sheet'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '#/components/ui/alert-dialog'
import { describeCoupon } from '#/lib/coupon'
import { Loader2, Pencil, Plus, TicketPercent, Trash2 } from 'lucide-react'
import { toast } from 'sonner'

export const Route = createFileRoute('/_protected/admin/coupons')({
  head: () => ({ meta: [{ title: 'Coupons | Flame Nodes Admin' }] }),
  component: AdminCouponsPage,
})

type CouponRow = {
  id: string
  code: string
  type: 'PERCENT' | 'FIXED'
  amount: number
  description: string | null
  active: boolean
  expiresAt: string | Date | null
  maxUses: number | null
  usedCount: number
  createdAt: string | Date
}

type CouponForm = {
  code: string
  type: 'PERCENT' | 'FIXED'
  amount: string
  description: string
  maxUses: string
  /** `yyyy-mm-dd` as the native date input gives it; empty means never expires. */
  expiresAt: string
  active: boolean
}

const EMPTY_FORM: CouponForm = {
  code: '',
  type: 'PERCENT',
  amount: '',
  description: '',
  maxUses: '',
  expiresAt: '',
  active: true,
}

/** A Date (or ISO string) as the `yyyy-mm-dd` a date input expects. */
function toDateInput(value: string | Date | null): string {
  if (!value) return ''
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ''
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${date.getFullYear()}-${month}-${day}`
}

function isExpired(coupon: CouponRow): boolean {
  return Boolean(coupon.expiresAt && new Date(coupon.expiresAt).getTime() <= Date.now())
}

function isUsedUp(coupon: CouponRow): boolean {
  return coupon.maxUses !== null && coupon.usedCount >= coupon.maxUses
}

function AdminCouponsPage() {
  const qc = useQueryClient()
  const { data: coupons = [], isLoading } = useQuery({
    queryKey: ['admin-coupons'],
    queryFn: () => getCoupons(),
  })

  const [sheetOpen, setSheetOpen] = useState(false)
  const [editing, setEditing] = useState<CouponRow | null>(null)
  const [form, setForm] = useState<CouponForm>(EMPTY_FORM)
  const [couponToDelete, setCouponToDelete] = useState<CouponRow | null>(null)

  const stats = useMemo(() => {
    const list = coupons as CouponRow[]
    return {
      total: list.length,
      live: list.filter((c) => c.active && !isExpired(c) && !isUsedUp(c)).length,
      redemptions: list.reduce((sum, c) => sum + c.usedCount, 0),
    }
  }, [coupons])

  function openCreate() {
    setEditing(null)
    setForm(EMPTY_FORM)
    setSheetOpen(true)
  }

  function openEdit(coupon: CouponRow) {
    setEditing(coupon)
    setForm({
      code: coupon.code,
      type: coupon.type,
      amount: String(coupon.amount),
      description: coupon.description ?? '',
      maxUses: coupon.maxUses === null ? '' : String(coupon.maxUses),
      expiresAt: toDateInput(coupon.expiresAt),
      active: coupon.active,
    })
    setSheetOpen(true)
  }

  const saveMutation = useMutation({
    mutationFn: async () => {
      const amount = Number.parseInt(form.amount, 10)
      if (!Number.isFinite(amount) || amount <= 0) {
        throw new Error('Enter a discount amount greater than 0.')
      }
      if (form.type === 'PERCENT' && amount > 100) {
        throw new Error('A percentage coupon cannot exceed 100.')
      }

      const maxUsesRaw = form.maxUses.trim()
      const maxUses = maxUsesRaw === '' ? null : Number.parseInt(maxUsesRaw, 10)
      if (maxUses !== null && (!Number.isFinite(maxUses) || maxUses <= 0)) {
        throw new Error('Max uses must be a positive number, or blank for unlimited.')
      }

      const payload = {
        code: form.code.trim().toUpperCase(),
        type: form.type,
        amount,
        description: form.description.trim() || null,
        active: form.active,
        // End of the chosen day, so a coupon dated today is still valid today.
        expiresAt: form.expiresAt
          ? new Date(`${form.expiresAt}T23:59:59`).toISOString()
          : null,
        maxUses,
      }

      if (!payload.code) throw new Error('Coupon code is required.')

      return editing
        ? updateCoupon({ data: { id: editing.id, ...payload } })
        : createCoupon({ data: payload })
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['admin-coupons'] })
      toast.success(editing ? 'Coupon updated' : 'Coupon created')
      setSheetOpen(false)
      setEditing(null)
      setForm(EMPTY_FORM)
    },
    onError: (error: any) => toast.error(error?.message || 'Failed to save coupon'),
  })

  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteCoupon({ data: { id } }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['admin-coupons'] })
      toast.success('Coupon deleted')
      setCouponToDelete(null)
    },
    onError: () => toast.error('Failed to delete coupon'),
  })

  const toggleMutation = useMutation({
    mutationFn: (coupon: CouponRow) =>
      updateCoupon({ data: { id: coupon.id, active: !coupon.active } }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['admin-coupons'] }),
    onError: () => toast.error('Failed to update coupon'),
  })

  const rows = coupons as CouponRow[]

  return (
    <main className="mx-auto w-full max-w-7xl p-6">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Coupons</h1>
          <p className="text-muted-foreground">
            Percentage or fixed discounts customers can apply on the payment page.
          </p>
        </div>
        <Button onClick={openCreate}>
          <Plus className="w-4 h-4 mr-1.5" />
          New Coupon
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: 'Coupons', value: stats.total },
          { label: 'Currently usable', value: stats.live },
          { label: 'Redemptions', value: stats.redemptions },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-border p-4">
            <p className="text-xs text-muted-foreground">{stat.label}</p>
            <p className="text-2xl font-bold mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/40 border-b border-border text-left text-muted-foreground text-xs">
            <tr>
              {['Code', 'Discount', 'Status', 'Uses', 'Expires', 'Description', ''].map((h) => (
                <th key={h} className="px-4 py-3 font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {isLoading ? (
              <tr>
                <td colSpan={7} className="text-center py-12 text-muted-foreground">
                  <Loader2 className="w-4 h-4 animate-spin inline mr-2" />
                  Loading coupons…
                </td>
              </tr>
            ) : rows.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-12 text-muted-foreground">
                  No coupons yet. Create one to offer a discount at checkout.
                </td>
              </tr>
            ) : (
              rows.map((coupon) => {
                const expired = isExpired(coupon)
                const usedUp = isUsedUp(coupon)
                const usable = coupon.active && !expired && !usedUp
                return (
                  <tr key={coupon.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <TicketPercent className="w-4 h-4 text-muted-foreground" />
                        <span className="font-mono font-medium">{coupon.code}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 font-medium">{describeCoupon(coupon)}</td>
                    <td className="px-4 py-3">
                      <Badge
                        variant={usable ? 'default' : 'outline'}
                        className="text-xs"
                      >
                        {expired
                          ? 'Expired'
                          : usedUp
                            ? 'Used up'
                            : coupon.active
                              ? 'Active'
                              : 'Inactive'}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground text-xs">
                      {coupon.usedCount}
                      {coupon.maxUses === null ? ' / ∞' : ` / ${coupon.maxUses}`}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground text-xs">
                      {coupon.expiresAt
                        ? new Date(coupon.expiresAt).toLocaleDateString()
                        : 'Never'}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground text-xs max-w-[220px] truncate">
                      {coupon.description || '—'}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-1">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-7 text-xs"
                          onClick={() => toggleMutation.mutate(coupon)}
                          disabled={toggleMutation.isPending}
                        >
                          {coupon.active ? 'Disable' : 'Enable'}
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-7 w-7"
                          onClick={() => openEdit(coupon)}
                        >
                          <Pencil className="w-3.5 h-3.5" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-7 w-7"
                          onClick={() => setCouponToDelete(coupon)}
                        >
                          <Trash2 className="w-3.5 h-3.5 text-destructive" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </div>

      <Sheet
        open={sheetOpen}
        onOpenChange={(open) => {
          setSheetOpen(open)
          if (!open) setEditing(null)
        }}
      >
        <SheetContent className="overflow-y-auto">
          <SheetHeader>
            <SheetTitle>{editing ? 'Edit Coupon' : 'New Coupon'}</SheetTitle>
            <SheetDescription>
              The discount is applied to the order subtotal on the payment page.
            </SheetDescription>
          </SheetHeader>

          <div className="space-y-4 px-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="coupon-code">Code</Label>
              <Input
                id="coupon-code"
                value={form.code}
                placeholder="SAVE10"
                className="font-mono uppercase"
                onChange={(e) => setForm((f) => ({ ...f, code: e.target.value }))}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label>Type</Label>
                <Select
                  value={form.type}
                  onValueChange={(value) =>
                    setForm((f) => ({ ...f, type: value as 'PERCENT' | 'FIXED' }))
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="PERCENT">Percentage (%)</SelectItem>
                    <SelectItem value="FIXED">Fixed (₹)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="coupon-amount">
                  {form.type === 'PERCENT' ? 'Discount (%)' : 'Discount (₹)'}
                </Label>
                <Input
                  id="coupon-amount"
                  type="number"
                  min={1}
                  max={form.type === 'PERCENT' ? 100 : undefined}
                  inputMode="numeric"
                  value={form.amount}
                  placeholder={form.type === 'PERCENT' ? '10' : '100'}
                  onChange={(e) => setForm((f) => ({ ...f, amount: e.target.value }))}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="coupon-description">Description (optional)</Label>
              <Input
                id="coupon-description"
                value={form.description}
                placeholder="Festive offer"
                onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="coupon-max-uses">Max uses</Label>
                <Input
                  id="coupon-max-uses"
                  type="number"
                  min={1}
                  inputMode="numeric"
                  value={form.maxUses}
                  placeholder="Unlimited"
                  onChange={(e) => setForm((f) => ({ ...f, maxUses: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="coupon-expires">Expires on</Label>
                <Input
                  id="coupon-expires"
                  type="date"
                  value={form.expiresAt}
                  onChange={(e) => setForm((f) => ({ ...f, expiresAt: e.target.value }))}
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                id="coupon-active"
                checked={form.active}
                onCheckedChange={(checked) =>
                  setForm((f) => ({ ...f, active: checked === true }))
                }
              />
              <Label htmlFor="coupon-active">Active</Label>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setSheetOpen(false)}
                disabled={saveMutation.isPending}
              >
                Cancel
              </Button>
              <Button
                type="button"
                onClick={() => saveMutation.mutate()}
                disabled={saveMutation.isPending}
              >
                {saveMutation.isPending && (
                  <Loader2 className="w-4 h-4 mr-1.5 animate-spin" />
                )}
                {editing ? 'Save Changes' : 'Create Coupon'}
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <AlertDialog
        open={Boolean(couponToDelete)}
        onOpenChange={(open) => !open && setCouponToDelete(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete coupon {couponToDelete?.code}?</AlertDialogTitle>
            <AlertDialogDescription>
              Customers will no longer be able to apply it. Orders that already used it
              keep their discount.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={deleteMutation.isPending}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => couponToDelete && deleteMutation.mutate(couponToDelete.id)}
              disabled={deleteMutation.isPending}
            >
              {deleteMutation.isPending && (
                <Loader2 className="w-4 h-4 mr-1.5 animate-spin" />
              )}
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  )
}
