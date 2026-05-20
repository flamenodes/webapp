'use client'

import { Button } from '#/components/ui/button'
import { Checkbox } from '#/components/ui/checkbox'
import { Input } from '#/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '#/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '#/components/ui/table'
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type RowSelectionState,
  type Table as ReactTable,
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
} from '@tanstack/react-table'
import * as React from 'react'

export type DataTableFilterOption = {
  label: string
  value: string
}

export type DataTableFilterConfig<TData> = {
  columnId: Extract<keyof TData, string> | string
  title: string
  allLabel?: string
  options: DataTableFilterOption[]
}

type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  searchColumnId?: Extract<keyof TData, string> | string
  searchPlaceholder?: string
  filters?: DataTableFilterConfig<TData>[]
  emptyMessage?: string
  getRowId?: (row: TData) => string
  enablePagination?: boolean
  enableRowDragging?: boolean
  onRowReorder?: (args: {
    activeId: string
    overId: string
    orderedIds: string[]
  }) => Promise<void> | void
  enableRowSelection?: boolean
  renderBulkActions?: (args: {
    table: ReactTable<TData>
    selectedRows: TData[]
    selectedIds: string[]
    clearSelection: () => void
  }) => React.ReactNode
}

export function DataTable<TData, TValue>({
  columns,
  data,
  searchColumnId,
  searchPlaceholder = 'Search...',
  filters = [],
  emptyMessage = 'No results found.',
  getRowId,
  enablePagination = true,
  enableRowDragging = false,
  onRowReorder,
  enableRowSelection = false,
  renderBulkActions,
}: DataTableProps<TData, TValue>) {
  const [tableData, setTableData] = React.useState(data)
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({})
  const [draggedRowId, setDraggedRowId] = React.useState<string | null>(null)
  const [dropTargetRowId, setDropTargetRowId] = React.useState<string | null>(null)

  React.useEffect(() => {
    setTableData(data)
    setRowSelection({})
  }, [data])

  const resolvedColumns = React.useMemo(() => {
    if (!enableRowSelection) {
      return columns
    }

    const selectionColumn: ColumnDef<TData> = {
      id: '__select',
      enableSorting: false,
      enableHiding: false,
      header: ({ table }) => (
        <div className="flex items-center">
          <Checkbox
            aria-label="Select all"
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && 'indeterminate')
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(Boolean(value))}
          />
        </div>
      ),
      cell: ({ row }) => (
        <div className="flex items-center">
          <Checkbox
            aria-label="Select row"
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(Boolean(value))}
          />
        </div>
      ),
    }

    return [selectionColumn, ...columns]
  }, [columns, enableRowSelection])

  const table = useReactTable({
    data: tableData,
    columns: resolvedColumns,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: enablePagination
      ? getPaginationRowModel()
      : undefined,
    ...(getRowId
      ? {
          getRowId,
        }
      : {}),
    ...(enablePagination
      ? {
          initialState: {
            pagination: {
              pageSize: 10,
            },
          },
        }
      : {}),
  })

  const searchColumn = searchColumnId
    ? table.getColumn(searchColumnId)
    : undefined
  const hasActiveFilters =
    sorting.length > 0 ||
    columnFilters.length > 0
  const canDragRows =
    enableRowDragging &&
    typeof onRowReorder === 'function' &&
    !hasActiveFilters &&
    !enablePagination
  const selectedRows = table.getSelectedRowModel().rows.map((row) => row.original)
  const selectedIds = table.getSelectedRowModel().rows.map((row) => row.id)
  const selectedCount = selectedIds.length

  function clearSelection() {
    table.resetRowSelection()
  }

  function moveRow<TItem>(
    items: TItem[],
    fromIndex: number,
    toIndex: number,
  ) {
    const nextItems = [...items]
    const [movedItem] = nextItems.splice(fromIndex, 1)
    nextItems.splice(toIndex, 0, movedItem)
    return nextItems
  }

  async function handleRowDrop(overId: string) {
    if (
      !draggedRowId ||
      draggedRowId === overId ||
      !canDragRows ||
      !getRowId
    ) {
      setDraggedRowId(null)
      setDropTargetRowId(null)
      return
    }

    const activeIndex = tableData.findIndex(
      (row) => getRowId(row) === draggedRowId,
    )
    const overIndex = tableData.findIndex(
      (row) => getRowId(row) === overId,
    )

    if (
      activeIndex === -1 ||
      overIndex === -1
    ) {
      setDraggedRowId(null)
      setDropTargetRowId(null)
      return
    }

    const previousRows = tableData
    const nextRows = moveRow(
      tableData,
      activeIndex,
      overIndex,
    )

    setTableData(nextRows)
    setDraggedRowId(null)
    setDropTargetRowId(null)

    try {
      await onRowReorder({
        activeId: draggedRowId,
        overId,
        orderedIds: nextRows.map(getRowId),
      })
    } catch (error) {
      setTableData(previousRows)
      throw error
    }
  }

  function resetTableState() {
    setSorting([])
    setColumnFilters([])
    table.setPageIndex(0)
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
          {searchColumn ? (
            <Input
              value={(searchColumn.getFilterValue() as string) ?? ''}
              onChange={(event) =>
                searchColumn.setFilterValue(event.target.value)
              }
              placeholder={searchPlaceholder}
              className="w-full sm:max-w-sm"
            />
          ) : null}

          {filters.length ? (
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {filters.map((filter) => {
                const column = table.getColumn(filter.columnId)

                if (!column) {
                  return null
                }

                return (
                  <Select
                    key={filter.columnId}
                    value={(column.getFilterValue() as string) ?? 'all'}
                    onValueChange={(value) =>
                      column.setFilterValue(value === 'all' ? undefined : value)
                    }
                  >
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder={filter.title} />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="all">
                        {filter.allLabel ?? `All ${filter.title}`}
                      </SelectItem>

                      {filter.options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )
              })}
            </div>
          ) : null}

          {hasActiveFilters ? (
            <Button
              variant="outline"
              onClick={resetTableState}
              className="sm:w-auto"
            >
              Reset
            </Button>
          ) : null}
        </div>

        <div className="text-sm text-muted-foreground">
          {table.getFilteredRowModel().rows.length} result
          {table.getFilteredRowModel().rows.length === 1 ? '' : 's'}
        </div>
      </div>

      {enableRowSelection && selectedCount ? (
        <div className="flex flex-col gap-2 rounded-xl border bg-card p-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm">
            <span className="font-medium">{selectedCount}</span> selected
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {typeof renderBulkActions === 'function'
              ? renderBulkActions({
                  table,
                  selectedRows,
                  selectedIds,
                  clearSelection,
                })
              : null}

            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={clearSelection}
            >
              Clear
            </Button>
          </div>
        </div>
      ) : null}

      {enableRowDragging ? (
        <div className="text-xs text-muted-foreground">
          {canDragRows
            ? 'Drag rows to reorder.'
            : 'Clear active sorting or filters to reorder rows.'}
        </div>
      ) : null}

      <div className="overflow-hidden rounded-xl border bg-card">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                (() => {
                  const rowId = row.id
                  const isDragged =
                    draggedRowId === rowId
                  const isDropTarget =
                    dropTargetRowId === rowId

                  return (
                    <TableRow
                      key={row.id}
                      draggable={canDragRows}
                      onDragStart={() => {
                        setDraggedRowId(rowId)
                      }}
                      onDragEnd={() => {
                        setDraggedRowId(null)
                        setDropTargetRowId(null)
                      }}
                      onDragOver={(event) => {
                        if (!canDragRows) {
                          return
                        }

                        event.preventDefault()
                        setDropTargetRowId(rowId)
                      }}
                      onDrop={(event) => {
                        event.preventDefault()
                        void handleRowDrop(rowId)
                      }}
                      className={[
                        canDragRows
                          ? 'cursor-grab active:cursor-grabbing'
                          : '',
                        isDragged
                          ? 'opacity-60'
                          : '',
                        isDropTarget
                          ? 'border-t-2 border-primary'
                          : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  )
                })()
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={table.getAllColumns().length}
                  className="h-24 text-center text-muted-foreground"
                >
                  {emptyMessage}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {enablePagination ? (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Select
              value={String(table.getState().pagination.pageSize)}
              onValueChange={(value) =>
                table.setPageSize(Number(value))
              }
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Rows" />
              </SelectTrigger>

              <SelectContent>
                {[10, 20, 50, 100].map((size) => (
                  <SelectItem key={size} value={String(size)}>
                    {size} rows
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="text-sm text-muted-foreground">
              Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount() || 1}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  )
}
