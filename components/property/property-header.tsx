"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Search, Menu, X, Sun, Moon } from "lucide-react"
import { useState, useEffect } from "react"
import { useTheme } from "@/components/theme-provider"

export function PropertyHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Back / Logo - v0 style */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-1 text-foreground hover:text-muted-foreground transition-colors min-h-[36px] min-w-[36px] justify-center"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden sm:inline text-sm">Back</span>
            </Link>
            <Link href="/" className="hidden md:flex items-center">
              <span className="text-sm font-medium text-foreground">offgrid</span>
            </Link>
          </div>

          {/* Search Bar - Desktop - v0 style */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <button
              onClick={() => setSearchOpen(true)}
              className="w-full flex items-center gap-3 px-3 py-2 bg-muted rounded-md border border-border hover:border-foreground/20 transition-colors"
            >
              <Search className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground text-sm">Where to next?</span>
              <div className="flex items-center gap-1.5 ml-auto text-xs text-muted-foreground">
                <span className="px-1.5 py-0.5 bg-background rounded text-[11px]">Whenever</span>
                <span className="px-1.5 py-0.5 bg-background rounded text-[11px]">Whoever</span>
              </div>
            </button>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            {mounted && (
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-8 w-8" aria-label="Toggle theme">
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            )}
            <Button variant="ghost" size="sm" className="text-sm">
              Sign in
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-1">
            <Button variant="ghost" size="icon" onClick={() => setSearchOpen(true)} className="h-9 w-9">
              <Search className="h-4 w-4" />
            </Button>
            {mounted && (
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-9 w-9" aria-label="Toggle theme">
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            )}
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="h-9 w-9">
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border py-3">
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
              <Link href="/signin" className="text-sm text-muted-foreground py-2 px-2 rounded-md hover:bg-muted">
                Sign in
              </Link>
            </nav>
          </div>
        )}
      </div>

      {/* Search Modal - v0 style */}
      {searchOpen && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-start justify-center pt-16 px-4">
          <div className="w-full max-w-lg bg-card rounded-lg border border-border p-5">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-sm font-medium text-foreground">Where to next?</h2>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setSearchOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Location</label>
                <input
                  type="text"
                  placeholder="Search destinations"
                  className="w-full px-3 py-2.5 bg-muted rounded-md border border-border focus:border-foreground/30 focus:outline-none text-sm text-foreground"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Dates</label>
                  <button className="w-full px-3 py-2.5 bg-muted rounded-md border border-border text-left text-sm text-muted-foreground">
                    Whenever
                  </button>
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Guests</label>
                  <button className="w-full px-3 py-2.5 bg-muted rounded-md border border-border text-left text-sm text-muted-foreground">
                    Whoever
                  </button>
                </div>
              </div>
              <Button className="w-full h-10 mt-2 text-sm">Search</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
