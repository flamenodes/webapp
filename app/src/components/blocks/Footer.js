import React from 'react';
const Footer = () => {
    return (<footer className="text-foreground bg-background body-font border-t border-orange-500/10">
      <div className="container px-5 py-24 mx-auto flex md:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

        <div className="w-72 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-semibold items-center md:justify-start justify-center ">
            <img src="/flamenodes.png" alt="FlameNodes" className="w-12 h-12 rounded-xl object-contain"/>

            <span className="ml-3 text-xl font-bold font-bungee">
              Flame Nodes
            </span>
          </a>

          <p className="mt-4 text-sm leading-6 text-gray-500">
            High performance game and cloud hosting built for developers,
            communities, and gamers who need speed, reliability, and complete control.
          </p>
        </div>

        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-semibold  tracking-widest text-sm mb-4">
              HOSTING
            </h2>

            <nav className="list-none mb-10 space-y-2">
              <li>
                <a className="hover:text-orange-400 transition">
                  Minecraft Hosting
                </a>
              </li>

              <li>
                <a className="hover:text-orange-400 transition">
                  VPS Hosting
                </a>
              </li>

              <li>
                <a className="hover:text-orange-400 transition">
                  Dedicated Servers
                </a>
              </li>

              <li>
                <a className="hover:text-orange-400 transition">
                  Game Panels
                </a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-semibold  tracking-widest text-sm mb-4">
              COMPANY
            </h2>

            <nav className="list-none mb-10 space-y-2">
              <li>
                <a className="hover:text-orange-400 transition">
                  About Us
                </a>
              </li>

              <li>
                <a className="hover:text-orange-400 transition">
                  Infrastructure
                </a>
              </li>

              <li>
                <a className="hover:text-orange-400 transition">
                  Status Page
                </a>
              </li>

              <li>
                <a className="hover:text-orange-400 transition">
                  Careers
                </a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-semibold  tracking-widest text-sm mb-4">
              SUPPORT
            </h2>

            <nav className="list-none mb-10 space-y-2">
              <li>
                <a className="hover:text-orange-400 transition">
                  Knowledgebase
                </a>
              </li>

              <li>
                <a className="hover:text-orange-400 transition">
                  Contact Support
                </a>
              </li>

              <li>
                <a className="hover:text-orange-400 transition">
                  Billing
                </a>
              </li>

              <li>
                <a className="hover:text-orange-400 transition">
                  Terms of Service
                </a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-semibold  tracking-widest text-sm mb-4">
              NETWORK
            </h2>

            <nav className="list-none mb-10 space-y-2">
              <li>
                <a className="hover:text-orange-400 transition">
                  Singapore
                </a>
              </li>

              <li>
                <a className="hover:text-orange-400 transition">
                  Germany
                </a>
              </li>

              <li>
                <a className="hover:text-orange-400 transition">
                  India
                </a>
              </li>

              <li>
                <a className="hover:text-orange-400 transition">
                  Global Edge
                </a>
              </li>
            </nav>
          </div>

        </div>
      </div>

      <div className="bg-background/40 border-t border-orange-500/10">
        <div className="container mx-auto py-5 px-5 flex flex-wrap flex-col sm:flex-row items-center">

          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2026 FlameNodes. All rights reserved.
          </p>

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-4">

            <a className="text-gray-500 hover:text-orange-400 transition">
              Discord
            </a>

            <a className="text-gray-500 hover:text-orange-400 transition">
              GitHub
            </a>

            <a className="text-gray-500 hover:text-orange-400 transition">
              X
            </a>

            <a className="text-gray-500 hover:text-orange-400 transition">
              Instagram
            </a>

          </span>
        </div>
      </div>
    </footer>);
};
export default Footer;
//# sourceMappingURL=Footer.js.map