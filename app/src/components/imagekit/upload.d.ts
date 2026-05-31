type ImageUploadProps = {
    label?: string;
    description?: string;
    acceptedFileTypes?: string;
    maxFileSizeMB?: number;
    useUniqueFileName?: boolean;
    fileName?: string;
    onUpload?: (fileUrl: string) => void;
};
export declare function FileUpload({ label, description, acceptedFileTypes, maxFileSizeMB, useUniqueFileName, fileName, onUpload, }: ImageUploadProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=upload.d.ts.map