/*
  Warnings:

  - Added the required column `isOrganic` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stockQuantity` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Product_name_key";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "isOrganic" BOOLEAN NOT NULL,
ADD COLUMN     "stockQuantity" INTEGER NOT NULL;
