import { createFileRoute } from '@tanstack/react-router'
import { useSuspenseQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getUserProfile, updateUserProfile } from '@/serverActions/settings/user-settings.api'
import { saveAddress } from '@/serverActions/address.api'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { User, MapPin, Save, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export const Route = createFileRoute('/_protected/user/settings')({
  head: () => ({ meta: [{ title: 'Account Settings | Flame Nodes' }] }),
  component: UserSettingsPage,
})

function UserSettingsPage() {
  const qc = useQueryClient()
  const { data: response } = useSuspenseQuery({
    queryKey: ['user-profile'],
    queryFn: () => getUserProfile(),
  })

  const user = response?.data
  const ba = user?.billingAddress

  const [form, setForm] = useState({
    firstname: user?.firstname || '',
    lastname: user?.lastname || '',
  })

  const [addressForm, setAddressForm] = useState({
    firstName: ba?.firstName || '',
    lastName: ba?.lastName || '',
    phone: ba?.phone || '',
    address: ba?.address || '',
    city: ba?.city || '',
    state: ba?.state || '',
    zipCode: ba?.zip || '',
    country: ba?.country || 'India',
  })

  const profileMutation = useMutation({
    mutationFn: () => updateUserProfile({ data: form }),
    onSuccess: (res) => {
      if (res.success) {
        qc.invalidateQueries({ queryKey: ['user-profile'] })
        toast.success('Profile updated successfully')
      } else {
        toast.error(res.message || 'Failed to update profile')
      }
    },
    onError: () => toast.error('Failed to update profile'),
  })

  const addressMutation = useMutation({
    mutationFn: () => saveAddress({ data: addressForm }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['user-profile'] })
      toast.success('Billing address saved')
    },
    onError: () => toast.error('Failed to save billing address'),
  })

  const handleInput = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
  }

  const handleAddressInput = (key: keyof typeof addressForm) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddressForm((f) => ({ ...f, [key]: e.target.value }))
  }

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="px-5 py-6 max-w-2xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Account Settings</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage your profile and billing information
          </p>
        </div>

        {/* Account info (read-only) */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <User className="w-4 h-4 text-primary" />
              </div>
              <div>
                <CardTitle className="text-base">Account Info</CardTitle>
                <CardDescription>Your account credentials</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground">Email</Label>
                <div className="h-9 px-3 flex items-center text-sm bg-muted/40 rounded-md border border-border text-muted-foreground">
                  {user?.email}
                </div>
              </div>
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground">Username</Label>
                <div className="h-9 px-3 flex items-center text-sm bg-muted/40 rounded-md border border-border text-muted-foreground">
                  {(user as any)?.username || '—'}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile details */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <User className="w-4 h-4 text-primary" />
              </div>
              <div>
                <CardTitle className="text-base">Personal Details</CardTitle>
                <CardDescription>Your name information</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="firstname" className="text-xs text-muted-foreground">First Name</Label>
                <Input id="firstname" placeholder="John" value={form.firstname} onChange={handleInput('firstname')} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastname" className="text-xs text-muted-foreground">Last Name</Label>
                <Input id="lastname" placeholder="Doe" value={form.lastname} onChange={handleInput('lastname')} />
              </div>
            </div>
            <div className="flex justify-end">
              <Button onClick={() => profileMutation.mutate()} disabled={profileMutation.isPending} className="min-w-[120px]">
                {profileMutation.isPending ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
                Save
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Billing address */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <div>
                <CardTitle className="text-base">Billing Address</CardTitle>
                <CardDescription>This address appears on your invoices</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground">First Name</Label>
                <Input placeholder="John" value={addressForm.firstName} onChange={handleAddressInput('firstName')} />
              </div>
              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground">Last Name</Label>
                <Input placeholder="Doe" value={addressForm.lastName} onChange={handleAddressInput('lastName')} />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-xs text-muted-foreground">Phone</Label>
              <Input placeholder="+91 1234567890" value={addressForm.phone} onChange={handleAddressInput('phone')} />
            </div>
            <div className="space-y-2">
              <Label className="text-xs text-muted-foreground">Street Address</Label>
              <Input placeholder="123 Main Street, Apt 4B" value={addressForm.address} onChange={handleAddressInput('address')} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground">City</Label>
                <Input placeholder="Mumbai" value={addressForm.city} onChange={handleAddressInput('city')} />
              </div>
              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground">State</Label>
                <Input placeholder="Maharashtra" value={addressForm.state} onChange={handleAddressInput('state')} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground">ZIP / Pincode</Label>
                <Input placeholder="400001" value={addressForm.zipCode} onChange={handleAddressInput('zipCode')} />
              </div>
              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground">Country</Label>
                <Input placeholder="India" value={addressForm.country} onChange={handleAddressInput('country')} />
              </div>
            </div>
            <div className="flex justify-end">
              <Button onClick={() => addressMutation.mutate()} disabled={addressMutation.isPending} className="min-w-[120px]">
                {addressMutation.isPending ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
                Save Address
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
