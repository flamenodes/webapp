import { createFileRoute } from '@tanstack/react-router'
import { useSuspenseQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAllAnnouncements, createAnnouncement, updateAnnouncement, deleteAnnouncement } from '@/serverActions/notifications.api'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Field, FieldLabel, FieldDescription } from '@/components/ui/field'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { Plus, Loader2, Trash2, Edit, Megaphone } from 'lucide-react'
import { toast } from 'sonner'

export const Route = createFileRoute('/_protected/admin/announcements')({
  head: () => ({ meta: [{ title: 'Announcements | Flame Nodes Admin' }] }),
  component: AnnouncementsPage,
})

const typeConfig = {
  INFO: { label: 'Info', color: 'bg-blue-500/10 text-blue-600 border-blue-500/20' },
  SUCCESS: { label: 'Success', color: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20' },
  WARNING: { label: 'Warning', color: 'bg-orange-500/10 text-orange-600 border-orange-500/20' },
  ERROR: { label: 'Error', color: 'bg-red-500/10 text-red-600 border-red-500/20' },
  MAINTENANCE: { label: 'Maintenance', color: 'bg-purple-500/10 text-purple-600 border-purple-500/20' },
}

function AnnouncementsPage() {
  const qc = useQueryClient()
  const { data: announcements } = useSuspenseQuery({
    queryKey: ['admin-announcements'],
    queryFn: () => getAllAnnouncements(),
  })

  const [open, setOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState({
    title: '',
    message: '',
    type: 'INFO' as 'INFO' | 'WARNING' | 'SUCCESS' | 'ERROR' | 'MAINTENANCE',
    priority: '0',
    link: '',
    expiresAt: '',
  })

  const createMutation = useMutation({
    mutationFn: (data: typeof form) => createAnnouncement({ data: { ...data, priority: Number(data.priority) } }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['admin-announcements'] })
      qc.invalidateQueries({ queryKey: ['active-announcements'] })
      setOpen(false)
      resetForm()
      toast.success('Announcement created')
    },
    onError: (error: any) => toast.error(error.message || 'Failed to create'),
  })

  const updateMutation = useMutation({
    mutationFn: (data: any) => updateAnnouncement({ data }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['admin-announcements'] })
      qc.invalidateQueries({ queryKey: ['active-announcements'] })
      toast.success('Updated')
    },
  })

  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteAnnouncement({ data: { id } }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['admin-announcements'] })
      qc.invalidateQueries({ queryKey: ['active-announcements'] })
      toast.success('Deleted')
    },
  })

  const resetForm = () => {
    setForm({ title: '', message: '', type: 'INFO', priority: '0', link: '', expiresAt: '' })
    setEditingId(null)
  }

  return (
    <main className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Announcements</h1>
          <p className="text-sm text-muted-foreground mt-0.5">System-wide announcements</p>
        </div>
        <Sheet open={open} onOpenChange={(o) => { setOpen(o); if (!o) resetForm() }}>
          <SheetTrigger asChild>
            <Button size="sm"><Plus className="w-4 h-4 mr-2" />Create</Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <SheetHeader><SheetTitle>{editingId ? 'Edit' : 'Create'} Announcement</SheetTitle></SheetHeader>
            <div className="space-y-6 mt-6">
              <Field>
                <FieldLabel>Title <span className="text-destructive">*</span></FieldLabel>
                <Input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} placeholder="Important Update" />
                <FieldDescription>Short, attention-grabbing title</FieldDescription>
              </Field>

              <Field>
                <FieldLabel>Message <span className="text-destructive">*</span></FieldLabel>
                <Textarea value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))} rows={4} placeholder="Describe the announcement in detail..." />
                <FieldDescription>Detailed announcement message</FieldDescription>
              </Field>

              <Field>
                <FieldLabel>Type</FieldLabel>
                <Select value={form.type} onValueChange={(v: any) => setForm((f) => ({ ...f, type: v }))}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {Object.entries(typeConfig).map(([key, { label }]) => (
                      <SelectItem key={key} value={key}>{label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FieldDescription>Visual style and urgency level</FieldDescription>
              </Field>

              <Field>
                <FieldLabel>Priority</FieldLabel>
                <Input type="number" value={form.priority} onChange={(e) => setForm((f) => ({ ...f, priority: e.target.value }))} placeholder="0" />
                <FieldDescription>Higher numbers appear first (0-100)</FieldDescription>
              </Field>

              <Field>
                <FieldLabel>Link (optional)</FieldLabel>
                <Input value={form.link} onChange={(e) => setForm((f) => ({ ...f, link: e.target.value }))} placeholder="https://example.com" />
                <FieldDescription>Optional URL for "Learn more" button</FieldDescription>
              </Field>

              <Field>
                <FieldLabel>Expires At (optional)</FieldLabel>
                <Input type="datetime-local" value={form.expiresAt} onChange={(e) => setForm((f) => ({ ...f, expiresAt: e.target.value }))} />
                <FieldDescription>Auto-hide after this date</FieldDescription>
              </Field>

              <Button 
                className="w-full" 
                onClick={() => editingId ? updateMutation.mutate({ id: editingId, ...form, priority: Number(form.priority) }) : createMutation.mutate(form)} 
                disabled={!form.title || !form.message || createMutation.isPending || updateMutation.isPending}
              >
                {(createMutation.isPending || updateMutation.isPending) && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                {editingId ? 'Update' : 'Create'} Announcement
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="space-y-3">
        {announcements.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 border border-dashed rounded-xl">
            <Megaphone className="w-12 h-12 text-muted-foreground mb-3" />
            <p className="text-sm text-muted-foreground">No announcements</p>
          </div>
        ) : (
          announcements.map((a: any) => (
            <div key={a.id} className="border rounded-xl p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className={typeConfig[a.type as keyof typeof typeConfig].color}>
                      {typeConfig[a.type as keyof typeof typeConfig].label}
                    </Badge>
                    {!a.active && <Badge variant="outline">Inactive</Badge>}
                  </div>
                  <h3 className="font-semibold text-sm">{a.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{a.message}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Switch checked={a.active} onCheckedChange={(c) => updateMutation.mutate({ id: a.id, active: c })} />
                  <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => { setForm({ title: a.title, message: a.message, type: a.type, priority: a.priority.toString(), link: a.link || '', expiresAt: a.expiresAt ? new Date(a.expiresAt).toISOString().slice(0, 16) : '' }); setEditingId(a.id); setOpen(true) }}>
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="h-8 w-8 text-destructive" onClick={() => confirm('Delete?') && deleteMutation.mutate(a.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  )
}
