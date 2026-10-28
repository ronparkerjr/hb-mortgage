import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import Index from "./pages/Index";
import HomePurchase from "./pages/HomePurchase";
import HomeRefinance from "./pages/HomeRefinance";
import AboutUs from "./pages/AboutUs";
import LoanPrograms from "./pages/LoanPrograms";
import MortgageCalculators from "./pages/MortgageCalculators";
import ContactUs from "./pages/ContactUs";
import PersonalizedQuote from "./pages/PersonalizedQuote";
import LoanProcess from "./pages/LoanProcess";
import MortgageBasics from "./pages/MortgageBasics";
import OnlineForms from "./pages/OnlineForms";
import Faq from "./pages/Faq";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import {
  SelectLoanOfficer,
  PreQualify,
  ApplyNow,
  DownloadApp,
  DownloadEbook,
  ThankYou,
  Legal,
  PrivacyPolicy,
  AccessibilityStatement,
  SiteMap,
} from "./pages/scaffold";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Scroll to the targeted element when a hash is present.
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        // Slight delay to allow the destination page to render.
        window.setTimeout(
          () => el.scrollIntoView({ behavior: "smooth", block: "start" }),
          50,
        );
        return;
      }
    }
    // Cross-page navigation: jump to top immediately so the new page
    // never renders mid-scroll, then smooth-scroll as a safety net.
    window.scrollTo(0, 0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/home-purchase" element={<HomePurchase />} />
            <Route path="/home-refinance" element={<HomeRefinance />} />
            <Route path="/loan-programs" element={<LoanPrograms />} />
            <Route
              path="/mortgage-calculators"
              element={<MortgageCalculators />}
            />
            <Route path="/loan-process" element={<LoanProcess />} />
            <Route path="/mortgage-basics" element={<MortgageBasics />} />
            <Route path="/online-forms" element={<OnlineForms />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route
              path="/select-loan-officer"
              element={<SelectLoanOfficer />}
            />
            <Route path="/pre-qualify" element={<PreQualify />} />
            <Route path="/apply-now" element={<ApplyNow />} />
            <Route path="/personalized-quote" element={<PersonalizedQuote />} />
            <Route path="/download-app" element={<DownloadApp />} />
            <Route path="/download-ebook" element={<DownloadEbook />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="/accessibility-statement"
              element={<AccessibilityStatement />}
            />
            <Route path="/site-map" element={<SiteMap />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
