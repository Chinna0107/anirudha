import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { FloatingCTA } from './components/ui/FloatingCTA';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Faq } from './pages/Faq';
import { BlogHub } from './pages/BlogHub';
import { BlogPost } from './pages/BlogPost';
import { Contact } from './pages/Contact';
import { Gallery } from './pages/Gallery';
import { ServiceDetail } from './pages/ServiceDetail';
import { LocationDetail } from './pages/LocationDetail';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { PageTransition } from './components/ui/PageTransition';
import { AnimatePresence } from 'framer-motion';

// Premium UX: Reset scroll vertical offset to (0, 0) on route switches
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <ScrollProgress />
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-brand-light font-sans text-brand-primary antialiased">
        {/* Sticky Header Navigation */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-1 w-full flex flex-col">
          <AnimatePresence mode="wait">
            <PageTransition key={location.pathname}>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/blog" element={<BlogHub />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/gallery" element={<Gallery />} />
                {/* Dynamic routing for services */}
                <Route path="/services/:slug" element={<ServiceDetail />} />
                {/* Dynamic routing for locations */}
                <Route path="/areas/:locationSlug" element={<LocationDetail />} />
                
                {/* Catch-all redirection to Homepage */}
                <Route path="*" element={<Home />} />
              </Routes>
            </PageTransition>
          </AnimatePresence>
        </main>

        {/* Dynamic Sticky Bottom Call/WhatsApp triggers */}
        <FloatingCTA />

        {/* Architectural Footer */}
        <Footer />
      </div>
    </>
  );
};

const AppWrapper: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
