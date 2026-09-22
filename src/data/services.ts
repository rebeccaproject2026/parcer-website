import {
  Route,
  Zap,
  Radio,
  BadgePercent,
  Navigation,
} from 'lucide-react';
import type { ServiceItem } from '../types';

export const serviceItems: ServiceItem[] = [
  {
    title: 'Local goods transport',
    text: 'Move essentials, inventory and packages across your city without the waiting.',
    icon: Route,
    tone: 'mint',
  },
  {
    title: 'Quick delivery',
    text: 'When today matters, book a fast pickup and stay close to every update in real time.',
    icon: Zap,
    tone: 'sun',
  },
  {
    title: 'Real-time tracking',
    text: 'Live GPS navigation and status updates from pickup point to doorstep drop-off.',
    icon: Radio,
    tone: 'blue',
  },
  {
    title: 'Affordable pricing',
    text: 'Transparent per-km pocket-friendly rates with upfront fare estimates and zero hidden fees.',
    icon: BadgePercent,
    tone: 'sand',
  },
  {
    title: 'On-demand vehicle',
    text: 'Choose what fits your move and book in a few simple steps.',
    icon: Navigation,
    tone: 'lavender',
  },
];
