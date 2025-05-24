import type { Metadata } from "next";
import "./globals.css";
import { SolanaProvider } from "@/components/SolanaProvider";

export const metadata: Metadata = {
  title: "Privment",
  description: "Evade the middleman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SolanaProvider>{children}</SolanaProvider>
      </body>
    </html>
  );
}
