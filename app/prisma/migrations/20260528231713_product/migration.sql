-- CreateEnum
CREATE TYPE "ConfigurationOptionType" AS ENUM ('SELECT', 'RADIO', 'TEXT', 'NUMBER');

-- AlterTable
ALTER TABLE "CartItem" ADD COLUMN     "configuration" JSONB;

-- AlterTable
ALTER TABLE "OrderItem" ADD COLUMN     "configuration" JSONB;

-- CreateTable
CREATE TABLE "ConfigurationOption" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "description" TEXT,
    "type" "ConfigurationOptionType" NOT NULL DEFAULT 'SELECT',
    "required" BOOLEAN NOT NULL DEFAULT true,
    "category" "ProductCategory" NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ConfigurationOption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConfigurationValue" (
    "id" TEXT NOT NULL,
    "optionId" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "description" TEXT,
    "priceModifier" INTEGER NOT NULL DEFAULT 0,
    "metadata" JSONB,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ConfigurationValue_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ConfigurationOption_category_idx" ON "ConfigurationOption"("category");

-- CreateIndex
CREATE INDEX "ConfigurationOption_sortOrder_idx" ON "ConfigurationOption"("sortOrder");

-- CreateIndex
CREATE INDEX "ConfigurationValue_optionId_idx" ON "ConfigurationValue"("optionId");

-- CreateIndex
CREATE INDEX "ConfigurationValue_sortOrder_idx" ON "ConfigurationValue"("sortOrder");

-- AddForeignKey
ALTER TABLE "ConfigurationValue" ADD CONSTRAINT "ConfigurationValue_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "ConfigurationOption"("id") ON DELETE CASCADE ON UPDATE CASCADE;
