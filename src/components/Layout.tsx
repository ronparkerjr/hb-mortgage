import { type ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";

interface LayoutProps {
  children: ReactNode;
}

/**
 * Shared page shell: sticky header + main content + footer + mobile action bar.
 * Bottom padding on mobile ensures the fixed action bar covers no content.
 */
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <MobileActionBar />
      {/* Spacer so the fixed mobile bar never covers footer content */}
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </div>
  );
};
