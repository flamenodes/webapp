import { Server, CheckCircle2 } from 'lucide-react'
import { Badge } from '#/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '#/components/ui/select'

interface ProductCardProps {
  product: {
    name: string
    category: string
    pricing: {
      current: { monthly: number; currency: string }
      original: { monthly: number; currency: string }
      totalSavings: number
      period: string
      totalPrice: number
    }
    renewal: {
      monthly: number
      duration: string
      currency: string
    }
    features: {
      freeDomain: boolean
      domainDuration: string
    }
  }
}

export function ProductCard({ product }: ProductCardProps) {
  const savingsPercentage = Math.round(
    ((product.pricing.original.monthly - product.pricing.current.monthly) /
      product.pricing.original.monthly) *
      100
  )

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm dark:border-dark-border">
      {/* Product Header */}
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="mt-1 rounded-lg bg-muted p-2">
            <Server className="h-5 w-5 text-muted-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{product.name}</h3>
            <p className="text-sm text-muted-foreground">{product.category}</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400">
            Save {product.pricing.currency}
            {product.pricing.totalSavings.toLocaleString('en-IN')}
          </Badge>
          <div>
            <div className="text-right text-2xl font-bold text-foreground">
              {product.pricing.currency}
              {product.pricing.current.monthly}/mo
            </div>
            <div className="text-right text-sm line-through text-muted-foreground">
              {product.pricing.currency}
              {product.pricing.original.monthly}/mo
            </div>
          </div>
        </div>
      </div>

      {/* Billing Period Selector */}
      <div className="mb-6 flex items-center justify-between gap-4 border-t border-border pt-6 dark:border-dark-border">
        <label className="text-sm font-medium text-foreground">Period</label>
        <Select defaultValue={product.pricing.period}>
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="6 months">6 months</SelectItem>
            <SelectItem value="12 months">12 months</SelectItem>
            <SelectItem value="24 months">24 months</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Renewal Note */}
      <p className="mb-6 text-sm text-muted-foreground">
        Renews at {product.renewal.currency}
        {product.renewal.monthly}/mo for {product.renewal.duration}. Cancel anytime.
      </p>

      {/* Free Domain Banner */}
      <div className="flex items-center gap-3 rounded-lg border-t border-border pt-6 dark:border-dark-border">
        <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600 dark:text-green-500" />
        <p className="text-sm text-foreground">
          Great news! You get a FREE domain for {product.features.domainDuration} with this order.
        </p>
      </div>
    </div>
  )
}
