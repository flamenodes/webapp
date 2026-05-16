import { Button } from '#/components/ui/button'
import { Separator } from '#/components/ui/separator'

interface OrderSummaryItem {
  label: string
  value: number
  currency: string
}

interface OrderSummaryProps {
  items: OrderSummaryItem[]
  total: {
    value: number
    currency: string
  }
  onContinue?: () => void
}

export function OrderSummary({
  items,
  total,
  onContinue,
}: OrderSummaryProps) {
  return (
    <div className="lg:sticky lg:top-6 rounded-2xl border border-border bg-card p-5 shadow-sm dark:border-dark-border">
      {/* Summary Items */}
      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <div key={item.label} className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">{item.label}</span>
            <span className="font-medium text-foreground">
              {item.currency}
              {item.value.toLocaleString('en-IN', {
                minimumFractionDigits: item.value % 1 !== 0 ? 2 : 0,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
        ))}
      </div>

      {/* Total */}
      <Separator className="mb-6" />
      <div className="mb-6 flex items-center justify-between">
        <span className="font-semibold text-foreground">Total</span>
        <span className="text-2xl font-bold text-foreground">
          {total.currency}
          {total.value.toLocaleString('en-IN', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
      </div>

      {/* CTA Button */}
      <Button
        onClick={onContinue}
        className="w-full h-11 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
      >
        Continue
      </Button>

      {/* Coupon Link */}
      <div className="mt-4 text-center">
        <button className="text-sm text-primary hover:text-primary/80 font-medium transition-colors">
          Have a coupon code?
        </button>
      </div>
    </div>
  )
}
