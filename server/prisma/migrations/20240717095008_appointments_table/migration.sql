/*
  Warnings:

  - The primary key for the `users_table` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "users_table" DROP CONSTRAINT "users_table_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "users_table_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "users_table_id_seq";

-- CreateTable
CREATE TABLE "appointments_table" (
    "id" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "appointments_table_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "appointments_table" ADD CONSTRAINT "appointments_table_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users_table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
