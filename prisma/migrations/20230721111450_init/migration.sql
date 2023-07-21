/*
  Warnings:

  - A unique constraint covering the columns `[productId,id,userId]` on the table `Update` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Update_productId_id_userId_key" ON "Update"("productId", "id", "userId");
