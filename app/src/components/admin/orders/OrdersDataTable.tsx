
'use client'

import * as React from 'react'
import { DataTable } from '#/components/ui/data-table'
import type { DataTableFilterConfig } from '#/components/ui/data-table'
import { Badge } from '#/components/ui/badge'
import { Checkbox } from '#/components/ui/checkbox'
import { Avatar, AvatarFallback, AvatarImage } from '#/components/ui/avatar'
import { Button } from '#/components/ui/button'
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
  deleteOrder,
  deleteOrders,
} from '#/serverActions/admin/orders.api'
import type { getAllOrders } from '#/serverActions/admin/orders.api'
import { getServerConnectionString, getServerPanelUrl } from '#/lib/server-address'
import {
  Link as LinkIcon,
  Loader2,
  MoreHorizontal,
  Trash2,
  Download,
  FileSpreadsheet,
  Rocket,
  Calendar,
  Server as ServerIcon,
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { exportToCSV, exportToGoogleSheets } from '#/lib/export-utils'
import { differenceInDays, format, isPast } from 'date-fns'

type OrderRecord = Awaited<ReturnType<typeof getAllOrders>>[number]

/** What happens to the servers behind an order when the order is deleted. */
export type OrderDeletionOptions = {
  /** Delete the local Server row too. Unchecked → the server is detached and keeps running. */
  deleteServerRecord: boolean
  /** Delete the server from the Pterodactyl panel too. */
  deletePteroServers: boolean
}

interface OrdersDataTableProps {
  data: OrderRecord[]
  onGeneratePaymentLink?: (orderId: string) => void
  onUpdateStatus?: (orderId: string, status: string) => void
  onDeleteOrder?: (orderId: string, options: OrderDeletionOptions) => void
  onDeploy?: (orderId: string) => void
  onChangePurchaseDate?: (orderId: string, purchasedOn: string) => void
  isPurchaseDatePending?: boolean
  onChangeServerExpiry?: (orderId: string, serverId: string, billingPeriod: string, customDays?: number) => void
  isServerExpiryPending?: boolean
  isGeneratingLink?: boolean
}

const STATUS_STYLES: Record<string, string> = {
  PENDING: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
  PAID: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
  PROCESSING: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  DELIVERED: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
  CANCELLED: 'bg-muted text-muted-foreground border-border',
  REFUNDED: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
  PAYMENT_FAILED: 'bg-red-500/10 text-red-500 border-red-500/20',
}

const orderFilters: DataTableFilterConfig<OrderRecord>[] = [
  {
    columnId: 'status',
    title: 'Status',
    options: [
      { label: 'Pending', value: 'PENDING' },
      { label: 'Paid', value: 'PAID' },
      { label: 'Processing', value: 'PROCESSING' },
      { label: 'Delivered', value: 'DELIVERED' },
      { label: 'Cancelled', value: 'CANCELLED' },
      { label: 'Refunded', value: 'REFUNDED' },
      { label: 'Payment Failed', value: 'PAYMENT_FAILED' },
    ],
  },
]

export function OrdersDataTable({
  data,
  onGeneratePaymentLink,
  onUpdateStatus,
  onDeleteOrder,
  onDeploy,
  onChangePurchaseDate,
  isPurchaseDatePending,
  onChangeServerExpiry,
  isServerExpiryPending,
  isGeneratingLink,
}: OrdersDataTableProps) {
  const qc = useQueryClient()
  const [generatingLinkId, setGeneratingLinkId] = React.useState<string | null>(
    null,
  )
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false)
  const [orderToDelete, setOrderToDelete] = React.useState<string | null>(null)
  const [bulkDeleteDialogOpen, setBulkDeleteDialogOpen] = React.useState(false)
  const [selectedOrderIds, setSelectedOrderIds] = React.useState<string[]>([])
  // Shared by both delete dialogs; reset to "delete everything" each time one opens.
  const [deleteOptions, setDeleteOptions] = React.useState<OrderDeletionOptions>({
    deleteServerRecord: true,
    deletePteroServers: true,
  })
  const [purchaseDateDialog, setPurchaseDateDialog] = React.useState<{
    orderId: string
    purchasedOn: string
  } | null>(null)
  const [serverExpiryDialog, setServerExpiryDialog] = React.useState<{
    orderId: string
    serverId: string
    serverName: string
    billingPeriod: string
    customDays: string
  } | null>(null)

  const handleGenerateLink = (orderId: string) => {
    setGeneratingLinkId(orderId)
    onGeneratePaymentLink?.(orderId)
    setTimeout(() => setGeneratingLinkId(null), 2000)
  }

  const deleteMutation = useMutation({
    mutationFn: ({
      orderId,
      options,
    }: {
      orderId: string
      options: OrderDeletionOptions
    }) => {
      if (onDeleteOrder) {
        onDeleteOrder(orderId, options)
        return Promise.resolve(null)
      }
      return deleteOrder({ data: { orderId, ...options } })
    },
    onSuccess: (result: any) => {
      if (!onDeleteOrder) {
        qc.invalidateQueries({ queryKey: ['admin-orders'] })
        if (result?.success === false) toast.error(result.message)
        else toast.success(result?.message || 'Order deleted successfully')
      }
      setDeleteDialogOpen(false)
      setOrderToDelete(null)
    },
    onError: () => {
      if (!onDeleteOrder) {
        toast.error('Failed to delete order')
      }
    },
  })

  const bulkDeleteMutation = useMutation({
    mutationFn: (orderIds: string[]) =>
      deleteOrders({ data: { orderIds, ...deleteOptions } }),
    onSuccess: (result: any) => {
      qc.invalidateQueries({ queryKey: ['admin-orders'] })
      if (result?.success === false) toast.error(result.message)
      else toast.success(result?.message || 'Orders deleted successfully')
      setBulkDeleteDialogOpen(false)
      setSelectedOrderIds([])
    },
    onError: () => {
      toast.error('Failed to delete orders')
    },
  })

  const handleDelete = (orderId: string) => {
    setDeleteOptions({ deleteServerRecord: true, deletePteroServers: true })
    setOrderToDelete(orderId)
    setDeleteDialogOpen(true)
  }

  const handleBulkDelete = (orderIds: string[]) => {
    setDeleteOptions({ deleteServerRecord: true, deletePteroServers: true })
    setSelectedOrderIds(orderIds)
    setBulkDeleteDialogOpen(true)
  }

  const handleChangePurchaseDate = (order: OrderRecord) => {
    setPurchaseDateDialog({
      orderId: order.id,
      purchasedOn: format(new Date(order.createdAt), 'yyyy-MM-dd'),
    })
  }

  const handleChangeServerExpiry = (order: OrderRecord, server: NonNullable<OrderRecord['renewalForServer']>) => {
    const linkedItem = order.items.find((item) => item.server?.id === server.id) ?? order.items[0]
    setServerExpiryDialog({
      orderId: order.id,
      serverId: server.id,
      serverName: server.name,
      billingPeriod: linkedItem.billingPeriod,
      customDays: '',
    })
  }

  const handleExportToExcel = (orders: OrderRecord[]) => {
    const exportData = orders.map((order) => ({
      'Order ID': order.id.slice(0, 8).toUpperCase(),
      'Customer Name': order.user.name,
      'Customer Email': order.user.email,
      'Items': order.items.length,
      'Status': order.status,
      'Subtotal': order.subtotalAmount,
      'Discount': order.discountAmount,
      'Total': order.totalAmount,
      'Date': new Date(order.createdAt).toLocaleDateString('en-IN'),
    }))

    exportToCSV(exportData, 'orders')
  }

  return (
    <>
      <DataTable
        columns={[
          {
            accessorKey: 'id',
            header: 'Order',
            cell: ({ row }) => (
              <span className="font-mono text-xs text-muted-foreground">
                #{row.original.id.slice(0, 8).toUpperCase()}
              </span>
            ),
          },
          {
            id: 'customer',
            header: 'Customer',
            cell: ({ row }) => {
              const user = row.original.user
              return (
                <div className="flex items-center gap-2.5">
                  <Avatar className="h-7 w-7">
                    {user.image && <AvatarImage src={user.image} />}
                    <AvatarFallback className="text-xs bg-primary/10 text-primary">
                      {user.name.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate">{user.name}</p>
                    <p className="text-xs text-muted-foreground truncate">
                      {user.email}
                    </p>
                  </div>
                </div>
              )
            },
          },
          {
            id: 'items',
            header: 'Items',
            cell: ({ row }) => {
              const items = row.original.items
              return (
                <span className="text-sm text-muted-foreground">
                  {items.length} item{items.length !== 1 ? 's' : ''}
                  {items[0]?.product?.planName
                    ? ` · ${items[0].product.planName}${items.length > 1 ? ' ...' : ''}`
                    : ''}
                </span>
              )
            },
          },
          {
            id: 'renewal',
            header: 'Renewal',
            cell: ({ row }) => {
              const item = row.original.items[0]
              const serverExpiry = row.original.renewalForServer?.expiresAt ?? row.original.items.find((orderItem) => orderItem.server?.expiresAt)?.server?.expiresAt
              const expiry = serverExpiry ?? item.expiresAt
              if (!expiry) {
                return <span className="text-sm text-muted-foreground">—</span>
              }
              const expiresAt = new Date(expiry)
              const expired = isPast(expiresAt)
              const days = differenceInDays(expiresAt, new Date())
              const label = expired
                ? 'Expired'
                : days <= 0
                  ? 'Due today'
                  : `in ${days}d`
              const color = expired
                ? 'text-red-500'
                : days <= 7
                  ? 'text-orange-500'
                  : 'text-emerald-500'
              return (
                <div className="space-y-0.5">
                  <p className={`text-sm font-medium capitalize ${color}`}>{label}</p>
                  <p className="text-xs text-muted-foreground capitalize">
                    {item.billingPeriod.toLowerCase()}
                  </p>
                </div>
              )
            },
          },
          {
            accessorKey: 'status',
            header: 'Status',
            cell: ({ row }) => {
              const orderId = row.original.id
              const currentStatus = row.original.status

              if (onUpdateStatus) {
                return (
                  <Select
                    value={currentStatus}
                    onValueChange={(value) => onUpdateStatus(orderId, value)}
                  >
                    <SelectTrigger className="w-[140px] h-7 text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="PENDING">Pending</SelectItem>
                      <SelectItem value="PAID">Paid</SelectItem>
                      <SelectItem value="PROCESSING">Processing</SelectItem>
                      <SelectItem value="DELIVERED">Delivered</SelectItem>
                      <SelectItem value="CANCELLED">Cancelled</SelectItem>
                      <SelectItem value="REFUNDED">Refunded</SelectItem>
                      <SelectItem value="PAYMENT_FAILED">
                        Payment Failed
                      </SelectItem>
                    </SelectContent>
                  </Select>
                )
              }

              return (
                <Badge
                  variant="outline"
                  className={`capitalize text-xs ${STATUS_STYLES[currentStatus] ?? ''}`}
                >
                  {currentStatus.replace('_', ' ').toLowerCase()}
                </Badge>
              )
            },
          },
          {
            accessorKey: 'totalAmount',
            header: 'Total',
            cell: ({ row }) => (
              <span className="font-medium">
                ₹{row.original.totalAmount.toLocaleString()}
              </span>
            ),
          },
          {
            accessorKey: 'createdAt',
            header: 'Date',
            cell: ({ row }) => (
              <span className="text-sm text-muted-foreground">
                {new Date(row.original.createdAt).toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
              </span>
            ),
          },
          {
            id: 'server',
            header: 'Server',
            cell: ({ row }) => {
              const linkedServers = row.original.items
                .map((item) => item.server)
                .filter((server): server is NonNullable<typeof server> => Boolean(server))
              const servers = row.original.renewalForServer
                ? [row.original.renewalForServer, ...linkedServers]
                : linkedServers

              if (servers.length === 0) {
                return <span className="text-sm text-muted-foreground">—</span>
              }
              const server = servers[0]

              const address = getServerConnectionString(server)
              const panelUrl = getServerPanelUrl(server)

              return (
                <div className="space-y-0.5 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <ServerIcon className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                    <span className="text-sm font-medium truncate">{server.name}</span>
                  </div>
                  {server.pterodactylServerId != null && (
                    <p className="font-mono text-xs text-muted-foreground">
                      #{server.pterodactylServerId}
                    </p>
                  )}
                  {address && (
                    <p className="truncate text-xs text-muted-foreground">{address}</p>
                  )}
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-[10px] capitalize">
                      {server.status.replace('_', ' ').toLowerCase()}
                    </Badge>
                    {panelUrl && (
                      <a
                        href={panelUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[11px] text-primary hover:underline"
                      >
                        Panel
                      </a>
                    )}
                  </div>
                  {servers.length > 1 && (
                    <p className="text-[11px] text-muted-foreground">
                      +{servers.length - 1} more
                    </p>
                  )}
                </div>
              )
            },
          },
          {
            id: 'actions',
            header: 'Actions',
            cell: ({ row }) => {
              const order = row.original
              const orderId = order.id
              const status = order.status
              const isGenerating = generatingLinkId === orderId

              return (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>

                    {status === 'PENDING' && (
                      <DropdownMenuItem
                        onClick={() => handleGenerateLink(orderId)}
                        disabled={isGenerating || isGeneratingLink}
                      >
                        {isGenerating ? (
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        ) : (
                          <LinkIcon className="w-4 h-4 mr-2" />
                        )}
                        Payment Link
                      </DropdownMenuItem>
                    )}

                    {status === 'PAID' && (
                      <DropdownMenuItem
                        onClick={() => onDeploy?.(orderId)}
                      >
                        <Rocket className="w-4 h-4 mr-2" />
                        Deploy
                      </DropdownMenuItem>
                    )}

                    <DropdownMenuSeparator />

                    <DropdownMenuItem onClick={() => handleChangePurchaseDate(order)}>
                      <Calendar className="w-4 h-4 mr-2" />
                      Change Purchase Date
                    </DropdownMenuItem>

                    {(order.renewalForServer ?? order.items.find((item) => item.server)?.server) && (
                      <DropdownMenuItem
                        onClick={() => handleChangeServerExpiry(
                          order,
                          (order.renewalForServer ?? order.items.find((item) => item.server)?.server)!,
                        )}
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Change Server Expiry
                      </DropdownMenuItem>
                    )}

                    <DropdownMenuSeparator />

                    <DropdownMenuItem
                      className="text-red-500 focus:text-red-500"
                      onClick={() => handleDelete(orderId)}
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            },
          },
        ]}
        data={data}
        searchColumnId="id"
        searchPlaceholder="Search by order ID..."
        filters={orderFilters}
        emptyMessage="No orders found."
        getRowId={(row) => row.id}
        enablePagination
        enableColumnVisibilityToggle
        enableRowSelection
        renderBulkActions={({ selectedRows, selectedIds, clearSelection }) => (
          <>
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleExportToExcel(selectedRows)}
            >
              <FileSpreadsheet className="w-4 h-4 mr-2" />
              Export to Excel
            </Button>
            <Button
              size="sm"
              variant="destructive"
              onClick={() => handleBulkDelete(selectedIds)}
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete ({selectedIds.length})
            </Button>
          </>
        )}
      />

      {/* Change Purchase Date Dialog */}
      <AlertDialog
        open={purchaseDateDialog !== null}
        onOpenChange={(open) => {
          if (!open) setPurchaseDateDialog(null)
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Change Purchase Date</AlertDialogTitle>
            <AlertDialogDescription>
              Renewal days left are calculated from the purchase date. Changing
              it will recompute the renewal date for this order and its
              linked servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          {purchaseDateDialog && (
            <div className="space-y-2 py-2">
              <Label>Purchase date</Label>
              <Input
                type="date"
                value={purchaseDateDialog.purchasedOn}
                onChange={(e) =>
                  setPurchaseDateDialog((prev) =>
                    prev ? { ...prev, purchasedOn: e.target.value } : prev,
                  )
                }
              />
            </div>
          )}
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              disabled={!purchaseDateDialog?.purchasedOn}
              onClick={() => {
                if (!purchaseDateDialog) return
                onChangePurchaseDate?.(
                  purchaseDateDialog.orderId,
                  purchaseDateDialog.purchasedOn,
                )
                setPurchaseDateDialog(null)
              }}
            >
              {isPurchaseDatePending && (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              )}
              Save
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog
        open={serverExpiryDialog !== null}
        onOpenChange={(open) => { if (!open) setServerExpiryDialog(null) }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Change Server Expiry</AlertDialogTitle>
            <AlertDialogDescription>
              The expiry for {serverExpiryDialog?.serverName} will be calculated from the order purchase date and selected period.
            </AlertDialogDescription>
          </AlertDialogHeader>
          {serverExpiryDialog && (
            <div className="space-y-2 py-2">
              <Label>Expiry period</Label>
              <Select
                value={serverExpiryDialog.billingPeriod}
                onValueChange={(billingPeriod) => setServerExpiryDialog((prev) => prev ? { ...prev, billingPeriod } : prev)}
              >
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {[
                    ['HOURLY', 'Hourly'], ['DAILY', 'Daily'], ['MONTHLY', 'Monthly'],
                    ['QUARTERLY', 'Quarterly'], ['SEMIANNUALLY', 'Semi-annually'],
                    ['YEARLY', 'Yearly'], ['CUSTOM', 'Custom days'],
                  ].map(([value, label]) => <SelectItem key={value} value={value}>{label}</SelectItem>)}
                </SelectContent>
              </Select>
              {serverExpiryDialog.billingPeriod === 'CUSTOM' && (
                <>
                  <Label className="block pt-2">Number of days</Label>
                  <Input
                    type="number"
                    min="1"
                    step="1"
                    value={serverExpiryDialog.customDays}
                    onChange={(e) => setServerExpiryDialog((prev) => prev ? { ...prev, customDays: e.target.value } : prev)}
                    placeholder="Enter days"
                  />
                </>
              )}
            </div>
          )}
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              disabled={!serverExpiryDialog || (serverExpiryDialog.billingPeriod === 'CUSTOM' && (!serverExpiryDialog.customDays || Number(serverExpiryDialog.customDays) < 1)) || isServerExpiryPending}
              onClick={() => {
                if (!serverExpiryDialog) return
                onChangeServerExpiry?.(
                  serverExpiryDialog.orderId,
                  serverExpiryDialog.serverId,
                  serverExpiryDialog.billingPeriod,
                  serverExpiryDialog.billingPeriod === 'CUSTOM' ? Number(serverExpiryDialog.customDays) : undefined,
                )
                setServerExpiryDialog(null)
              }}
            >
              {isServerExpiryPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Save expiry
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Single Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Order</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this order? This action cannot be
              undone.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <DeleteOptionsFields
            value={deleteOptions}
            onChange={setDeleteOptions}
            disabled={deleteMutation.isPending}
          />

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() =>
                orderToDelete &&
                deleteMutation.mutate({ orderId: orderToDelete, options: deleteOptions })
              }
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {deleteMutation.isPending ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : null}
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Bulk Delete Confirmation Dialog */}
      <AlertDialog open={bulkDeleteDialogOpen} onOpenChange={setBulkDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete {selectedOrderIds.length} Orders</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete {selectedOrderIds.length} orders? This
              action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <DeleteOptionsFields
            value={deleteOptions}
            onChange={setDeleteOptions}
            disabled={bulkDeleteMutation.isPending}
          />

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => bulkDeleteMutation.mutate(selectedOrderIds)}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {bulkDeleteMutation.isPending ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : null}
              Delete All
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

/**
 * The two "what about the servers?" switches. Both default to on so a plain
 * delete still cleans everything up; unchecking one leaves that side alive.
 */
function DeleteOptionsFields({
  value,
  onChange,
  disabled,
}: {
  value: OrderDeletionOptions
  onChange: (next: OrderDeletionOptions) => void
  disabled?: boolean
}) {
  return (
    <div className="space-y-3 rounded-lg border border-border bg-muted/40 p-3">
      <p className="text-xs font-medium text-muted-foreground">
        Servers attached to this order
      </p>

      <div className="flex items-start gap-2">
        <Checkbox
          id="delete-server-record"
          checked={value.deleteServerRecord}
          disabled={disabled}
          onCheckedChange={(checked) =>
            onChange({ ...value, deleteServerRecord: checked === true })
          }
        />
        <div className="space-y-0.5">
          <Label htmlFor="delete-server-record" className="text-sm font-normal">
            Delete server record
          </Label>
          <p className="text-xs text-muted-foreground">
            Removes the server from the customer dashboard and admin panel.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-2">
        <Checkbox
          id="delete-ptero-servers"
          checked={value.deletePteroServers}
          disabled={disabled}
          onCheckedChange={(checked) =>
            onChange({ ...value, deletePteroServers: checked === true })
          }
        />
        <div className="space-y-0.5">
          <Label htmlFor="delete-ptero-servers" className="text-sm font-normal">
            Delete Pterodactyl server
          </Label>
          <p className="text-xs text-muted-foreground">
            Also destroys the server on the panel. Leave unchecked to keep it
            running there.
          </p>
        </div>
      </div>

      {!value.deleteServerRecord && (
        <p className="text-xs text-muted-foreground">
          Kept servers are detached from the order and will still appear under
          Servers.
        </p>
      )}
    </div>
  )
}
