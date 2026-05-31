import { useState } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { resetPteroPassword, getPteroUrl } from '#/serverActions/pterodactyl/reset-password'
import { Button } from '#/components/ui/button'
import { Copy, Check, ExternalLink, Gamepad2, RefreshCw } from 'lucide-react'
import { toast } from 'sonner'

export function GamePanelCard({ email }: { email: string }) {
  const [password, setPassword] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const { data: pteroUrl } = useQuery({
    queryKey: ['ptero-url'],
    queryFn: () => getPteroUrl(),
  })

  const { mutate, isPending } = useMutation({
    mutationFn: () => resetPteroPassword(),
    onSuccess: (data) => {
      setPassword(data.password)
      toast.success('Password generated!')
    },
    onError: () => toast.error('Failed to generate password'),
  })

  function copyPassword() {
    if (!password) return
    navigator.clipboard.writeText(password)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-xl border border-border bg-card p-5 space-y-4">
      <div className="flex items-center gap-2">
        <Gamepad2 className="w-5 h-5 text-primary" />
        <h3 className="font-semibold text-base">Game Panel</h3>
      </div>

      <div className="space-y-1">
        <p className="text-xs text-muted-foreground">Login Email</p>
        <p className="text-sm font-medium font-mono bg-muted rounded px-3 py-2 select-all">{email}</p>
      </div>

      {password && (
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground">Generated Password</p>
          <div className="flex items-center gap-2">
            <p className="flex-1 text-sm font-mono bg-muted rounded px-3 py-2 select-all break-all">{password}</p>
            <Button type="button" variant="outline" size="icon" onClick={copyPassword} className="shrink-0">
              {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">Save this password — it won't be shown again.</p>
        </div>
      )}

      <div className="flex gap-2 pt-1">
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="gap-2"
          onClick={() => mutate()}
          disabled={isPending}
        >
          <RefreshCw className={`w-4 h-4 ${isPending ? 'animate-spin' : ''}`} />
          {password ? 'Regenerate' : 'Generate Password'}
        </Button>
        {pteroUrl && (
          <Button type="button" size="sm" className="gap-2" asChild>
            <a href={pteroUrl} target="_blank" rel="noreferrer">
              <ExternalLink className="w-4 h-4" />
              Go to Panel
            </a>
          </Button>
        )}
      </div>
    </div>
  )
}
