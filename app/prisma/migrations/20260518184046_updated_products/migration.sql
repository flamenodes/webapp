-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "discountId" TEXT,
ADD COLUMN     "featureCategory" TEXT NOT NULL DEFAULT 'Features';

-- CreateTable
CREATE TABLE "Discount" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "percentage" INTEGER NOT NULL,

    CONSTRAINT "Discount_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_discountId_fkey" FOREIGN KEY ("discountId") REFERENCES "Discount"("id") ON DELETE SET NULL ON UPDATE CASCADE;
