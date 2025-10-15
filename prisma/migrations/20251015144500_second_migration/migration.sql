-- CreateTable
CREATE TABLE "StarterPack" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT,
    "email" TEXT NOT NULL,
    "whatsapp" TEXT,

    CONSTRAINT "StarterPack_pkey" PRIMARY KEY ("id")
);
