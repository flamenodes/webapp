import { createServerFn } from '@tanstack/react-start'
import { imagekit } from '@/lib/imagekit'

export const listImageKitFiles = createServerFn({ method: 'GET' }).handler(async () => {
  const result = await imagekit.listFiles({ limit: 100, fileType: 'image' })
  return result.map((f: any) => ({ fileId: f.fileId, name: f.name, url: f.url, thumbnailUrl: f.thumbnailUrl }))
})
