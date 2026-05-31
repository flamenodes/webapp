import * as React from 'react';
import { type getPageDocuments } from '#/serverActions/admin/pagedocument.api';
type DocumentRecord = NonNullable<Awaited<ReturnType<typeof getPageDocuments>>>['resData'][number];
export default function DocumentsDataTable({ data, }: {
    data: DocumentRecord[];
}): React.JSX.Element;
export {};
//# sourceMappingURL=DocumentsDataTable.d.ts.map