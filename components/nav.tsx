"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function Nav() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-40 border-b bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/40">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="#home" className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors">
          {"<Sultan.Mukhtar />"}
        </Link>

        <div className="hidden gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button size="icon" variant="ghost" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      <div
        className={cn(
          "md:hidden transition-[max-height] duration-300 overflow-hidden border-t",
          open ? "max-h-48" : "max-h-0",
        )}
      >
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
