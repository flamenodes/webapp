'use client'
import { lazy, Suspense } from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowRight, MapPin } from 'lucide-react'
import { ClientOnly } from '#/components/ClientOnly'

// Lazy-loaded so three-globe never runs during SSR
const World = lazy(() => import('#/components/ui/globe').then((m) => ({ default: m.World })))

const LOCATIONS = [
  {
    name: 'Dubai',
    region: 'UAE · Middle East',
    lat: 25.2048,
    lng: 55.2708,
    flag: '🇦🇪',
  },
  {
    name: 'Mumbai',
    region: 'India · South Asia',
    lat: 19.0760,
    lng: 72.8777,
    flag: '🇮🇳',
  },
  {
    name: 'Delhi',
    region: 'India · North Asia',
    lat: 28.6139,
    lng: 77.2090,
    flag: '🇮🇳',
  },
  {
    name: 'Singapore',
    region: 'Singapore · Southeast Asia',
    lat: 1.3521,
    lng: 103.8198,
    flag: '🇸🇬',
  },
  {
    name: 'Germany',
    region: 'Berlin · Europe',
    lat: 52.5200,
    lng: 13.4050,
    flag: '🇩🇪',
  },
]

// Arc connections between data centres
const ARCS = [
  // Dubai ↔ Mumbai
  { order: 1, startLat: 25.2048, startLng: 55.2708, endLat: 19.0760, endLng: 72.8777, arcAlt: 0.2, color: '#f97316' },
  // Mumbai ↔ Delhi
  { order: 2, startLat: 19.0760, startLng: 72.8777, endLat: 28.6139, endLng: 77.2090, arcAlt: 0.15, color: '#fb923c' },
  // Mumbai ↔ Singapore
  { order: 3, startLat: 19.0760, startLng: 72.8777, endLat: 1.3521, endLng: 103.8198, arcAlt: 0.3, color: '#f97316' },
  // Delhi ↔ Singapore
  { order: 4, startLat: 28.6139, startLng: 77.2090, endLat: 1.3521, endLng: 103.8198, arcAlt: 0.35, color: '#ef4444' },
  // Singapore ↔ Germany
  { order: 5, startLat: 1.3521, startLng: 103.8198, endLat: 52.5200, endLng: 13.4050, arcAlt: 0.5, color: '#f97316' },
  // Germany ↔ Dubai
  { order: 6, startLat: 52.5200, startLng: 13.4050, endLat: 25.2048, endLng: 55.2708, arcAlt: 0.4, color: '#fb923c' },
  // Dubai ↔ Singapore
  { order: 7, startLat: 25.2048, startLng: 55.2708, endLat: 1.3521, endLng: 103.8198, arcAlt: 0.45, color: '#ef4444' },
  // Delhi ↔ Germany
  { order: 8, startLat: 28.6139, startLng: 77.2090, endLat: 52.5200, endLng: 13.4050, arcAlt: 0.55, color: '#f97316' },
]

const globeConfig = {
  pointSize: 6,
  globeColor: '#0f0f14',
  showAtmosphere: true,
  atmosphereColor: '#f97316',
  atmosphereAltitude: 0.12,
  emissive: '#1a0a00',
  emissiveIntensity: 0.15,
  shininess: 0.7,
  polygonColor: 'rgba(249,115,22,0.18)',
  ambientLight: '#ffffff',
  directionalLeftLight: '#f97316',
  directionalTopLight: '#ffffff',
  pointLight: '#f97316',
  arcTime: 2500,
  arcLength: 0.9,
  rings: 2,
  maxRings: 4,
  autoRotate: true,
  autoRotateSpeed: 0.6,
}

export function GlobalPresence() {
  return (
    <section className="relative w-full overflow-hidden py-24">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_50%,rgba(249,115,22,0.07),transparent)]" />

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row lg:items-center lg:gap-8">

        {/* ─── Left: Text content ─── */}
        <div className="flex flex-1 flex-col gap-8 lg:max-w-[44%]">
          {/* Badge */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            <span className="text-xs font-medium text-primary">Global Infrastructure</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Servers close to{' '}
              <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                your players
              </span>
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              FlameNodes runs data centres across Asia, the Middle East, and Europe — so your server is always a low-latency hop away from your community.
            </p>
          </div>

          {/* Location list */}
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.name}
                className="flex items-center gap-3 rounded-xl border border-border bg-card/60 px-4 py-3 backdrop-blur-sm transition-colors hover:border-primary/30 hover:bg-card"
              >
                <span className="text-2xl leading-none">{loc.flag}</span>
                <div>
                  <p className="text-sm font-semibold leading-tight">{loc.name}</p>
                  <p className="text-xs text-muted-foreground">{loc.region}</p>
                </div>
                <MapPin className="ml-auto h-3.5 w-3.5 shrink-0 text-primary/60" />
              </div>
            ))}
          </div>

          {/* Stats row */}
          <div className="flex items-center gap-6 border-t border-border pt-6">
            {[
              { value: '5', label: 'Locations' },
              { value: '<10ms', label: 'Avg. latency' },
              { value: '99.9%', label: 'Uptime SLA' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-bold text-primary">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Link
              to="/pricing/minecraft"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-primary/40"
            >
              View Plans
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/pricing/vps"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-primary/40"
            >
              VPS Hosting
            </Link>
          </div>
        </div>

        {/* ─── Right: Globe ─── */}
        <div className="relative flex flex-1 items-center justify-center lg:max-w-[56%]">
          {/* Glow ring behind globe */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

          <div className="relative h-[480px] w-full max-w-[520px] lg:h-[540px]">
            <ClientOnly fallback={<div className="h-full w-full rounded-full bg-primary/5 animate-pulse" />}>
              <Suspense fallback={<div className="h-full w-full rounded-full bg-primary/5 animate-pulse" />}>
                <World globeConfig={globeConfig} data={ARCS} />
              </Suspense>
            </ClientOnly>
          </div>
        </div>
      </div>
    </section>
  )
}
