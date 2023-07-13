-- Active: 1689040968285@@127.0.0.1@3306
-- CreateTable
CREATE TABLE "movies" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "release_date" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "MovieRent" (
    "userID" TEXT NOT NULL,
    "movieId" TEXT NOT NULL,

    PRIMARY KEY ("userID", "movieId"),
    CONSTRAINT "MovieRent_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "MovieRent_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movies" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "movies_title_key" ON "movies"("title");
