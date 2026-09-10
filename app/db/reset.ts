import fs from "node:fs";
import path from "node:path";

const databaseDirectory = path.resolve(process.cwd(), ".data");

if (fs.existsSync(databaseDirectory)) {
  fs.rmSync(databaseDirectory, { recursive: true });
}

console.log("Interview database reset. It will be reseeded on the next app start.");

