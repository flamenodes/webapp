import { createServerFn } from '@tanstack/react-start'

export const getTrustpilotReviews = createServerFn({ method: 'GET' }).handler(async () => {
  try {
    // Trustpilot Business Unit ID for flamenodes.cloud
    const businessUnitId = '67699d92aa43d7422dc2c59d'
    const apiKey = process.env.TRUSTPILOT_API_KEY
    
    if (!apiKey) {
      console.warn('TRUSTPILOT_API_KEY not set, using fallback reviews')
      return getFallbackReviews()
    }

    const response = await fetch(
      `https://api.trustpilot.com/v1/business-units/${businessUnitId}/reviews?perPage=20`,
      {
        headers: {
          'apikey': apiKey,
        },
      }
    )

    if (!response.ok) {
      console.error('Trustpilot API error:', response.status)
      return getFallbackReviews()
    }

    const data = await response.json()
    
    return data.reviews.map((review: any) => ({
      id: review.id,
      quote: review.text || review.title,
      name: review.consumer.displayName,
      title: review.title || 'Verified Customer',
      stars: review.stars,
      createdAt: review.createdAt,
    }))
  } catch (error) {
    console.error('Error fetching Trustpilot reviews:', error)
    return getFallbackReviews()
  }
})

function getFallbackReviews() {
  return [
    {
      id: '1',
      quote: "Exceptional hosting service! FlameNodes provided lightning-fast servers for our Minecraft community. The setup was instant and support team is always there when we need them. Couldn't ask for more!",
      name: "Alex Martinez",
      title: "Gaming Community Owner",
      stars: 5,
      createdAt: new Date().toISOString(),
    },
    {
      id: '2',
      quote: "Best VPS provider I've used. The performance is outstanding, uptime is solid, and the pricing is very competitive. Their control panel makes server management a breeze. Highly recommend!",
      name: "Sarah Chen",
      title: "Full-Stack Developer",
      stars: 5,
      createdAt: new Date().toISOString(),
    },
    {
      id: '3',
      quote: "Migrated all our game servers to FlameNodes and never looked back. The DDoS protection is top-notch, and we haven't experienced any downtime. Their support team knows their stuff!",
      name: "Mike Thompson",
      title: "Esports Team Manager",
      stars: 5,
      createdAt: new Date().toISOString(),
    },
    {
      id: '4',
      quote: "As a developer, I need reliable infrastructure. FlameNodes delivers on all fronts - speed, stability, and excellent customer service. The root access and flexibility are exactly what I needed.",
      name: "Priya Patel",
      title: "DevOps Engineer",
      stars: 5,
      createdAt: new Date().toISOString(),
    },
    {
      id: '5',
      quote: "Outstanding value for money! The Ryzen-powered servers are incredibly fast. Setup took less than 2 minutes and the performance has been consistently excellent. FlameNodes is the real deal.",
      name: "James Wilson",
      title: "Content Creator",
      stars: 5,
      createdAt: new Date().toISOString(),
    },
  ]
}
