import { Suspense } from 'react';
import { Outlet, createFileRoute, useRouterState } from '@tanstack/react-router';
import { useSuspenseQuery } from '@tanstack/react-query';
import CreateDocumentSheet from '#/components/admin/documents/CreateDocumentSheet';
import DocumentsDataTable from '#/components/admin/documents/DocumentsDataTable';
import { getPageDocuments } from '#/serverActions/admin/pagedocument.api';
export const Route = createFileRoute('/_protected/admin/documents')({
    head: () => ({
        meta: [{ title: 'Documents | Flame Nodes Admin' }],
    }),
    validateSearch: (search) => ({
        view: typeof search.view === 'string' ? search.view : 'table',
    }),
    component: DocumentPage,
});
function DocumentList() {
    const { data: res } = useSuspenseQuery({
        queryKey: ['page-documents'],
        queryFn: () => getPageDocuments({ data: {} }),
    });
    return <DocumentsDataTable data={res?.resData ?? []}/>;
}
function DocumentPage() {
    const pathname = useRouterState({ select: (s) => s.location.pathname });
    if (pathname.startsWith('/admin/documents/editor/')) {
        return <Outlet />;
    }
    return (<main className="mx-auto w-full max-w-7xl p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Page Documents</h1>
          <p className="text-muted-foreground">
            Manage and organize all page documents.
          </p>
        </div>
        <CreateDocumentSheet />
      </div>

      <div className="mt-6">
        <Suspense fallback={<div className="py-8 text-center text-muted-foreground">
              Loading…
            </div>}>
          <DocumentList />
        </Suspense>
      </div>
    </main>);
}
//# sourceMappingURL=documents.js.map