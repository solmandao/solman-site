import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarExpandable } from "@/components/ui/navbar-expandable";
import { Footer } from "@/components/ui/footer";
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
              icon: (
                <Image
                  src="/social-icons/twitter.png"
                  alt="X (Twitter)"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              ),
              href: "https://x.com/@solmanatdao",
              label: "X",
            },
            {
              icon: (
                <Image
                  src="/social-icons/github.png"
                  alt="GitHub"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              ),
              href: "https://github.com/solmandao",
              label: "GitHub",
            },
            {
              icon: (
                <Image
                  src="/social-icons/discord.png"
                  alt="Discord"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              ),
              href: "https://discord.com/invite/solmanatdao",
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
