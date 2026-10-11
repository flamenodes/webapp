import { useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '#/components/ui/dialog'
import { Button } from '#/components/ui/button'
import { Label } from '#/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '#/components/ui/select'
import { Loader2, RefreshCw } from 'lucide-react'
import { createRenewalOrder } from '#/serverActions/user/servers.api'
import { toast } from 'sonner'

const PERIOD_LABELS: Record<string, string> = {
  HOURLY: 'Hourly',
  DAILY: 'Daily',
  MONTHLY: 'Monthly',
  QUARTERLY: 'Quarterly',
  SEMIANNUALLY: 'Semi-Annual',
  YEARLY: 'Yearly',
  CUSTOM: 'Custom',
}

interface RenewServerDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  server: any
}

export function RenewServerDialog({ open, onOpenChange, server }: RenewServerDialogProps) {
  const navigate = useNavigate()
  const product = server?.orderItem?.product
  const billingOptions = product?.billingOptions || []
  const [billingPeriod, setBillingPeriod] = useState<string>('')
  const [loading, setLoading] = useState(false)

  if (!server) return null

  const defaultPeriod =
    billingOptions[0]?.billingPeriod ||
    server?.orderItem?.billingPeriod ||
    'MONTHLY'
  const selectedPeriod = billingPeriod || defaultPeriod
  const selectedOption = billingOptions.find(
    (o: any) => o.billingPeriod === selectedPeriod,
  )
  const price = selectedOption?.price ?? product?.price ?? 0

  const handleRenew = async () => {
    setLoading(true)
    try {
      const res = await createRenewalOrder({
        data: { serverId: server.id, billingPeriod: selectedPeriod },
      })
      if (res.success && res.data?.redirectUrl) {
        toast.success('Renewal created. Review the order and payment details.')
        onOpenChange(false)
        navigate({
          to: '/billing/payment',
          search: {
            orderId: res.data.orderId,
          } as any,
        })
      } else {
        toast.error(res.message || 'Failed to create renewal order')
        setLoading(false)
      }
    } catch (error: any) {
      toast.error(error.message || 'Failed to create renewal order')
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={(o) => !o && !loading && onOpenChange(false)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <RefreshCw className="w-4 h-4 text-primary" />
            Renew Server
          </DialogTitle>
          <DialogDescription>
            Choose a billing period to renew{' '}
            {server?.resources?.label || server?.name}. Your server's expiry will be
            extended and it will be reactivated.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Billing Period</Label>
            {billingOptions.length > 0 ? (
              <Select value={selectedPeriod} onValueChange={setBillingPeriod}>
                <SelectTrigger className="h-10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {billingOptions.map((option: any) => {
                    const label =
                      option.billingPeriod === 'CUSTOM' && option.customDays
                        ? `${option.customDays} Days`
                        : PERIOD_LABELS[option.billingPeriod] || option.billingPeriod
                    return (
                      <SelectItem
                        key={option.id || option.billingPeriod}
                        value={option.billingPeriod}
                      >
                        {label} - ₹{option.price}
                      </SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
            ) : (
              <div className="text-sm text-muted-foreground border rounded-lg p-3">
                {PERIOD_LABELS[selectedPeriod] || selectedPeriod}
              </div>
            )}
          </div>

          <div className="border rounded-lg p-3 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Renewal price</span>
            <span className="font-semibold">₹{price.toLocaleString()}</span>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)} disabled={loading}>
            Cancel
          </Button>
          <Button onClick={handleRenew} disabled={loading}>
            {loading ? (
              <Loader2 className="w-4 h-4 mr-1.5 animate-spin" />
            ) : (
              <RefreshCw className="w-4 h-4 mr-1.5" />
            )}
            Pay & Renew
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
