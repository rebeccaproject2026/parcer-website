import { useEffect, useState } from 'react';
import type { View } from './types';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
// Future subpage routes (commented out as sections are integrated directly into Home page):
// import { Services } from './pages/Services';
// import { HowItWorks } from './pages/HowItWorks';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsConditions } from './pages/TermsConditions';
import { RefundPolicy } from './pages/RefundPolicy';

function getViewFromLocation(): { view: View; anchor?: string } {
  if (typeof window === 'undefined') return { view: 'home' };

  const rawPath = window.location.pathname.toLowerCase().replace(/^\/+|\/+$/g, '');
  const rawHash = window.location.hash.toLowerCase().replace(/^#\/?/, '');

  const target = rawPath || rawHash;

  if (
    target === 'privacy-policy' ||
    target === 'privacy' ||
    target === 'privacypolicy' ||
    target === 'privacy-policy.html'
  ) {
    return { view: 'privacy-policy' };
  }

  if (
    target === 'terms-conditions' ||
    target === 'terms' ||
    target === 'terms-and-conditions' ||
    target === 'termsconditions' ||
    target === 'terms-conditions.html'
  ) {
    return { view: 'terms-conditions' };
  }

  if (
    target === 'refund-policy' ||
    target === 'cancellation-refund' ||
    target === 'cancellation-policy' ||
    target === 'cancellation-and-refund' ||
    target === 'refundpolicy' ||
    target === 'refund-policy.html' ||
    target === 'cancellation-refund.html'
  ) {
    return { view: 'refund-policy' };
  }

  if (target === 'about' || target === 'about-us') {
    return { view: 'about' };
  }

  if (target === 'contact' || target === 'contact-us') {
    return { view: 'contact' };
  }

  if (target === 'services') {
    return { view: 'home', anchor: 'services' };
  }

  if (target === 'how-it-works') {
    return { view: 'home', anchor: 'how-it-works' };
  }

  if (rawHash && ['services', 'how-it-works', 'vehicles', 'ready-to-move', 'faqs'].includes(rawHash)) {
    return { view: 'home', anchor: rawHash };
  }

  return { view: 'home' };
}

function getPathForView(v: View): string {
  switch (v) {
    case 'privacy-policy':
      return '/privacy-policy';
    case 'terms-conditions':
      return '/terms-conditions';
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
  'terms-conditions': 'Terms & Conditions — Parcer | Tiny Script Soft Tech',
  'refund-policy': 'Cancellation & Refund Policy — Parcer | Tiny Script Soft Tech',
};

function App() {
  const [view, setView] = useState<View>(() => getViewFromLocation().view);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync route on popstate (browser Back/Forward) and hashchange
  useEffect(() => {
    const handleLocationChange = () => {
      const { view: nextView, anchor } = getViewFromLocation();
      setView(nextView);
      if (anchor) {
        window.setTimeout(() => {
          const el = document.getElementById(anchor);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  // Update page document title
  useEffect(() => {
    document.title = pageTitles[view] || 'Parcer — Smarter Goods Transportation';
  }, [view]);

  // Handle initial anchor scroll if present
  useEffect(() => {
    const { anchor } = getViewFromLocation();
    if (anchor) {
      window.setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }
  }, []);

  const go = (next: View, anchor?: string) => {
    let targetView = next;
    let targetAnchor = anchor;

    if (next === 'services') {
      targetView = 'home';
      targetAnchor = 'services';
    } else if (next === 'how-it-works') {
      targetView = 'home';
      targetAnchor = 'how-it-works';
    }

    const newPath = getPathForView(targetView);
    const newUrl = targetAnchor ? `${newPath}#${targetAnchor}` : newPath;

    if (window.location.pathname !== newPath || (targetAnchor && window.location.hash !== `#${targetAnchor}`)) {
      window.history.pushState({ view: targetView, anchor: targetAnchor }, '', newUrl);
    }

    setView(targetView);
    setMenuOpen(false);

    if (targetAnchor) {
      window.setTimeout(() => {
        const el = document.getElementById(targetAnchor!);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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

      {view === 'home' && (
        <Home go={go} activeFaq={activeFaq} setActiveFaq={setActiveFaq} />
      )}
      {view === 'about' && <About go={go} />}
      {/* Kept commented for future use if dedicated subpages are needed: */}
      {/* {view === 'services' && <Services go={go} />} */}
      {/* {view === 'how-it-works' && <HowItWorks go={go} />} */}
      {view === 'contact' && <Contact go={go} />}
      {view === 'privacy-policy' && <PrivacyPolicy go={go} />}
      {view === 'terms-conditions' && <TermsConditions go={go} />}
      {view === 'refund-policy' && <RefundPolicy go={go} />}

      <Footer go={go} />
    </div>
  );
}

export default App;
