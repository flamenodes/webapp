import { prisma } from '#/db'
import type { Prisma } from '#/generated/prisma/client'
import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { auth } from '@/lib/auth'
import { z } from 'zod'

const productCategorySchema = z.enum([
  'VPS',
  'VDS',
  'WEBHOST',
  'DISCORD',
  'DDOS_PROT',
  'DEDICATED',
  'MINECRAFT',
])

const billingPeriodSchema = z.enum([
  'HOURLY',
  'DAILY',
  'MONTHLY',
  'QUARTERLY',
  'SEMIANNUALLY',
  'YEARLY',
])

const productSpecInputSchema = z.object({
  key: z.string().trim().min(1),
  value: z.string().trim(),
})

const billingOptionInputSchema = z.object({
  billingPeriod: billingPeriodSchema,
  price: z.number().int().nonnegative(),
})

const deleteProductSchema = z.object({
  id: z.string(),
})

const deleteProductsSchema = z.object({
  ids: z.array(z.string()).min(1),
})

const getProductSchema = z.object({
  id: z.string(),
})

const getProductsByCategorySchema = z.object({
  category: productCategorySchema,
})

const createProductSchema = z.object({
  planName: z.string().trim().min(1),
  icon: z.string().trim().nullable().optional(),
  badge: z.string().trim().nullable().optional(),
  category: productCategorySchema,
  price: z.number().int().nonnegative(),
  features: z.array(z.string()).default([]),
  inStock: z.boolean().default(true),
  specs: z.array(productSpecInputSchema).default([]),
  deployMode: z.string().trim().default('PTERODACTYL'),
  billingOptions: z.array(billingOptionInputSchema).default([]),
})

const updateProductSchema = createProductSchema.extend({
  id: z.string(),
})

const reorderProductSchema = z.object({
  id: z.string(),
  direction: z.enum(['up', 'down']),
})

const reorderProductsSchema = z.object({
  orderedIds: z.array(z.string()).min(1),
})

const recreateProductSchema = z.object({
  id: z.string(),
})

const upsertBillingOptionsSchema = z.object({
  productId: z.string(),
  billingOptions: z.array(billingOptionInputSchema),
})

const deleteBillingOptionSchema = z.object({
  id: z.string(),
})

const upsertCategoryBillingConfigSchema = z.object({
  category: productCategorySchema,
  billingPeriods: z.array(billingPeriodSchema),
})

const getCategoryBillingConfigsSchema = z.object({
  category: productCategorySchema.optional(),
})

const productInclude = {
  features: {
    orderBy: {
      sortOrder: 'asc',
    },
  },
  billingOptions: true,
} satisfies Prisma.ProductInclude

type ProductWithRelations = Prisma.ProductGetPayload<{
  include: typeof productInclude
}>

type ProductSpecEntryJson = {
  key: string
  value: string
  sortOrder?: number
  id?: string
}

function normalizeSpecs(
  specs: Array<{ key: string; value: string }>,
) {
  return specs
    .map((spec) => ({
      key: spec.key.trim(),
      value: spec.value.trim(),
    }))
    .filter((spec) => spec.key.length > 0)
}

function normalizeFeatures(features: string[]) {
  return features
    .map((feature) => feature.trim())
    .filter(Boolean)
}

function coerceSpecEntries(
  specs: unknown,
): Array<{ key: string; value: string; sortOrder: number }> {
  if (Array.isArray(specs)) {
    return specs
      .filter(
        (s): s is ProductSpecEntryJson =>
          !!s &&
          typeof s === 'object' &&
          typeof (s as any).key === 'string' &&
          typeof (s as any).value === 'string',
      )
      .map((s, index) => ({
        key: s.key,
        value: s.value,
        sortOrder:
          typeof s.sortOrder === 'number'
            ? s.sortOrder
            : index,
      }))
      .sort((a, b) => a.sortOrder - b.sortOrder)
  }

  if (specs && typeof specs === 'object') {
    return Object.entries(specs as Record<string, unknown>)
      .filter((entry) => typeof entry[1] === 'string')
      .map(([key, value], index) => ({
        key,
        value: value as string,
        sortOrder: index,
      }))
  }

  return []
}

function serializeProduct(product: ProductWithRelations) {
  const specEntries = coerceSpecEntries(product.specs)
  return {
    id: product.id,
    planName: product.planName,
    icon: product.icon,
    badge: product.badge,
    sortOrder: product.sortOrder,
    category: product.category,
    price: product.price,
    inStock: product.inStock,
    discountId: product.discountId,
    deployMode: product.deployMode,
    features: product.features.map(
      (feature) => feature.label,
    ),
    specs: Object.fromEntries(
      specEntries.map((spec) => [spec.key, spec.value]),
    ),
    specEntries: specEntries.map((spec, index) => ({
      id: `${product.id}:${index}`,
      key: spec.key,
      value: spec.value,
      sortOrder: spec.sortOrder,
    })),
    billingOptions: (product.billingOptions || []).map((option) => ({
      id: option.id,
      billingPeriod: option.billingPeriod,
      price: option.price,
    })),
    createdAt:
      product.createdAt.toISOString(),
    updatedAt:
      product.updatedAt.toISOString(),
  }
}

async function requireSessionUser() {
  const headers = getRequestHeaders()
  const session =
    await auth.api.getSession({
      headers,
    })

  if (!session?.user) {
    throw new Error('Unauthorized')
  }

  return session.user
}

export const createProduct = createServerFn({
  method: 'POST',
})
  .inputValidator(createProductSchema)
  .handler(async ({ data }) => {
    await requireSessionUser()

    const normalizedFeatures =
      normalizeFeatures(data.features)
    const normalizedSpecs = normalizeSpecs(
      data.specs,
    )

    const lastProduct =
      await prisma.product.findFirst({
        orderBy: [
          { sortOrder: 'desc' },
          { createdAt: 'desc' },
        ],
      })

    const product =
      await prisma.product.create({
        data: {
          planName: data.planName.trim(),
          icon: data.icon?.trim() || null,
          badge: data.badge?.trim() || null,
          sortOrder:
            (lastProduct?.sortOrder ?? -1) + 1,
          category: data.category,
          price: data.price,
          inStock: data.inStock,
          deployMode:
            data.deployMode.trim() ||
            'PTERODACTYL',
          features: {
            create:
              normalizedFeatures.map(
                (
                  feature,
                  index,
                ) => ({
                  label: feature,
                  sortOrder: index,
                }),
              ),
          },
          specs: normalizedSpecs.map((spec, index) => ({
            key: spec.key,
            value: spec.value,
            sortOrder: index,
          })),
          billingOptions: {
            create: data.billingOptions.map((option) => ({
              billingPeriod: option.billingPeriod,
              price: option.price,
            })),
          },
        },
        include: productInclude,
      })

    return {
      success: true,
      message: 'Product created successfully.',
      data: serializeProduct(product),
    }
  })

export const getProducts = createServerFn({
  method: 'GET',
}).handler(async () => {
  const products =
    await prisma.product.findMany({
      include: productInclude,
      orderBy: [
        { sortOrder: 'asc' },
        { createdAt: 'desc' },
      ],
    })

  return products.map(serializeProduct)
})

export const getProductsByCategory = createServerFn({
  method: 'GET',
})
  .inputValidator(getProductsByCategorySchema)
  .handler(async ({ data }) => {
    const products =
      await prisma.product.findMany({
        include: productInclude,
        where: {
          category: data.category,
        },
        orderBy: [
          { sortOrder: 'asc' },
          { createdAt: 'desc' },
        ],
      })

    return products.map(serializeProduct)
  })

export const getProduct = createServerFn({
  method: 'GET',
})
  .inputValidator(getProductSchema)
  .handler(async ({ data }) => {
    const product =
      await prisma.product.findUnique({
        where: { id: data.id },
        include: productInclude,
      })

    if (!product) {
      throw new Error('Product not found')
    }

    return serializeProduct(product)
  })

export const updateProduct = createServerFn({
  method: 'POST',
})
  .inputValidator(updateProductSchema)
  .handler(async ({ data }) => {
    await requireSessionUser()

    const normalizedFeatures =
      normalizeFeatures(data.features)
    const normalizedSpecs = normalizeSpecs(
      data.specs,
    )

    const existingProduct =
      await prisma.product.findUnique({
        where: { id: data.id },
        include: productInclude,
      })

    if (!existingProduct) {
      throw new Error('Product not found')
    }

    const product =
      await prisma.product.update({
        where: { id: data.id },
        data: {
          planName: data.planName.trim(),
          icon: data.icon?.trim() || null,
          badge: data.badge?.trim() || null,
          category: data.category,
          price: data.price,
          inStock: data.inStock,
          deployMode:
            data.deployMode.trim() ||
            'PTERODACTYL',
          features: {
            deleteMany: {},
            create:
              normalizedFeatures.map(
                (
                  feature,
                  index,
                ) => ({
                  label: feature,
                  sortOrder: index,
                }),
              ),
          },
          specs: normalizedSpecs.map((spec, index) => ({
            key: spec.key,
            value: spec.value,
            sortOrder: index,
          })),
          billingOptions: {
            deleteMany: {},
            create: data.billingOptions.map((option) => ({
              billingPeriod: option.billingPeriod,
              price: option.price,
            })),
          },
        },
        include: productInclude,
      })

    return {
      success: true,
      message: 'Product updated successfully.',
      data: serializeProduct(product),
    }
  })

export const deleteProduct = createServerFn({
  method: 'POST',
})
  .inputValidator(deleteProductSchema)
  .handler(async ({ data }) => {
    await requireSessionUser()

    const deleted =
      await prisma.product.delete({
        where: { id: data.id },
      })

    return {
      success: true,
      message: 'Product deleted successfully.',
      data: deleted,
    }
  })

export const deleteProducts = createServerFn({
  method: 'POST',
})
  .inputValidator(deleteProductsSchema)
  .handler(async ({ data }) => {
    await requireSessionUser()

    const res = await prisma.product.deleteMany({
      where: {
        id: {
          in: data.ids,
        },
      },
    })

    return {
      success: true,
      message: 'Products deleted successfully.',
      data: {
        count: res.count,
      },
    }
  })

export const recreateProduct = createServerFn({
  method: 'POST',
})
  .inputValidator(recreateProductSchema)
  .handler(async ({ data }) => {
    await requireSessionUser()

    function getNextCopyName(planName: string) {
      const trimmed = planName.trim()
      const match = trimmed.match(/^(.*) Copy(?: (\d+))?$/)

      if (!match) {
        return `${trimmed} Copy`
      }

      const root = (match[1] ?? '').trim()
      const nextNumber = match[2]
        ? Number(match[2]) + 1
        : 2

      return `${root} Copy ${nextNumber}`
    }

    const existingProduct =
      await prisma.product.findUnique({
        where: { id: data.id },
        include: productInclude,
      })

    if (!existingProduct) {
      throw new Error('Product not found')
    }

    const products =
      await prisma.product.findMany({
        select: { id: true },
        orderBy: [
          { sortOrder: 'asc' },
          { createdAt: 'desc' },
        ],
      })

    const currentIndex = products.findIndex(
      (product) => product.id === data.id,
    )

    if (currentIndex === -1) {
      throw new Error('Product not found')
    }

    const specEntries = coerceSpecEntries(
      existingProduct.specs,
    )

    const recreated = await prisma.$transaction(
      async (tx) => {
        const created = await tx.product.create({
          data: {
            planName: getNextCopyName(existingProduct.planName),
            icon: existingProduct.icon,
            badge: existingProduct.badge,
            sortOrder: existingProduct.sortOrder,
            category: existingProduct.category,
            price: existingProduct.price,
            inStock: existingProduct.inStock,
            deployMode: existingProduct.deployMode,
            features: {
              create: existingProduct.features.map(
                (feature, index) => ({
                  label: feature.label,
                  sortOrder: index,
                }),
              ),
            },
            specs: specEntries.map((spec, index) => ({
              key: spec.key,
              value: spec.value,
              sortOrder: index,
            })),
            billingOptions: {
              create: existingProduct.billingOptions.map((option) => ({
                billingPeriod: option.billingPeriod,
                price: option.price,
              })),
            },
          },
          include: productInclude,
        })

        const orderedIds = products.map((p) => p.id)
        orderedIds.splice(currentIndex + 1, 0, created.id)

        await Promise.all(
          orderedIds.map((id, index) =>
            tx.product.update({
              where: { id },
              data: { sortOrder: index },
            }),
          ),
        )

        return created
      },
    )

    return {
      success: true,
      message: 'Product recreated successfully.',
      data: serializeProduct(recreated),
    }
  })

export const reorderProduct = createServerFn({
  method: 'POST',
})
  .inputValidator(reorderProductSchema)
  .handler(async ({ data }) => {
    await requireSessionUser()

    const products =
      await prisma.product.findMany({
        orderBy: [
          { sortOrder: 'asc' },
          { createdAt: 'desc' },
        ],
      })

    const currentIndex = products.findIndex(
      (product) => product.id === data.id,
    )

    if (currentIndex === -1) {
      throw new Error('Product not found')
    }

    const targetIndex =
      data.direction === 'up'
        ? currentIndex - 1
        : currentIndex + 1

    if (
      targetIndex < 0 ||
      targetIndex >= products.length
    ) {
      return {
        success: true,
        message: 'Product order unchanged.',
      }
    }

    const reorderedProducts = [...products]
    const [movedProduct] =
      reorderedProducts.splice(currentIndex, 1)

    reorderedProducts.splice(
      targetIndex,
      0,
      movedProduct,
    )

    await prisma.$transaction(
      reorderedProducts.map((product, index) =>
        prisma.product.update({
          where: { id: product.id },
          data: {
            sortOrder: index,
          },
        }),
      ),
    )

    return {
      success: true,
      message: 'Product order updated successfully.',
    }
  })

export const reorderProducts = createServerFn({
  method: 'POST',
})
  .inputValidator(reorderProductsSchema)
  .handler(async ({ data }) => {
    await requireSessionUser()

    const existingProducts =
      await prisma.product.findMany({
        select: {
          id: true,
        },
        orderBy: [
          { sortOrder: 'asc' },
          { createdAt: 'desc' },
        ],
      })

    if (
      existingProducts.length !==
      data.orderedIds.length
    ) {
      throw new Error(
        'Product reorder payload is out of date.',
      )
    }

    const existingIds = new Set(
      existingProducts.map((product) => product.id),
    )

    for (const id of data.orderedIds) {
      if (!existingIds.has(id)) {
        throw new Error('Invalid product reorder payload.')
      }
    }

    await prisma.$transaction(
      data.orderedIds.map((id, index) =>
        prisma.product.update({
          where: { id },
          data: {
            sortOrder: index,
          },
        }),
      ),
    )

    return {
      success: true,
      message: 'Product order updated successfully.',
    }
  })
