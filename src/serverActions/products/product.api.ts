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

const deleteProductSchema = z.object({
  id: z.string(),
})

const deleteProductsSchema = z.object({
  ids: z.array(z.string()).min(1),
})

const getProductSchema = z.object({
  id: z.string(),
})

const createProductSchema = z.object({
  planName: z.string().trim().min(1),
  icon: z.string().trim().nullable().optional(),
  badge: z.string().trim().nullable().optional(),
  category: productCategorySchema,
  price: z.number().int().nonnegative(),
  billingPeriod: billingPeriodSchema.default('MONTHLY'),
  features: z.array(z.string()).default([]),
  inStock: z.boolean().default(true),
  specs: z.array(productSpecInputSchema).default([]),
  deployMode: z.string().trim().default('PTERODACTYL'),
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

const productInclude = {
  features: {
    orderBy: {
      sortOrder: 'asc',
    },
  },
  specEntries: {
    orderBy: {
      sortOrder: 'asc',
    },
  },
} satisfies Prisma.ProductInclude

type ProductWithRelations = Prisma.ProductGetPayload<{
  include: typeof productInclude
}>

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

function serializeProduct(product: ProductWithRelations) {
  return {
    id: product.id,
    planName: product.planName,
    icon: product.icon,
    badge: product.badge,
    sortOrder: product.sortOrder,
    category: product.category,
    price: product.price,
    billingPeriod: product.billingPeriod,
    inStock: product.inStock,
    discountId: product.discountId,
    deployMode: product.deployMode,
    features: product.features.map(
      (feature) => feature.label,
    ),
    specs: Object.fromEntries(
      product.specEntries.map((spec) => [
        spec.key,
        spec.value,
      ]),
    ),
    specEntries: product.specEntries.map(
      (spec) => ({
        id: spec.id,
        key: spec.key,
        value: spec.value,
        sortOrder: spec.sortOrder,
      }),
    ),
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
          billingPeriod: data.billingPeriod,
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
          specEntries: {
            create: normalizedSpecs.map(
              (spec, index) => ({
                key: spec.key,
                value: spec.value,
                sortOrder: index,
              }),
            ),
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
          billingPeriod: data.billingPeriod,
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
          specEntries: {
            deleteMany: {},
            create: normalizedSpecs.map(
              (spec, index) => ({
                key: spec.key,
                value: spec.value,
                sortOrder: index,
              }),
            ),
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
