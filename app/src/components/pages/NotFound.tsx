import React from 'react'
import { useNavigate } from '@tanstack/react-router'
import { Button } from '../ui/button'
import FuzzyText from '../FuzzyText'

import {
  FaFireFlameCurved,
  FaArrowLeft,
  FaShieldHalved,
  FaServer,
  FaGlobe,
  FaHeadset,
} from 'react-icons/fa6'

const NotFound = () => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    window.history.back()
  }

  const features = [
    {
      icon: <FaShieldHalved />,
      title: 'High Performance',
      desc: 'Powerful infrastructure built for speed.',
    },
    {
      icon: <FaServer />,
      title: 'Reliable Uptime',
      desc: '99.9% uptime engineered for production.',
    },
    {
      icon: <FaGlobe />,
      title: 'Global Network',
      desc: 'Low latency nodes across the globe.',
    },
    {
      icon: <FaHeadset />,
      title: 'Expert Support',
      desc: 'Real humans ready to help 24/7.',
    },
  ]

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">

      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.18),transparent_65%)]" />

      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:60px_60px]" />

      <section className="relative z-10 container mx-auto flex min-h-[calc(100vh-120px)] flex-col items-center justify-center px-6 text-center">

        {/* 404 */}
        <div className="relative">

          <div className="absolute inset-0 blur-[120px] bg-primary/20 rounded-full" />

          <div className="flex items-center justify-center text-[16rem] font-bungee">

              4

            <FaFireFlameCurved className="mx-3 text-primary text-[12rem] md:text-[15rem] drop-shadow-[0_0_35px_hsl(var(--primary))]" />

              4
          </div>
        </div>

        {/* content */}
        <h1 className="mt-8 text-4xl md:text-6xl font-bold text-primary">
          Oops! This node doesn’t exist.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          The page you're looking for may have gone offline,
          moved to another server, or never existed.
        </p>

        {/* actions */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">

          <Button
            size="great"
            onClick={handleGoBack}
            className="gap-2"
          >
            <FaArrowLeft />
            Go Back
          </Button>

          <Button
            size="great"
            variant="outline"
            onClick={() => navigate({ to: '/' })}
            className="border-border bg-card hover:bg-accent"
          >
            <FaFireFlameCurved />
            Home Page
          </Button>

        </div>

        {/* features card */}
        <div className="mt-20 w-full max-w-7xl rounded-3xl border border-border bg-card/60 backdrop-blur-xl p-8">

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

            {features.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-5 text-3xl text-primary">
                  {item.icon}
                </div>

                <h3 className="font-semibold text-lg text-primary">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground max-w-[220px]">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>


      </section>
    </main>
  )
}

export default NotFound
