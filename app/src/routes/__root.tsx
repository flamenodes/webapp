import {
  HeadContent,
  Scripts,
  createRootRoute,
  useRouterState,
} from '@tanstack/react-router'

import appCss from '../styles.css?url'
import NotFound from '#/components/pages/NotFound'
import Header from '#/components/blocks/Header'
import Footer from '#/components/blocks/Footer'
import { Toaster } from '#/components/ui/sonner'
import { ThemeProvider } from '#/components/theme/theme-provider'
import { AuthProvider } from '#/components/auth/AuthProvider'
import { AnnouncementBanner } from '#/components/AnnouncementBanner'
import { seo } from '#/utils/seo'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

export const withBrand = (title: string) => `${title} | Flame Nodes`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      ...seo({
        title: 'Home | Flame Nodes',
        description:
          'Flame Nodes is a cloud hosting platform providing scalable VPS, dedicated servers, Minecraft hosting, and DDoS protection for gamers and developers.',
        keywords: 'cloud hosting, VPS, dedicated servers, Minecraft hosting, DDoS protection, game server hosting',
        image: '/flamenodes.png',
      }),
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'icon',
        href: '/flamenodes.png',
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  })
  const [queryClient] = useState(() => new QueryClient())
  const dashes = ['/user', '/admin', '/signup', '/billing', '/checkout']
  const hideNavbar = dashes.some((dash) => pathname.startsWith(dash))
  const hideCheckoutAnnouncement = pathname.startsWith('/checkout') || pathname === '/billing/payment'
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="flex flex-col justify-between">
        <AuthProvider>
          <ThemeProvider>
            <QueryClientProvider client={queryClient}>
              {!hideCheckoutAnnouncement && <AnnouncementBanner />}
              {!hideNavbar && <Header />}
              {children}
              {!hideNavbar && <Footer />}
              <Toaster />
            </QueryClientProvider>
          </ThemeProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  )
}
