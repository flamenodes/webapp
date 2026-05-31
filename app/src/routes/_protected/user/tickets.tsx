import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { TicketSidebar } from '@/components/tickets/TicketSidebar'
import { ChatPanel } from '@/components/tickets/ChatPanel'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Plus, ArrowLeft } from 'lucide-react'
import { createTicket } from '@/serverActions/tickets/tickets.api'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { z } from 'zod'

export const Route = createFileRoute('/_protected/user/tickets')({
  head: () => ({
    meta: [{ title: 'My Tickets | Flame Nodes' }],
  }),
  validateSearch: z.object({ ticket: z.string().optional() }),
  component: TicketsPage,
})

function TicketsPage() {
  const { ticket: selectedTicketId } = Route.useSearch()
  const navigate = useNavigate({ from: Route.fullPath })
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const queryClient = useQueryClient()

  const setSelectedTicketId = (id: string | null) => {
    navigate({ search: id ? { ticket: id } : {} })
  }

  const createMutation = useMutation({
    mutationFn: () => createTicket({
      data: {
        title,
        description,
        priority: 'MEDIUM',
        channelName: 'general',
        tags: [],
      }
    }),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['tickets'] })
      setOpen(false)
      setTitle('')
      setDescription('')
      toast.success('Ticket created successfully')
      if (data?.ticket) {
        setSelectedTicketId(data.ticket.ticketId)
      }
    },
    onError: () => toast.error('Failed to create ticket'),
  })

  return (
    <div className="flex h-[100%] flex-col bg-background">
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar — hidden on mobile when a ticket is selected */}
        <div className={`w-full lg:w-[340px] xl:w-[360px] lg:block flex-shrink-0 ${selectedTicketId ? 'hidden lg:block' : 'block'}`}>
          <TicketSidebar
            selectedTicketId={selectedTicketId || undefined}
            onSelectTicket={setSelectedTicketId}
            onCreateTicket={() => setOpen(true)}
            showCreateButton={true}
          />
        </div>

        {/* Chat — hidden on mobile when no ticket selected */}
        <div className={`flex-1 min-w-0 ${selectedTicketId ? 'block' : 'hidden lg:flex'}`}>
          {selectedTicketId ? (
            <div className="flex flex-col h-full">
              {/* Mobile back button */}
              <div className="lg:hidden flex items-center gap-2 px-4 py-2 border-b bg-card">
                <Button variant="ghost" size="icon" onClick={() => setSelectedTicketId(null)}>
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                <span className="text-sm font-medium">Back to tickets</span>
              </div>
              <ChatPanel ticketId={selectedTicketId} isStaffView={false} />
            </div>
          ) : (
            <div className="flex h-full items-center justify-center w-full">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">Select a ticket to view or create a new one</p>
                <Button onClick={() => setOpen(true)}>
                  <Plus className="mr-2 h-4 w-4" />
                  Create New Ticket
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Ticket</DialogTitle>
            <DialogDescription>
              Describe your issue and we'll get back to you as soon as possible.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Brief description of your issue"
              />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Provide more details about your issue"
                rows={5}
              />
            </div>
            <Button
              onClick={() => createMutation.mutate()}
              disabled={!title.trim() || !description.trim() || createMutation.isPending}
              className="w-full"
            >
              {createMutation.isPending ? 'Creating...' : 'Create Ticket'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
