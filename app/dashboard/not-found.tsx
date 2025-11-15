import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileQuestion } from "lucide-react";

export default function DashboardNotFound() {
    return (
        <div className="flex min-h-[calc(100vh-200px)] items-center justify-center p-4">
            <Card className="w-full max-w-md text-center">
                <CardHeader className="space-y-4">
                    <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-muted">
                        <FileQuestion className="size-10 text-muted-foreground" />
                    </div>
                    <div>
                        <CardTitle className="text-3xl">404 - Page Not Found</CardTitle>
                        <CardDescription className="mt-2">
                            The dashboard page you're looking for doesn't exist or has been moved.
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">
                        You might want to check the URL or return to the dashboard home page.
                    </p>
                </CardContent>
                <CardFooter className="flex flex-col gap-2 sm:flex-row sm:justify-center">
                    <Button asChild>
                        <Link href="/dashboard">
                            Back to Dashboard
                        </Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link href="/">
                            Go Home
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
