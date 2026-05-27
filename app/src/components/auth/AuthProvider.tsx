import { authClient } from '#/lib/auth-client'
import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

type AuthProviderData = {
  session: any | null
  user: any | null
  isLoading: boolean
  refetchSession: () => Promise<void>
}

const AuthProviderContext = createContext<AuthProviderData | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<any | null>(null)
  const [user, setUser] = useState<any | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  async function refetchSession() {
    setIsLoading(true)

    const { data } = await authClient.getSession()

    setSession(data?.session ?? null)
    setUser(data?.user ?? null)

    setIsLoading(false)
  }

  useEffect(() => {
    refetchSession()
  }, [])
  return (
    <AuthProviderContext.Provider
      value={{ session, user, isLoading, refetchSession }}
    >
      {children}
    </AuthProviderContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthProviderContext)

  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider')
  }

  return context
}
