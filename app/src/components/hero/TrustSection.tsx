"use client";

import { InfiniteMovingCards } from '#/components/ui/infinite-moving-cards';
import { FaStar } from 'react-icons/fa';
import { useState, useEffect } from 'react';

interface Review {
  quote: string;
  name: string;
  title: string;
  stars?: number;
}

interface TrustSectionProps {
  reviews: Review[];
}

export function TrustSection({ reviews }: TrustSectionProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.15),transparent_70%)]" />
      
      <div className="relative container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <FaStar className="text-primary w-4 h-4" />
            <span className="text-sm font-semibold text-primary">Rated 4.8/5 on Trustpilot</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary to-foreground">
              Trusted by Thousands
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of developers, gamers, and businesses who trust FlameNodes
            for their hosting needs. Real reviews from real customers.
          </p>
          
          <a
            href="https://www.trustpilot.com/review/flamenodes.cloud"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
          >
            View all reviews on Trustpilot
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
        
        {/* Reviews Carousel */}
        <div className="relative">
          {isMounted ? (
            <InfiniteMovingCards
              items={reviews}
              direction="right"
              speed="slow"
              pauseOnHover={true}
              className="py-4"
            />
          ) : (
            <div className="flex gap-4 py-4 overflow-hidden">
              {reviews.slice(0, 3).map((item, idx) => (
                <div
                  key={idx}
                  className="w-[350px] md:w-[450px] shrink-0 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] dark:bg-[linear-gradient(180deg,#27272a,#18181b)] px-8 py-6"
                >
                  <blockquote>
                    <span className="text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
                      {item.quote}
                    </span>
                    <div className="mt-6 flex flex-col gap-1">
                      <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                        {item.name}
                      </span>
                      <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                        {item.title}
                      </span>
                    </div>
                  </blockquote>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
            <div className="text-3xl font-bold text-primary mb-1">5,000+</div>
            <div className="text-sm text-muted-foreground">Active Servers</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
            <div className="text-3xl font-bold text-primary mb-1">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime SLA</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
            <div className="text-3xl font-bold text-primary mb-1">24/7</div>
            <div className="text-sm text-muted-foreground">Expert Support</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
            <div className="text-3xl font-bold text-primary mb-1">4.8★</div>
            <div className="text-sm text-muted-foreground">Trustpilot Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}
