import * as React from 'react';
import { type getAllOrders } from '#/serverActions/admin/dashboard.api';
type OrderRecord = Awaited<ReturnType<typeof getAllOrders>>[number];
interface OrdersDataTableProps {
    data: OrderRecord[];
    onGeneratePaymentLink?: (orderId: string) => void;
    onUpdateStatus?: (orderId: string, status: string) => void;
    isGeneratingLink?: boolean;
}
export declare function OrdersDataTable({ data, onGeneratePaymentLink, onUpdateStatus, isGeneratingLink, }: OrdersDataTableProps): React.JSX.Element;
export {};
//# sourceMappingURL=OrdersDataTable.d.ts.map