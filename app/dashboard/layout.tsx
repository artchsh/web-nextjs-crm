import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth-server";
import {
    SidebarInset,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { SidebarProviderWrapper } from "@/components/sidebar-provider-wrapper";

export default async function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await getSession();

    if (!session) {
        redirect("/sign-in");
    }

    return (
        <SidebarProviderWrapper>
            <AppSidebar user={session.user} />
            <SidebarInset className="bg-sidebar">
                <DashboardHeader />
                <div className="flex flex-1 flex-col gap-4 p-4 rounded-tl bg-black">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProviderWrapper>
    );
}
