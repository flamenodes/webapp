"use client";
import * as React from 'react';
import { DataTable, } from '#/components/ui/data-table';
import { Button } from '#/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from '#/components/ui/dropdown-menu';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, } from '#/components/ui/alert-dialog';
import { deleteProduct, deleteProducts, recreateProduct, } from '#/serverActions/products/product.api';
import { useQueryClient } from '@tanstack/react-query';
import { MoreHorizontal, FileSpreadsheet, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import CreateProductModal from './CreateProductModal';
import { exportToCSV } from '#/lib/export-utils';
const productFilters = [
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
];
function ProductsDataTable({ data, }) {
    const queryClient = useQueryClient();
    const [recreateTarget, setRecreateTarget] = React.useState(null);
    const [deleteTarget, setDeleteTarget] = React.useState(null);
    const [bulkDeleteOpen, setBulkDeleteOpen] = React.useState(false);
    const handleExportToExcel = (products) => {
        const exportData = products.map((product) => ({
            'Product Name': product.planName,
            'Category': product.category,
            'Price': product.price,
            'Stock Status': product.inStock ? 'In Stock' : 'Out of Stock',
            'Deploy Mode': product.deployMode,
            'Features Count': product.features.length,
            'Specs Count': product.specEntries.length,
            'Sort Order': product.sortOrder,
            'Created': new Date(product.createdAt).toLocaleDateString(),
        }));
        exportToCSV(exportData, 'products');
    };
    return (<>
      <DataTable columns={[
            {
                accessorKey: 'planName',
                header: 'Product',
                cell: ({ row }) => {
                    const product = row.original;
                    return (<div className="flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-md bg-muted">
                    {product.icon ? (<img src={product.icon} alt={product.planName} className="h-10 w-10 object-cover" loading="lazy"/>) : null}
                  </div>
                  <div className="min-w-0">
                    <div className="truncate font-medium">{product.planName}</div>
                    <div className="truncate text-xs text-muted-foreground">
                      {product.badge ?? ''}
                    </div>
                  </div>
                </div>);
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
        ]} data={data} searchColumnId="planName" searchPlaceholder="Search by plan name..." filters={productFilters} emptyMessage="No products found." getRowId={(row) => row.id} enablePagination enableRowDragging={false} showRowDraggingHint={false} enableRowSelection enableColumnVisibilityToggle renderRowActions={(row) => (<DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button type="button" variant="ghost" size="icon-sm" className="text-muted-foreground hover:text-foreground" aria-label={`Actions for ${row.planName}`}>
                <MoreHorizontal className="h-4 w-4"/>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <CreateProductModal product={{
                id: row.id,
                planName: row.planName,
                icon: row.icon ?? null,
                badge: row.badge ?? null,
                category: row.category,
                price: row.price,
                inStock: row.inStock,
                deployMode: row.deployMode,
                features: row.features ?? [],
                specEntries: row.specEntries?.map((s) => ({
                    key: s.key,
                    value: s.value,
                })) ?? [],
            }}>
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>Edit</DropdownMenuItem>
              </CreateProductModal>
              <DropdownMenuItem onSelect={() => {
                setRecreateTarget(row);
            }}>
                Recreate
              </DropdownMenuItem>
              <DropdownMenuItem variant="destructive" onSelect={() => {
                setDeleteTarget(row);
            }}>
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>)} renderBulkActions={({ selectedIds, selectedRows, clearSelection }) => (<>
            <Button type="button" variant="outline" size="sm" onClick={() => handleExportToExcel(selectedRows)}>
              <FileSpreadsheet className="w-4 h-4 mr-2"/>
              Export to Excel
            </Button>
            <AlertDialog open={bulkDeleteOpen} onOpenChange={setBulkDeleteOpen}>
              <AlertDialogTrigger asChild>
                <Button type="button" variant="destructive" size="sm">
                  <Trash2 className="w-4 h-4 mr-2"/>
                  Delete ({selectedIds.length})
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Delete selected products?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    This will permanently delete {selectedIds.length} product
                    {selectedIds.length === 1 ? '' : 's'}.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction className="bg-destructive text-white hover:bg-destructive/90" onClick={async () => {
                try {
                    await deleteProducts({
                        data: { ids: selectedIds },
                    });
                    toast.success('Deleted selected products.');
                    clearSelection();
                    setBulkDeleteOpen(false);
                    await queryClient.invalidateQueries({
                        queryKey: ['products'],
                    });
                    await queryClient.refetchQueries({
                        queryKey: ['products'],
                    });
                }
                catch (error) {
                    toast.error(error instanceof Error
                        ? error.message
                        : 'Failed to delete selected products.');
                }
            }}>
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </>)}/>

      <AlertDialog open={Boolean(recreateTarget)} onOpenChange={(open) => {
            if (!open)
                setRecreateTarget(null);
        }}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Recreate product?
            </AlertDialogTitle>
            <AlertDialogDescription>
              {recreateTarget
            ? `This will recreate “${recreateTarget.planName}” while keeping its order position.`
            : null}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={async () => {
            if (!recreateTarget)
                return;
            try {
                await recreateProduct({ data: { id: recreateTarget.id } });
                toast.success('Recreated product.');
                setRecreateTarget(null);
                await queryClient.invalidateQueries({ queryKey: ['products'] });
                await queryClient.refetchQueries({ queryKey: ['products'] });
            }
            catch (error) {
                toast.error(error instanceof Error
                    ? error.message
                    : 'Failed to recreate product.');
                setRecreateTarget(null);
                await queryClient.invalidateQueries({ queryKey: ['products'] });
            }
        }}>
              Recreate
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={Boolean(deleteTarget)} onOpenChange={(open) => {
            if (!open)
                setDeleteTarget(null);
        }}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Delete product?
            </AlertDialogTitle>
            <AlertDialogDescription>
              {deleteTarget
            ? `This will permanently delete “${deleteTarget.planName}”.`
            : null}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-destructive text-white hover:bg-destructive/90" onClick={async () => {
            if (!deleteTarget)
                return;
            try {
                await deleteProduct({ data: { id: deleteTarget.id } });
                toast.success('Deleted product.');
                setDeleteTarget(null);
                await queryClient.invalidateQueries({ queryKey: ['products'] });
                await queryClient.refetchQueries({ queryKey: ['products'] });
            }
            catch (error) {
                toast.error(error instanceof Error
                    ? error.message
                    : 'Failed to delete product.');
                setDeleteTarget(null);
            }
        }}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>);
}
export default ProductsDataTable;
//# sourceMappingURL=ProductsDataTable.js.map