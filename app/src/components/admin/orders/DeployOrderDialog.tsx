import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Loader2, ExternalLink, Eye } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { RenderDeploymentMessage } from '@/lib/parse-deployment-message'

interface DeployOrderDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  order: {
    id: string
    items: Array<{
      product: {
        id: string
        planName: string
        deployMode: string
        specs?: Record<string, any>
      }
    }>
  } | null
  onDeployPterodactyl: (orderId: string) => void
  onDeployCustom: (data: {
    orderId: string
    serverName: string
    panelUrl?: string
    username?: string
    password?: string
    message: string
  }) => void
  isDeploying: boolean
}

export function DeployOrderDialog({
  open,
  onOpenChange,
  order,
  onDeployPterodactyl,
  onDeployCustom,
  isDeploying,
}: DeployOrderDialogProps) {
  const [customForm, setCustomForm] = useState({
    serverName: '',
    panelUrl: '',
    username: '',
    password: '',
    message: '',
  })

  if (!order) return null

  const product = order.items[0]?.product
  const deployMode = product?.deployMode || 'CUSTOM'
  const specs = product?.specs || {}

  const handleDeploy = () => {
    if (deployMode === 'PTERODACTYL') {
      onDeployPterodactyl(order.id)
    } else {
      onDeployCustom({
        orderId: order.id,
        serverName: customForm.serverName || product?.planName || 'Server',
        panelUrl: customForm.panelUrl || undefined,
        username: customForm.username || undefined,
        password: customForm.password || undefined,
        message: customForm.message,
      })
    }
  }

  const isFormValid =
    deployMode === 'PTERODACTYL' || (deployMode === 'CUSTOM' && customForm.message.trim().length > 0)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Deploy Order</DialogTitle>
          <DialogDescription>
            Order #{order.id.slice(0, 8).toUpperCase()} - {product?.planName}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Deploy Mode Badge */}
          <div className="flex items-center gap-2">
            <Label>Deploy Mode:</Label>
            <Badge variant={deployMode === 'PTERODACTYL' ? 'default' : 'secondary'}>
              {deployMode}
            </Badge>
          </div>

          {/* Product Specifications */}
          {Object.keys(specs).length > 0 && (
            <div className="space-y-2">
              <Label>Product Specifications</Label>
              <div className="bg-muted rounded-lg p-4 space-y-2">
                {Object.entries(specs).map(([key, value]) => {
                  // Convert value to string, handle objects/arrays
                  let displayValue = value
                  if (typeof value === 'object' && value !== null) {
                    displayValue = JSON.stringify(value)
                  } else if (value === null || value === undefined) {
                    displayValue = 'N/A'
                  }
                  
                  return (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-muted-foreground capitalize">{key.replace(/_/g, ' ')}:</span>
                      <span className="font-medium">{String(displayValue)}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {deployMode === 'PTERODACTYL' ? (
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <p className="text-sm text-blue-600 dark:text-blue-400">
                This order will be automatically deployed to Pterodactyl via queue.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                <p className="text-sm text-orange-600 dark:text-orange-400">
                  Manual deployment required. Fill in the server details below.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="serverName">Server Name</Label>
                <Input
                  id="serverName"
                  placeholder={product?.planName || 'My Server'}
                  value={customForm.serverName}
                  onChange={(e) => setCustomForm((f) => ({ ...f, serverName: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="panelUrl">Panel URL (Optional)</Label>
                <Input
                  id="panelUrl"
                  type="url"
                  placeholder="https://panel.example.com"
                  value={customForm.panelUrl}
                  onChange={(e) => setCustomForm((f) => ({ ...f, panelUrl: e.target.value }))}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username (Optional)</Label>
                  <Input
                    id="username"
                    placeholder="admin"
                    value={customForm.username}
                    onChange={(e) => setCustomForm((f) => ({ ...f, username: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password (Optional)</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={customForm.password}
                    onChange={(e) => setCustomForm((f) => ({ ...f, password: e.target.value }))}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  Delivery Message <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  placeholder="Your server has been deployed! Access it here: :button:Panel Link:https://panel.example.com"
                  value={customForm.message}
                  onChange={(e) => setCustomForm((f) => ({ ...f, message: e.target.value }))}
                  rows={5}
                  className="font-mono text-sm"
                />
                <p className="text-xs text-muted-foreground">
                  Use <code className="bg-muted px-1 py-0.5 rounded">:button:Label:URL</code> to add clickable buttons.
                  Example: <code className="bg-muted px-1 py-0.5 rounded">:button:Panel:https://panel.example.com</code>
                </p>
                
                {/* Message Preview */}
                {customForm.message && (
                  <div className="mt-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Eye className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs font-medium text-muted-foreground">Preview</span>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-3 border">
                      <RenderDeploymentMessage message={customForm.message} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)} disabled={isDeploying}>
            Cancel
          </Button>
          <Button onClick={handleDeploy} disabled={!isFormValid || isDeploying}>
            {isDeploying ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Deploying...
              </>
            ) : (
              <>
                {deployMode === 'PTERODACTYL' ? 'Deploy to Queue' : 'Deploy & Notify'}
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
