import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '#/components/ui/dialog'
import { Button } from '#/components/ui/button'
import { Input } from '#/components/ui/input'
import { Label } from '#/components/ui/label'
import { Loader2, Save } from 'lucide-react'
import { toast } from 'sonner'
import { getAddress, saveAddress } from '#/serverActions/address.api'

interface Props {
  children: React.ReactNode
}

export default function BillingAddressModal({ children }: Props) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'India',
  })

  useEffect(() => {
    if (!open) return
    setLoading(true)
    getAddress()
      .then((data) => {
        if (data) {
          setForm({
            firstName: data.firstName || '',
            lastName: data.lastName || '',
            phone: data.phone || '',
            address: data.address || '',
            city: data.city || '',
            state: data.state || '',
            zipCode: data.zipCode || '',
            country: data.country || 'India',
          })
        }
      })
      .finally(() => setLoading(false))
  }, [open])

  const handleSave = async () => {
    if (!form.firstName || !form.lastName || !form.phone || !form.address || !form.city || !form.zipCode) {
      toast.error('Please fill in all required fields')
      return
    }
    setSaving(true)
    try {
      await saveAddress({ data: form })
      toast.success('Billing address saved')
      setOpen(false)
    } catch {
      toast.error('Failed to save billing address')
    } finally {
      setSaving(false)
    }
  }

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }))

  return (
    <>
      <span onClick={() => setOpen(true)}>{children}</span>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Billing Address</DialogTitle>
          </DialogHeader>

          {loading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label className="text-xs">First Name *</Label>
                  <Input placeholder="John" value={form.firstName} onChange={set('firstName')} />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs">Last Name *</Label>
                  <Input placeholder="Doe" value={form.lastName} onChange={set('lastName')} />
                </div>
              </div>
              <div className="space-y-1">
                <Label className="text-xs">Phone *</Label>
                <Input placeholder="+91 1234567890" value={form.phone} onChange={set('phone')} />
              </div>
              <div className="space-y-1">
                <Label className="text-xs">Street Address *</Label>
                <Input placeholder="123 Main Street" value={form.address} onChange={set('address')} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label className="text-xs">City *</Label>
                  <Input placeholder="Mumbai" value={form.city} onChange={set('city')} />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs">State</Label>
                  <Input placeholder="Maharashtra" value={form.state} onChange={set('state')} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label className="text-xs">ZIP / Pincode *</Label>
                  <Input placeholder="400001" value={form.zipCode} onChange={set('zipCode')} />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs">Country</Label>
                  <Input placeholder="India" value={form.country} onChange={set('country')} />
                </div>
              </div>
              <Button onClick={handleSave} disabled={saving} className="w-full">
                {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
                Save Address
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
