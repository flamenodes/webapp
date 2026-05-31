import { authClient } from '#/lib/auth-client';
import { createContext, useContext, useEffect, useState } from 'react';
const AuthProviderContext = createContext(null);
export function AuthProvider({ children }) {
    const [session, setSession] = useState(null);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    async function refetchSession() {
        setIsLoading(true);
        const { data } = await authClient.getSession();
        setSession(data?.session ?? null);
        setUser(data?.user ?? null);
        setIsLoading(false);
    }
    useEffect(() => {
        refetchSession();
    }, []);
    return (<AuthProviderContext.Provider value={{ session, user, isLoading, refetchSession }}>
      {children}
    </AuthProviderContext.Provider>);
}
export function useAuth() {
    const context = useContext(AuthProviderContext);
    if (!context) {
        throw new Error('useAuth must be used inside AuthProvider');
    }
    return context;
}
//# sourceMappingURL=AuthProvider.js.map