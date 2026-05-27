import { createFileRoute } from '@tanstack/react-router'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getCustomers } from '#/serverActions/customers/customers.api'
import CustomersDataTable from '#/components/admin/customers/CustomersDataTable'
import CreateCustomerModal from '#/components/admin/customers/CreateCustomerModal'
import { Button } from '#/components/ui/button'
import { UserPlus } from 'lucide-react'

export const Route = createFileRoute('/_protected/admin/customers')({
  component: CustomersPage,
})

function CustomersPage() {
  const { data } = useSuspenseQuery({
    queryKey: ['customers'],
    queryFn: getCustomers,
  })

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Customers</h1>
          <p className="text-sm text-muted-foreground">
            Manage customer accounts and information
          </p>
        </div>
        <CreateCustomerModal>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Create Customer
          </Button>
        </CreateCustomerModal>
      </div>

      <CustomersDataTable data={data} />
    </div>
  )
}
