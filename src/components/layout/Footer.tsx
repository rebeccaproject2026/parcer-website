import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import type { IconType, View } from '../../types';

function XIcon({ size = 14, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

interface FooterProps {
  go: (view: View, anchor?: string) => void;
}

function getRouteForView(key: string): string {
  switch (key) {
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
    case 'services':
      return '/#services';
    case 'how-it-works':
      return '/#how-it-works';
    default:
      return '/';
  }
}

export function Footer({ go }: FooterProps) {
  return (
    <footer className="bg-[#334155] px-5 pb-8 pt-16 text-white lg:px-8 border-t border-slate-700/60">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex flex-col items-start">
              <Link
                to="/"
                className="inline-flex items-center rounded-xl bg-white px-3 py-1.5 transition hover:opacity-90 shadow-md hover:scale-105 duration-200"
              >
                <img
                  src="/Parcer.svg"
                  alt="Parcer"
                  className="h-8 w-auto max-w-[130px] object-contain"
                />
              </Link>
              <a
                href="https://tinyscript.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-[11px] font-semibold tracking-wide text-[#8ed8d0]/90 transition-colors hover:text-[#8ed8d0]"
              >
                A Product of <span className="font-bold text-white underline decoration-[#8ed8d0]/60 hover:decoration-white">Tiny Script Soft Tech Pvt. Ltd.</span>
              </a>
            </div>
            <p className="mt-4 max-w-[240px] text-sm leading-6 text-white/60">
              Smarter, simpler and most reliable on-demand goods transportation across Indian cities.
            </p>
            <div className="mt-6 flex gap-3">
              <Social Icon={Instagram} />
              <Social Icon={Facebook} />
              <Social Icon={Linkedin} />
              <button
                type="button"
                aria-label="X (formerly Twitter)"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/65 transition-all duration-300 hover:border-[#5bbdb9] hover:text-[#8ed8d0] hover:bg-white/5 hover:scale-110"
              >
                <XIcon size={14} />
              </button>
            </div>
          </div>
          <FooterColumn
            title="Explore"
            links={[
              ['Home', 'home'],
              ['About Us', 'about'],
              ['Services', 'services'],
              ['How It Works', 'how-it-works'],
              ['Contact', 'contact'],
            ]}
            go={go}
          />
          <FooterColumn
            title="Services"
            links={[
              'Local goods transport',
              'Quick delivery',
              'Real-time tracking',
              'Affordable pricing',
              'On-demand vehicle',
            ].map((x) => [x, 'services'])}
            go={go}
          />
          {/* Column 4: Support & Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#8ed8d0]">
              Support & Contact
            </h3>
            <div className="mt-5 space-y-3.5 text-sm text-white/75">
              <a
                href="mailto:support@theparser.com"
                className="flex items-center gap-2 text-white/80 hover:text-[#8ed8d0] transition-colors"
              >
                <Mail size={14} className="text-[#8ed8d0]" />
                support@theparser.com
              </a>
              <a
                href="tel:9316535015"
                className="flex items-center gap-2 text-white/80 hover:text-[#8ed8d0] transition-colors"
              >
                <Phone size={14} className="text-[#8ed8d0]" />
                +91 93165 35015
              </a>
              <div className="flex items-start gap-2 text-white/70">
                <MapPin size={15} className="text-[#8ed8d0] shrink-0 mt-1" />
                <span className="leading-snug">
                  607, The Plutus, Sargasan, Gandhinagar, Gujarat 382419
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* App Download Badges directly below with ZERO extra gap */}
        <div className="mt-0 flex flex-wrap items-center justify-center lg:justify-end gap-4 lg:pr-4">
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-105 active:scale-95 shadow-xl rounded-[27px] inline-block"
            title="Download on the App Store"
          >
            <img
              src="/app-store.svg"
              alt="Download on the App Store"
              className="h-14 sm:h-16 lg:h-[60px] w-auto drop-shadow-xl"
            />
          </a>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-105 active:scale-95 shadow-xl rounded-[27px] inline-block"
            title="Get it on Google Play"
          >
            <img
              src="/play-store.svg"
              alt="Get it on Google Play"
              className="h-14 sm:h-16 lg:h-[60px] w-auto drop-shadow-xl"
            />
          </a>
        </div>

        <div className="mt-6 flex flex-col justify-between gap-4 border-t border-white/10 pt-5 text-xs text-white/40 sm:flex-row">
          <div>
            © 2026 Parcer. A product of{' '}
            <a
              href="https://tinyscript.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#8ed8d0] transition-colors hover:text-white hover:underline"
            >
              Tiny Script Soft Tech Pvt. Ltd.
            </a>
            . All rights reserved.
          </div>
          <div className="flex flex-wrap gap-5">
            <Link
              to="/privacy-policy"
              className="hover:text-white transition text-left"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-conditions"
              className="hover:text-white transition text-left"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              to="/refund-policy"
              className="hover:text-white transition text-left"
            >
              Cancellation &amp; Refund
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Social({ Icon }: { Icon: IconType }) {
  return (
    <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/65 transition-all duration-300 hover:border-[#5bbdb9] hover:text-[#8ed8d0] hover:bg-white/5 hover:scale-110">
      <Icon size={15} />
    </button>
  );
}

function FooterColumn({
  title,
  links,
  go,
}: {
  title: string;
  links: [string, string][];
  go: (view: View, anchor?: string) => void;
}) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#8ed8d0]">
        {title}
      </h3>
      <div className="mt-5 space-y-3">
        {links.map(([label, key]) => {
          const isAnchorOrHome = key === 'services' || key === 'how-it-works';
          if (isAnchorOrHome) {
            return (
              <button
                key={label}
                onClick={() => go('home', key)}
                className="block text-sm text-white/70 transition-all duration-200 hover:text-white hover:translate-x-1 text-left"
              >
                {label}
              </button>
            );
          }
          return (
            <Link
              key={label}
              to={getRouteForView(key)}
              className="block text-sm text-white/70 transition-all duration-200 hover:text-white hover:translate-x-1"
            >
              {label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

