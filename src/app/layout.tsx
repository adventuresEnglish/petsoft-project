import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pet Soft Daycare Software",
  description: "Only the best for your fest.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen text-sm text-zinc-900 bg-[#E5E8EC]`}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
