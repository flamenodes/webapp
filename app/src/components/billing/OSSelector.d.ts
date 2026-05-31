interface OSSelectorProps {
    operatingSystems: {
        plainOS: string[];
        dockerApplications: string[];
        osWithPanel: string[];
        applications: string[];
    };
    onSelect?: (os: string) => void;
}
export declare function OSSelector({ operatingSystems, onSelect }: OSSelectorProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=OSSelector.d.ts.map