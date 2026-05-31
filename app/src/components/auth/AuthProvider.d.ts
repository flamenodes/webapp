import type { ReactNode } from 'react';
type AuthProviderData = {
    session: any | null;
    user: any | null;
    isLoading: boolean;
    refetchSession: () => Promise<void>;
};
export declare function AuthProvider({ children }: {
    children: ReactNode;
}): import("react").JSX.Element;
export declare function useAuth(): AuthProviderData;
export {};
//# sourceMappingURL=AuthProvider.d.ts.map