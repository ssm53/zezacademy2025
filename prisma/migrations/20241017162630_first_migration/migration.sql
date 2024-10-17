-- CreateTable
CREATE TABLE "Applicant" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT,
    "email" TEXT NOT NULL,
    "whatsapp" TEXT,
    "reason" TEXT,
    "codingexperience" TEXT,
    "stageofcareer" TEXT,
    "fullorpart" TEXT,
    "remoteoronsite" TEXT,

    CONSTRAINT "Applicant_pkey" PRIMARY KEY ("id")
);
