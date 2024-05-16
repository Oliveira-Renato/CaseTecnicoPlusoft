-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Automovel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "ano" TEXT,
    "descricaoPessoal" TEXT,
    "imageUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Automovel" ("ano", "createdAt", "descricaoPessoal", "id", "imageUrl", "marca", "modelo", "updatedAt") SELECT "ano", "createdAt", "descricaoPessoal", "id", "imageUrl", "marca", "modelo", "updatedAt" FROM "Automovel";
DROP TABLE "Automovel";
ALTER TABLE "new_Automovel" RENAME TO "Automovel";
PRAGMA foreign_key_check("Automovel");
PRAGMA foreign_keys=ON;
