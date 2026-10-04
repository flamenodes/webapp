-- DropForeignKey
ALTER TABLE "Server" DROP CONSTRAINT "Server_orderItemId_fkey";

-- AlterTable
ALTER TABLE "Server" ALTER COLUMN "orderItemId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Server" ADD CONSTRAINT "Server_orderItemId_fkey" FOREIGN KEY ("orderItemId") REFERENCES "OrderItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;
