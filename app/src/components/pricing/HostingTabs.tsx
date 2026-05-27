import { Link } from "@tanstack/react-router"
import type { LucideIcon } from "lucide-react"

interface HostingTab {
  label: string
  to: string
  icon: LucideIcon
}

interface HostingTabsProps {
  tabs: HostingTab[]
}

export function HostingTabs({ tabs }: HostingTabsProps) {
  return (
    <div className="flex justify-center">
      <div
        className="
          flex items-center
          rounded-2xl
          border border-white/[0.05]
          bg-[#09090D]/90
          backdrop-blur-xl
          overflow-hidden
          shadow-[0_10px_40px_rgba(0,0,0,0.45)]
        "
      >
        {tabs.map((tab) => {
          const Icon = tab.icon

          return (
            <Link
              key={tab.label}
              to={tab.to}
              activeProps={{
                className:
                  "text-[#ff4d8d] bg-gradient-to-b from-[#ff4d8d]/15 to-[#ff4d8d]/5 shadow-[inset_0_-2px_0_#ff4d8d]",
              }}
              activeOptions={{
                exact: true,
              }}
              className="
                relative
                flex items-center gap-2.5
                px-6 py-3.5
                text-[13px] font-medium
                text-white/55
                transition-all duration-300
                border-r border-white/[0.04]
                last:border-r-0
                hover:text-white
                hover:bg-white/[0.02]
              "
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <>
                      <div className="absolute inset-0 bg-[#ff4d8d]/8 blur-2xl pointer-events-none" />

                      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#ff4d8d] to-transparent" />
                    </>
                  )}

                  <Icon
                    size={16}
                    strokeWidth={1.9}
                    className={`
                      relative z-10 transition-colors
                      ${
                        isActive
                          ? "text-[#ff4d8d]"
                          : "text-white/40"
                      }
                    `}
                  />

                  <span className="relative z-10 whitespace-nowrap">
                    {tab.label}
                  </span>
                </>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
