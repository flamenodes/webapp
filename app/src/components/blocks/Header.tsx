import { Menu, X } from 'lucide-react'
import React from 'react'
import { cn } from '@/lib/utils'
import { Link, useLocation, useNavigate } from '@tanstack/react-router'
import { ThemeSwitch } from '../theme/ThemeSwitch'
import { NavMenu } from './NavMenu'
import type { NavItemProps } from './NavMenu'
import { Button } from '../ui/button'
import { authClient } from '#/lib/auth-client'
import { toast } from 'sonner'
import FlameNodesLogo from './FlameNodesLogo'
import { useQuery } from '@tanstack/react-query'
import { getHeaderSettings } from '@/serverActions/web-settings.api'

type CompanyLink = {
  id: string
  label: string
  url: string
}

type HeaderSettings = {
  companyDropdown: CompanyLink[]
}

const Header = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { data, error, isPending } = authClient.useSession()
  const session = data?.session.id
  
  const { data: headerSettings } = useQuery<HeaderSettings>({
    queryKey: ['headerSettings'],
    queryFn: () => getHeaderSettings(),
    initialData: { companyDropdown: [] },
  })

  const menuItems: NavItemProps[] = [
    {
      title: 'Services',
      children: [
        {
          title: 'Game Hosting',
          href: '/pricing/minecraft',
          description: 'High-performance servers for game hosting.',
        },
        {
          title: 'VPS Hosting',
          href: '/pricing/vps',
          description: 'Scalable virtual private servers.',
        },
        {
          title: 'Dedicated Servers',
          href: '/pricing/dedicated',
          description: 'Full dedicated hardware for your workloads.',
        },
        {
          title: 'DDoS Protection',
          href: '/pricing/protection',
          description: 'Enterprise-grade protection for your infrastructure.',
        },
      ],
    },
    { title: 'Pricing', href: '/pricing' },
    {
      title: 'Company',
      ...(headerSettings.companyDropdown.length > 0
        ? {
            children: headerSettings.companyDropdown.map((link) => ({
              title: link.label,
              href: link.url,
              description: link.description,
            })),
          }
        : { href: '/' }),
    },
    { title: 'Status', href: '/' },
  ]
  
  if (error) {
    toast.error(error.message)
  }

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <header>
      <nav
        data-state={menuState && 'active'}
        className="fixed z-[9999] w-full px-2"
      >
        <div
          className={cn(
            'mx-auto mt-2 max-w-6xl px-2 transition-all duration-300 lg:px-12',
            isScrolled &&
              'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5',
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-1 py-2 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto shrink">
              <div className="scale-75 origin-left lg:scale-100">
                <FlameNodesLogo />
              </div>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 flex items-center justify-center w-8 h-8 lg:hidden shrink-0"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-5 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-5 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-1 text-sm font-semibold">
                {menuItems.map((item, index) => (
                  <NavMenu key={index} items={[item]} />
                ))}
              </ul>
            </div>

            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent max-lg:absolute max-lg:top-full max-lg:left-2 max-lg:right-auto max-lg:w-[280px] max-lg:mt-2">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      {item.children ? (
                        <details className="group">
                          <summary className="text-foreground hover:text-accent-foreground cursor-pointer list-none flex items-center justify-between duration-150">
                            <span>{item.title}</span>
                            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </summary>
                          <ul className="mt-3 ml-4 space-y-3">
                            {item.children.map((child, childIndex) => (
                              <li key={childIndex}>
                                <Link
                                  to={child.href}
                                  className="text-muted-foreground hover:text-foreground text-sm block duration-150"
                                  onClick={() => setMenuState(false)}
                                >
                                  {child.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </details>
                      ) : (
                        <Link
                          to={item.href ?? '/'}
                          className="text-foreground hover:text-accent-foreground block duration-150"
                          onClick={() => setMenuState(false)}
                        >
                          <span>{item.title}</span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <ThemeSwitch />

              {isPending ? (
                <></>
              ) : !session ? (
                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                  <Link
                    to="/login"
                    className={cn(
                      'inline-flex h-8 items-center justify-center rounded-md border bg-background px-3 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground',
                      isScrolled && 'lg:hidden',
                    )}
                  >
                    <span>Login</span>
                  </Link>
                  <Link
                    to="/signup"
                    className={cn(
                      'inline-flex h-8 items-center justify-center rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90',
                      isScrolled && 'lg:hidden',
                    )}
                  >
                    <span>Sign Up</span>
                  </Link>
                  <div
                    onClick={() => {
                      const pricingElement = document.getElementById('pricing')

                      if (location.pathname !== '/') {
                        navigate({ to: '/' })
                      }
                      if (pricingElement) {
                        pricingElement.scrollIntoView({
                          behavior: 'smooth',
                        })
                      }
                    }}
                    className={cn(
                      'cursor-pointer inline-flex h-8 items-center justify-center rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90',
                      isScrolled ? 'lg:inline-flex' : 'hidden',
                    )}
                  >
                    <span>Get Started</span>
                  </div>
                </div>
              ) : (
                <Button onClick={() => navigate({ to: '/user/dashboard' })}>
                  Dashboard
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
