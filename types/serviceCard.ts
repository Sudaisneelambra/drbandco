import { LucideIcon } from "lucide-react";
export  interface ServiceItem {
    title: string;
    subtitle: string;
    icon: LucideIcon; // Icon component from lucide-react
    accent: string;
    badges: string[];
    description: string;
    services: string[];
    images: {
      src: string;
      alt: string;
    }[];
    stats: {
      label: string;
      value: string;
    }[];
    href: string;
  }