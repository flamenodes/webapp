# Deployment Feature - Simple Guide

## ✨ Good News: Workers Start Automatically!

The workers now start automatically when you run the dev server. No need for separate terminals!

## 🚀 Quick Start

Just run:
```bash
cd app
pnpm run dev
```

That's it! Workers are initialized automatically in the background.

## 📝 How to Deploy Orders

### Method 1: PTERODACTYL (Automatic Deployment)

1. Go to **Admin Panel** → **Orders**
2. Find an order with status **PAID**
3. Click the **⋮** menu button
4. Select **🚀 Deploy**
5. Click **"Deploy to Queue"**
6. Done! ✅

**What happens:**
- Order status: PAID → PROCESSING → DELIVERED
- Server is automatically created in Pterodactyl
- Customer gets email notifications
- Everything happens automatically!

**Console Output:**
```
✅ Deployment job added to queue: 12345
🚀 Starting Pterodactyl deployment...
✅ Deployment successful: Server Name - 192.168.1.1:25565
```

**OR (if queue is busy):**
```
⚠️ Queue unavailable, deploying directly...
🚀 Starting Pterodactyl deployment...
✅ Deployment successful!
```

Both work perfectly! The system automatically handles it.

### Method 2: CUSTOM (Manual Deployment)

For products where you manually provide server access:

1. Go to **Admin Panel** → **Orders**
2. Click **⋮** → **🚀 Deploy** on a PAID order
3. Fill in the form:
   - **Server Name**: Give it a name
   - **Panel URL**: (Optional) Control panel URL
   - **Username**: (Optional) Login username
   - **Password**: (Optional) Login password
   - **Message**: Required - Write a message to the customer

4. Use special button syntax in your message:
   ```
   🎉 Your server is ready!
   
   :button:Access Panel:https://panel.example.com
   :button:Get Support:https://support.example.com
   
   Login with your credentials to get started!
   ```

5. See the **live preview** below the message box
6. Click **"Deploy & Notify"**
7. Done! Order is instantly delivered ✅

## 🎨 Button Syntax Examples

### Single Button
```
Your server is live! :button:Access Now:https://panel.example.com
```

### Multiple Buttons
```
Welcome to your new Minecraft server!

:button:Control Panel:https://panel.example.com
:button:Documentation:https://docs.example.com
:button:Discord:https://discord.gg/invite

Need help? Join our Discord community!
```

### Complex Message
```
🎮 Server Deployed Successfully!

Your Minecraft server is now live with:
- 8GB RAM
- 100GB NVMe SSD
- DDoS Protection

:button:Panel Login:https://panel.example.com
:button:FTP Access:https://ftp.example.com
:button:Support:https://support.example.com

Default Port: 25565
Remember to change your password on first login!
```

## 🔍 Monitoring Deployment

### Check Order Status
The status column shows:
- **PAID** → Ready to deploy
- **PROCESSING** → Currently deploying
- **DELIVERED** → Completed!
- **FAILED** → Something went wrong (check logs)

### Check Console
Look for these indicators:
- ✅ Green checkmarks = Success
- ⚠️ Yellow warnings = Working (direct fallback)
- ❌ Red X = Error (check Pterodactyl settings)

### Check Server Record
After deployment, check the servers list to see:
- Server name
- IP address
- Port
- Status (ACTIVE)

## ❓ Troubleshooting

### "Deployment started (direct mode)"
**This is normal!** The queue isn't available, so the system deploys directly. Your server will still be created successfully.

### Status Stuck at PROCESSING
**Wait 2-5 minutes.** Pterodactyl deployment can take time. If it stays stuck:
1. Check server logs
2. Verify Pterodactyl panel is accessible
3. Check console for error messages

### Deployment Failed
Check these:
1. **Pterodactyl Config**: Is PTERODACTYL_URL and PTERODACTYL_API_KEY set?
2. **Node Status**: Is the Pterodactyl node online?
3. **Allocations**: Are there available IP allocations?
4. **Resources**: Does the node have enough resources?

### Button Not Showing
Make sure format is exactly:
```
:button:Label:URL
```
No spaces around the colons!

## 🔧 Environment Variables

Make sure these are set in your `.env`:

```env
# Pterodactyl
PTERODACTYL_URL=https://your-panel.com
PTERODACTYL_API_KEY=ptla_your_api_key_here
PTERO_DEFAULT_USER_ID=1
PTERO_DEFAULT_NEST=1
PTERO_DEFAULT_EGG=1

# Redis (Optional - for queue)
REDIS_URL=redis://localhost:6379

# Email (Optional - for notifications)
RESEND_API_KEY=re_your_key_here
EMAIL_FROM=noreply@yourdomain.com
```

## 💡 Pro Tips

1. **Test First**: Create a test order and deploy it before using in production
2. **Monitor Console**: Keep an eye on console logs during first few deployments
3. **Custom Messages**: Save your best custom messages as templates
4. **Button URLs**: Always use HTTPS for security
5. **Server Names**: Use descriptive names to help customers identify their servers

## 🎯 That's It!

The deployment feature is designed to work automatically with smart fallbacks. Just click deploy and let the system handle the rest!

**Need more details?** Check:
- `ORDER_DEPLOYMENT_FEATURE.md` - Full technical documentation
- `DEPLOYMENT_TROUBLESHOOTING.md` - Detailed troubleshooting guide
