import {
  Home,
  MapPin,
  Truck,
  Package,
  Wallet,
  User,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface AppStep {
  screenType: string;
  id: string;
  number: string;
  title: string;
  text: string;
  tag: string;
  icon: LucideIcon;
  image: string;
  badgeText: string;
}

export const driverAppSteps: AppStep[] = [
  {
    id: 'step-1',
    number: '01',
    title: 'Home Screen',
    text: 'Instant access to city-wide courier delivery. View available services, pick your vehicle, and initiate delivery in seconds.',
    tag: 'Home',
    icon: Home,
    image: '/Home Page.png',
    badgeText: '⚡ Parcer Express Delivery',
  },
  {
    id: 'step-2',
    number: '02',
    title: 'Set Pickup & Drop Route',
    text: 'Enter sender and recipient addresses with instant search, interactive map pinning, and transparent fare calculation.',
    tag: 'Route',
    icon: MapPin,
    image: '/Set your route.png',
    badgeText: '📍 Accurate Route Search',
  },
  {
    id: 'step-3',
    number: '03',
    title: 'Choose Vehicle',
    text: 'Select the ideal vehicle for your shipment—2-Wheeler for small packages, 3-Wheeler for medium loads, or Trucks for heavy cargo.',
    tag: 'Vehicle',
    icon: Truck,
    image: '/Choose Vehicle.png',
    badgeText: '🛵 2W • 🛺 3W • 🚚 Truck',
  },
  {
    id: 'step-4',
    number: '04',
    title: 'Orders & Live Tracking',
    text: 'Track your ongoing shipments on live map, view assigned driver details and ETA, and review all past completed orders.',
    tag: 'Orders',
    icon: Package,
    image: '/Order.png',
    badgeText: '📦 Real-Time Order Tracking',
  },
  {
    id: 'step-5',
    number: '05',
    title: 'Parcer Wallet',
    text: 'Seamless cashless checkout with Parcer Wallet, fast UPI top-ups, cashback rewards, and clear transaction history.',
    tag: 'Wallet',
    icon: Wallet,
    image: '/Wallet.png',
    badgeText: '💰 Cashless Checkout',
  },
  {
    id: 'step-6',
    number: '06',
    title: 'Account & Settings',
    text: 'Manage your profile, edit saved home & office addresses, check special offers, and connect with 24/7 support.',
    tag: 'Account',
    icon: User,
    image: '/Account.png',
    badgeText: '👤 Saved Addresses & Support',
  },
];


