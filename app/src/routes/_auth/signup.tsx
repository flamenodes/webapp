import Aurora from '#/components/Aurora'
import { SignupForm } from '#/components/auth/signup-form'
import FlameNodesLogo from '#/components/blocks/FlameNodesLogo'
import Hyperspeed from '@/components/Hyperspeed'
import { hyperspeedPresets } from '@/components/HyperSpeedPresets'
import TextType from '@/components/TextType'
import { createFileRoute } from '@tanstack/react-router'
import { GalleryVerticalEnd } from 'lucide-react'

export const Route = createFileRoute('/_auth/signup')({
  head: () => ({
    meta: [{ title: 'Create Account | Flame Nodes' }],
  }),
  component: SignupPage,
})

function SignupPage() {
  return (
    <div className="flex flex-col items-center justify-center relative ">
      {/* <div className="absolute h-full w-full z-0">
        <Aurora
          colorStops={['#ff327f', '#f522bb', '#ff327f']}
          amplitude={1}
          blend={0.5}
        />
      </div> */}

      <div className="grid min-h-svh lg:grid-cols-2 w-full z-10 ">
        <div className="flex flex-col gap-4 p-6 md:p-10">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full flex flex-col items-center text-4xl">
              <FlameNodesLogo textSize={90} />
            </div>
            <div className="w-full max-w-xs mt-2">
              <SignupForm />
            </div>
          </div>
        </div>
        <div className="relative h-screen hidden bg-muted lg:block">
          <Hyperspeed effectOptions={hyperspeedPresets.two} />
        </div>
      </div>
    </div>
  )
}
