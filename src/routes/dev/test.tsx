import { Button } from '#/components/ui/button'
import { createPteroServer } from '#/serverActions/pterodactyl/server'
import { createFileRoute } from '@tanstack/react-router'
import { toast } from 'sonner'

export const Route = createFileRoute('/dev/test')({
  component: TestPage,
})

function TestPage() {
  const handleCreate = async () => {
    console.log("Clicked")
    const res = await createPteroServer({
      data: {
        name: 'FlmNodes # Id 001',
        user: 1,
        egg: 1,
        nest: 1,
        specs: {
          cpu: 0,
          memory: 0,
          swap: 0,
          disk: 0,
          database: 0,
          allocation: 0,
          backups: 0,
        },
      },
    })
    toast.success(res.message)
  }
  return (
    <main className="h-screen flex justify-center items-center">
      <Button onClick={handleCreate} variant={'great'} size={'great'}>
        Create Server
      </Button>
    </main>
  )
}
