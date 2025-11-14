"use client";

import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

export function Header() {
    const { data: session } = useSession();
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut();
        router.refresh();
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-black supports-backdrop-filter:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2">
                    <ShieldCheck className="h-6 w-6" />
                    <h1 className="text-lg font-semibold">Internal CRM</h1>
                </div>
                {session ? (
                    <div className="flex items-center gap-4">
                        <div className=" gap-2 items-center hidden sm:flex">
                            <span className="text-sm">
                                You are logged in as
                            </span>
                            <span className="text-sm text-muted-foreground">
                                {session.user?.name}
                            </span>
                        </div>
                        <Button onClick={handleSignOut} size="sm" variant={"secondary"}>
                            Sign Out
                        </Button>
                    </div>
                ) : (
                    <Button onClick={() => router.push("/sign-in")} size="sm">
                        Sign In
                    </Button>
                )}
            </div>
        </header>
    );
}
