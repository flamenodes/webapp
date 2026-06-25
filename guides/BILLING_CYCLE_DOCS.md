# Server Billing Cycle & Auto-Suspension

## Overview
This system automatically suspends servers when their billing cycle expires.

## Features Implemented

### 1. Billing Cycle Tracking
- Servers have an `expiresAt` field that tracks when the billing cycle ends
- The UI shows expiration warnings when servers are close to expiring
- Expired servers are automatically marked as suspended

### 2. User Interface Updates

#### Dashboard (`app/src/routes/_protected/user/dashboard.tsx`)
- Fixed: No longer shows "Deploying..." for active servers without Pterodactyl IDs
- Now correctly shows "Active" for active servers

#### Servers Page (`app/src/routes/_protected/user/servers.tsx`)
- Shows billing cycle expiration date with color-coded warnings:
  - Red: Expired
  - Orange: Expires in 7 days or less
  - Gray: More than 7 days remaining
- Displays "Renew Server" button when billing cycle has expired
- Expired servers show as "Suspended" status
- Access to panel is disabled for expired servers

### 3. Server Renewal
- API endpoint: `renewServer` in `app/src/serverActions/user/servers.api.ts`
- Creates a new order for the same product/billing period
- Redirects user to checkout to complete payment
- After payment, the server's `expiresAt` will be extended

### 4. Automatic Suspension

#### Suspension Logic (`app/src/lib/server/suspend-expired-servers.ts`)
- Finds all servers with `expiresAt < now()` that are not already suspended/terminated
- For Pterodactyl servers: Stops the server via API
- Updates database: Sets `status = 'SUSPENDED'` and `suspended = true`
- Returns detailed results (success count, failures, errors)

#### API Endpoints (`app/src/serverActions/admin/suspend-expired.api.ts`)
- `triggerSuspendExpiredServers`: Admin-only manual trigger
- `cronSuspendExpiredServers`: Public endpoint for cron jobs (needs API key protection)

## Setting Up Automatic Suspension

### Option 1: Node.js Cron Job (Recommended for self-hosted)

Install node-cron:
```bash
npm install node-cron
```

Create `app/src/lib/server/cron.ts`:
```typescript
import cron from 'node-cron'
import { suspendExpiredServers } from './suspend-expired-servers'

// Run every hour
export function startCronJobs() {
  cron.schedule('0 * * * *', async () => {
    console.log('Running scheduled task: suspend expired servers')
    await suspendExpiredServers()
  })
  
  console.log('Cron jobs started')
}
```

Then call `startCronJobs()` in your server startup file.

### Option 2: External Cron Service (Recommended for serverless)

Use a service like:
- **cron-job.org** (free)
- **GitHub Actions** (free for public repos)
- **Vercel Cron** (if deployed on Vercel)

Set up a cron job to call:
```
POST https://your-domain.com/api/cron/suspend-expired
```

**Important**: Add API key authentication to `cronSuspendExpiredServers` before using in production!

### Option 3: GitHub Actions

Create `.github/workflows/suspend-expired-servers.yml`:
```yaml
name: Suspend Expired Servers

on:
  schedule:
    - cron: '0 * * * *'  # Every hour
  workflow_dispatch:  # Allow manual trigger

jobs:
  suspend:
    runs-on: ubuntu-latest
    steps:
      - name: Call suspend endpoint
        run: |
          curl -X POST https://your-domain.com/api/cron/suspend-expired \
            -H "Authorization: Bearer ${{ secrets.CRON_API_KEY }}"
```

### Option 4: Database Trigger (Advanced)

Create a PostgreSQL function and trigger that runs on a schedule using pg_cron extension.

## Security Considerations

1. **Protect the cron endpoint**: Add API key validation in `cronSuspendExpiredServers`
2. **Rate limiting**: Implement rate limiting on the cron endpoint
3. **IP whitelist**: Only allow requests from known IPs
4. **Logging**: Log all suspension actions for audit trail
5. **Notifications**: Send email/notification to users before suspension

## Testing

### Manual Testing
1. Set a server's `expiresAt` to a past date in the database
2. Visit the servers page - it should show as expired with a "Renew" button
3. Call the admin trigger endpoint to suspend it
4. Verify the server status changes to "SUSPENDED"

### Automated Testing
```typescript
// Test the suspension logic
import { suspendExpiredServers } from '@/lib/server/suspend-expired-servers'

const result = await suspendExpiredServers()
console.log(result)
```

## Future Enhancements

1. **Grace Period**: Add a grace period (e.g., 3 days) before suspension
2. **Email Notifications**: Send reminders before expiration
3. **Auto-renewal**: Allow users to enable auto-renewal with saved payment methods
4. **Partial Suspension**: Reduce resources instead of full suspension
5. **Reactivation**: Automatic reactivation after payment
