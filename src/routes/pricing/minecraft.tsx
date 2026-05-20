import PricingCard from '#/components/pricing/PricingCard'
import type { PricingCardProps } from '#/components/pricing/PricingCard'

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pricing/minecraft')({
  component: RouteComponent,
})

const test = [
  {
    planName: 'Iron Plan',
    price: 400,
    icon: 'https://apexminecrafthosting.com/_astro/wood.BDZb6W-k.svg',
    billingPeriod: 'MONTHLY',
    features: [
      '24 GB RAM',
      'Ryzen 9 24 Cores',
      '200 GB NVME Disk',
      '4 Databases',
    ],
    currency: '₹',
    buttonLabel: 'Buy Now',
    discount: { label: '10% Off', percentage: 10 },
    featureCategory: 'Ryzen 9',
  },

  {
    planName: 'Bronze Plan',
    icon: 'https://apexminecrafthosting.com/_astro/stone.IKau2d9T.svg',
    price: 699,
    billingPeriod: 'MONTHLY',
    features: [
      '32 GB RAM',
      'Ryzen 7 16 Cores',
      '300 GB NVME Disk',
      '6 Databases',
    ],
    currency: '₹',
    buttonLabel: 'Purchase',
    discount: { label: '12% Off', percentage: 12 },
    featureCategory: 'Ryzen 7',
  },

  {
    planName: 'Silver Plan',
    icon: 'https://apexminecrafthosting.com/_astro/gold.C_slNOB-.svg',
    price: 999,
    billingPeriod: 'MONTHLY',
    features: [
      '64 GB RAM',
      'Ryzen 9 32 Cores',
      '500 GB NVME Disk',
      '10 Databases',
    ],
    currency: '₹',
    buttonLabel: 'Get Started',
    discount: { label: '15% Off', percentage: 15 },
    featureCategory: 'High Performance',
  },

  {
    planName: 'Gold Plan',
    price: 1499,
    billingPeriod: 'MONTHLY',
    features: [
      '96 GB RAM',
      'EPYC 32 Cores',
      '1 TB NVME Disk',
      'Unlimited Databases',
    ],
    currency: '₹',
    buttonLabel: 'Choose Plan',
    discount: { label: '18% Off', percentage: 18 },
    featureCategory: 'Enterprise',
  },

  {
    planName: 'Platinum Plan',
    price: 2199,
    billingPeriod: 'MONTHLY',
    features: [
      '128 GB RAM',
      'EPYC 64 Cores',
      '2 TB NVME Disk',
      'Unlimited Databases',
    ],
    currency: '₹',
    buttonLabel: 'Deploy Now',
    discount: { label: '20% Off', percentage: 20 },
    featureCategory: 'Dedicated',
  },

  {
    planName: 'Starter Plan',
    price: 199,
    billingPeriod: 'MONTHLY',
    features: ['8 GB RAM', 'Ryzen 5 6 Cores', '100 GB SSD', '2 Databases'],
    currency: '₹',
    buttonLabel: 'Start Today',
    discount: { label: '5% Off', percentage: 5 },
    featureCategory: 'Beginner',
  },

  {
    planName: 'Developer Plan',
    price: 799,
    billingPeriod: 'MONTHLY',
    features: [
      '48 GB RAM',
      'Ryzen 9 20 Cores',
      '400 GB NVME Disk',
      '8 Databases',
    ],
    currency: '₹',
    buttonLabel: 'Buy Plan',
    discount: { label: '14% Off', percentage: 14 },
    featureCategory: 'Developers',
  },

  {
    planName: 'Cloud Pro',
    price: 1799,
    billingPeriod: 'MONTHLY',
    features: [
      '72 GB RAM',
      'Intel Xeon 28 Cores',
      '1.5 TB NVME Disk',
      '20 Databases',
    ],
    currency: '₹',
    buttonLabel: 'Launch Server',
    discount: { label: '17% Off', percentage: 17 },
    featureCategory: 'Cloud Hosting',
  },

  {
    planName: 'Ultimate Plan',
    price: 2999,
    billingPeriod: 'MONTHLY',
    features: [
      '256 GB RAM',
      'Dual EPYC CPUs',
      '4 TB NVME Disk',
      'Unlimited Databases',
    ],
    currency: '₹',
    buttonLabel: 'Upgrade Now',
    discount: { label: '25% Off', percentage: 25 },
    featureCategory: 'Ultimate Performance',
  },

  {
    planName: 'Business Plan',
    price: 1299,
    billingPeriod: 'MONTHLY',
    features: [
      '64 GB RAM',
      'Intel Xeon 24 Cores',
      '800 GB NVME Disk',
      '12 Databases',
    ],
    currency: '₹',
    buttonLabel: 'Select Plan',
    discount: { label: '16% Off', percentage: 16 },
    featureCategory: 'Business Hosting',
  },
]

function RouteComponent() {
  return (
<div className="grid grid-cols-1 gap-6 p-4 sm:p-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
  {test.map((plan) => (
    <PricingCard key={plan.planName} data={plan} />
  ))}
</div> 
  )
}
