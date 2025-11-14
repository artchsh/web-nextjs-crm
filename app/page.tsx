"use client";

import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { 
  Server, 
  ClipboardList, 
  Lock,
  ArrowRight,
  ShieldCheck,
  Clock,
  Loader2
} from "lucide-react";

export default function Home() {
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

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Internal Use Only
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Manage Your Clients
            <span className="block mt-2">Securely & Efficiently</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Your internal CRM solution for managing client server credentials and tracking tasks. 
            Built specifically for your company's workflow.
          </p>
          {session ? (
            <Button size="lg" className="gap-2">
              Go to Dashboard
              <ArrowRight className="h-5 w-5" />
            </Button>
          ) : (
            <Button onClick={() => router.push("/sign-in")} size="lg" className="gap-2">
              Get Started
              <ArrowRight className="h-5 w-5" />
            </Button>
          )}
        </div>

        <Separator className="my-12" />

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Feature 1 */}
          <Card>
            <CardHeader>
              <div className="rounded-lg w-12 h-12 bg-muted flex items-center justify-center mb-4">
                <Server className="h-6 w-6" />
              </div>
              <CardTitle>Server Credentials</CardTitle>
              <CardDescription>
                Securely store and manage all your clients' server access credentials in one centralized location.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Feature 2 */}
          <Card>
            <CardHeader>
              <div className="rounded-lg w-12 h-12 bg-muted flex items-center justify-center mb-4">
                <ClipboardList className="h-6 w-6" />
              </div>
              <CardTitle>Task Tracking</CardTitle>
              <CardDescription>
                Keep track of all client-related tasks, deadlines, and project progress in real-time.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Feature 3 */}
          <Card>
            <CardHeader>
              <div className="rounded-lg w-12 h-12 bg-muted flex items-center justify-center mb-4">
                <Lock className="h-6 w-6" />
              </div>
              <CardTitle>Secure Access</CardTitle>
              <CardDescription>
                Enterprise-grade security with role-based access control and encrypted data storage.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* Stats Section */}
        <Card className="border-2">
          <CardContent className="p-8 sm:p-12">
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Server className="h-6 w-6" />
                  <div className="text-4xl font-bold">∞</div>
                </div>
                <p className="text-sm text-muted-foreground">Client Credentials</p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="h-6 w-6" />
                  <div className="text-4xl font-bold">24/7</div>
                </div>
                <p className="text-sm text-muted-foreground">Access Anytime</p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <ShieldCheck className="h-6 w-6" />
                  <div className="text-4xl font-bold">100%</div>
                </div>
                <p className="text-sm text-muted-foreground">Secure & Private</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
