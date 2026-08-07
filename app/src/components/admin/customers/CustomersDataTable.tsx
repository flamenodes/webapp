"use client"

import * as React from 'react'
import { DataTable } from '#/components/ui/data-table'
import { Button } from '#/components/ui/button'
import { Badge } from '#/components/ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '#/components/ui/dropdown-menu'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '#/components/ui/alert-dialog'
import {
  getCustomers,
  deleteCustomer,
  deleteCustomers,
} from '#/serverActions/customers/customers.api'
import { useQueryClient } from '@tanstack/react-query'
import { MoreHorizontal, FileSpreadsheet, Trash2 } from 'lucide-react'
import { toast } from 'sonner'
import CreateCustomerModal from './CreateCustomerModal'
import { exportToCSV } from '#/lib/export-utils'

type CustomerRecord = Awaited<ReturnType<typeof getCustomers>>[number]

function CustomersDataTable({ data }: { data: CustomerRecord[] }) {
  const queryClient = useQueryClient()
  const [deleteTarget, setDeleteTarget] = React.useState<CustomerRecord | null>(null)
  const [bulkDeleteOpen, setBulkDeleteOpen] = React.useState(false)

  const customers = Array.isArray(data) ? data : []

  const handleExportToExcel = (customers: CustomerRecord[]) => {
    const exportData = customers.map((customer) => ({
      'Name': customer.name,
      'Username': customer.username,
      'Email': customer.email,
      'Client ID': customer.clientId,
      'Email Verified': customer.emailVerified ? 'Yes' : 'No',
      'Status': customer.banned ? 'Banned' : 'Active',
      'Orders': customer._count.orders,
      'Servers': customer._count.servers,
      'Tickets': customer._count.tickets,
      'Joined': new Date(customer.createdAt).toLocaleDateString(),
    }))

    exportToCSV(exportData, 'customers')
  }

  return (
    <>
      <DataTable
        columns={[
          {
            accessorKey: 'name',
            header: 'Customer',
            cell: ({ row }) => {
              const customer = row.original
              return (
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full bg-muted flex items-center justify-center">
                    {customer.image ? (
                      <img
                        src={customer.image}
                        alt={customer.name}
                        className="h-10 w-10 object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-sm font-semibold">
                        {customer.name.substring(0, 2).toUpperCase()}
                      </span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="truncate font-medium">{customer.name}</div>
                    <div className="truncate text-xs text-muted-foreground">
                      @{customer.username}
                    </div>
                  </div>
                </div>
              )
            },
          },
          {
            accessorKey: 'email',
            header: 'Email',
            cell: ({ row }) => (
              <span className="text-sm">{row.original.email}</span>
            ),
          },
          {
            accessorKey: 'clientId',
            header: 'Client ID',
            cell: ({ row }) => (
              <span className="text-xs font-mono text-muted-foreground">
                {row.original.clientId}
              </span>
            ),
          },
          {
            accessorKey: 'emailVerified',
            header: 'Verified',
            cell: ({ row }) => (
              <Badge variant={row.original.emailVerified ? 'default' : 'secondary'}>
                {row.original.emailVerified ? 'Yes' : 'No'}
              </Badge>
            ),
          },
          {
            accessorKey: 'banned',
            header: 'Status',
            cell: ({ row }) => (
              <Badge variant={row.original.banned ? 'destructive' : 'default'}>
                {row.original.banned ? 'Banned' : 'Active'}
              </Badge>
            ),
          },
          {
            id: 'orders',
            header: 'Orders',
            cell: ({ row }) => row.original._count.orders,
          },
          {
            id: 'servers',
            header: 'Servers',
            cell: ({ row }) => row.original._count.servers,
          },
          {
            id: 'tickets',
            header: 'Tickets',
            cell: ({ row }) => row.original._count.tickets,
          },
          {
            accessorKey: 'createdAt',
            header: 'Joined',
            cell: ({ row }) => new Date(row.original.createdAt).toLocaleDateString(),
          },
          {
            id: 'billingAddress',
            header: 'Billing Address',
            cell: ({ row }) => {
              const ba = row.original.billingAddress
              if (!ba) return <span className="text-xs text-muted-foreground">—</span>
              return (
                <div className="text-xs space-y-0.5">
                  <div className="font-medium">{ba.firstName} {ba.lastName}</div>
                  <div className="text-muted-foreground">{ba.address}, {ba.city}</div>
                  <div className="text-muted-foreground">{ba.zip} · {ba.country}</div>
                  {ba.phone && <div className="text-muted-foreground">{ba.phone}</div>}
                </div>
              )
            },
          },
        ]}
        data={customers}
        searchColumnId="name"
        searchPlaceholder="Search by name or email..."
        emptyMessage="No customers found."
        getRowId={(row) => row.id}
        enablePagination
        enableRowSelection
        enableColumnVisibilityToggle
        renderRowActions={(row) => (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                className="text-muted-foreground hover:text-foreground"
                aria-label={`Actions for ${row.name}`}
              >
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <CreateCustomerModal
                customer={{
                  id: row.id,
                  name: row.name,
                  email: row.email,
                  username: row.username,
                  firstname: row.firstname,
                  lastname: row.lastname,
                  image: row.image,
                  displayUsername: row.displayUsername,
                  banned: row.banned,
                  banReason: row.banReason,
                }}
              >
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                  Edit
                </DropdownMenuItem>
              </CreateCustomerModal>
              <DropdownMenuItem
                variant="destructive"
                onSelect={() => setDeleteTarget(row)}
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
        renderBulkActions={({ selectedIds, selectedRows, clearSelection }) => (
          <>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => handleExportToExcel(selectedRows)}
            >
              <FileSpreadsheet className="w-4 h-4 mr-2" />
              Export to Excel
            </Button>
            <AlertDialog open={bulkDeleteOpen} onOpenChange={setBulkDeleteOpen}>
              <Button
                type="button"
                variant="destructive"
                size="sm"
                onClick={() => setBulkDeleteOpen(true)}
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete ({selectedIds.length})
              </Button>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete selected customers?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will permanently delete {selectedIds.length} customer
                    {selectedIds.length === 1 ? '' : 's'} and all their associated data.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    className="bg-destructive text-white hover:bg-destructive/90"
                    onClick={async () => {
                      try {
                        await deleteCustomers({ data: { ids: selectedIds } })
                        toast.success('Deleted selected customers.')
                        clearSelection()
                        setBulkDeleteOpen(false)
                        await queryClient.invalidateQueries({ queryKey: ['customers'] })
                        await queryClient.refetchQueries({ queryKey: ['customers'] })
                      } catch (error) {
                        toast.error(
                          error instanceof Error
                            ? error.message
                            : 'Failed to delete selected customers.',
                        )
                      }
                    }}
                  >
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </>
        )}
      />

      <AlertDialog
        open={Boolean(deleteTarget)}
        onOpenChange={(open) => {
          if (!open) setDeleteTarget(null)
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete customer?</AlertDialogTitle>
            <AlertDialogDescription>
              {deleteTarget
                ? `This will permanently delete "${deleteTarget.name}" and all their associated data.`
                : null}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-white hover:bg-destructive/90"
              onClick={async () => {
                if (!deleteTarget) return
                try {
                  await deleteCustomer({ data: { id: deleteTarget.id } })
                  toast.success('Deleted customer.')
                  setDeleteTarget(null)
                  await queryClient.invalidateQueries({ queryKey: ['customers'] })
                  await queryClient.refetchQueries({ queryKey: ['customers'] })
                } catch (error) {
                  toast.error(
                    error instanceof Error
                      ? error.message
                      : 'Failed to delete customer.',
                  )
                  setDeleteTarget(null)
                }
              }}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export default CustomersDataTable
