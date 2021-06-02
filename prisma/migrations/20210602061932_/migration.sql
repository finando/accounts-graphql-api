-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('NOK');

-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "currency" "Currency" NOT NULL DEFAULT E'NOK';
