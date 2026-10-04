/**
 * Coupon maths, shared by the payment page and the server actions that actually
 * charge. Both sides run the same numbers so the price a customer is shown is
 * the price the server writes onto the order — the browser total is never
 * trusted, it is only used for display.
 */

export type CouponKind = 'PERCENT' | 'FIXED'

/** The shape we need off a `Coupon` row — kept structural so callers can pass a Prisma row as-is. */
export type CouponRecord = {
  code: string
  type: CouponKind
  amount: number
  active: boolean
  expiresAt: Date | string | null
  maxUses: number | null
  usedCount: number
}

export type CouponEvaluation =
  | {
      ok: true
      code: string
      type: CouponKind
      /** The coupon's own value: a percentage for PERCENT, rupees for FIXED. */
      amount: number
      discountAmount: number
      totalAmount: number
      label: string
    }
  | { ok: false; code: string; message: string }

/** "10% off" / "₹100 off" — for the input hint and the order summary line. */
export function describeCoupon(coupon: Pick<CouponRecord, 'type' | 'amount'>): string {
  return coupon.type === 'PERCENT'
    ? `${Math.min(coupon.amount, 100)}% off`
    : `₹${coupon.amount} off`
}

/**
 * Rupees taken off `subtotal`. Never exceeds the subtotal, so a fixed coupon
 * larger than the order makes it free rather than negative.
 */
export function computeDiscount(
  coupon: Pick<CouponRecord, 'type' | 'amount'>,
  subtotal: number,
): number {
  if (subtotal <= 0) return 0

  const raw =
    coupon.type === 'PERCENT'
      ? Math.floor((subtotal * Math.min(coupon.amount, 100)) / 100)
      : coupon.amount

  return Math.max(0, Math.min(raw, subtotal))
}

/**
 * Everything the UI and the order writer need: whether the coupon is usable on
 * this subtotal, and what the customer would pay.
 */
export function evaluateCoupon(
  coupon: CouponRecord | null | undefined,
  subtotal: number,
): CouponEvaluation {
  const code = coupon?.code ?? ''

  if (!coupon) {
    return { ok: false, code, message: 'That coupon code does not exist.' }
  }
  if (!coupon.active) {
    return { ok: false, code, message: 'That coupon is no longer active.' }
  }
  if (coupon.expiresAt && new Date(coupon.expiresAt).getTime() <= Date.now()) {
    return { ok: false, code, message: 'That coupon has expired.' }
  }
  if (coupon.maxUses !== null && coupon.usedCount >= coupon.maxUses) {
    return { ok: false, code, message: 'That coupon has reached its usage limit.' }
  }

  const discountAmount = computeDiscount(coupon, subtotal)
  if (discountAmount <= 0) {
    return {
      ok: false,
      code,
      message: 'That coupon does not reduce this order.',
    }
  }

  return {
    ok: true,
    code: coupon.code,
    type: coupon.type,
    amount: coupon.amount,
    discountAmount,
    totalAmount: Math.max(subtotal - discountAmount, 0),
    label: describeCoupon(coupon),
  }
}
