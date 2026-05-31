export function exportToCSV(data, filename, columns) {
    if (data.length === 0) {
        return;
    }
    const keys = columns
        ? columns.map((col) => col.key)
        : Object.keys(data[0]);
    const headers = columns
        ? columns.map((col) => col.label)
        : keys.map((key) => String(key));
    const csvContent = [
        headers.join(','),
        ...data.map((row) => keys
            .map((key) => {
            const value = row[key];
            if (value === null || value === undefined)
                return '';
            const stringValue = String(value);
            if (stringValue.includes(',') || stringValue.includes('"') || stringValue.includes('\n')) {
                return `"${stringValue.replace(/"/g, '""')}"`;
            }
            return stringValue;
        })
            .join(',')),
    ].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
export function exportToGoogleSheets(data, columns) {
    if (data.length === 0) {
        return;
    }
    const keys = columns
        ? columns.map((col) => col.key)
        : Object.keys(data[0]);
    const headers = columns
        ? columns.map((col) => col.label)
        : keys.map((key) => String(key));
    const tsvContent = [
        headers.join('\t'),
        ...data.map((row) => keys
            .map((key) => {
            const value = row[key];
            if (value === null || value === undefined)
                return '';
            return String(value).replace(/\t/g, ' ').replace(/\n/g, ' ');
        })
            .join('\t')),
    ].join('\n');
    const blob = new Blob([tsvContent], { type: 'text/plain' });
    const item = new ClipboardItem({ 'text/plain': blob });
    navigator.clipboard.write([item]).then(() => {
        window.open('https://sheets.google.com', '_blank');
    });
}
//# sourceMappingURL=export-utils.js.map