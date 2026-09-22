import type { LucideIcon } from 'lucide-react';

export type View = 'home' | 'about' | 'services' | 'how-it-works' | 'contact';

export type IconType = LucideIcon;

export interface ServiceItem {
  title: string;
  text: string;
  icon: IconType;
  tone: 'mint' | 'sand' | 'blue' | 'rose' | 'sun' | 'lavender';
}

export interface FaqItem {
  question: string;
  answer: string;
}
