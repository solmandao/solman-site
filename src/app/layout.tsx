import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarExpandable } from "@/components/ui/navbar-expandable";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Solman Website",
  description: "Modern minimalistic landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <NavbarExpandable />
        {children}
      </body>
    </html>
  );
}
