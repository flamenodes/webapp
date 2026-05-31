import { HostingTabs } from '#/components/pricing/HostingTabs';
import { Spotlight } from '#/components/ui/spotlight-new';
import { createFileRoute, Outlet, useLocation } from '@tanstack/react-router';
import { Boxes, Server, Cpu, Globe, Gamepad2 } from 'lucide-react';
import { seo } from '#/utils/seo';
const PAGE_TITLES = {
    '/pricing/minecraft': { top: 'Deploy Your', before: '', highlight: 'Minecraft', after: ' Server' },
    '/pricing/vps': { top: 'Launch Your', before: '', highlight: 'VPS', after: ' Today' },
    '/pricing/webhost': { top: 'Deploy Your', before: '', highlight: 'Website', after: ' Today' },
    '/pricing/dedicated': { top: 'Raw Power,', before: '', highlight: 'Dedicated', after: ' to You' },
    '/pricing/vds': { top: 'Virtual Power,', before: '', highlight: 'Real', after: ' Performance' },
    '/pricing/discord-bot': { top: 'Keep Your Bot', before: '', highlight: 'Online', after: ', Always' },
    '/pricing/protection': { top: 'Stay Safe,', before: 'Stay ', highlight: 'Protected', after: '.' },
};
const DEFAULT_TITLE = { top: 'Transparent Pricing.', before: 'No ', highlight: 'Surprises', after: '.' };
export const Route = createFileRoute('/pricing')({
    head: () => ({
        meta: seo({
            title: 'Pricing | Flame Nodes',
            description: 'Transparent, affordable pricing for cloud hosting, VPS, dedicated servers, Minecraft servers, and more. No hidden fees.',
            keywords: 'hosting pricing, VPS pricing, dedicated server pricing, Minecraft hosting pricing',
            image: '/flamenodes.png',
        }),
    }),
    component: pricingLayout,
});
const category = [
    {
        label: 'Minecraft',
        to: '/pricing/minecraft',
        icon: Boxes,
    },
    {
        label: 'VPS',
        to: '/pricing/vps',
        icon: Server,
    },
    {
        label: 'Dedicated',
        to: '/pricing/dedicated',
        icon: Cpu,
    },
    {
        label: 'Web Hosting',
        to: '/pricing/webhost',
        icon: Globe,
    },
    {
        label: 'Game Servers',
        to: '/pricing/game-servers',
        icon: Gamepad2,
    },
];
function pricingLayout() {
    const { pathname } = useLocation();
    const title = PAGE_TITLES[pathname] ?? DEFAULT_TITLE;
    return (<section className="flex flex-col items-center min-h-screen relative">
      <Spotlight />
      <div className="absolute bottom-0 right-0 bg-background bg-[radial-gradient(el)]"></div>
      <div className="mt-30 flex flex-col justify-center items-center w-full h-full">
        <h1 className="text-6xl font-bold my-6 text-center font-angkor leading-tight">
          {title.top}
          <br />
          {title.before}
          <span className="gradient">{title.highlight}</span>
          {title.after}
        </h1>
        <HostingTabs tabs={category}/>
      </div>
      <Outlet />
    </section>);
}
//# sourceMappingURL=route.js.map