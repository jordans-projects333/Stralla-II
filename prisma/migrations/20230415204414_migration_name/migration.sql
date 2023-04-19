-- CreateTable
CREATE TABLE "Component" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "ComponentFolderid" INTEGER,
    "content" TEXT,

    CONSTRAINT "Component_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ComponentFolder" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "ComponentFolder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Note" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "content" TEXT,
    "noteFolderId" INTEGER,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NoteFolder" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "NoteFolder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Svg" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "Svg_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ComponentCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ComponentCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ComponentSubCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "componentCategoryId" INTEGER,

    CONSTRAINT "ComponentSubCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Components" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "componentSubCategoryId" INTEGER,

    CONSTRAINT "Components_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Code" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "componentsId" INTEGER,

    CONSTRAINT "Code_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ComponentFolder" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_NoteFolder" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Component_title_key" ON "Component"("title");

-- CreateIndex
CREATE UNIQUE INDEX "ComponentFolder_title_key" ON "ComponentFolder"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Note_title_key" ON "Note"("title");

-- CreateIndex
CREATE UNIQUE INDEX "NoteFolder_title_key" ON "NoteFolder"("title");

-- CreateIndex
CREATE UNIQUE INDEX "_ComponentFolder_AB_unique" ON "_ComponentFolder"("A", "B");

-- CreateIndex
CREATE INDEX "_ComponentFolder_B_index" ON "_ComponentFolder"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_NoteFolder_AB_unique" ON "_NoteFolder"("A", "B");

-- CreateIndex
CREATE INDEX "_NoteFolder_B_index" ON "_NoteFolder"("B");

-- AddForeignKey
ALTER TABLE "Component" ADD CONSTRAINT "Component_ComponentFolderid_fkey" FOREIGN KEY ("ComponentFolderid") REFERENCES "ComponentFolder"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_noteFolderId_fkey" FOREIGN KEY ("noteFolderId") REFERENCES "NoteFolder"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComponentSubCategory" ADD CONSTRAINT "ComponentSubCategory_componentCategoryId_fkey" FOREIGN KEY ("componentCategoryId") REFERENCES "ComponentCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Components" ADD CONSTRAINT "Components_componentSubCategoryId_fkey" FOREIGN KEY ("componentSubCategoryId") REFERENCES "ComponentSubCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Code" ADD CONSTRAINT "Code_componentsId_fkey" FOREIGN KEY ("componentsId") REFERENCES "Components"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ComponentFolder" ADD CONSTRAINT "_ComponentFolder_A_fkey" FOREIGN KEY ("A") REFERENCES "ComponentFolder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ComponentFolder" ADD CONSTRAINT "_ComponentFolder_B_fkey" FOREIGN KEY ("B") REFERENCES "ComponentFolder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NoteFolder" ADD CONSTRAINT "_NoteFolder_A_fkey" FOREIGN KEY ("A") REFERENCES "NoteFolder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NoteFolder" ADD CONSTRAINT "_NoteFolder_B_fkey" FOREIGN KEY ("B") REFERENCES "NoteFolder"("id") ON DELETE CASCADE ON UPDATE CASCADE;
