-- CreateTable
CREATE TABLE "digimons" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,

    CONSTRAINT "digimons_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "digimons_id_key" ON "digimons"("id");

-- CreateIndex
CREATE UNIQUE INDEX "digimons_imgUrl_key" ON "digimons"("imgUrl");
