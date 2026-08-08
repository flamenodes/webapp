/** Compute the expiry date for a billing period, optionally from a base date. */
export function calculateExpiryDate(
  billingPeriod: string,
  customDays?: number,
  from?: Date,
): Date {
  const base = from ? new Date(from) : new Date()

  switch (billingPeriod) {
    case 'HOURLY':
      return new Date(base.getTime() + 60 * 60 * 1000)
    case 'DAILY':
      return new Date(base.getTime() + 24 * 60 * 60 * 1000)
    case 'MONTHLY':
      base.setMonth(base.getMonth() + 1)
      return base
    case 'QUARTERLY':
      base.setMonth(base.getMonth() + 3)
      return base
    case 'SEMIANNUALLY':
      base.setMonth(base.getMonth() + 6)
      return base
    case 'YEARLY':
      base.setFullYear(base.getFullYear() + 1)
      return base
    case 'CUSTOM':
      return new Date(base.getTime() + (customDays ?? 1) * 24 * 60 * 60 * 1000)
    default:
      base.setMonth(base.getMonth() + 1)
      return base
  }
}
