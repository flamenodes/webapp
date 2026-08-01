import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getFooterSettings } from '../../serverActions/web-settings.api'
import { Link } from '@tanstack/react-router'

type FooterLink = { id: string; label: string; url: string }
type FooterCategory = { id: string; title: string; links: FooterLink[] }
type SocialLink = { id: string; platform: string; url: string; icon: string }
type FooterSettings = { categories: FooterCategory[]; socialLinks: SocialLink[]; copyrightText: string }

const HARDCODED_CATEGORIES = [
  {
    title: 'HOSTING',
    links: [
      { label: 'Minecraft Hosting', url: '/pricing/minecraft' },
      { label: 'VPS Hosting', url: '/pricing/vps' },
      { label: 'Dedicated Servers', url: '/pricing/dedicated' },
      { label: 'Game Panels', url: '/plans' },
    ],
  },
  {
    title: 'COMPANY',
    links: [
      { label: 'About Us', url: '/docs/about' },
      { label: 'Infrastructure', url: '/docs/infrastructure' },
      { label: 'Status Page', url: '/status' },
      { label: 'Careers', url: '/docs/careers' },
    ],
  },
  {
    title: 'SUPPORT',
    links: [
      { label: 'Knowledgebase', url: '/docs' },
      { label: 'Contact Support', url: '/docs/support' },
      { label: 'Billing', url: '/pricing' },
      { label: 'Terms of Service', url: '/docs/terms' },
    ],
  },
  {
    title: 'NETWORK',
    links: [
      { label: 'Singapore', url: '/status' },
      { label: 'Germany', url: '/status' },
      { label: 'India', url: '/status' },
      { label: 'Global Edge', url: '/status' },
    ],
  },
]

const HARDCODED_SOCIALS = [
  { label: 'Discord', url: '#' },
  { label: 'GitHub', url: '#' },
  { label: 'X', url: '#' },
  { label: 'Instagram', url: '#' },
]

function FooterLink({ url, children }: { url: string; children: React.ReactNode }) {
  const isExternal = url.startsWith('http')
  if (isExternal) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition">
        {children}
      </a>
    )
  }
  return (
    <Link to={url} className="hover:text-orange-400 transition">
      {children}
    </Link>
  )
}

function FooterBrand() {
  return (
    <div className="w-72 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <Link to="/" className="flex title-font font-semibold items-center md:justify-start justify-center">
        <img src="/flamenodes.png" alt="FlameNodes" className="w-12 h-12 rounded-xl object-contain" />
        <span className="ml-3 text-xl font-bold font-bungee">Flame Nodes</span>
      </Link>
      <p className="mt-4 text-sm leading-6 text-gray-500">
        High performance game and cloud hosting built for developers,
        communities, and gamers who need speed, reliability, and complete control.
      </p>
    </div>
  )
}

const Footer = () => {
  const { data: footerSettings } = useQuery<FooterSettings | null>({
    queryKey: ['footerSettings'],
    queryFn: () => getFooterSettings(),
  })

  if (!footerSettings) {
    return (
      <footer className="text-foreground bg-background body-font border-t border-orange-500/10">
        <div className="container px-5 py-24 mx-auto flex md:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <FooterBrand />
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            {HARDCODED_CATEGORIES.map((cat) => (
              <div key={cat.title} className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-semibold tracking-widest text-sm mb-4">{cat.title}</h2>
                <nav className="list-none mb-10 space-y-2">
                  {cat.links.map((link) => (
                    <li key={link.label}>
                      <FooterLink url={link.url}>{link.label}</FooterLink>
                    </li>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-background/40 border-t border-orange-500/10">
          <div className="container mx-auto py-5 px-5 flex flex-wrap flex-col sm:flex-row items-center">
            <p className="text-gray-500 text-sm text-center sm:text-left">© 2026 FlameNodes. All rights reserved.</p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-4">
              {HARDCODED_SOCIALS.map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-400 transition">
                  {s.label}
                </a>
              ))}
            </span>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer className="text-foreground bg-background body-font border-t border-orange-500/10">
      <div className="container px-5 py-24 mx-auto flex md:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <FooterBrand />
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          {footerSettings.categories.map((category) => (
            <div key={category.id} className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-semibold tracking-widest text-sm mb-4">
                {category.title.toUpperCase()}
              </h2>
              <nav className="list-none mb-10 space-y-2">
                {category.links.map((link) => (
                  <li key={link.id}>
                    <FooterLink url={link.url}>{link.label}</FooterLink>
                  </li>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-background/40 border-t border-orange-500/10">
        <div className="container mx-auto py-5 px-5 flex flex-wrap flex-col sm:flex-row items-center">
          <p className="text-gray-500 text-sm text-center sm:text-left">{footerSettings.copyrightText}</p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-4">
            {footerSettings.socialLinks.map((social) => (
              <a key={social.id} href={social.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-400 transition">
                {social.platform}
              </a>
            ))}
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
