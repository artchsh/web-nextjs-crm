"use client";

import { SidebarProvider } from "@/components/ui/sidebar";

/**
 * Client-side wrapper for SidebarProvider
 * This allows the dashboard layout to be a server component
 * while still using the interactive sidebar functionality
 */
export function SidebarProviderWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return <SidebarProvider>{children}</SidebarProvider>;
}
