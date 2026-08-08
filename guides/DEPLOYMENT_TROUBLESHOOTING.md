# Deployment Queue Troubleshooting Guide

## Issue: Deployment not starting, only changes status to PROCESSING

### Root Cause
The deployment queue requires **BullMQ workers** to be running separately. If workers are not running, jobs are added to the queue but never processed.

### Solution

#### Option 1: Run Workers Alongside Dev Server (Recommended)

```bash
# Terminal 1: Start the dev server
cd app
pnpm run dev

# Terminal 2: Start the workers
cd app
pnpm run workers
```

OR use the combined command:
```bash
cd app
pnpm run dev:all
```

#### Option 2: Fallback to Direct Deployment

The code has been updated to automatically fallback to direct deployment when the queue is unavailable. This means:
- If Redis/Workers are not running, deployment will happen directly
- You'll see a warning message: "Deployment started (queue unavailable, deploying directly)"
- The deployment will still complete, just without the queue system

### How to Verify Workers are Running

1. **Check Console Output:**
   When workers start, you should see:
   ```
   ✅ Redis connected successfully
   ✅ BullMQ queues initialized successfully
   🚀 Deployment worker started
   🚀 Email worker started
   🚀 Expiration worker started
   ✅ All BullMQ workers initialized and running
   ```

2. **Check Redis Connection:**
   ```bash
   redis-cli -h 13.203.230.206 -p 3453 -a JmGAGBqlW21zcqvwfAha ping
   ```
   Should return: `PONG`

3. **Monitor Deployment:**
   When a deployment is triggered, you should see:
   ```
   ✅ Deployment job added to queue: <job-id>
   🚀 Starting Pterodactyl deployment for: <server-name>
   🔄 Deployment attempt 1/3
   📦 Final server payload: ...
   ✅ Deployment successful: <server-name> - <ip>:<port>
   ```

### Deployment Flow

#### With Queue (Workers Running):
1. Admin clicks "Deploy"
2. Order status → PROCESSING
3. Server record created
4. Job added to queue ✅
5. **Worker picks up job** ✅
6. Pterodactyl deployment happens
7. Order status → DELIVERED

#### Without Queue (Workers NOT Running):
1. Admin clicks "Deploy"
2. Order status → PROCESSING
3. Server record created
4. Job add fails (queue unavailable)
5. **Direct deployment triggered** ✅
6. Pterodactyl deployment happens (in background)
7. Order status → DELIVERED

### Common Issues

#### 1. Redis Connection Failed
**Symptom:** `❌ Redis connection failed after 3 retries`

**Solution:**
- Check Redis is running and accessible
- Verify REDIS_URL in .env file
- Check firewall/network settings

#### 2. Workers Not Starting
**Symptom:** No worker logs appear

**Solution:**
```bash
cd app
pnpm run workers
```

Check for errors in the console output.

#### 3. Queue Jobs Stuck
**Symptom:** Status stays at PROCESSING forever

**Solution:**
- Restart the workers: `Ctrl+C` then `pnpm run workers`
- Or use direct deployment (queue will fallback automatically)

#### 4. Pterodactyl Errors
**Symptom:** `DaemonConnectionException` or allocation errors

**Solution:**
- Check Pterodactyl panel is accessible
- Verify PTERODACTYL_URL and PTERODACTYL_API_KEY in .env
- Check node daemon is running
- The system will retry 3 times with different allocations

### Environment Variables Required

```env
# Redis Configuration
REDIS_URL=redis://default:password@host:port

# Pterodactyl Configuration
PTERODACTYL_URL=https://your-panel.com
PTERODACTYL_API_KEY=your-api-key
# Fallback owner (numeric Pterodactyl user id) when the customer has no panel account.
# Deployments auto-assign the server to the Pterodactyl user matching the customer's email.
PTERO_DEFAULT_USER_ID=1
PTERO_DEFAULT_NEST=1
PTERO_DEFAULT_EGG=1

# Email (Optional)
RESEND_API_KEY=your-resend-key
EMAIL_FROM=noreply@yourdomain.com
```

### Testing Deployment

1. Create a test order or set an existing order to PAID status
2. Click "Deploy" from the actions menu
3. Watch the console for deployment logs
4. Check the order status updates:
   - PAID → PROCESSING → DELIVERED

### Manual Deployment (CUSTOM Mode)

For products with `deployMode: 'CUSTOM'`:
1. Click "Deploy"
2. Fill in server details manually
3. Use `:button:Label:URL` syntax in message
4. Server is created immediately as ACTIVE
5. Order status changes to DELIVERED immediately

No queue or workers needed for CUSTOM deployments.

### Production Deployment

For production, use a process manager to keep workers running:

```bash
# Using PM2
pm2 start "pnpm run workers" --name "flamenodes-workers"
pm2 save
pm2 startup
```

Or use Docker Compose to run workers as a separate service.
