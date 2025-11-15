"use client"

import * as React from "react"
import { Settings, LogOut, ChevronsUpDown } from "lucide-react"
import { useRouter } from "next/navigation"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"

export function UserButtonDashboard({
    user,
}: {
    user?: any
}) {
    const router = useRouter()

    const handleSignOut = async () => {
        await authClient.signOut()
        router.push("/")
    }

    const handleSettings = () => {
        router.push("/dashboard/settings")
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex items-center gap-3 px-2 h-auto hover:bg-accent"
                >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                        <span className="text-md font-medium">
                            {user?.name?.charAt(0).toUpperCase() || "U"}
                        </span>
                    </div>
                    <div className="flex flex-col items-start flex-1 overflow-hidden">
                        <span className="text-sm font-medium truncate">{user?.name?.split(" ")[0] || "User"}</span>
                        {user?.name?.split(" ")[1] && (
                            <span className="text-sm font-medium truncate">
                                {user?.name?.split(" ")[1]}
                            </span>
                        )}
                        {/* <span className="text-xs text-muted-foreground truncate">
                            {user?.email || ""}
                        </span> */}
                    </div>
                    <ChevronsUpDown className="h-4 w-4 text-muted-foreground" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem onClick={handleSettings}>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sign Out</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <span className="text-xs text-muted-foreground truncate">{user?.email || ""}</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
