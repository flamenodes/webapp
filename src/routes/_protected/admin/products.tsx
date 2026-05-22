import CreateProductModal from '#/components/admin/products/CreateProductModal'
import { Button } from '#/components/ui/button'
import { DataTable } from '#/components/ui/data-table'
import { getProducts } from '#/serverActions/products/product.api'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import type { ColumnDef } from '@tanstack/react-table'
import { PlusIcon } from 'lucide-react'

export const Route = createFileRoute('/_protected/admin/products')({
  component: RouteComponent,
})

type ProductRow = Awaited<ReturnType<typeof getProducts>>[number]

const columns: ColumnDef<ProductRow>[] = [
  {
    id: 'product',
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
  {
    accessorKey: 'category',
    header: 'Category',
  },
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
  {
    accessorKey: 'sortOrder',
    header: 'Order',
  },
  {
    accessorKey: 'createdAt',
    header: 'Created',
    cell: ({ row }) => new Date(row.original.createdAt).toLocaleDateString(),
  },
]

function RouteComponent() {
  const { data } = useSuspenseQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  })

  return (
    <main className="mx-auto w-full max-w-7xl p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Products</h1>

          <p className="text-muted-foreground">
            Manage and organize all products.
          </p>
        </div>

        <CreateProductModal>
          <Button>
            <PlusIcon className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </CreateProductModal>
      </div>

      <DataTable columns={columns} data={data} />
    </main>
  )
}
