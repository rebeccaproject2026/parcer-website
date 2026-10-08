import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Menu, Phone, Sparkles, UserPlus, X } from 'lucide-react';
import type { View } from '../../types';
import { CONTACT } from '../../seo/pages';

interface NavbarProps {
  view: View;
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const navLinks: [string, string, string][] = [
  ['home', 'Home', '/'],
  ['about', 'About Us', '/about'],
  ['services', 'Services', '/#services'],
  ['how-it-works', 'How It Works', '/#how-it-works'],
  ['contact', 'Contact', '/contact'],
];

// Booking / partner sign-up section at the bottom of the homepage.
const BOOK_HREF = '/#ready-to-move';

const handleAnchorClick = (href: string) => {
  if (href.startsWith('/#')) {
    const anchorId = href.replace('/#', '');
    const el = document.getElementById(anchorId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
};

export function Navbar({
  view,
  scrolled,
  menuOpen,
  setMenuOpen,
}: NavbarProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
      {/* Top Announcement & Helpline Bar */}
      <div
        className={`hidden border-b border-slate-700/50 bg-[#334155] text-white text-[11px] font-medium transition-all duration-300 md:block ${scrolled ? 'h-0 py-0 overflow-hidden opacity-0' : 'py-2 opacity-100'
          }`}
      >
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 lg:px-8">
          <div className="flex items-center gap-6 text-slate-300">
            <span className="flex items-center gap-1.5 text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5bbdb9] animate-pulse" />
              <span className="font-semibold text-[#8ed8d0]">Instant City Delivery</span> Across Multiple Hubs
            </span>
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-1.5 text-slate-300 hover:text-[#8ed8d0] transition-colors"
            >
              <Phone size={12} className="text-[#8ed8d0]" />
              +91 93165 35015
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-[#8ed8d0] transition-colors"
            >
              <Mail size={12} className="text-[#8ed8d0]" />
              {CONTACT.email}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to={BOOK_HREF}
              onClick={() => handleAnchorClick(BOOK_HREF)}
              className="flex items-center gap-1.5 text-[#f4c95d] font-semibold hover:text-[#fae092] transition transform hover:scale-105"
            >
              <UserPlus size={13} />
              <span>Earn with Parcer</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 ${scrolled
          ? 'border-b border-slate-200/80 bg-white/95 shadow-[0_4px_25px_rgba(51,65,85,0.06)] backdrop-blur-xl py-0'
          : 'bg-white/90 backdrop-blur-md'
          }`}
      >
        <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-5 lg:px-8">
          <Link
            to="/"
            aria-label="Parcer home"
            className="flex items-center py-1 transition-transform duration-300 hover:scale-[1.03]"
          >
            <img
              src="/Parcer.svg"
              alt="Parcer"
              className="h-10 sm:h-11 md:h-12 w-auto object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map(([key, label, href]) => {
              const active = view === key;
              return (
                <Link
                  key={key}
                  to={href}
                  onClick={() => handleAnchorClick(href)}
                  className={`text-[14px] font-semibold transition-colors duration-200 hover:text-[#389c8e] ${active
                    ? 'text-[#389c8e] font-bold'
                    : 'text-slate-600'
                    }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              to={BOOK_HREF}
              onClick={() => handleAnchorClick(BOOK_HREF)}
              className="group flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-[13px] font-bold text-slate-700 transition duration-300 hover:border-[#5bbdb9] hover:text-[#389c8e] hover:shadow-sm hover:-translate-y-0.5 cursor-pointer"
            >
              <Sparkles size={14} className="text-[#f4c95d] transition-transform duration-300 group-hover:rotate-12" />
              Parcer Partner
            </Link>
            <Link
              to={BOOK_HREF}
              onClick={() => handleAnchorClick(BOOK_HREF)}
              className="btn-shimmer group flex items-center gap-2 rounded-full bg-[#389c8e] px-5 py-2.5 text-[13px] font-bold text-white shadow-[0_4px_14px_rgba(56,156,142,0.3)] transition duration-300 hover:bg-[#2e8276] hover:shadow-[0_6px_22px_rgba(56,156,142,0.45)] hover:-translate-y-0.5 cursor-pointer"
            >
              Book a Vehicle
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          <button
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="rounded-full p-2 lg:hidden text-slate-700 hover:bg-slate-100 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-100 bg-white px-5 pb-6 pt-3 shadow-2xl lg:hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1.5">
              {navLinks.map(([key, label, href]) => (
                <Link
                  key={key}
                  to={href}
                  onClick={() => {
                    setMenuOpen(false);
                    handleAnchorClick(href);
                  }}
                  className={`rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${view === key
                    ? 'bg-[#e0f5f2] text-[#389c8e] font-bold'
                    : 'text-slate-700 hover:bg-[#f3f6f7]'
                    }`}
                >
                  {label}
                </Link>
              ))}

              <div className="mt-3 rounded-2xl bg-slate-50 p-3 text-xs space-y-2 border border-slate-100">
                <a href={CONTACT.phoneHref} className="flex items-center gap-2 text-slate-600 font-semibold">
                  <Phone size={14} className="text-[#389c8e]" /> Support: +91 93165 35015
                </a>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 text-slate-600 font-semibold">
                  <Mail size={14} className="text-[#389c8e]" /> {CONTACT.email}
                </a>
              </div>

              <div className="mt-2 grid grid-cols-2 gap-2 border-t border-slate-100 pt-3">
                <Link
                  to={BOOK_HREF}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-full border border-slate-200 py-3 text-center text-xs font-bold text-slate-700 hover:border-[#389c8e]"
                >
                  Parcer Partner
                </Link>
                <Link
                  to={BOOK_HREF}
                  onClick={() => setMenuOpen(false)}
                  className="btn-shimmer rounded-full bg-[#389c8e] py-3 text-center text-xs font-bold text-white shadow-sm"
                >
                  Book Vehicle
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
