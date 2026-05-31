-- AlterTable
ALTER TABLE "user" ADD COLUMN     "address" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "country" TEXT DEFAULT 'India',
ADD COLUMN     "pteroUserId" INTEGER,
ADD COLUMN     "zip" TEXT;

-- CreateTable
CREATE TABLE "ProductBillingOption" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "billingPeriod" "BillingPeriod" NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "ProductBillingOption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductCategoryConfig" (
    "id" TEXT NOT NULL,
    "category" "ProductCategory" NOT NULL,
    "billingPeriods" "BillingPeriod"[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductCategoryConfig_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'info',
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RazorpayConfig" (
    "id" TEXT NOT NULL,
    "mode" TEXT NOT NULL DEFAULT 'test',
    "testKeyId" TEXT,
    "testKeySecret" TEXT,
    "prodKeyId" TEXT,
    "prodKeySecret" TEXT,
    "gstin" TEXT,
    "companyName" TEXT DEFAULT 'Flame Nodes',
    "companyAddress" TEXT,
    "companyCity" TEXT,
    "companyZip" TEXT,
    "companyCountry" TEXT DEFAULT 'India',
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RazorpayConfig_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ProductBillingOption_productId_idx" ON "ProductBillingOption"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductBillingOption_productId_billingPeriod_key" ON "ProductBillingOption"("productId", "billingPeriod");

-- CreateIndex
CREATE UNIQUE INDEX "ProductCategoryConfig_category_key" ON "ProductCategoryConfig"("category");

-- CreateIndex
CREATE INDEX "Notification_userId_idx" ON "Notification"("userId");

-- CreateIndex
CREATE INDEX "Notification_read_idx" ON "Notification"("read");

-- AddForeignKey
ALTER TABLE "ProductBillingOption" ADD CONSTRAINT "ProductBillingOption_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
