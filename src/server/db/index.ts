import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import * as schema from "./schema"

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  conn: postgres.Sql | undefined
}

const client =
  globalForDb.conn ??
  postgres(process.env.DATABASE_URL!, {
    max: 1,
    onnotice: () => null,
    idle_timeout: 20,
    max_lifetime: 60 * 30,
  })

if (process.env.NODE_ENV !== "production") globalForDb.conn = client

export const db = drizzle(client, {
  schema,
  logger: true,
})
