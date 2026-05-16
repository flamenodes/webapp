import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/pricing')({
  component: pricingLayout,
})

const categories = [
  { name: 'Minecraft', icon: '', to: '/' },
  { name: 'Vps', icon: '', to: '/' },
  { name: 'Dedicated', icon: '', to: '/' },
  { name: 'Webhost', icon: '', to: '/' },
]

function pricingLayout() {
  return (
    <section className="flex flex-col min-h-screen relative">
      {/* <div className=" absolute h-full w-full">
        <RippleGrid
          enableRainbow={false}
          gridColor="#ff007d"
          rippleIntensity={0.05}
          gridSize={10}
          gridThickness={15}
          mouseInteraction
          mouseInteractionRadius={0.8}
          opacity={1}
          fadeDistance={1.5}
          vignetteStrength={2}
          glowIntensity={0.1}
          gridRotation={0}
        />
      </div> */}
      <div className="mt-30 flex flex-col justify-center items-center w-full h-full">
          <ul className="flex w-full bg-card space-x-5">
            {categories.map((category,key) => (
             <button className='px-8 py-4 bg-linear-180 rounded-md from-transparent via-primary/6 to-primary/30'>Minecraft</button>
            ))}
          </ul>
      </div>
      <Outlet />
    </section>
  )
}
