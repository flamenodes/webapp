/*
  Warnings:

  - You are about to drop the column `active` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `labels` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `monthlyPrice` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `slug` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Product` table. All the data in the column will be lost.
  - Added the required column `planName` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "BillingPeriod" ADD VALUE 'HOURLY';
ALTER TYPE "BillingPeriod" ADD VALUE 'DAILY';

-- DropIndex
DROP INDEX "Product_slug_idx";

-- DropIndex
DROP INDEX "Product_slug_key";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "active",
DROP COLUMN "description",
DROP COLUMN "labels",
DROP COLUMN "monthlyPrice",
DROP COLUMN "name",
DROP COLUMN "slug",
DROP COLUMN "title",
ADD COLUMN     "features" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "icon" TEXT,
ADD COLUMN     "inStock" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "planName" TEXT NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL;
