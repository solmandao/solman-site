"use client";

import { Home, Users, Heart, BookOpen, HelpCircle } from "lucide-react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { useRouter, usePathname } from "next/navigation";
import { useMemo } from "react";

export function NavbarExpandable() {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    { title: "Home", icon: Home, href: "/" },
    { title: "Community", icon: Users, href: "/community" },
    { title: "Events", icon: Heart, href: "/events" },
    { title: "Education", icon: BookOpen, href: "/education" },
    { type: "separator" as const },
    { title: "FAQs", icon: HelpCircle, href: "/faqs" },
  ];

  // Determine which tab should be selected based on current route
  const initialSelected = useMemo(() => {
    const currentIndex = tabs.findIndex(
      (tab) => tab.type !== "separator" && tab.href === pathname
    );
    return currentIndex !== -1 ? currentIndex : null;
  }, [pathname]);

  const handleTabChange = (index: number | null) => {
    // Only navigate if Home tab (index 0) is clicked
    if (index === 0 && tabs[index] && "href" in tabs[index]) {
      const tab = tabs[index] as { title: string; icon: typeof Home; href: string };
      router.push(tab.href);
    }
    // For all other tabs, just allow selection state change (no navigation)
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <div className="flex justify-center">
        <ExpandableTabs 
          tabs={tabs.map((tab) => 
            tab.type === "separator" 
              ? { type: "separator" as const }
              : { title: tab.title, icon: tab.icon }
          )}
          activeColor="text-primary"
          onChange={handleTabChange}
          initialSelected={initialSelected}
          className="bg-background"
        />
      </div>
    </nav>
  );
}
