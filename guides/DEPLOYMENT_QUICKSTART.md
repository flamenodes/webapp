# Quick Start: Order Deployment Feature

## Prerequisites
1. Order must be in **PAID** status
2. For PTERODACTYL mode: Workers must be running OR system will auto-fallback

## Starting the Application

### Development Mode

**Option A: Run Dev Server + Workers Together**
```bash
cd app
pnpm run dev:all
```

**Option B: Run Separately (Recommended for debugging)**
```bash
# Terminal 1
cd app
pnpm run dev

# Terminal 2
cd app
pnpm run workers
```

## Using the Deploy Feature

### PTERODACTYL Mode (Automatic)

1. Navigate to **Admin Panel → Orders**
2. Find an order with status **PAID**
3. Click the **⋮** (actions) button on the order row
4. Select **🚀 Deploy**
5. A dialog will open showing:
   - Product specifications
   - Deploy mode badge (PTERODACTYL)
   - Confirmation message
6. Click **Deploy to Queue**
7. Watch for:
   - Toast notification: "Deployment started via queue"
   - Console logs showing deployment progress
8. Order status changes:
   - PAID → PROCESSING → DELIVERED (automatically)

**Expected Console Output:**
```
✅ Deployment job added to queue: 12345
🚀 Starting Pterodactyl deployment for: Server Name
🔄 Deployment attempt 1/3
📦 Final server payload: ...
✅ Deployment successful: Server Name - 192.168.1.1:25565
```

### CUSTOM Mode (Manual)

1. Navigate to **Admin Panel → Orders**
2. Find an order with status **PAID** (product must have `deployMode: 'CUSTOM'`)
3. Click **⋮** → **🚀 Deploy**
4. A dialog will open with a form:
   - **Server Name** (auto-filled with product name)
   - **Panel URL** (optional)
   - **Username** (optional)
   - **Password** (optional)
   - **Delivery Message** (required)
5. Write a message with optional buttons:
   ```
   Your server is ready! 🎉
   
   :button:Access Panel:https://panel.example.com
   :button:Documentation:https://docs.example.com
   
   Login with the credentials sent to your email.
   ```
6. See live preview of your message below
7. Click **Deploy & Notify**
8. Order status immediately changes to **DELIVERED**

## Button Syntax in Messages

Format: `:button:Label:URL`

### Examples:

**Single Button:**
```
Your server is deployed! :button:Access Panel:https://panel.example.com
```

**Multiple Buttons:**
```
Welcome to your new server!

:button:Control Panel:https://panel.example.com
:button:Documentation:https://docs.example.com
:button:Get Support:https://support.example.com

Need help? Contact our 24/7 support team.
```

**With Text Before and After:**
```
🎉 Congratulations! Your Minecraft server is live!

Server Details:
- RAM: 4GB
- SSD: 20GB
- Slots: 50 players

:button:Access Panel:https://panel.example.com

Don't forget to configure your server.properties file!
```

## Troubleshooting

### Deployment Stays at PROCESSING
**Cause:** Workers not running

**Solution:**
1. Open a new terminal
2. Run: `cd app && pnpm run workers`
3. OR just wait - the system will auto-fallback and deploy directly

### "Deployment started (queue unavailable, deploying directly)"
**Cause:** Redis/Workers not connected

**This is OK!** The deployment will still complete, just without the queue system. The deployment happens in the background directly.

### Button Not Showing in Preview
**Cause:** Wrong syntax

**Check:**
- Format must be exactly: `:button:Label:URL`
- No spaces around colons
- URL must be complete (include https://)

**Wrong:**
```
:button: Label : URL          ❌ (spaces)
:button:Label                 ❌ (no URL)
button:Label:URL              ❌ (missing :)
```

**Correct:**
```
:button:Panel:https://panel.com   ✅
```

## Checking Deployment Status

### In Admin Panel:
1. Go to **Orders** page
2. Check order status column
3. Status flow: PAID → PROCESSING → DELIVERED

### In Console:
- Look for deployment logs with ✅ success indicators
- Check for any ❌ error messages

### In Database:
```sql
-- Check order status
SELECT id, status, "deliveryMessage" FROM "Order" WHERE status = 'PROCESSING';

-- Check server status
SELECT id, name, status, ip, port FROM "Server" WHERE status IN ('PROCESSING', 'ACTIVE', 'FAILED');
```

## What Happens Behind the Scenes

### PTERODACTYL Deployment:
1. ✅ Validate order is PAID
2. ✅ Create server record (status: PROCESSING)
3. ✅ Update order (status: PROCESSING)
4. ✅ Add job to queue (or deploy directly if queue unavailable)
5. ⏳ Worker picks up job
6. ⏳ Create server in Pterodactyl
7. ⏳ Retry up to 3 times if needed
8. ✅ Update server record with IP/port
9. ✅ Update order (status: DELIVERED)
10. ✅ Send email notifications

### CUSTOM Deployment:
1. ✅ Validate order is PAID
2. ✅ Create server record (status: ACTIVE)
3. ✅ Save panel credentials
4. ✅ Update order (status: DELIVERED, save message)
5. ✅ Done immediately (no queue needed)

## Support

If you encounter issues:
1. Check console logs for errors
2. Verify workers are running: `ps aux | grep tsx`
3. Check Redis connection: `redis-cli -h <host> -p <port> -a <password> ping`
4. Review `DEPLOYMENT_TROUBLESHOOTING.md` for detailed solutions
