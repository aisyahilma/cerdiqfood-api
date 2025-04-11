-- DropIndex
DROP INDEX "Product_name_key";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "isOrganic" BOOLEAN,
ADD COLUMN     "stockQuantity" INTEGER;
