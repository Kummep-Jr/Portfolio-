import type { Metadata } from "next";
import { isAdminConfigured } from "@/lib/admin";
import KeystaticApp from "./keystatic";

export const metadata: Metadata = {
  title: "Admin | Kummep Jnr",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default function KeystaticLayout() {
  if (!isAdminConfigured()) {
    return (
      <main className="mx-auto flex min-h-screen max-w-lg flex-col justify-center gap-3 px-6">
        <h1 className="text-2xl font-bold tracking-tight">Admin not set up yet</h1>
        <p className="text-secondary">
          The admin panel needs a GitHub App before it can be used on the live site. Follow the
          steps in <code>ADMIN.md</code> in the repository, then redeploy.
        </p>
      </main>
    );
  }
  return <KeystaticApp />;
}
