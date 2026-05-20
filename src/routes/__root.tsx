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
import { seo } from '#/utils/seo'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const withBrand = (title: string) => `${title} | BrandName`;

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
        title: `Flame Nodes | `,
        description:
          'Flame Nodes is a cloud hosting platform that provides scalable and reliable infrastructure for your applications.',
        keywords: 'cloud, hosting, infrastructure, scalable, reliable',
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
  const queryClient = new QueryClient()
  const dashes = ['/user', '/admin', '/signup']
  const hideNavbar = dashes.some((dash) => pathname.startsWith(dash))
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="flex flex-col justify-between">
        <AuthProvider>
          <ThemeProvider>
            <QueryClientProvider client={queryClient}>
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
