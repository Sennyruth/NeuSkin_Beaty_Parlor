/*
  Warnings:

  - Changed the type of `number` on the `appointments_table` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "appointments_table" DROP COLUMN "number",
ADD COLUMN     "number" INTEGER NOT NULL;
