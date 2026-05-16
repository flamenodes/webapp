import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pricing/discord-bot')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/pricing/discord-bot"!</div>
}
