interface OrderSummaryItem {
    label: string;
    value: number;
    currency: string;
}
interface OrderSummaryProps {
    items: OrderSummaryItem[];
    total: {
        value: number;
        currency: string;
    };
    onContinue?: () => void;
}
export declare function OrderSummary({ items, total, onContinue, }: OrderSummaryProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=OrderSummary.d.ts.map