import ImageKit from 'imagekit'

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY || '',
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY || '',
  urlEndpoint: process.env.IMAGEKIT_BASE_URL || '',
})

export async function uploadInvoicePDF(pdfBuffer: Buffer, fileName: string): Promise<string> {
  try {
    const result = await imagekit.upload({
      file: pdfBuffer,
      fileName: fileName,
      folder: '/invoices',
      useUniqueFileName: true,
    })

    return result.url
  } catch (error) {
    console.error('ImageKit upload error:', error)
    throw new Error('Failed to upload invoice PDF')
  }
}
