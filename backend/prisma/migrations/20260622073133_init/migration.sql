-- CreateTable
CREATE TABLE "equipment_sale_records" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "estimatedPrice" DECIMAL(12,2) NOT NULL,
    "auctionMethod" "AuctionMethod" NOT NULL,
    "auctionDate" TIMESTAMP(3) NOT NULL,
    "soldPrice" DECIMAL(12,2) NOT NULL,
    "winnerName" TEXT NOT NULL,
    "responsiblePerson" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "equipment_sale_records_pkey" PRIMARY KEY ("id")
);
