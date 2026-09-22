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

function App() {
  const [view, setView] = useState<View>('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const go = (next: View, anchor?: string) => {
    // If user clicks on Services or How It Works, redirect directly to the corresponding section on Home page
    let targetView = next;
    let targetAnchor = anchor;

    if (next === 'services') {
      targetView = 'home';
      targetAnchor = 'services';
    } else if (next === 'how-it-works') {
      targetView = 'home';
      targetAnchor = 'how-it-works';
    }

    setView(targetView);
    setMenuOpen(false);

    if (targetAnchor) {
      // Allow DOM to update if view changed, then scroll smoothly to the section
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

      <Footer go={go} />
    </div>
  );
}

export default App;
