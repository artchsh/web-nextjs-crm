import { betterAuth } from "better-auth";
import { Pool } from "pg"

// Parse the connection string and add SSL config
const connectionString = process.env.POSTGRES_URL_NON_POOLING;

const pool = new Pool({
    connectionString,
    ssl: {
        rejectUnauthorized: false
    }
});

export const auth = betterAuth({
    database: pool,
    emailAndPassword: {
        enabled: true,
    },
    baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
    secret: process.env.BETTER_AUTH_SECRET,
})