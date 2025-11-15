"use client";

import * as React from "react";
import Link from "next/link";
import {
    Home,
    Users,
    Server,
    ClipboardList,
    Settings,
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader,
} from "@/components/ui/sidebar";
import { UserButtonDashboard } from "@/components/user-button-dashboard";

const menuItems = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: Home,
    },
    {
        title: "Clients",
        url: "/dashboard/clients",
        icon: Users,
    },
    {
        title: "Servers",
        url: "/dashboard/servers",
        icon: Server,
    },
    {
        title: "Tasks",
        url: "/dashboard/tasks",
        icon: ClipboardList,
    },
    {
        title: "Settings",
        url: "/dashboard/settings",
        icon: Settings,
    },
];

export function AppSidebar({ user }: { user?: any }) {
    return (
        <Sidebar>
            <SidebarHeader className="px-6 py-4">
                <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <Server className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-semibold">SkyCRM</span>
                        <span className="text-xs text-muted-foreground">Internal Tool</span>
                    </div>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                            <item.icon className="h-4 w-4" />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="border-t p-4">
                <UserButtonDashboard user={user} />
            </SidebarFooter>
        </Sidebar>
    );
}
