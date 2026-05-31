import { createFileRoute } from '@tanstack/react-router';
import { useSuspenseQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getUserProfile, updateUserProfile } from '@/serverActions/settings/user-settings.api';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, MapPin, Save, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
export const Route = createFileRoute('/_protected/user/settings')({
    head: () => ({ meta: [{ title: 'Account Settings | Flame Nodes' }] }),
    component: UserSettingsPage,
});
function UserSettingsPage() {
    const qc = useQueryClient();
    const { data: response } = useSuspenseQuery({
        queryKey: ['user-profile'],
        queryFn: () => getUserProfile(),
    });
    const user = response?.data;
    const [form, setForm] = useState({
        firstname: user?.firstname || '',
        lastname: user?.lastname || '',
        address: user?.address || '',
        city: user?.city || '',
        zip: user?.zip || '',
        country: user?.country || 'India',
    });
    const mutation = useMutation({
        mutationFn: () => updateUserProfile({ data: form }),
        onSuccess: (res) => {
            if (res.success) {
                qc.invalidateQueries({ queryKey: ['user-profile'] });
                toast.success('Profile updated successfully');
            }
            else {
                toast.error(res.message || 'Failed to update profile');
            }
        },
        onError: () => toast.error('Failed to update profile'),
    });
    const handleInput = (key) => (e) => {
        setForm((f) => ({ ...f, [key]: e.target.value }));
    };
    return (<main className="flex-1 overflow-y-auto">
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
                <User className="w-4 h-4 text-primary"/>
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
                  {user?.username || '—'}
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
                <User className="w-4 h-4 text-primary"/>
              </div>
              <div>
                <CardTitle className="text-base">Personal Details</CardTitle>
                <CardDescription>Your name and contact information</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="firstname" className="text-xs text-muted-foreground">First Name</Label>
                <Input id="firstname" placeholder="John" value={form.firstname} onChange={handleInput('firstname')}/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastname" className="text-xs text-muted-foreground">Last Name</Label>
                <Input id="lastname" placeholder="Doe" value={form.lastname} onChange={handleInput('lastname')}/>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Billing address */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-primary"/>
              </div>
              <div>
                <CardTitle className="text-base">Billing Address</CardTitle>
                <CardDescription>This address appears on your invoices</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="address" className="text-xs text-muted-foreground">Street Address</Label>
              <Input id="address" placeholder="123 Main Street, Apt 4B" value={form.address} onChange={handleInput('address')}/>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="city" className="text-xs text-muted-foreground">City</Label>
                <Input id="city" placeholder="Mumbai" value={form.city} onChange={handleInput('city')}/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="zip" className="text-xs text-muted-foreground">ZIP / Pincode</Label>
                <Input id="zip" placeholder="400001" value={form.zip} onChange={handleInput('zip')}/>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="country" className="text-xs text-muted-foreground">Country</Label>
              <Input id="country" placeholder="India" value={form.country} onChange={handleInput('country')}/>
            </div>
          </CardContent>
        </Card>

        {/* Save button */}
        <div className="flex justify-end">
          <Button onClick={() => mutation.mutate()} disabled={mutation.isPending} className="min-w-[120px]">
            {mutation.isPending ? (<Loader2 className="w-4 h-4 mr-2 animate-spin"/>) : (<Save className="w-4 h-4 mr-2"/>)}
            Save Changes
          </Button>
        </div>
      </div>
    </main>);
}
//# sourceMappingURL=settings.js.map