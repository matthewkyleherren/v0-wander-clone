"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useSession, signOut } from "@/lib/auth/client"
import { Button } from "@/components/ui/button"
import { User, LogOut, Settings } from "lucide-react"

export function UserMenu() {
  const { data: session, isPending } = useSession()
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  if (isPending) {
    return (
      <div className="h-8 w-8 rounded-full bg-muted animate-pulse" />
    )
  }

  if (!session) {
    return (
      <Button variant="ghost" size="sm" className="text-sm" asChild>
        <Link href="/login">Sign in</Link>
      </Button>
    )
  }

  const handleSignOut = async () => {
    await signOut()
    setOpen(false)
    router.push("/")
    router.refresh()
  }

  const initials = session.user.name
    ? session.user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : session.user.email?.charAt(0).toUpperCase() || "U"

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity overflow-hidden"
      >
        {session.user.image ? (
          <img
            src={session.user.image}
            alt={session.user.name || "User"}
            className="h-full w-full object-cover"
          />
        ) : (
          initials
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 rounded-md bg-card border shadow-lg py-1 z-50">
          <div className="px-4 py-2 border-b">
            <p className="text-sm font-medium truncate">{session.user.name}</p>
            <p className="text-xs text-muted-foreground truncate">
              {session.user.email}
            </p>
          </div>
          <Link
            href="/account"
            className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted transition-colors"
            onClick={() => setOpen(false)}
          >
            <User className="h-4 w-4" />
            Account
          </Link>
          <Link
            href="/account/settings"
            className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted transition-colors"
            onClick={() => setOpen(false)}
          >
            <Settings className="h-4 w-4" />
            Settings
          </Link>
          <div className="border-t my-1" />
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted transition-colors w-full text-left text-destructive"
          >
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </div>
      )}
    </div>
  )
}
