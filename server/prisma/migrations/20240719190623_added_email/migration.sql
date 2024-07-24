/*
  Warnings:

  - You are about to drop the column `time` on the `appointments_table` table. All the data in the column will be lost.
  - Added the required column `clientEmail` to the `appointments_table` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "appointments_table" DROP COLUMN "time",
ADD COLUMN     "clientEmail" TEXT NOT NULL;
