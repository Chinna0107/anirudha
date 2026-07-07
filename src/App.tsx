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
import { ServiceDetail } from './pages/ServiceDetail';

// Premium UX: Reset scroll vertical offset to (0, 0) on route switches
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-brand-light font-sans text-brand-primary antialiased">
        {/* Sticky Header Navigation */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/blog" element={<BlogHub />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            {/* Dynamic dynamic route handling 30+ service slugs */}
            <Route path="/services/:slug" element={<ServiceDetail />} />
            
            {/* Catch-all redirection to Homepage */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Dynamic Sticky Bottom Call/WhatsApp triggers */}
        <FloatingCTA />

        {/* Architectural Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
