import { SupportDesk } from '#/components/tickets/SupportDesk'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/user/tickets')({
  component: TicketsPage,
})

function TicketsPage() {
  return <SupportDesk mode="user" />
}

