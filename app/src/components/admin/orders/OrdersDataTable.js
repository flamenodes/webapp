'use client';
import * as React from 'react';
import { DataTable, } from '#/components/ui/data-table';
import { Badge } from '#/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '#/components/ui/avatar';
import { Button } from '#/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from '#/components/ui/select';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, } from '#/components/ui/alert-dialog';
import { deleteOrder, deleteOrders, } from '#/serverActions/admin/dashboard.api';
import { Link as LinkIcon, Loader2, MoreHorizontal, Trash2, FileSpreadsheet, } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from '@/components/ui/dropdown-menu';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { exportToCSV } from '#/lib/export-utils';
const STATUS_STYLES = {
    PENDING: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
    PAID: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
    PROCESSING: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    DELIVERED: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
    CANCELLED: 'bg-muted text-muted-foreground border-border',
    REFUNDED: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
    PAYMENT_FAILED: 'bg-red-500/10 text-red-500 border-red-500/20',
};
const orderFilters = [
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
];
export function OrdersDataTable({ data, onGeneratePaymentLink, onUpdateStatus, isGeneratingLink, }) {
    const qc = useQueryClient();
    const [generatingLinkId, setGeneratingLinkId] = React.useState(null);
    const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
    const [orderToDelete, setOrderToDelete] = React.useState(null);
    const [bulkDeleteDialogOpen, setBulkDeleteDialogOpen] = React.useState(false);
    const [selectedOrderIds, setSelectedOrderIds] = React.useState([]);
    const handleGenerateLink = (orderId) => {
        setGeneratingLinkId(orderId);
        onGeneratePaymentLink?.(orderId);
        setTimeout(() => setGeneratingLinkId(null), 2000);
    };
    const deleteMutation = useMutation({
        mutationFn: (orderId) => deleteOrder({ data: { id: orderId } }),
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ['admin-orders'] });
            toast.success('Order deleted successfully');
            setDeleteDialogOpen(false);
            setOrderToDelete(null);
        },
        onError: () => {
            toast.error('Failed to delete order');
        },
    });
    const bulkDeleteMutation = useMutation({
        mutationFn: (orderIds) => deleteOrders({ data: { ids: orderIds } }),
        onSuccess: (result) => {
            qc.invalidateQueries({ queryKey: ['admin-orders'] });
            if (result.success) {
                toast.success(`${result.data?.deleted || 0} orders deleted successfully`);
            }
            setBulkDeleteDialogOpen(false);
            setSelectedOrderIds([]);
        },
        onError: () => {
            toast.error('Failed to delete orders');
        },
    });
    const handleDelete = (orderId) => {
        setOrderToDelete(orderId);
        setDeleteDialogOpen(true);
    };
    const handleBulkDelete = (orderIds) => {
        setSelectedOrderIds(orderIds);
        setBulkDeleteDialogOpen(true);
    };
    const handleExportToExcel = (orders) => {
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
        }));
        exportToCSV(exportData, 'orders');
    };
    return (<>
      <DataTable columns={[
            {
                accessorKey: 'id',
                header: 'Order',
                cell: ({ row }) => (<span className="font-mono text-xs text-muted-foreground">
                #{row.original.id.slice(0, 8).toUpperCase()}
              </span>),
            },
            {
                id: 'customer',
                header: 'Customer',
                cell: ({ row }) => {
                    const user = row.original.user;
                    return (<div className="flex items-center gap-2.5">
                  <Avatar className="h-7 w-7">
                    {user.image && <AvatarImage src={user.image}/>}
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
                </div>);
                },
            },
            {
                id: 'items',
                header: 'Items',
                cell: ({ row }) => {
                    const items = row.original.items;
                    return (<span className="text-sm text-muted-foreground">
                  {items.length} item{items.length !== 1 ? 's' : ''}
                  {items[0]?.product?.planName
                            ? ` · ${items[0].product.planName}${items.length > 1 ? ' ...' : ''}`
                            : ''}
                </span>);
                },
            },
            {
                accessorKey: 'status',
                header: 'Status',
                cell: ({ row }) => {
                    const orderId = row.original.id;
                    const currentStatus = row.original.status;
                    if (onUpdateStatus) {
                        return (<Select value={currentStatus} onValueChange={(value) => onUpdateStatus(orderId, value)}>
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
                  </Select>);
                    }
                    return (<Badge variant="outline" className={`capitalize text-xs ${STATUS_STYLES[currentStatus] ?? ''}`}>
                  {currentStatus.replace('_', ' ').toLowerCase()}
                </Badge>);
                },
            },
            {
                accessorKey: 'totalAmount',
                header: 'Total',
                cell: ({ row }) => (<span className="font-medium">
                ₹{row.original.totalAmount.toLocaleString()}
              </span>),
            },
            {
                accessorKey: 'createdAt',
                header: 'Date',
                cell: ({ row }) => (<span className="text-sm text-muted-foreground">
                {new Date(row.original.createdAt).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                    })}
              </span>),
            },
            {
                id: 'actions',
                header: 'Actions',
                cell: ({ row }) => {
                    const order = row.original;
                    const orderId = order.id;
                    const status = order.status;
                    const isGenerating = generatingLinkId === orderId;
                    return (<DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                      <MoreHorizontal className="w-4 h-4"/>
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>

                    {status === 'PENDING' && (<DropdownMenuItem onClick={() => handleGenerateLink(orderId)} disabled={isGenerating || isGeneratingLink}>
                        {isGenerating ? (<Loader2 className="w-4 h-4 mr-2 animate-spin"/>) : (<LinkIcon className="w-4 h-4 mr-2"/>)}
                        Payment Link
                      </DropdownMenuItem>)}

                    <DropdownMenuSeparator />

                    <DropdownMenuItem className="text-red-500 focus:text-red-500" onClick={() => handleDelete(orderId)}>
                      <Trash2 className="w-4 h-4 mr-2"/>
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>);
                },
            },
        ]} data={data} searchColumnId="id" searchPlaceholder="Search by order ID..." filters={orderFilters} emptyMessage="No orders found." getRowId={(row) => row.id} enablePagination enableColumnVisibilityToggle enableRowSelection renderBulkActions={({ selectedRows, selectedIds, clearSelection }) => (<>
            <Button size="sm" variant="outline" onClick={() => handleExportToExcel(selectedRows)}>
              <FileSpreadsheet className="w-4 h-4 mr-2"/>
              Export to Excel
            </Button>
            <Button size="sm" variant="destructive" onClick={() => handleBulkDelete(selectedIds)}>
              <Trash2 className="w-4 h-4 mr-2"/>
              Delete ({selectedIds.length})
            </Button>
          </>)}/>

      {/* Single Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Order</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this order? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => orderToDelete && deleteMutation.mutate(orderToDelete)} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              {deleteMutation.isPending ? (<Loader2 className="w-4 h-4 mr-2 animate-spin"/>) : null}
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
              Are you sure you want to delete {selectedOrderIds.length} orders? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => bulkDeleteMutation.mutate(selectedOrderIds)} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              {bulkDeleteMutation.isPending ? (<Loader2 className="w-4 h-4 mr-2 animate-spin"/>) : null}
              Delete All
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>);
}
//# sourceMappingURL=OrdersDataTable.js.map