"use client"

import {
  DataTable,
  type DataTableFilterConfig,
} from '#/components/ui/data-table'
import { Button } from '#/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '#/components/ui/dropdown-menu'
import {
  getProducts,
  createProduct,
  deleteProduct,
  deleteProducts,
  reorderProducts,
} from '#/serverActions/products/product.api'
import { useQueryClient } from '@tanstack/react-query'
import { MoreHorizontal } from 'lucide-react'
import { toast } from 'sonner'
import CreateProductModal from './CreateProductModal'

type ProductRecord = Awaited<
  ReturnType<typeof getProducts>
>[number]

const productFilters: DataTableFilterConfig<ProductRecord>[] = [
  {
    columnId: 'category',
    title: 'Category',
    options: [
      { label: 'Minecraft', value: 'MINECRAFT' },
      { label: 'VPS', value: 'VPS' },
      { label: 'VDS', value: 'VDS' },
      { label: 'WebHost', value: 'WEBHOST' },
      { label: 'Discord', value: 'DISCORD' },
      { label: 'DDoS Protection', value: 'DDOS_PROT' },
      { label: 'Dedicated', value: 'DEDICATED' },
    ],
  },
  {
    columnId: 'inStock',
    title: 'Stock',
    options: [
      { label: 'In stock', value: 'true' },
      { label: 'Out of stock', value: 'false' },
    ],
  },
]

function ProductsDataTable({
  data,
}: {
  data: ProductRecord[]
}) {
  const queryClient = useQueryClient()

  return (
    <DataTable
      columns={[
        {
          accessorKey: 'planName',
          header: 'Product',
          cell: ({ row }) => {
            const product = row.original
            return (
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-md bg-muted">
                  {product.icon ? (
                    <img
                      src={product.icon}
                      alt={product.planName}
                      className="h-10 w-10 object-cover"
                      loading="lazy"
                    />
                  ) : null}
                </div>
                <div className="min-w-0">
                  <div className="truncate font-medium">{product.planName}</div>
                  <div className="truncate text-xs text-muted-foreground">
                    {product.badge ?? ''}
                  </div>
                </div>
              </div>
            )
          },
        },
        { accessorKey: 'category', header: 'Category' },
        {
          accessorKey: 'price',
          header: 'Price',
          cell: ({ row }) => row.original.price.toLocaleString(),
        },
        {
          accessorKey: 'inStock',
          header: 'Stock',
          cell: ({ row }) => (row.original.inStock ? 'In stock' : 'Out'),
        },
        {
          id: 'features',
          header: 'Features',
          cell: ({ row }) => row.original.features.length,
        },
        {
          id: 'specs',
          header: 'Specs',
          cell: ({ row }) => row.original.specEntries.length,
        },
        { accessorKey: 'sortOrder', header: 'Order' },
        {
          accessorKey: 'createdAt',
          header: 'Created',
          cell: ({ row }) => new Date(row.original.createdAt).toLocaleDateString(),
        },
      ]}
      data={data}
      searchColumnId="planName"
      searchPlaceholder="Search by plan name..."
      filters={productFilters}
      emptyMessage="No products found."
      getRowId={(row) => row.id}
      enablePagination={false}
      enableRowDragging
      enableRowSelection
      renderRowActions={(row) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              className="text-muted-foreground hover:text-foreground"
              aria-label={`Actions for ${row.planName}`}
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <CreateProductModal
              product={{
                id: row.id,
                planName: row.planName,
                icon: row.icon ?? null,
                badge: row.badge ?? null,
                category: row.category as any,
                price: row.price,
                inStock: row.inStock,
                deployMode: row.deployMode,
                features: row.features ?? [],
                specEntries:
                  row.specEntries?.map((s) => ({ key: s.key, value: s.value })) ??
                  [],
              }}
            >
              <DropdownMenuItem>Edit</DropdownMenuItem>
            </CreateProductModal>
            <DropdownMenuItem
              onSelect={async () => {
                if (!window.confirm(`Recreate ${row.planName}?`)) return

                try {
                  const currentOrder = data.map((p) => p.id)
                  const targetIndex = currentOrder.indexOf(row.id)

                  const created = await createProduct({
                    data: {
                      planName: row.planName,
                      icon: row.icon ?? null,
                      badge: row.badge ?? null,
                      category: row.category as any,
                      price: row.price,
                      inStock: row.inStock,
                      deployMode: row.deployMode,
                      features: row.features ?? [],
                      specs:
                        row.specEntries?.map((s) => ({
                          key: s.key,
                          value: s.value,
                        })) ?? [],
                    },
                  })

                  await deleteProduct({ data: { id: row.id } })

                  if (targetIndex >= 0) {
                    const orderedIds = currentOrder
                      .map((id) => (id === row.id ? created.data.id : id))
                      .filter((id, index, array) => array.indexOf(id) === index)

                    await reorderProducts({
                      data: { orderedIds },
                    })
                  }

                  toast.success('Recreated product.')
                  await queryClient.invalidateQueries({ queryKey: ['products'] })
                } catch (error) {
                  toast.error(
                    error instanceof Error
                      ? error.message
                      : 'Failed to recreate product.',
                  )
                  await queryClient.invalidateQueries({ queryKey: ['products'] })
                }
              }}
            >
              Recreate
            </DropdownMenuItem>
            <DropdownMenuItem
              variant="destructive"
              onSelect={async () => {
                if (!window.confirm(`Delete ${row.planName}?`)) return
                try {
                  await deleteProduct({ data: { id: row.id } })
                  toast.success('Deleted product.')
                  await queryClient.invalidateQueries({ queryKey: ['products'] })
                } catch (error) {
                  toast.error(
                    error instanceof Error
                      ? error.message
                      : 'Failed to delete product.',
                  )
                }
              }}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
      renderBulkActions={({ selectedIds, clearSelection }) => (
        <Button
          type="button"
          variant="destructive"
          size="sm"
          onClick={async () => {
            if (
              !window.confirm(
                `Delete ${selectedIds.length} product${selectedIds.length === 1 ? '' : 's'}?`,
              )
            ) {
              return
            }

            try {
              await deleteProducts({
                data: { ids: selectedIds },
              })

              toast.success('Deleted selected products.')
              clearSelection()
              await queryClient.invalidateQueries({
                queryKey: ['products'],
              })
            } catch (error) {
              toast.error(
                error instanceof Error
                  ? error.message
                  : 'Failed to delete selected products.',
              )
            }
          }}
        >
          Delete selected
        </Button>
      )}
      onRowReorder={async ({ orderedIds }) => {
        try {
          await reorderProducts({
            data: { orderedIds },
          })

          toast.success(
            'Product order updated.',
          )

          await queryClient.invalidateQueries({
            queryKey: ['products'],
          })
        } catch (error) {
          toast.error(
            error instanceof Error
              ? error.message
              : 'Failed to reorder products.',
          )

          await queryClient.invalidateQueries({
            queryKey: ['products'],
          })

          throw error
        }
      }}
    />
  )
}

export default ProductsDataTable
