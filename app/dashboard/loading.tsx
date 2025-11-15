import { Loader2 } from "lucide-react";

export default function DashboardLoading() {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="text-center">
                <Loader2 className="h-12 w-12 animate-spin text-foreground mx-auto mb-4" />
                <p className="text-lg text-muted-foreground">Loading dashboard...</p>
            </div>
        </div>
    );
}
