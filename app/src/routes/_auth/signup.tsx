import Aurora from '#/components/Aurora'
import { SignupForm } from '#/components/auth/signup-form'
import FlameNodesLogo from '#/components/blocks/FlameNodesLogo'
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

      <div className="grid min-h-svh lg:grid-cols-2 w-full z-10">
        <div className="flex flex-col gap-4 p-6 md:p-10">
          <div className="flex justify-center gap-2 md:justify-start">
              <FlameNodesLogo iconSize={12}  name={false}/>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-xs">
              <SignupForm />
            </div>
          </div>
        </div>
        <div className="relative hidden bg-muted lg:block">
          <img
            src="/flamenodes-banner.png"
            alt="Image"
            className="absolute  object-cover  dark:brightness-[0.9] "
          />
        </div>
      </div>
    </div>
  )
}
