"use client"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { navLinks } from "@/lib/content"
import { cn } from "@/lib/utils"
import { Wordmark } from "./Wordmark"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open ? "border-b border-line bg-paper/90 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="container-x flex h-[72px] items-center justify-between">
        <a href="#top" className="text-xl text-ink md:text-2xl" aria-label="Foods From The Edge, back to top" onClick={() => setOpen(false)}>
          <Wordmark />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="link-underline text-sm font-medium text-ink/80 hover:text-ink">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-dark">
            Contact the team
          </a>
        </nav>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        className={cn("container-x grid gap-1 pb-6 lg:hidden", open ? "grid" : "hidden")}
      >
        {[...navLinks, { href: "#contact", label: "Contact" }].map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="border-b border-line py-3 font-display text-2xl text-ink"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
