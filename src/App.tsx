import { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
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
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import RemontTelevizorov from "./pages/RemontTelevizorov";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminBlog from "./pages/admin/AdminBlog";
import NotFound from "./pages/NotFound";
import WarrantyTermsModal from './components/modals/WarrantyTermsModal';
import PrivacyPolicyModal from './components/modals/PrivacyPolicyModal';
import SubscriptionModal from './components/modals/SubscriptionModal';
import SuccessModal from './components/modals/SuccessModal';
import UrgencyBanner from "./components/common/UrgencyBanner";
import useSiteTimer from './hooks/use-site-timer';
import { PreloadProvider, type BlogPostPreload } from './contexts/PreloadContext';

const queryClient = new QueryClient();

export interface AppProps {
  preloadedBlogPost?: BlogPostPreload | null;
}

const App = ({ preloadedBlogPost = null }: AppProps = {}) => {
  const [warrantyModalOpen, setWarrantyModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  // Хук для отслеживания времени на сайте (показываем модальное окно через 2 минуты)
  const { shouldShowModal: shouldShowSubscriptionModal, hideModal: hideSubscriptionModal } = useSiteTimer({
    showModalAfter: 2 * 60 * 1000, // 2 минуты
    storageKey: 'subscription-modal-shown',
    showOnce: true
  });

  const handleSuccessModalClose = () => {
    setSuccessModalOpen(false);
  };

  const handleSubscribeClick = () => {
    // Логика для обработки клика по подписке
    console.log('Пользователь кликнул на подписку');
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HelmetProvider>
          <PreloadProvider blogPost={preloadedBlogPost}>
            <Navbar />
            <AnimatedTransition>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact setPrivacyModalOpen={setPrivacyModalOpen} setSuccessModalOpen={setSuccessModalOpen} />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/brands" element={<Brands />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/remont-televizorov" element={<RemontTelevizorov />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/blog" element={<AdminBlog />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatedTransition>
            <Footer setWarrantyModalOpen={setWarrantyModalOpen} setPrivacyModalOpen={setPrivacyModalOpen} />
            
            {/* JivoSite Chat Widget */}
            {/* <JivoSite /> */}
            
            <WarrantyTermsModal open={warrantyModalOpen} onOpenChange={setWarrantyModalOpen} />
            <PrivacyPolicyModal open={privacyModalOpen} onOpenChange={setPrivacyModalOpen} />
            <SubscriptionModal open={shouldShowSubscriptionModal} onOpenChange={hideSubscriptionModal} />
            <SuccessModal 
              open={successModalOpen} 
              onOpenChange={setSuccessModalOpen} 
              onSubscribeClick={handleSubscribeClick}
            />
            <UrgencyBanner />
          </PreloadProvider>
        </HelmetProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
