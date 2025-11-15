import { headers } from "next/headers";
import { auth } from "./auth";

/**
 * Get the current session on the server side
 * Use this in Server Components and Server Actions
 */
export async function getSession() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    return session;
}

/**
 * Require authentication - redirect to sign-in if not authenticated
 * Use this in Server Components that require authentication
 */
export async function requireAuth() {
    const session = await getSession();
    
    if (!session) {
        return null;
    }

    return session;
}
