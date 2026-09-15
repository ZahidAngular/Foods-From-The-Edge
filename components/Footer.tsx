import { range } from "@/lib/content"
import { Logo } from "./Logo"

// `base` is "" on the home page (plain in-page anchors) and "/" everywhere else.
export function Footer({ base = "" }: { base?: string }) {
  return (
    <footer className="bg-ink pb-10 text-paper">
      <div className="container-x border-t border-paper/15 pt-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <a href={`${base}#top`} className="inline-block" aria-label="Foods From The Edge. Wholefood flavour. Made differently. Back to top">
            <Logo variant="horizontal" tone="paper" className="h-12 w-auto md:h-14" />
          </a>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-paper/70">
            {range.map((g) => (
              <a key={g.id} href={`${base}#${g.id}`} className="link-underline hover:text-paper">
                {g.title}
              </a>
            ))}
            <a href={`${base}#retailers`} className="link-underline hover:text-paper">Retailers</a>
            <a href={`${base}#foodservice`} className="link-underline hover:text-paper">Foodservice</a>
            <a href={`${base}#contact`} className="link-underline hover:text-paper">Contact</a>
          </nav>
        </div>
        <p className="mt-12 text-sm text-paper/50">
          © {new Date().getFullYear()} Foods From The Edge. Made in South Australia.
        </p>
      </div>
    </footer>
  )
}
