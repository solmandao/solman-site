import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarExpandable } from "@/components/ui/navbar-expandable";
import { Footer } from "@/components/ui/footer";
import { Twitter, Github, MessageCircle } from "lucide-react";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Solman DAO",
  description: "Building the Next Generation of On-Chain Citizens.",
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
        <Footer
          logo={
            <Image
              src="/solmanlogo.png"
              alt="SolmanDAO Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
          }
          brandName="SolmanDAO"
          socialLinks={[
            {
              icon: <Twitter className="h-5 w-5" />,
              href: "https://twitter.com",
              label: "Twitter",
            },
            {
              icon: <Github className="h-5 w-5" />,
              href: "https://github.com",
              label: "GitHub",
            },
            {
              icon: <MessageCircle className="h-5 w-5" />,
              href: "https://discord.com",
              label: "Discord",
            },
          ]}
          mainLinks={[
            { href: "/", label: "Home" },
            { href: "/community", label: "Community" },
            { href: "/events", label: "Events" },
            { href: "/education", label: "Education" },
          ]}
          legalLinks={[
            { href: "/privacy", label: "Privacy Policy" },
            { href: "/terms", label: "Terms of Service" },
            { href: "/faqs", label: "FAQs" },
          ]}
          copyright={{
            text: "© 2024 SolmanDAO",
            license: "All rights reserved",
          }}
        />
      </body>
    </html>
  );
}
