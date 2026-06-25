# Billing & Payment Integration Update

## Summary
Updated the billing flow to use real product data from the API with addons/configuration options, and integrated Razorpay payment gateway.

## Changes Made

### 1. Info Page (`/billing/info`) - Product Selection
- **Before**: Hardcoded server resources (CPU, RAM, Storage)
- **After**: 
  - Fetches products from `getProducts()` API
  - Shows product selection dropdown
  - Displays billing period options from product's billing options
  - Shows configuration options (addons) based on product category
  - Calculates dynamic pricing including addon modifiers
  - Supports query parameter `?productId=xxx` for direct product selection

### 2. Payment Page (`/billing/payment`) - Razorpay Integration
- **Before**: Simulated payment with setTimeout
- **After**:
  - Creates order via `checkoutProduct()` API with billing details
  - Generates Razorpay order ID
  - Loads Razorpay checkout SDK dynamically
  - Opens Razorpay payment modal
  - Handles payment success/failure callbacks
  - Updates order status to 'PAID' on successful payment
  - Redirects to dashboard after successful payment

### 3. Billing Screen Component - Real Data
- **Before**: Used dummy/mock data for plans and credits
- **After**:
  - Fetches real orders from `getOrders()` API
  - Displays total spent amount
  - Shows active services count
  - Lists recent orders in a table with status badges
  - Shows loading state while fetching data

### 4. New Files Created
- `/app/src/serverActions/razorpay/verify.ts` - Payment verification endpoint
  - Verifies Razorpay signature using HMAC SHA256
  - Updates order status and delivery data
  - Ensures payment authenticity

### 5. Environment Variables
Added to `.env`:
```
VITE_RAZORPAY_KEY_ID="rzp_test_Srw5bVw6ZFumAD"
```

## How It Works

### Product Purchase Flow:
1. User goes to `/billing/info` (optionally with `?productId=xxx`)
2. Selects product, billing period, quantity, and configuration options
3. System calculates total price including addons
4. User clicks "Continue" → navigates to `/billing/address`
5. User enters billing details → navigates to `/billing/payment`
6. User reviews order and clicks "Complete Payment"
7. System creates order via `checkoutProduct()` API
8. Razorpay checkout modal opens with order details
9. User completes payment
10. Razorpay callback triggers order status update to 'PAID'
11. Order processing begins (server deployment queue)
12. User redirected to dashboard

### Configuration Options (Addons):
- Fetched from `ConfigurationOption` model based on product category
- Each option can have multiple values with price modifiers
- Examples: OS selection, control panel, location, etc.
- Admin can manage these via `/admin/configurations`

### Payment Security:
- Razorpay order created server-side
- Payment signature verified using HMAC SHA256
- Order status only updated after successful verification
- All sensitive keys stored server-side

## Testing
1. Ensure products exist in database with billing options
2. Set up configuration options for product categories
3. Test the full flow: product selection → billing details → payment
4. Use Razorpay test cards for testing payments
5. Verify order status updates and server deployment triggers

## Notes
- Razorpay test mode is currently active
- Switch to production by updating RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET
- Session storage is used to persist data between pages
- Clear session storage after successful payment
