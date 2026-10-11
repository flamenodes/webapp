ALTER TABLE "RazorpayConfig"
ADD COLUMN "activeGateway" TEXT NOT NULL DEFAULT 'cashfree',
ADD COLUMN "cashfreeTestAppId" TEXT,
ADD COLUMN "cashfreeTestSecret" TEXT,
ADD COLUMN "cashfreeProdAppId" TEXT,
ADD COLUMN "cashfreeProdSecret" TEXT;
