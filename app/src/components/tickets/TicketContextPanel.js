import { ExternalLink, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { UserProfileModal } from '@/components/tickets/UserProfileModal';
import { getUserProfile } from '@/serverActions/tickets/tickets.api';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
export function TicketContextPanel({ ticket }) {
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const getUserProfileMutation = useMutation({
        mutationFn: (userId) => getUserProfile({ data: { userId } }),
        onSuccess: (data) => {
            setSelectedUser(data.user);
            setShowProfileModal(true);
        },
    });
    const getPriorityColor = () => {
        switch (ticket.priority) {
            case 'high':
                return 'bg-primary/10 text-primary border-primary/20';
            case 'medium':
                return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
            case 'low':
                return 'bg-muted text-muted-foreground border-border';
        }
    };
    return (<>
      <ScrollArea className="h-full">
        <div className="flex flex-col gap-4 p-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Ticket Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">ID</span>
              <span className="font-medium">{ticket.ticketId}</span>
            </div>
            <Separator />
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Status</span>
              <Badge variant="outline" className={`capitalize ${ticket.status === 'open'
            ? 'bg-primary/10 text-primary border-primary/20'
            : ticket.status === 'pending'
                ? 'bg-orange-500/10 text-orange-500 border-orange-500/20'
                : 'bg-muted text-muted-foreground border-border'}`}>
                {ticket.status}
              </Badge>
            </div>
            <Separator />
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Priority</span>
              <Badge variant="outline" className={`capitalize ${getPriorityColor()}`}>
                {ticket.priority}
              </Badge>
            </div>
            <Separator />
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Category</span>
              <span className="font-medium">{ticket.category}</span>
            </div>
            <Separator />
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Created</span>
              <span className="font-medium">{ticket.created}</span>
            </div>
            <Separator />
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Updated</span>
              <span className="font-medium">{ticket.lastUpdated}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              User Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-muted-foreground"/>
              <span className="text-muted-foreground">{ticket.user.email}</span>
            </div>
            <Separator />
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Plan</span>
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                {ticket.user.plan}
              </Badge>
            </div>
            <Separator />
            <Button variant="outline" size="sm" className="w-full gap-2" onClick={() => getUserProfileMutation.mutate(ticket.user.id)} disabled={getUserProfileMutation.isPending}>
              View Profile
              <ExternalLink className="h-3 w-3"/>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Ticket Notes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {ticket.notes && ticket.notes.length > 0 ? (ticket.notes.map((note) => (<div key={note.id} className="space-y-1 rounded-lg bg-muted p-3">
                  <p className="text-sm leading-relaxed">{note.content}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{note.author}</span>
                    <span>{note.timestamp}</span>
                  </div>
                </div>))) : (<p className="text-sm text-muted-foreground">No notes yet</p>)}
          </CardContent>
        </Card>
      </div>
    </ScrollArea>
    <UserProfileModal open={showProfileModal} onOpenChange={setShowProfileModal} user={selectedUser}/>
    </>);
}
//# sourceMappingURL=TicketContextPanel.js.map