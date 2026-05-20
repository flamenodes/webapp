import { FileUpload } from '#/components/imagekit/upload'
import { Field } from '#/components/ui/field'
import { Input } from '#/components/ui/input'
import { Label } from '#/components/ui/label'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '#/components/ui/sheet'
import { createProduct } from '#/serverActions/products/product.api'
import type React from 'react'
import { useState } from 'react'
import { toast } from 'sonner'

const CreateProductModal = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [productImage, setProductImage] =
    useState('/assets/gavtar.jpg')

  const [planName, setPlanName] = useState('')
  const [price, setPrice] = useState(0)
  const [icon, setIcon] = useState('')
  const [featureCategory, setFeatureCategory] =
    useState('')

  const [features, setFeatures] = useState([''])

  function updateFeature(
    index: number,
    value: string,
  ) {
    const updated = [...features]

    updated[index] = value

    if (
      index === features.length - 1 &&
      value.trim()
    ) {
      updated.push('')
    }

    setFeatures(updated)
  }

  const handleCreate = async () => {
    const cleanedFeatures =
      features.filter(Boolean)

    const res = await createProduct({
      data: {
        planName,
        price,
        features: cleanedFeatures,
        featureCategory,
        icon: productImage,
      },
    })

    toast.success(
      `Created ${res.data.planName}`,
    )
  }

  return (
    <Sheet>
      <SheetTrigger>
        {children}
      </SheetTrigger>

      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>
            Product Creation
          </SheetTitle>

          <SheetDescription>
            Create your product.
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-6 px-4">

          <div className="flex gap-6">
            <img
              src={productImage}
              alt=""
              className="w-20 rounded-md"
            />

            <FileUpload
              label="Product Image"
              description=""
              onUpload={(url) => {
                setProductImage(url)
              }}
            />
          </div>

          <Field>
            <Label>Plan Name</Label>

            <Input
              value={planName}
              onChange={(e) =>
                setPlanName(
                  e.target.value,
                )
              }
              placeholder="Starter Plan"
            />
          </Field>

          <Field>
            <Label>Price</Label>

            <Input
              type="number"
              value={price}
              onChange={(e) =>
                setPrice(
                  Number(
                    e.target.value,
                  ),
                )
              }
            />
          </Field>

          <Field>
            <Label>
              Feature Category
            </Label>

            <Input
              value={featureCategory}
              onChange={(e) =>
                setFeatureCategory(
                  e.target.value,
                )
              }
            />
          </Field>

          <Field>
            <Label>Features</Label>

            <div className="space-y-2">
              {features.map(
                (
                  feature,
                  index,
                ) => (
                  <Input
                    key={index}
                    value={feature}
                    placeholder={`Feature ${
                      index + 1
                    }`}
                    onChange={(e) =>
                      updateFeature(
                        index,
                        e.target.value,
                      )
                    }
                  />
                ),
              )}
            </div>
          </Field>

          <button
            onClick={handleCreate}
            className="rounded-md bg-black px-4 py-2 text-white"
          >
            Create Product
          </button>

        </div>
      </SheetContent>
    </Sheet>
  )
}

export default CreateProductModal
