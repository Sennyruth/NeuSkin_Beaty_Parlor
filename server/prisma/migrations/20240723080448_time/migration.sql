/*
  Warnings:

  - Added the required column `time` to the `appointments_table` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "appointments_table" ADD COLUMN     "time" TEXT NOT NULL;
