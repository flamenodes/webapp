import Aurora from '#/components/Aurora'
import { SignupForm } from '#/components/auth/signup-form'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/sign-up')({
  component: SignupPage,
})

function SignupPage() {
  return (
    <div className="flex min-h-svh  flex-col items-center justify-center p-6 md:p-10 relative ">
      <div className='absolute h-full w-full z-0'>
        <Aurora
          colorStops={['#ff327f', '#f522bb', '#ff327f']}
          amplitude={1}
          blend={0.5}
        />
      </div>
      <div className="w-full max-w-sm md:max-w-4xl mt-20 z-6">
        <SignupForm />
      </div>
    </div>
  )
}
