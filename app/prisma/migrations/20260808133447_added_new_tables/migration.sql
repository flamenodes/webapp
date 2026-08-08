-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "renewalForServerId" TEXT;

-- CreateTable
CREATE TABLE "ai_support_config" (
    "id" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "systemPrompt" TEXT NOT NULL DEFAULT '',
    "model" TEXT NOT NULL DEFAULT 'gpt-4o-mini',
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ai_support_config_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Order_renewalForServerId_idx" ON "Order"("renewalForServerId");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_renewalForServerId_fkey" FOREIGN KEY ("renewalForServerId") REFERENCES "Server"("id") ON DELETE SET NULL ON UPDATE CASCADE;
