import { createFileRoute } from '@tanstack/react-router'
import { useSuspenseQuery, useMutation, useQueryClient, useQuery } from '@tanstack/react-query'
import { getRazorpayConfig, updateRazorpayConfig, getWebSettingsToggle, updateWebSettingsToggle } from '@/serverActions/settings/admin-settings.api'
import { getPteroNodes } from '@/serverActions/pterodactyl/nodes'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import {
  CreditCard, Eye, EyeOff, Save, Loader2,
  Building2, MapPin, FlaskConical, Globe, Server, RefreshCw, Settings2
} from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export const Route = createFileRoute('/_protected/admin/settings')({
  head: () => ({ meta: [{ title: 'Settings | Flame Nodes Admin' }] }),
  component: AdminSettingsPage,
})

function AdminSettingsPage() {
  const qc = useQueryClient()
  const { data: response } = useSuspenseQuery({
    queryKey: ['admin-razorpay-config'],
    queryFn: () => getRazorpayConfig(),
  })

  const config = response?.data

  const [mode, setMode] = useState<'test' | 'production'>(config?.mode as 'test' | 'production' || 'test')
  const [showTestSecret, setShowTestSecret] = useState(false)
  const [showProdSecret, setShowProdSecret] = useState(false)

  const [form, setForm] = useState({
    testKeyId: config?.testKeyId || '',
    testKeySecret: config?.testKeySecret || '',
    prodKeyId: config?.prodKeyId || '',
    prodKeySecret: config?.prodKeySecret || '',
    gstin: config?.gstin || '',
    companyName: config?.companyName || 'Flame Nodes',
    companyAddress: config?.companyAddress || '',
    companyCity: config?.companyCity || '',
    companyZip: config?.companyZip || '',
    companyCountry: config?.companyCountry || 'India',
    pteroNodeMode: (config?.pteroNodeMode as 'balance' | 'specific') || 'balance',
    pteroNodeId: config?.pteroNodeId ?? null as number | null,
  })

  const { data: pteroNodes, isLoading: loadingNodes, refetch: refetchNodes } = useQuery({
    queryKey: ['ptero-nodes-settings'],
    queryFn: () => getPteroNodes(),
    staleTime: 30_000,
  })

  const { data: webSettingsEnabled } = useSuspenseQuery({
    queryKey: ['web-settings-toggle'],
    queryFn: () => getWebSettingsToggle(),
  })

  const [webSettingsToggle, setWebSettingsToggle] = useState(webSettingsEnabled ?? false)

  const toggleMutation = useMutation({
    mutationFn: (enabled: boolean) => updateWebSettingsToggle({ data: enabled }),
    onSuccess: (res) => {
      if (res.success) {
        qc.invalidateQueries({ queryKey: ['web-settings-toggle'] })
        qc.invalidateQueries({ queryKey: ['headerSettings'] })
        qc.invalidateQueries({ queryKey: ['footerSettings'] })
        toast.success('Web settings toggle updated')
      } else {
        toast.error(res.message || 'Failed to update toggle')
      }
    },
    onError: () => toast.error('Failed to update toggle'),
  })

  const mutation = useMutation({
    mutationFn: () => updateRazorpayConfig({
      data: {
        mode,
        ...form,
        pteroNodeId: form.pteroNodeMode === 'specific' ? form.pteroNodeId : null,
      },
    }),
    onSuccess: (res) => {
      if (res.success) {
        qc.invalidateQueries({ queryKey: ['admin-razorpay-config'] })
        toast.success('Settings saved successfully')
      } else {
        toast.error(res.message || 'Failed to save settings')
      }
    },
    onError: () => toast.error('Failed to save settings'),
  })

  const handleInput = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
  }

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="px-5 py-6 max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Configure payment gateway and company information
          </p>
        </div>

        {/* Web Settings Toggle */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Settings2 className="w-4 h-4 text-primary" />
              </div>
              <div>
                <CardTitle className="text-base">Dynamic Web Settings</CardTitle>
                <CardDescription>Enable or disable database-driven header and footer content</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="space-y-0.5">
                <Label className="text-sm font-medium">Enable Web Settings</Label>
                <p className="text-xs text-muted-foreground">
                  When enabled, header and footer content will be loaded from the database.
                  When disabled, hardcoded default content will be shown.
                </p>
              </div>
              <Switch
                checked={webSettingsToggle}
                onCheckedChange={(checked) => {
                  setWebSettingsToggle(checked)
                  toggleMutation.mutate(checked)
                }}
                disabled={toggleMutation.isPending}
              />
            </div>
          </CardContent>
        </Card>

        {/* Mode toggle */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <CreditCard className="w-4 h-4 text-primary" />
              </div>
              <div>
                <CardTitle className="text-base">Razorpay Integration</CardTitle>
                <CardDescription>Manage your payment gateway API keys</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Test / Production toggle */}
            <div>
              <Label className="text-sm font-medium mb-3 block">Payment Mode</Label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setMode('test')}
                  className={[
                    'flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-medium transition-all',
                    mode === 'test'
                      ? 'bg-amber-500/10 border-amber-500/40 text-amber-600 dark:text-amber-400'
                      : 'border-border text-muted-foreground hover:border-border/80',
                  ].join(' ')}
                >
                  <FlaskConical className="w-4 h-4" />
                  Test Mode
                  {mode === 'test' && (
                    <Badge variant="outline" className="ml-1 h-5 text-[10px] bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400">
                      Active
                    </Badge>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setMode('production')}
                  className={[
                    'flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-medium transition-all',
                    mode === 'production'
                      ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-600 dark:text-emerald-400'
                      : 'border-border text-muted-foreground hover:border-border/80',
                  ].join(' ')}
                >
                  <Globe className="w-4 h-4" />
                  Production Mode
                  {mode === 'production' && (
                    <Badge variant="outline" className="ml-1 h-5 text-[10px] bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                      Active
                    </Badge>
                  )}
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                {mode === 'test'
                  ? 'Test mode uses test keys. Payments are simulated and no real money is charged.'
                  : 'Production mode uses live keys. Real payments will be processed.'}
              </p>
            </div>

            {/* Test Keys */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <FlaskConical className="w-4 h-4 text-amber-500" />
                <h3 className="text-sm font-semibold text-amber-600 dark:text-amber-400">Test Keys</h3>
              </div>
              <div className="grid gap-4 pl-6">
                <div className="space-y-2">
                  <Label htmlFor="testKeyId" className="text-xs text-muted-foreground">Test Key ID</Label>
                  <Input
                    id="testKeyId"
                    placeholder="rzp_test_xxxxxxxxxxxxxxxxxx"
                    value={form.testKeyId}
                    onChange={handleInput('testKeyId')}
                    className="font-mono text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="testKeySecret" className="text-xs text-muted-foreground">Test Key Secret</Label>
                  <div className="relative">
                    <Input
                      id="testKeySecret"
                      type={showTestSecret ? 'text' : 'password'}
                      placeholder="••••••••••••••••••••"
                      value={form.testKeySecret}
                      onChange={handleInput('testKeySecret')}
                      className="font-mono text-sm pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowTestSecret((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showTestSecret ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Production Keys */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-emerald-500" />
                <h3 className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">Production Keys</h3>
              </div>
              <div className="grid gap-4 pl-6">
                <div className="space-y-2">
                  <Label htmlFor="prodKeyId" className="text-xs text-muted-foreground">Live Key ID</Label>
                  <Input
                    id="prodKeyId"
                    placeholder="rzp_live_xxxxxxxxxxxxxxxxxx"
                    value={form.prodKeyId}
                    onChange={handleInput('prodKeyId')}
                    className="font-mono text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="prodKeySecret" className="text-xs text-muted-foreground">Live Key Secret</Label>
                  <div className="relative">
                    <Input
                      id="prodKeySecret"
                      type={showProdSecret ? 'text' : 'password'}
                      placeholder="••••••••••••••••••••"
                      value={form.prodKeySecret}
                      onChange={handleInput('prodKeySecret')}
                      className="font-mono text-sm pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowProdSecret((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showProdSecret ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* GSTIN */}
            <div className="space-y-2 pt-2 border-t border-border">
              <Label htmlFor="gstin" className="text-sm font-medium">GSTIN</Label>
              <Input
                id="gstin"
                placeholder="22AAAAA0000A1Z5"
                value={form.gstin}
                onChange={handleInput('gstin')}
                className="font-mono text-sm max-w-sm"
              />
              <p className="text-xs text-muted-foreground">
                Your GST Identification Number. This appears on all invoices.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Company details */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Building2 className="w-4 h-4 text-primary" />
              </div>
              <div>
                <CardTitle className="text-base">Company Details</CardTitle>
                <CardDescription>This information appears on all customer invoices</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="companyName" className="text-xs text-muted-foreground">Company Name</Label>
              <Input
                id="companyName"
                placeholder="Flame Nodes"
                value={form.companyName}
                onChange={handleInput('companyName')}
              />
            </div>

            <div className="flex items-center gap-2 pt-1">
              <MapPin className="w-4 h-4 text-muted-foreground shrink-0" />
              <span className="text-sm text-muted-foreground font-medium">Company Address</span>
            </div>

            <div className="grid gap-4 pl-6">
              <div className="space-y-2">
                <Label htmlFor="companyAddress" className="text-xs text-muted-foreground">Street Address</Label>
                <Input
                  id="companyAddress"
                  placeholder="123 Main Street"
                  value={form.companyAddress}
                  onChange={handleInput('companyAddress')}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="companyCity" className="text-xs text-muted-foreground">City</Label>
                  <Input
                    id="companyCity"
                    placeholder="Mumbai"
                    value={form.companyCity}
                    onChange={handleInput('companyCity')}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companyZip" className="text-xs text-muted-foreground">ZIP / Pincode</Label>
                  <Input
                    id="companyZip"
                    placeholder="400001"
                    value={form.companyZip}
                    onChange={handleInput('companyZip')}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="companyCountry" className="text-xs text-muted-foreground">Country</Label>
                <Input
                  id="companyCountry"
                  placeholder="India"
                  value={form.companyCountry}
                  onChange={handleInput('companyCountry')}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pterodactyl Node Settings */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Server className="w-4 h-4 text-primary" />
              </div>
              <div>
                <CardTitle className="text-base">Pterodactyl Node Deployment</CardTitle>
                <CardDescription>Choose how new servers are assigned to nodes</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label className="text-sm font-medium mb-3 block">Deployment Mode</Label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setForm((f) => ({ ...f, pteroNodeMode: 'balance' }))}
                  className={[
                    'flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-medium transition-all',
                    form.pteroNodeMode === 'balance'
                      ? 'bg-primary/10 border-primary/40 text-primary'
                      : 'border-border text-muted-foreground hover:border-border/80',
                  ].join(' ')}
                >
                  Auto Balance
                  {form.pteroNodeMode === 'balance' && (
                    <Badge variant="outline" className="ml-1 h-5 text-[10px] bg-primary/10 border-primary/30 text-primary">Active</Badge>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setForm((f) => ({ ...f, pteroNodeMode: 'specific' }))}
                  className={[
                    'flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-medium transition-all',
                    form.pteroNodeMode === 'specific'
                      ? 'bg-primary/10 border-primary/40 text-primary'
                      : 'border-border text-muted-foreground hover:border-border/80',
                  ].join(' ')}
                >
                  Specific Node
                  {form.pteroNodeMode === 'specific' && (
                    <Badge variant="outline" className="ml-1 h-5 text-[10px] bg-primary/10 border-primary/30 text-primary">Active</Badge>
                  )}
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                {form.pteroNodeMode === 'balance'
                  ? 'New servers are placed on the node with the most free allocations.'
                  : 'New servers are always placed on the selected node.'}
              </p>
            </div>

            {form.pteroNodeMode === 'specific' && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-medium">Target Node</Label>
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    className="h-7 text-xs"
                    onClick={() => refetchNodes()}
                    disabled={loadingNodes}
                  >
                    {loadingNodes ? <Loader2 className="w-3 h-3 animate-spin" /> : <RefreshCw className="w-3 h-3" />}
                  </Button>
                </div>
                {loadingNodes ? (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Loader2 className="w-3.5 h-3.5 animate-spin" /> Loading nodes…
                  </div>
                ) : pteroNodes && pteroNodes.length > 0 ? (
                  <div className="grid gap-2">
                    {pteroNodes.map((node) => (
                      <button
                        key={node.id}
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, pteroNodeId: node.id }))}
                        className={[
                          'flex items-center justify-between p-3 rounded-lg border text-left transition-all',
                          form.pteroNodeId === node.id
                            ? 'bg-primary/10 border-primary/40'
                            : 'border-border hover:border-border/80',
                        ].join(' ')}
                      >
                        <div>
                          <p className="text-sm font-medium">{node.name}</p>
                          <p className="text-xs text-muted-foreground font-mono">{node.fqdn}</p>
                        </div>
                        <div className="text-right text-xs text-muted-foreground">
                          <p>{(node.memory / 1024).toFixed(0)} GB RAM</p>
                          <p>{(node.disk / 1024).toFixed(0)} GB Disk</p>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">No nodes found. Make sure your Pterodactyl API is configured.</p>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Save button */}
        <div className="flex justify-end">
          <Button
            onClick={() => mutation.mutate()}
            disabled={mutation.isPending}
            className="min-w-[120px]"
          >
            {mutation.isPending ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <Save className="w-4 h-4 mr-2" />
            )}
            Save Settings
          </Button>
        </div>
      </div>
    </main>
  )
}
