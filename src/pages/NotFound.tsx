import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Subpage } from '../components/layout/Subpage';

export function NotFound() {
  return (
    <Subpage
      eyebrow="Error 404"
      title="Page not found."
      text="The page you are looking for doesn't exist or has moved."
    >
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto flex max-w-[640px] flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#389c8e] px-7 py-3.5 text-sm font-bold text-white shadow-[0_4px_14px_rgba(56,156,142,0.3)] transition hover:bg-[#2e8276]"
          >
            Go to homepage <ArrowRight size={16} />
          </Link>
          <Link
            to="/#services"
            className="rounded-full border border-slate-200 px-7 py-3.5 text-sm font-bold text-slate-700 transition hover:border-[#389c8e] hover:text-[#389c8e]"
          >
            Our services
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-slate-200 px-7 py-3.5 text-sm font-bold text-slate-700 transition hover:border-[#389c8e] hover:text-[#389c8e]"
          >
            Contact us
          </Link>
        </div>
      </section>
    </Subpage>
  );
}
