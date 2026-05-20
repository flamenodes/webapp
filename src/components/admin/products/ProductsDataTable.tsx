"use client"

import {
  DataTable,
  type DataTableFilterConfig,
} from '#/components/ui/data-table'
import { Button } from '#/components/ui/button'
import {
  getProducts,
  deleteProducts,
  reorderProducts,
} from '#/serverActions/products'
import { useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { productColumns } from './product-columns'

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
      columns={productColumns}
      data={data}
      searchColumnId="planName"
      searchPlaceholder="Search by plan name..."
      filters={productFilters}
      emptyMessage="No products found."
      getRowId={(row) => row.id}
      enablePagination={false}
      enableRowDragging
      enableRowSelection
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
