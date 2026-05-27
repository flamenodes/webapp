/**
 * Cart Mock Data
 * Contains sample data for the billing cart page
 */

export const cartData = {
  product: {
    id: 'kvm-1',
    name: 'KVM 1 plan',
    category: 'VPS hosting',
    icon: 'server',
    pricing: {
      current: {
        monthly: 599,
        currency: '₹',
      },
      original: {
        monthly: 1649,
        currency: '₹',
      },
      totalSavings: 25200,
      period: '24 months',
      totalPrice: 14376,
      tax: 2587.68,
      finalTotal: 16963.68,
    },
    renewal: {
      monthly: 99,
      duration: '2 years',
      currency: '₹',
    },
    features: {
      freeDomain: true,
      domainDuration: '1 year',
    },
  },

  addons: [
    {
      id: 'backup-daily',
      name: 'Daily auto-backup',
      description:
        "Get your VPS data backed up every day, so it's always safe and easy to restore.",
      price: 269,
      currency: '₹',
      period: '/mo',
      recommended: true,
      selected: false,
    },
  ],

  locations: [
    {
      id: 'india-mumbai-2',
      name: 'India - Mumbai 2',
      latency: '51 ms',
      status: 'good',
      selected: true,
    },
    {
      id: 'india-delhi-1',
      name: 'India - Delhi 1',
      latency: '45 ms',
      status: 'excellent',
      selected: false,
    },
    {
      id: 'india-bangalore-1',
      name: 'India - Bangalore 1',
      latency: '38 ms',
      status: 'excellent',
      selected: false,
    },
  ],

  operatingSystems: {
    plainOS: [
      'AlmaLinux',
      'Debian',
      'Rocky Linux',
      'Ubuntu',
      'Alpine Linux',
      'Arch Linux',
      'CentOS',
      'CloudLinux',
    ],
    dockerApplications: ['Docker', 'Kubernetes', 'Docker Compose'],
    osWithPanel: ['cPanel', 'Plesk', 'DirectAdmin'],
    applications: ['WordPress', 'Laravel', 'Node.js'],
  },

  orderSummary: {
    items: [
      {
        label: 'KVM 1 plan',
        value: 14376,
        currency: '₹',
      },
      {
        label: 'Domain name',
        value: 0,
        currency: '₹',
      },
      {
        label: 'Domain privacy protection',
        value: 0,
        currency: '₹',
      },
      {
        label: 'Taxes',
        value: 2587.68,
        currency: '₹',
      },
    ],
    total: {
      value: 16963.68,
      currency: '₹',
    },
  },

  trust: {
    items: [
      {
        icon: 'shield-check',
        text: '30-day money-back guarantee',
      },
      {
        type: 'rating',
        platform: 'Trustpilot',
        rating: 'Excellent',
        reviews: '67,470 reviews',
      },
    ],
  },
}
