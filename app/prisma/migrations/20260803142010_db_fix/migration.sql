/*
  Warnings:

  - You are about to drop the `billing_address` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "billing_address" DROP CONSTRAINT "billing_address_userId_fkey";

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "address" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "country" TEXT DEFAULT 'India',
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "zip" TEXT;

-- DropTable
DROP TABLE "billing_address";
