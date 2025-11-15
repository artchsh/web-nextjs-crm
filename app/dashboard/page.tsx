import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "View your CRM dashboard with client statistics and recent activity",
};

export default function DashboardPage() {
    return (
        <>
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
        </>
    );
}
