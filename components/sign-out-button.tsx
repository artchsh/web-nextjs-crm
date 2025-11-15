"use client";

import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function SignOutButton() {
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut();
        router.refresh();
    };

    return (
        <Button onClick={handleSignOut} size="sm" variant={"secondary"}>
            Sign Out
        </Button>
    );
}
