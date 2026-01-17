"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useState, useEffect } from "react"
import { useTheme } from "@/components/theme-provider"
import { UserMenu } from "@/components/user-menu"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo - simpler, text-only logo */}
          <Link href="/" className="flex items-center">
            <span className="text-lg font-semibold text-foreground tracking-tight">wander</span>
          </Link>

          {/* Desktop Navigation - subtler styling */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
              Explore
            </Link>
            <Link href="/concierge" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Concierge
            </Link>
            <Link href="/app" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Get the app
            </Link>
          </nav>

          {/* Desktop Actions - cleaner button styling */}
          <div className="hidden md:flex items-center gap-2">
            {mounted && (
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-8 w-8" aria-label="Toggle theme">
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            )}
            <UserMenu />
            <Button size="sm" className="text-sm">
              List your home
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-1">
            {mounted && (
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-9 w-9" aria-label="Toggle theme">
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            )}
            <Button variant="ghost" size="icon" className="h-9 w-9" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <nav className="flex flex-col gap-1">
              <Link href="/" className="text-sm text-foreground py-2 px-2 rounded-md hover:bg-muted">
                Explore
              </Link>
              <Link href="/concierge" className="text-sm text-muted-foreground py-2 px-2 rounded-md hover:bg-muted">
                Concierge
              </Link>
              <Link href="/app" className="text-sm text-muted-foreground py-2 px-2 rounded-md hover:bg-muted">
                Get the app
              </Link>
              <Link href="/login" className="text-sm text-muted-foreground py-2 px-2 rounded-md hover:bg-muted">
                Sign in
              </Link>
              <Button className="w-full mt-2" size="sm">
                List your home
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
