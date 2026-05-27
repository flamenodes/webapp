import { getImageKitAuth } from '#/serverActions/imagekit/get-imagekit-auth'
import {
  ImageKitAbortError,
  ImageKitInvalidRequestError,
  ImageKitServerError,
  ImageKitUploadNetworkError,
  upload,
} from '@imagekit/react'
import { useRef, useState } from 'react'
import { Field, FieldDescription, FieldLabel } from '../ui/field'
import { Input } from '../ui/input'

type ImageUploadProps = {
  label?: string
  description?: string

  acceptedFileTypes?: string
  maxFileSizeMB?: number

  useUniqueFileName?: boolean
  fileName?: string

  onUpload?: (fileUrl: string) => void
}

export function FileUpload({
  label = 'Upload File',
  description = 'Select a file to upload.',
  acceptedFileTypes = 'image/*',
  maxFileSizeMB = 5,
  useUniqueFileName = true,
  fileName,
  onUpload,
}: ImageUploadProps) {
  const [progress, setProgress] = useState(0)
  const [uploadedUrl, setUploadedUrl] = useState('')
  const [isUploading, setIsUploading] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)
  const abortController = useRef(new AbortController())

  async function authenticator() {
    return await getImageKitAuth()
  }

  async function handleUpload() {
    const fileInput = fileInputRef.current

    if (!fileInput?.files?.length) {
      alert('Please select a file')
      return
    }

    const file = fileInput.files[0]

    if (file.size > maxFileSizeMB * 1024 * 1024) {
      alert(`Max file size is ${maxFileSizeMB}MB`)
      return
    }

    setIsUploading(true)

    try {
      const { signature, expire, token, publicKey } =
        await authenticator()

      const response = await upload({
        file,
        token,
        expire,
        signature,
        publicKey,

        fileName:
          useUniqueFileName
            ? fileName ?? file.name
            : file.name,

        useUniqueFileName,

        abortSignal:
          abortController.current.signal,

        onProgress: (event) => {
          setProgress(
            (event.loaded / event.total) * 100,
          )
        },
      })

      setUploadedUrl(response.url)

      onUpload?.(response.url)

      console.log('Uploaded:', response.url)
    } catch (error) {
      if (error instanceof ImageKitAbortError) {
        console.error(error.reason)
      } else if (
        error instanceof ImageKitInvalidRequestError
      ) {
        console.error(error.message)
      } else if (
        error instanceof ImageKitUploadNetworkError
      ) {
        console.error(error.message)
      } else if (
        error instanceof ImageKitServerError
      ) {
        console.error(error.message)
      } else {
        console.error(error)
      }
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>

      <Input
        ref={fileInputRef}
        type="file"
        accept={acceptedFileTypes}
        onChange={handleUpload}
      />

      <FieldDescription>
        {description}
      </FieldDescription>

      {isUploading && (
        <p>
          Uploading...
          {progress.toFixed(0)}%
        </p>
      )}

      {uploadedUrl && (
        <div className="space-y-2">
          <p>Uploaded ✓</p>

          <a
            href={uploadedUrl}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 underline"
          >
            View File
          </a>
        </div>
      )}
    </Field>
  )
}
