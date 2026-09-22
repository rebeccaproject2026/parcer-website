import { ArrowUpRight } from 'lucide-react';
import type { IconType } from '../../types';

interface ServiceCardProps {
  title: string;
  text: string;
  icon: IconType;
  tone: string;
  className?: string;
}

export function ServiceCard({
  title,
  text,
  icon: Icon,
  tone,
  className = '',
}: ServiceCardProps) {
  const getBgColor = () => {
    switch (tone) {
      case 'mint':
        return 'bg-[#e1f3ef]';
      case 'sand':
        return 'bg-[#fff1cf]';
      case 'blue':
        return 'bg-[#e7effb]';
      case 'rose':
        return 'bg-[#fae8e3]';
      case 'sun':
        return 'bg-[#fff5d9]';
      default:
        return 'bg-[#e8f0f6]';
    }
  };

  return (
    <div className={`group flex flex-col justify-between rounded-[24px] border border-white bg-white p-6 shadow-[0_10px_30px_rgba(51,65,85,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(51,65,85,0.1)] ${className}`}>
      <div>
        <div
          className={`mb-8 flex h-12 w-12 items-center justify-center rounded-2xl text-[#334155] ${getBgColor()}`}
        >
          <Icon size={22} strokeWidth={1.7} />
        </div>
        <h3 className="text-lg font-bold text-[#334155]">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-500">{text}</p>
      </div>
      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5 text-xs font-bold text-[#389c8e]">
        Learn more <ArrowUpRight size={15} />
      </div>
    </div>
  );
}
