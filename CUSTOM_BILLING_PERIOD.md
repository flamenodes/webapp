# Custom Billing Period Feature

## Overview
Added custom billing period functionality that allows admins to create billing periods with specific days (e.g., 15 days, 45 days) for products.

## Changes Made

### 1. Database Schema (`prisma/schema.prisma`)
- Added `CUSTOM` to `BillingPeriod` enum
- Added `customDays` field to `ProductBillingOption` model (optional integer)

### 2. Migration
- Created migration: `20260611154707_add_custom_billing_period`
- Run with: `npx prisma migrate dev`

### 3. API Endpoints (`serverActions/admin/billing-period.api.ts`)
- `createCustomBillingPeriod`: Create custom billing period for a product
- `updateCustomBillingPeriod`: Update custom billing period
- `deleteCustomBillingPeriod`: Delete custom billing period

### 4. Admin UI (`routes/_protected/admin/billing-periods.tsx`)
- New admin page to manage custom billing periods
- Add custom periods with specific days and price
- Delete custom periods
- Organized by product

### 5. Checkout UI (`components/billing/QuickCheckoutSheet.tsx`)
- Updated to display custom billing periods as "X Days" instead of "CUSTOM"
- Shows total price in the dropdown

## Usage

### Admin Panel
1. Navigate to `/admin/billing-periods`
2. Click "Add Custom Period" for a product
3. Enter number of days (e.g., 15)
4. Enter price (e.g., 500)
5. Click Create

### Checkout
- Custom billing periods appear in the billing period dropdown
- Format: "15 Days - ₹500" (instead of "CUSTOM - ₹500")
- Total price calculated based on selected billing period

## Example
Product: VPS Server
- Monthly: ₹1000
- Custom (15 Days): ₹500
- Custom (45 Days): ₹1400
