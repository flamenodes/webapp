import { MediaPicker } from '#/components/imagekit/MediaPicker'
import { Button } from '#/components/ui/button'
import { Checkbox } from '#/components/ui/checkbox'
import { Field } from '#/components/ui/field'
import { Input } from '#/components/ui/input'
import { Label } from '#/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '#/components/ui/select'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '#/components/ui/sheet'
import {
  createProduct,
  updateProduct,
} from '#/serverActions/products/product.api'
import { useQueryClient } from '@tanstack/react-query'
import type React from 'react'
import { useEffect, useMemo, useState } from 'react'
import { toast } from 'sonner'

const PRODUCT_CATEGORIES = [
  { value: 'VPS', label: 'VPS' },
  { value: 'VDS', label: 'VDS' },
  { value: 'WEBHOST', label: 'Web Hosting' },
  { value: 'DISCORD', label: 'Discord' },
  { value: 'DDOS_PROT', label: 'DDoS Protection' },
  { value: 'DEDICATED', label: 'Dedicated' },
  { value: 'MINECRAFT', label: 'Minecraft' },
] as const

type ProductCategory = (typeof PRODUCT_CATEGORIES)[number]['value']

type EditableProduct = {
  id: string
  planName: string
  icon: string | null
  badge: string | null
  category: ProductCategory
  price: number
  inStock: boolean
  deployMode: string
  features: string[]
  specEntries: Array<{ key: string; value: string }>
}

const CreateProductModal = ({
  children,
  product,
}: {
  children: React.ReactNode
  product?: EditableProduct
}) => {
  const [open, setOpen] = useState(false)
  const [productImage, setProductImage] = useState('/assets/gavtar.jpg')

  const [planName, setPlanName] = useState('')
  const [badge, setBadge] = useState('')
  const [category, setCategory] = useState<ProductCategory | undefined>()
  const [deployMode, setDeployMode] = useState('PTERODACTYL')
  const [inStock, setInStock] = useState(true)
  const [price, setPrice] = useState<number>(0)

  const [features, setFeatures] = useState([''])
  const [specs, setSpecs] = useState([{ key: '', value: '' }])

  const [isSubmitting, setIsSubmitting] = useState(false)
  const queryClient = useQueryClient()

  const mode = useMemo(() => (product ? 'edit' : 'create'), [product])

  function resetForm() {
    setProductImage('/assets/gavtar.jpg')
    setPlanName('')
    setBadge('')
    setCategory(undefined)
    setDeployMode('PTERODACTYL')
    setInStock(true)
    setPrice(0)
    setFeatures([''])
    setSpecs([{ key: '', value: '' }])
  }

  useEffect(() => {
    if (!open) return

    if (!product) {
      resetForm()
      return
    }

    setProductImage(product.icon || '/assets/gavtar.jpg')
    setPlanName(product.planName ?? '')
    setBadge(product.badge ?? '')
    setCategory(product.category)
    setDeployMode(product.deployMode ?? 'PTERODACTYL')
    setInStock(Boolean(product.inStock))
    setPrice(Number(product.price ?? 0))
    setFeatures(product.features?.length ? [...product.features, ''] : [''])
    setSpecs(
      product.specEntries?.length
        ? [...product.specEntries.map((s) => ({ key: s.key, value: s.value })), { key: '', value: '' }]
        : [{ key: '', value: '' }],
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, product?.id])

  function updateFeature(index: number, value: string) {
    const updated = [...features]

    updated[index] = value

    if (index === features.length - 1 && value.trim()) {
      updated.push('')
    }

    setFeatures(updated)
  }

  function updateSpec(
    index: number,
    patch: Partial<{
      key: string
      value: string
    }>,
  ) {
    const updated = [...specs]
    updated[index] = {
      ...updated[index],
      ...patch,
    }

    const isLast = index === specs.length - 1
    const hasAny =
      (updated[index].key ?? '').trim() || (updated[index].value ?? '').trim()

    if (isLast && hasAny) {
      updated.push({ key: '', value: '' })
    }

    setSpecs(updated)
  }

  const handleCreate = async () => {
    if (isSubmitting) return

    const trimmedPlanName = planName.trim()
    if (!trimmedPlanName) {
      toast.error('Plan name is required.')
      return
    }

    if (!category) {
      toast.error('Category is required.')
      return
    }

    const normalizedPrice = Number.isFinite(price) ? Math.trunc(price) : 0
    if (normalizedPrice < 0) {
      toast.error('Price must be 0 or more.')
      return
    }

    const cleanedFeatures = features.map((f) => f.trim()).filter(Boolean)
    const cleanedSpecs = specs
      .map((s) => ({
        key: s.key.trim(),
        value: s.value.trim(),
      }))
      .filter((s) => s.key.length > 0)

    setIsSubmitting(true)
    try {
      const data = {
        planName: trimmedPlanName,
        badge: badge.trim() || null,
        category,
        price: normalizedPrice,
        inStock,
        deployMode: deployMode.trim() || 'PTERODACTYL',
        features: cleanedFeatures,
        specs: cleanedSpecs,
        icon: productImage?.trim() || null,
      }

      const res =
        mode === 'edit' && product
          ? await updateProduct({
              data: {
                id: product.id,
                ...data,
              },
            })
          : await createProduct({
              data,
            })

      toast.success(
        mode === 'edit'
          ? `Updated ${res.data.planName}`
          : `Created ${res.data.planName}`,
      )
      await queryClient.invalidateQueries({
        queryKey: ['products'],
      })
      await queryClient.refetchQueries({
        queryKey: ['products'],
      })
      setOpen(false)
      resetForm()
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Failed to create product.'
      toast.error(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>

      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>
            {mode === 'edit' ? 'Edit Product' : 'Product Creation'}
          </SheetTitle>

          <SheetDescription>
            {mode === 'edit' ? 'Update your product.' : 'Create your product.'}
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-6 px-4">
          <div className="flex items-center gap-4">
            <img
              src={productImage}
              alt=""
              className="h-16 w-16 rounded-md object-cover border border-border shrink-0"
            />
            <div className="space-y-1">
              <p className="text-sm font-medium">Product Image</p>
              <MediaPicker
                value={productImage}
                onChange={(url) => setProductImage(url)}
              />
            </div>
          </div>

          <Field>
            <Label>Plan Name</Label>

            <Input
              value={planName}
              onChange={(e) => setPlanName(e.target.value)}
              placeholder="Starter Plan"
            />
          </Field>

          <Field>
            <Label>Badge (optional)</Label>

            <Input
              value={badge}
              onChange={(e) => setBadge(e.target.value)}
              placeholder="Most popular"
            />
          </Field>

          <Field>
            <Label>Category</Label>

            <Select
              value={category}
              onValueChange={(value) => setCategory(value as ProductCategory)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {PRODUCT_CATEGORIES.map((c) => (
                  <SelectItem key={c.value} value={c.value}>
                    {c.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Field>
            <Label>Price</Label>

            <Input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              min={0}
              step={1}
            />
          </Field>

          <Field>
            <Label>Deploy Mode</Label>

            <Input
              value={deployMode}
              onChange={(e) => setDeployMode(e.target.value)}
              placeholder="PTERODACTYL"
            />
          </Field>

          <Field>
            <div className="flex items-center gap-2">
              <Checkbox
                checked={inStock}
                onCheckedChange={(checked) => setInStock(checked === true)}
              />
              <Label>In stock</Label>
            </div>
          </Field>

          <Field>
            <Label>Features</Label>

            <div className="space-y-2">
              {features.map((feature, index) => (
                <Input
                  key={index}
                  value={feature}
                  placeholder={`Feature ${index + 1}`}
                  onChange={(e) => updateFeature(index, e.target.value)}
                />
              ))}
            </div>
          </Field>

          <Field>
            <Label>Specs</Label>

            <div className="space-y-2">
              {specs.map((spec, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={spec.key}
                    placeholder={`Key ${index + 1}`}
                    onChange={(e) =>
                      updateSpec(index, {
                        key: e.target.value,
                      })
                    }
                  />
                  <Input
                    value={spec.value}
                    placeholder="Value"
                    onChange={(e) =>
                      updateSpec(index, {
                        value: e.target.value,
                      })
                    }
                  />
                </div>
              ))}
            </div>
          </Field>

          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setOpen(false)
                resetForm()
              }}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button type="button" onClick={handleCreate} disabled={isSubmitting}>
              {mode === 'edit' ? 'Save Changes' : 'Create Product'}
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default CreateProductModal
