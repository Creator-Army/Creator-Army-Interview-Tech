import fs from "node:fs";
import path from "node:path";

import Database from "better-sqlite3";
import { count } from "drizzle-orm";
import { drizzle } from "drizzle-orm/better-sqlite3";

import * as schema from "~/db/schema";
import { initialiseSchema } from "~/db/schema";
import { seedBaseData, type AppDatabase } from "~/db/seed";

const dataDirectory = path.resolve(process.cwd(), ".data");
fs.mkdirSync(dataDirectory, { recursive: true });

const sqlite = new Database(path.join(dataDirectory, "interview.db"));
sqlite.pragma("journal_mode = WAL");
sqlite.pragma("foreign_keys = ON");
initialiseSchema(sqlite);

export const db: AppDatabase = drizzle(sqlite, { schema });

const existingRows = db.select({ count: count() }).from(schema.submissions).get();
if (existingRows?.count === 0) {
  seedBaseData(db);
}

