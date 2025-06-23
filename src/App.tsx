import { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AnimatedTransition from "./components/ui/AnimatedTransition";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Brands from "./pages/Brands";
import NotFound from "./pages/NotFound";
import WarrantyTermsModal from './components/modals/WarrantyTermsModal';
import PrivacyPolicyModal from './components/modals/PrivacyPolicyModal';
import JivoSite from './components/common/JivoSite';

const queryClient = new QueryClient();

const App = () => {
  const [warrantyModalOpen, setWarrantyModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HelmetProvider>
          <BrowserRouter>
            <Navbar />
            <AnimatedTransition>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact setPrivacyModalOpen={setPrivacyModalOpen} />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/brands" element={<Brands />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatedTransition>
            <Footer setWarrantyModalOpen={setWarrantyModalOpen} setPrivacyModalOpen={setPrivacyModalOpen} />
            
            {/* JivoSite Chat Widget */}
            {/* <JivoSite /> */}
            
            <WarrantyTermsModal open={warrantyModalOpen} onOpenChange={setWarrantyModalOpen} />
            <PrivacyPolicyModal open={privacyModalOpen} onOpenChange={setPrivacyModalOpen} />
          </BrowserRouter>
        </HelmetProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
