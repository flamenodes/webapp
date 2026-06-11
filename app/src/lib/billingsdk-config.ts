export interface Plan {
  id: string;
  title: string;
  description: string;
  highlight?: boolean;
  type?: "monthly" | "yearly";
  currency?: string;
  monthlyPrice: string;
  yearlyPrice: string;
  buttonText: string;
  buttonLink?: string;
  badge?: string;
  features: {
    name: string;
    icon: string;
    iconColor?: string;
  }[];
}

export interface CurrentPlan {
  plan: Plan;
  type: "monthly" | "yearly" | "custom";
  price?: string;
  nextBillingDate: string;
  paymentMethod: string;
  status: "active" | "inactive" | "past_due" | "cancelled";
}

export const plans: Plan[] = [
  {
    id: "webhosting",
    title: "Web Hosting",
    description: "Fast and reliable web hosting solutions for your websites.",
    currency: "₹",
    monthlyPrice: "49",
    yearlyPrice: "490",
    buttonText: "Get Started",
    buttonLink: "/pricing/webhost",
    features: [
      {
        name: "WordPress, Node.js & More",
        icon: "check",
        iconColor: "text-green-500",
      },
      {
        name: "Free Subdomain",
        icon: "check",
        iconColor: "text-blue-500",
      },
      {
        name: "High Speed NVMe SSD",
        icon: "check",
        iconColor: "text-purple-500",
      },
      {
        name: "Premium Support",
        icon: "check",
        iconColor: "text-orange-500",
      },
      {
        name: "Free SSL Certificate",
        icon: "check",
        iconColor: "text-teal-500",
      },
      {
        name: "Daily Backups",
        icon: "check",
        iconColor: "text-pink-500",
      },
    ],
  },
  {
    id: "minecraft",
    title: "Minecraft Hosting",
    description: "Optimized servers for the best Minecraft gameplay experience.",
    currency: "₹",
    monthlyPrice: "99",
    yearlyPrice: "990",
    buttonText: "Get Started",
    buttonLink: "/pricing/minecraft",
    badge: "Most Popular",
    highlight: true,
    features: [
      {
        name: "Ryzen 9 (Optimized)",
        icon: "check",
        iconColor: "text-green-500",
      },
      {
        name: "DDR4 RAM",
        icon: "check",
        iconColor: "text-blue-500",
      },
      {
        name: "High Speed NVMe SSD",
        icon: "check",
        iconColor: "text-purple-500",
      },
      {
        name: "Premium Support",
        icon: "check",
        iconColor: "text-orange-500",
      },
      {
        name: "One-Click Modpack Install",
        icon: "check",
        iconColor: "text-teal-500",
      },
      {
        name: "DDoS Protection",
        icon: "check",
        iconColor: "text-red-500",
      },
    ],
  },
  {
    id: "vpshosting",
    title: "VPS Hosting",
    description: "High-performance virtual private servers with full control.",
    currency: "₹",
    monthlyPrice: "399",
    yearlyPrice: "3990",
    buttonText: "Get Started",
    buttonLink: "/pricing/vps",
    features: [
      {
        name: "Ryzen 9 (Core)",
        icon: "check",
        iconColor: "text-green-500",
      },
      {
        name: "DDR4 RAM",
        icon: "check",
        iconColor: "text-blue-500",
      },
      {
        name: "High Speed NVMe SSD",
        icon: "check",
        iconColor: "text-purple-500",
      },
      {
        name: "Premium Support",
        icon: "check",
        iconColor: "text-orange-500",
      },
      {
        name: "Full Root Access",
        icon: "check",
        iconColor: "text-teal-500",
      },
      {
        name: "99.9% Uptime SLA",
        icon: "check",
        iconColor: "text-pink-500",
      },
    ],
  },
];
