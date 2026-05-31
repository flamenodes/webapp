import { useState, useRef } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { listImageKitFiles } from '#/serverActions/imagekit/list-files'
import { getImageKitAuth } from '#/serverActions/imagekit/get-imagekit-auth'
import { upload } from '@imagekit/react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '#/components/ui/dialog'
import { Button } from '#/components/ui/button'
import { Input } from '#/components/ui/input'
import { Check, Upload, Loader2, Images, CloudUpload } from 'lucide-react'

interface MediaPickerProps {
  value?: string
  onChange: (url: string) => void
  trigger?: React.ReactNode
}

export function MediaPicker({ value, onChange, trigger }: MediaPickerProps) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(value ?? '')
  const [uploading, setUploading] = useState(false)
  const [dragOver, setDragOver] = useState(false)
  const [search, setSearch] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)
  const qc = useQueryClient()

  const { data: files = [], isLoading } = useQuery({
    queryKey: ['imagekit-files'],
    queryFn: () => listImageKitFiles(),
    enabled: open,
  })

  const filtered = files.filter((f) => f.name.toLowerCase().includes(search.toLowerCase()))

  async function uploadFile(file: File) {
    setUploading(true)
    try {
      const auth = await getImageKitAuth()
      const res = await upload({
        file,
        fileName: file.name,
        useUniqueFileName: true,
        token: auth.token,
        expire: auth.expire,
        signature: auth.signature,
        publicKey: auth.publicKey,
      })
      qc.invalidateQueries({ queryKey: ['imagekit-files'] })
      setSelected(res.url)
      onChange(res.url)
      setOpen(false)
    } finally {
      setUploading(false)
      if (fileRef.current) fileRef.current.value = ''
    }
  }

  function handleFileInput(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) uploadFile(file)
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    setDragOver(false)
    const file = e.dataTransfer.files?.[0]
    if (file && file.type.startsWith('image/')) uploadFile(file)
  }

  function handleSelect(url: string) {
    setSelected(url)
    onChange(url)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ?? (
          <Button type="button" variant="outline" size="sm" className="gap-2">
            <Images className="w-4 h-4" />
            {value ? 'Change Image' : 'Pick from Media'}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Media Library</DialogTitle>
        </DialogHeader>

        {/* Drag-and-drop upload zone */}
        <div
          onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          className={`flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed py-4 transition-colors cursor-pointer ${
            dragOver ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50 hover:bg-muted/30'
          }`}
          onClick={() => fileRef.current?.click()}
        >
          {uploading ? (
            <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
          ) : (
            <CloudUpload className={`w-6 h-6 ${dragOver ? 'text-primary' : 'text-muted-foreground'}`} />
          )}
          <p className="text-xs text-muted-foreground">
            {uploading ? 'Uploading…' : 'Drag & drop an image here, or click to select from computer'}
          </p>
          <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFileInput} />
        </div>

        {/* Search + library */}
        <div className="flex items-center gap-2">
          <Input placeholder="Search library…" value={search} onChange={(e) => setSearch(e.target.value)} className="flex-1 h-8 text-sm" />
          <span className="text-xs text-muted-foreground shrink-0">{filtered.length} file{filtered.length !== 1 ? 's' : ''}</span>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center h-40">
            <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-40 text-muted-foreground gap-2">
            <Images className="w-8 h-8 opacity-30" />
            <p className="text-sm">{search ? 'No results' : 'No files uploaded yet'}</p>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-2 max-h-72 overflow-y-auto pr-1">
            {filtered.map((f) => {
              const isSelected = selected === f.url
              return (
                <button
                  key={f.fileId}
                  type="button"
                  onClick={() => handleSelect(f.url)}
                  className={`relative group rounded-lg border overflow-hidden aspect-square transition-colors ${
                    isSelected ? 'border-primary ring-2 ring-primary/30' : 'border-border hover:border-primary/50'
                  }`}
                >
                  <img src={f.thumbnailUrl || f.url} alt={f.name} className="w-full h-full object-cover" />
                  {isSelected && (
                    <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-primary" strokeWidth={3} />
                    </div>
                  )}
                  <div className="absolute bottom-0 inset-x-0 bg-background/80 px-1.5 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-xs truncate">{f.name}</p>
                  </div>
                </button>
              )
            })}
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
