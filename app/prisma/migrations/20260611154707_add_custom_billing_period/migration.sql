-- AlterEnum
ALTER TYPE "BillingPeriod" ADD VALUE 'CUSTOM';

-- AlterTable
ALTER TABLE "ProductBillingOption" ADD COLUMN "customDays" INTEGER;
