import CreateProductModal from '#/components/admin/products/CreateProductModal'
import { Button } from '#/components/ui/button'
import { getProducts } from '#/serverActions/products/product.api'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { PlusIcon } from 'lucide-react'

export const Route = createFileRoute('/_protected/admin/products')({
  component: RouteComponent,
})

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
    </main>
  )
}
