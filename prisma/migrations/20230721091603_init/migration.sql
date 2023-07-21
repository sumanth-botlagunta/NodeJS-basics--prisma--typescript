/*
  Warnings:

  - You are about to drop the column `staus` on the `Update` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Update" DROP COLUMN "staus",
ADD COLUMN     "status" "UPDATE_STATUSES" NOT NULL DEFAULT 'IN_PROGRESS';
