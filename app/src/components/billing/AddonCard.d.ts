interface AddonCardProps {
    addon: {
        id: string;
        name: string;
        description: string;
        price: number;
        currency: string;
        period: string;
        recommended: boolean;
    };
    onToggle?: (id: string, selected: boolean) => void;
}
export declare function AddonCard({ addon, onToggle }: AddonCardProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=AddonCard.d.ts.map