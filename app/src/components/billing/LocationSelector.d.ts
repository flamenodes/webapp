interface LocationSelectorProps {
    locations: Array<{
        id: string;
        name: string;
        latency: string;
        status: string;
        selected: boolean;
    }>;
    onSelect?: (locationId: string) => void;
}
export declare function LocationSelector({ locations, onSelect, }: LocationSelectorProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=LocationSelector.d.ts.map