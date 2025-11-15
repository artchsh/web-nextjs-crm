"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Bell, Search } from "lucide-react";

export function DashboardHeader() {
    return (
        <header className="bg-sidebar flex h-[73px] shrink-0 items-center gap-2 px-4">
            <div className="sm:hidden flex gap-2">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
            </div>
            <div className="flex flex-1 items-center justify-between">
                <h1 className="text-lg font-semibold">Dashboard</h1>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                        <Search className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                        <Bell className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </header>
    );
}
