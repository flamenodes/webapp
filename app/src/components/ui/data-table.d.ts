import { type Table as ReactTable, type ColumnDef } from '@tanstack/react-table';
import * as React from 'react';
export type DataTableFilterOption = {
    label: string;
    value: string;
};
export type DataTableFilterConfig<TData> = {
    columnId: Extract<keyof TData, string> | string;
    title: string;
    allLabel?: string;
    options: DataTableFilterOption[];
};
type DataTableProps<TData, TValue> = {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    searchColumnId?: Extract<keyof TData, string> | string;
    searchPlaceholder?: string;
    filters?: DataTableFilterConfig<TData>[];
    emptyMessage?: string;
    getRowId?: (row: TData) => string;
    enablePagination?: boolean;
    enableRowDragging?: boolean;
    showRowDraggingHint?: boolean;
    enableColumnVisibilityToggle?: boolean;
    onRowReorder?: (args: {
        activeId: string;
        overId: string;
        orderedIds: string[];
    }) => Promise<void> | void;
    enableRowSelection?: boolean;
    renderRowActions?: (row: TData) => React.ReactNode;
    renderBulkActions?: (args: {
        table: ReactTable<TData>;
        selectedRows: TData[];
        selectedIds: string[];
        clearSelection: () => void;
    }) => React.ReactNode;
    enableExport?: boolean;
    exportFileName?: string;
};
export declare function DataTable<TData, TValue>({ columns, data, searchColumnId, searchPlaceholder, filters, emptyMessage, getRowId, enablePagination, enableRowDragging, showRowDraggingHint, enableColumnVisibilityToggle, onRowReorder, enableRowSelection, renderRowActions, renderBulkActions, enableExport, exportFileName, }: DataTableProps<TData, TValue>): React.JSX.Element;
export {};
//# sourceMappingURL=data-table.d.ts.map