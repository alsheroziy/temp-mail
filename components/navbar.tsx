"use client"

import { Button } from "@/components/ui/button"
import { Bell, Menu, X } from "lucide-react"
import { useState } from "react"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

const NavLink = ({ href, children, className = "" }: NavLinkProps) => (
  <a
    href={href}
    className={`rounded-md px-3 py-2 text-sm font-medium text-[#c9d1d9] hover:bg-[#30363d] hover:text-white ${className}`}
  >
    {children}
  </a>
)

const navigationItems = [
  { href: "/", label: "Bosh sahifa" },
  { href: "#", label: "Xizmatlar" },
  { href: "#", label: "Maqolalar" },
  { href: "#", label: "Haqida" },
]

const UserAvatar = () => (
  <div className="h-8 w-8 overflow-hidden rounded-full bg-[#30363d]">
    <div className="flex h-full w-full items-center justify-center text-xs font-medium text-white">U</div>
  </div>
)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="border-b border-[#30363d] bg-[#161b22]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <span className="ml-2 text-xl font-bold text-white">TempMail</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                {navigationItems.map((item) => (
                  <NavLink key={item.label} href={item.href}>
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center gap-4">
              
              <Button size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <UserAvatar />
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-[#8b949e] hover:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigationItems.map((item, index) => (
              <NavLink
                key={item.label}
                href={item.href}
                className={`block text-base ${index === 0 ? "text-white" : ""}`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="border-t border-[#30363d] pb-3 pt-4">
            <div className="flex items-center px-5">
              <UserAvatar />
              <div className="ml-3">
                <div className="text-base font-medium text-white">Foydalanuvchi</div>
                <div className="text-sm text-[#8b949e]">user@example.com</div>
              </div>
              <Button variant="ghost" size="icon" className="ml-auto text-[#8b949e] hover:text-white">
                <Bell className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

