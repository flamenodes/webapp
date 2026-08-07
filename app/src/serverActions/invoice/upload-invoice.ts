import ImageKit from "@imagekit/nodejs"

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY || '',
})

export async function uploadInvoicePDF(pdfBuffer: Buffer, fileName: string): Promise<string> {
  const file = new File([new Uint8Array(pdfBuffer)], fileName, { type: 'application/pdf' })

  const result = await imagekit.files.upload({
    file,
    fileName,
    folder: '/invoices',
    useUniqueFileName: true,
  })

  if (!result.url) throw new Error('ImageKit upload did not return a URL')
  return result.url
}
