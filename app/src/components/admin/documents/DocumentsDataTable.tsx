"use client"

import * as React from 'react'
import { DataTable } from '#/components/ui/data-table'
import { Button } from '#/components/ui/button'
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
import { useNavigate } from '@tanstack/react-router'
import { useQueryClient } from '@tanstack/react-query'
import { MoreHorizontal } from 'lucide-react'
import { toast } from 'sonner'
import { deletePageDocumentbyId, type getPageDocuments } from '#/serverActions/admin/pagedocument.api'


type DocumentRecord = NonNullable<
  Awaited<ReturnType<typeof getPageDocuments>>['data']
>[number]

export default function DocumentsDataTable({
  data,
}: {
  data: DocumentRecord[]
}) {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const [deleteTarget, setDeleteTarget] =
    React.useState<DocumentRecord | null>(null)

  return (
    <>
      <DataTable
        columns={[
          {
            accessorKey: 'title',
            header: 'Title',
          },
          {
            accessorKey: 'slug',
            header: 'Slug',
            cell: ({ row }) => (
              <span className="text-muted-foreground">
                /docs/{row.original.slug}
              </span>
            ),
          },
          {
            accessorKey: 'status',
            header: 'Status',
          },
        ]}
        data={data}
        searchColumnId="title"
        searchPlaceholder="Search documents..."
        emptyMessage="No documents found."
        getRowId={(row) => row.id}
        enablePagination
        enableRowSelection={false}
        renderRowActions={(row) => (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                className="text-muted-foreground hover:text-foreground"
                aria-label={`Actions for ${row.title}`}
              >
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onSelect={() => {
                  void navigate({
                    to: '/admin/documents/editor/$id',
                    params: { id: row.id },
                  })
                }}
              >
                Edit (Editor)
              </DropdownMenuItem>
              <DropdownMenuItem
                variant="destructive"
                onSelect={() => setDeleteTarget(row)}
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
            <AlertDialogTitle>
              Delete document?
            </AlertDialogTitle>
            <AlertDialogDescription>
              {deleteTarget
                ? `This will permanently delete “${deleteTarget.title}”.`
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
                  await deletePageDocumentbyId({
                    data: { id: deleteTarget.id },
                  })
                  toast.success('Document deleted.')
                  setDeleteTarget(null)
                  await queryClient.invalidateQueries({
                    queryKey: ['page-documents'],
                  })
                  await queryClient.refetchQueries({
                    queryKey: ['page-documents'],
                  })
                } catch (error) {
                  toast.error(
                    error instanceof Error
                      ? error.message
                      : 'Failed to delete document.',
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
  )
}
