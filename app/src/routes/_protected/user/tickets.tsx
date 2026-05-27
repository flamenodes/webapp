import { createFileRoute } from '@tanstack/react-router'
import { TicketSidebar } from '@/components/tickets/TicketSidebar'
import { ChatPanel } from '@/components/tickets/ChatPanel'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
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

export const Route = createFileRoute('/_protected/user/tickets')({
  component: TicketsPage,
})

function TicketsPage() {
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null)
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const queryClient = useQueryClient()

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
        <div className="hidden w-80 lg:w-[340px] xl:w-[360px] lg:block">
          <TicketSidebar 
            selectedTicketId={selectedTicketId || undefined}
            onSelectTicket={setSelectedTicketId}
            onCreateTicket={() => setOpen(true)}
            showCreateButton={true}
          />
        </div>
        
        <div className="flex-1">
          {selectedTicketId ? (
            <ChatPanel ticketId={selectedTicketId} isStaffView={false} />
          ) : (
            <div className="flex h-full items-center justify-center">
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
