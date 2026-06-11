# BullMQ Queue System & Pterodactyl Deployment Guide

## Overview
This project uses **BullMQ** for queue management with separate worker processes for handling:
- **Server Deployments** (Pterodactyl integration)
- **Email Notifications** (Order confirmations, server status)

## Architecture

```
┌─────────────┐     ┌──────────┐     ┌─────────────┐
│   App/API   │────▶│  Redis   │◀────│   Workers   │
│  (Nitro)    │     │ (BullMQ) │     │  (BullMQ)   │
└─────────────┘     └──────────┘     └─────────────┘
       │                                      │
       ▼                                      ▼
┌─────────────┐                      ┌─────────────┐
│  PostgreSQL │                      │ Pterodactyl │
└─────────────┘                      └─────────────┘
```

## Local Development

### 1. Start Redis & PostgreSQL
```bash
docker-compose up -d postgres redis
```

### 2. Run App Server
```bash
cd app
pnpm dev
```

### 3. Run Workers (Separate Terminal)
```bash
cd app
pnpm workers
```

Or run both together:
```bash
pnpm dev:all
```

## Production Deployment

### Option 1: Docker Compose (Recommended)

```bash
# Build and start all services
docker-compose -f docker-compose.prod.yml up -d

# View logs
docker-compose -f docker-compose.prod.yml logs -f

# Stop services
docker-compose -f docker-compose.prod.yml down
```

Services running:
- **app**: Main Nitro server (port 3000)
- **workers**: BullMQ workers for queues
- **postgres**: Database
- **redis**: Queue storage

### Option 2: Pterodactyl Deployment

#### Step 1: Import Egg
1. Go to Pterodactyl Admin Panel → Nests
2. Import `pterodactyl-egg.json`
3. Configure default nest/egg settings

#### Step 2: Create Server
1. Create new server with FlameNodes Cloud egg
2. Configure environment variables:
   - `DATABASE_URL`: PostgreSQL connection
   - `REDIS_URL`: Redis connection (external or managed)
   - `PTERODACTYL_URL`: Panel URL
   - `PTERODACTYL_API_KEY`: API key

#### Step 3: Deploy
The egg will automatically:
- Clone repository
- Install dependencies
- Generate Prisma client
- Build application
- Start app + workers

### Option 3: Manual VPS Deployment

```bash
# 1. Install dependencies
apt update && apt install -y git nodejs npm postgresql redis

# 2. Install pnpm
npm install -g pnpm

# 3. Clone & setup
git clone <your-repo> /var/www/flamenodes
cd /var/www/flamenodes

# 4. Install & build
pnpm install
cd app
pnpm db:generate
pnpm build

# 5. Setup systemd services
```

**App Service** (`/etc/systemd/system/flamenodes-app.service`):
```ini
[Unit]
Description=FlameNodes App
After=network.target postgresql.service redis.service

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/flamenodes/app
Environment="NODE_ENV=production"
Environment="DATABASE_URL=postgresql://..."
Environment="REDIS_URL=redis://localhost:6379"
ExecStart=/usr/bin/pnpm start
Restart=always

[Install]
WantedBy=multi-user.target
```

**Workers Service** (`/etc/systemd/system/flamenodes-workers.service`):
```ini
[Unit]
Description=FlameNodes Workers
After=network.target postgresql.service redis.service

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/flamenodes/app
Environment="NODE_ENV=production"
Environment="DATABASE_URL=postgresql://..."
Environment="REDIS_URL=redis://localhost:6379"
ExecStart=/usr/bin/pnpm workers
Restart=always

[Install]
WantedBy=multi-user.target
```

**Enable & Start**:
```bash
systemctl enable flamenodes-app flamenodes-workers
systemctl start flamenodes-app flamenodes-workers
systemctl status flamenodes-app flamenodes-workers
```

## Environment Variables

### Required
```env
# Database
DATABASE_URL=postgresql://user:password@host:5432/dbname

# Redis (for BullMQ)
REDIS_URL=redis://host:6379

# App
APP_URL=https://your-domain.com
NODE_ENV=production

# Pterodactyl (for auto-deployment)
PTERODACTYL_URL=https://panel.example.com
PTERODACTYL_API_KEY=ptlc_xxxxx

# Payment (Razorpay)
RAZORPAY_KEY_ID=rzp_live_xxxxx
RAZORPAY_KEY_SECRET=xxxxx

# Email (optional for notifications)
RESEND_API_KEY=re_xxxxx
EMAIL_FROM=FlameNodes <noreply@flamenodes.com>
```

## Queue System

### Queues Available

1. **email-notifications**: Email sending
   - Order confirmations
   - Server status updates
   - Payment notifications

2. **server-deployment**: Pterodactyl server provisioning
   - Create servers
   - Assign resources
   - Configure allocations

### Monitoring Queues

```typescript
// In your code or admin panel
import { emailQueue, deploymentQueue } from '#/serverActions/queue/queues'

// Get job counts
const emailCounts = await emailQueue.getJobCounts()
const deploymentCounts = await deploymentQueue.getJobCounts()

console.log('Email Queue:', emailCounts)
console.log('Deployment Queue:', deploymentCounts)
```

### Manual Job Management

```bash
# Using Redis CLI
redis-cli

# List all queues
KEYS bull:*

# Check queue length
LLEN bull:email-notifications:wait

# Clear failed jobs
DEL bull:server-deployment:failed
```

## Scaling Workers

### Horizontal Scaling
Run multiple worker instances across servers:

```bash
# Server 1
cd app && pnpm workers

# Server 2
cd app && pnpm workers

# Server 3
cd app && pnpm workers
```

All workers connect to same Redis instance and process jobs in parallel.

### Concurrency Control
Edit `queues.ts` to adjust:

```typescript
export const deploymentWorker = new Worker(
  'server-deployment',
  async (job) => { ... },
  { 
    connection: redis,
    concurrency: 5  // ← Adjust this
  }
)
```

## Troubleshooting

### Workers not processing jobs
1. Check Redis connection:
   ```bash
   redis-cli -u $REDIS_URL ping
   ```

2. Check worker logs:
   ```bash
   pnpm workers
   # Should show: "✅ All BullMQ workers initialized"
   ```

3. Verify queue has jobs:
   ```bash
   redis-cli LLEN bull:server-deployment:wait
   ```

### Deployment failures
1. Check Pterodactyl credentials
2. Verify network connectivity to panel
3. Check worker logs for errors
4. Review failed jobs in Redis

### Database connection issues
1. Ensure DATABASE_URL is correct
2. Run migrations: `pnpm db:push`
3. Verify Prisma client generated: `pnpm db:generate`

## Best Practices

1. **Always run workers separately** from main app in production
2. **Use managed Redis** (AWS ElastiCache, Redis Cloud) for reliability
3. **Monitor queue depths** - set up alerts if queues grow too large
4. **Set up dead letter queues** for failed jobs
5. **Use environment-specific configurations** (dev/staging/prod)

## Support

For deployment issues:
- Check logs: `docker-compose logs -f workers`
- Redis monitoring: `redis-cli MONITOR`
- Database: `pnpm db:studio`
