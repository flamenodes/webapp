import '@/styles/markdown-styles.css';
import '@mdxeditor/editor/style.css';
import { GetPageDocuments } from '#/serverActions/admin/pagedocument.api';
type PageDocumentRecord = NonNullable<Awaited<ReturnType<typeof GetPageDocuments>>>['resData'][number];
export default function DocumentEditor({ document, showSlugInitially, onClose, }: {
    document: PageDocumentRecord;
    showSlugInitially?: boolean;
    onClose?: () => void;
}): import("react").JSX.Element;
export {};
//# sourceMappingURL=DocumentEditor.d.ts.map