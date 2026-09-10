import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";

import * as schema from "~/db/schema";
import { initialiseSchema } from "~/db/schema";
import { seedBaseData, type AppDatabase } from "~/db/seed";

export function createTestDb(): AppDatabase {
  const sqlite = new Database(":memory:");
  sqlite.pragma("foreign_keys = ON");
  initialiseSchema(sqlite);

  return drizzle(sqlite, { schema });
}

export { seedBaseData };

