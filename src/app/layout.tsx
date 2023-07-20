import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

import "@/styles/globals.css";
import { Toaster } from "@/components/ui/Toaster";

export const metadata = {
  title: "Breadit",
  description: "A Reddit clone built with Next.js and TypeScript.",
};

// Importing the "Inter" font using Next Font Optimization
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    // Using cn utility to merge tailwind classnames and apply the "Inter" font
    <html
      lang="en"
      className={cn(
        "bg-white text-slate-900 antialiased light",
        inter.className
      )}
    >
      {/* Setting the min-height of the body to 100vh and using the top-padding to offset the navbar height */}
      <body className="min-h-screen pt-12 bg-slate-50 antialiased">
        {/* @ts-expect-error server component */}
        <Navbar />

        {authModal}
        {/* Create a tailwind container with max-width and center it horizontally */}
        <div className="container max-w-7xl mx-auto h-full pt-12">
          {children}
        </div>

        <Toaster />
      </body>
    </html>
  );
}
