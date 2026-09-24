import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import type { View } from './types';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsConditions } from './pages/TermsConditions';
import { TermsConditionsPartner } from './pages/TermsConditionsPartner';
import { RefundPolicy } from './pages/RefundPolicy';

function getViewFromPath(pathname: string, hash: string): { view: View; anchor?: string } {
  const cleanPath = pathname.toLowerCase().replace(/^\/+|\/+$/g, '');
  const cleanHash = hash.toLowerCase().replace(/^#\/?/, '');

  if (
    cleanPath === 'privacy-policy' ||
    cleanPath === 'privacy' ||
    cleanPath === 'privacypolicy' ||
    cleanPath === 'privacy-policy.html' ||
    cleanPath === 'privacy.html'
  ) {
    return { view: 'privacy-policy' };
  }

  if (
    cleanPath === 'terms-partner' ||
    cleanPath === 'terms-conditions-partner' ||
    cleanPath === 'partner-terms' ||
    cleanPath === 'driver-terms' ||
    cleanPath === 'terms-partner.html' ||
    cleanPath === 'terms-conditions-partner.html' ||
    cleanPath === 'partner-terms.html' ||
    cleanPath === 'driver-terms.html'
  ) {
    return { view: 'terms-partner' };
  }

  if (
    cleanPath === 'terms-conditions' ||
    cleanPath === 'terms' ||
    cleanPath === 'terms-and-conditions' ||
    cleanPath === 'termsconditions' ||
    cleanPath === 'terms-user' ||
    cleanPath === 'terms-conditions-user' ||
    cleanPath === 'terms-conditions.html' ||
    cleanPath === 'terms.html' ||
    cleanPath === 'terms-and-conditions.html' ||
    cleanPath === 'terms-user.html'
  ) {
    return { view: 'terms-conditions' };
  }

  if (
    cleanPath === 'refund-policy' ||
    cleanPath === 'cancellation-refund' ||
    cleanPath === 'cancellation-policy' ||
    cleanPath === 'cancellation-and-refund' ||
    cleanPath === 'cancellation' ||
    cleanPath === 'refund' ||
    cleanPath === 'refundpolicy' ||
    cleanPath === 'refund-policy.html' ||
    cleanPath === 'cancellation-refund.html' ||
    cleanPath === 'cancellation-policy.html' ||
    cleanPath === 'cancellation.html' ||
    cleanPath === 'refund.html'
  ) {
    return { view: 'refund-policy' };
  }

  if (cleanPath === 'about' || cleanPath === 'about-us' || cleanPath === 'about.html' || cleanPath === 'about-us.html') {
    return { view: 'about' };
  }

  if (cleanPath === 'contact' || cleanPath === 'contact-us' || cleanPath === 'contact.html' || cleanPath === 'contact-us.html') {
    return { view: 'contact' };
  }

  if (cleanPath === 'services' || cleanPath === 'services.html') {
    return { view: 'home', anchor: 'services' };
  }

  if (cleanPath === 'how-it-works' || cleanPath === 'how-it-works.html') {
    return { view: 'home', anchor: 'how-it-works' };
  }

  if (cleanHash && ['services', 'how-it-works', 'vehicles', 'ready-to-move', 'faqs'].includes(cleanHash)) {
    return { view: 'home', anchor: cleanHash };
  }

  return { view: 'home' };
}

function getPathForView(v: View): string {
  switch (v) {
    case 'privacy-policy':
      return '/privacy-policy';
    case 'terms-conditions':
      return '/terms-conditions';
    case 'terms-partner':
      return '/terms-partner';
    case 'refund-policy':
      return '/refund-policy';
    case 'about':
      return '/about';
    case 'contact':
      return '/contact';
    default:
      return '/';
  }
}

const pageTitles: Record<View, string> = {
  'home': 'Parcer — Smarter Goods Transportation Across Indian Cities',
  'about': 'About Us — Parcer | Smarter Logistics & Delivery',
  'services': 'Our Services — Parcer',
  'how-it-works': 'How It Works — Parcer',
  'contact': 'Contact Us — Parcer Customer Support',
  'privacy-policy': 'Privacy Policy — Parcer | Tiny Script Soft Tech',
  'terms-conditions': 'Terms & Conditions (User) — Parcer | Tiny Script Soft Tech',
  'terms-partner': 'Terms & Conditions (Partner) — Parcer | Tiny Script Soft Tech',
  'refund-policy': 'Cancellation & Refund Policy — Parcer | Tiny Script Soft Tech',
};

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [scrolled, setScrolled] = useState(false);

  const { view, anchor } = getViewFromPath(location.pathname, location.hash);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update page document title
  useEffect(() => {
    document.title = pageTitles[view] || 'Parcer — Smarter Goods Transportation';
  }, [view]);

  // Handle scroll on route / anchor change
  useEffect(() => {
    if (anchor) {
      window.setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash, anchor]);

  const go = (next: View, targetAnchor?: string) => {
    let targetView = next;
    let anchorToUse = targetAnchor;

    if (next === 'services') {
      targetView = 'home';
      anchorToUse = 'services';
    } else if (next === 'how-it-works') {
      targetView = 'home';
      anchorToUse = 'how-it-works';
    }

    const newPath = getPathForView(targetView);
    const targetUrl = anchorToUse ? `${newPath}#${anchorToUse}` : newPath;

    navigate(targetUrl);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-[#334155]">
      <Navbar
        view={view}
        go={go}
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <Routes>
        {/* Home Routes */}
        <Route path="/" element={<Home go={go} activeFaq={activeFaq} setActiveFaq={setActiveFaq} />} />
        <Route path="/index.html" element={<Home go={go} activeFaq={activeFaq} setActiveFaq={setActiveFaq} />} />
        
        {/* About Routes */}
        <Route path="/about" element={<About go={go} />} />
        <Route path="/about-us" element={<About go={go} />} />
        <Route path="/about.html" element={<About go={go} />} />
        <Route path="/about-us.html" element={<About go={go} />} />

        {/* Contact Routes */}
        <Route path="/contact" element={<Contact go={go} />} />
        <Route path="/contact-us" element={<Contact go={go} />} />
        <Route path="/contact.html" element={<Contact go={go} />} />
        <Route path="/contact-us.html" element={<Contact go={go} />} />

        {/* Privacy Policy Routes */}
        <Route path="/privacy-policy" element={<PrivacyPolicy go={go} />} />
        <Route path="/privacy" element={<PrivacyPolicy go={go} />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy go={go} />} />
        <Route path="/privacy-policy.html" element={<PrivacyPolicy go={go} />} />
        <Route path="/privacy.html" element={<PrivacyPolicy go={go} />} />

        {/* Terms & Conditions (User) Routes */}
        <Route path="/terms-conditions" element={<TermsConditions go={go} />} />
        <Route path="/terms" element={<TermsConditions go={go} />} />
        <Route path="/terms-and-conditions" element={<TermsConditions go={go} />} />
        <Route path="/termsconditions" element={<TermsConditions go={go} />} />
        <Route path="/terms-user" element={<TermsConditions go={go} />} />
        <Route path="/terms-conditions-user" element={<TermsConditions go={go} />} />
        <Route path="/terms-conditions.html" element={<TermsConditions go={go} />} />
        <Route path="/terms.html" element={<TermsConditions go={go} />} />
        <Route path="/terms-and-conditions.html" element={<TermsConditions go={go} />} />
        <Route path="/terms-user.html" element={<TermsConditions go={go} />} />

        {/* Terms & Conditions (Partner) Routes */}
        <Route path="/terms-partner" element={<TermsConditionsPartner go={go} />} />
        <Route path="/terms-conditions-partner" element={<TermsConditionsPartner go={go} />} />
        <Route path="/partner-terms" element={<TermsConditionsPartner go={go} />} />
        <Route path="/driver-terms" element={<TermsConditionsPartner go={go} />} />
        <Route path="/terms-partner.html" element={<TermsConditionsPartner go={go} />} />
        <Route path="/terms-conditions-partner.html" element={<TermsConditionsPartner go={go} />} />
        <Route path="/partner-terms.html" element={<TermsConditionsPartner go={go} />} />
        <Route path="/driver-terms.html" element={<TermsConditionsPartner go={go} />} />

        {/* Cancellation & Refund Policy Routes */}
        <Route path="/refund-policy" element={<RefundPolicy go={go} />} />
        <Route path="/cancellation-refund" element={<RefundPolicy go={go} />} />
        <Route path="/cancellation-policy" element={<RefundPolicy go={go} />} />
        <Route path="/cancellation-and-refund" element={<RefundPolicy go={go} />} />
        <Route path="/cancellation" element={<RefundPolicy go={go} />} />
        <Route path="/refund" element={<RefundPolicy go={go} />} />
        <Route path="/refundpolicy" element={<RefundPolicy go={go} />} />
        <Route path="/refund-policy.html" element={<RefundPolicy go={go} />} />
        <Route path="/cancellation-refund.html" element={<RefundPolicy go={go} />} />
        <Route path="/cancellation-policy.html" element={<RefundPolicy go={go} />} />
        <Route path="/cancellation.html" element={<RefundPolicy go={go} />} />
        <Route path="/refund.html" element={<RefundPolicy go={go} />} />

        {/* Fallback */}
        <Route path="*" element={<Home go={go} activeFaq={activeFaq} setActiveFaq={setActiveFaq} />} />
      </Routes>

      <Footer go={go} />
    </div>
  );
}

export default App;
