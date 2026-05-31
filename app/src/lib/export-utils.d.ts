export declare function exportToCSV<T extends Record<string, any>>(data: T[], filename: string, columns?: {
    key: keyof T;
    label: string;
}[]): void;
export declare function exportToGoogleSheets<T extends Record<string, any>>(data: T[], columns?: {
    key: keyof T;
    label: string;
}[]): void;
//# sourceMappingURL=export-utils.d.ts.map