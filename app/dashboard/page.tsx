"use client";

import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import {
    SidebarProvider,
    SidebarInset,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";

export default function DashboardPage() {
    const { data: session, isPending } = useSession();
    const router = useRouter();

    if (isPending) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="text-center">
                    <Loader2 className="h-12 w-12 animate-spin text-foreground mx-auto mb-4" />
                    <p className="text-lg text-muted-foreground">Loading...</p>
                </div>
            </div>
        );
    }

    if (!session) {
        router.push("/sign-in");
        return null;
    }

    return (
        <SidebarProvider>
            <AppSidebar user={session.user} />
            <SidebarInset>
                <DashboardHeader />
                <div className="flex flex-1 flex-col gap-4 p-4">
                    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                        <div className="aspect-video rounded-xl bg-muted/50 p-4">
                            <h3 className="font-semibold mb-2">Total Clients</h3>
                            <p className="text-3xl font-bold">24</p>
                        </div>
                        <div className="aspect-video rounded-xl bg-muted/50 p-4">
                            <h3 className="font-semibold mb-2">Active Tasks</h3>
                            <p className="text-3xl font-bold">12</p>
                        </div>
                        <div className="aspect-video rounded-xl bg-muted/50 p-4">
                            <h3 className="font-semibold mb-2">Servers</h3>
                            <p className="text-3xl font-bold">48</p>
                        </div>
                    </div>
                    <div className="min-h-screen flex-1 rounded-xl bg-muted/50 p-4 md:min-h-min">
                        <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
                        <div className="space-y-3">
                            <div className="rounded-lg border bg-card p-4">
                                <p className="text-sm text-muted-foreground">2 hours ago</p>
                                <p className="font-medium">Server credentials updated for Client A</p>
                            </div>
                            <div className="rounded-lg border bg-card p-4">
                                <p className="text-sm text-muted-foreground">5 hours ago</p>
                                <p className="font-medium">Task completed: Database backup</p>
                            </div>
                            <div className="rounded-lg border bg-card p-4">
                                <p className="text-sm text-muted-foreground">1 day ago</p>
                                <p className="font-medium">New client added: Client XYZ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
