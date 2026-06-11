# ✅ Redis Connection Fixed

## The Issue
Redis was trying to connect on module load, causing `ECONNREFUSED` errors even when REDIS_URL was configured.

## The Fix
Made Redis initialization **lazy** - it only connects when queues are actually used, not when modules load.

## Running Without Redis

The app now works **without Redis** in development:

```bash
# Start app (no Redis needed)
cd app && pnpm dev
```

**Result**: App runs normally, queues are disabled with warnings:
```
⚠️  REDIS_URL not configured - queues disabled
⚠️  Email queue unavailable - skipping email
⚠️  Deployment queue unavailable - manual deployment required
```

## Running With Redis

### Option 1: Docker Compose (Development)
```bash
# Start Redis + Postgres
docker-compose up -d redis postgres

# In app/.env
REDIS_URL=redis://localhost:6379

# Start app
cd app && pnpm dev

# Start workers (separate terminal)
cd app && pnpm workers
```

### Option 2: Local Redis
```bash
# Install Redis
sudo apt install redis-server  # Ubuntu/Debian
brew install redis             # macOS

# Start Redis
redis-server

# In app/.env
REDIS_URL=redis://localhost:6379

# Start app + workers
cd app && pnpm dev:all
```

### Option 3: Remote Redis
```bash
# In app/.env
REDIS_URL=redis://username:password@host:port

# Start app + workers
cd app && pnpm dev:all
```

## How Queues Work Now

### Without Redis:
- Orders process immediately
- No background jobs
- Emails skipped (console warnings)
- Deployments require manual setup

### With Redis:
- Orders create background jobs
- Workers process deployments
- Emails sent asynchronously
- Pterodactyl servers auto-created

## Production Deployment

**Always use Redis in production** for:
- Background server deployments
- Email notifications
- Job retry/recovery
- System reliability

See `DEPLOYMENT_GUIDE.md` for full production setup.
