type Theme = "dark" | "light" | "system";
type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
};
type ThemeProviderState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};
export declare function ThemeProvider({ children, defaultTheme, storageKey, }: ThemeProviderProps): import("react").JSX.Element;
export declare function useTheme(): ThemeProviderState;
export {};
//# sourceMappingURL=theme-provider.d.ts.map