"use client"
import Image from "next/image"
import { useState } from "react"
import type { Photo } from "@/lib/content"
import { cn } from "@/lib/utils"

type Shot = Photo & { label: string }

export function ProductGallery({ name, shots }: { name: string; shots: Shot[] }) {
  const [active, setActive] = useState(0)
  const shot = shots[active]
  const tall = shot.height > shot.width

  return (
    <div>
      <div className="relative aspect-[3/2] overflow-hidden rounded-3xl bg-white">
        <Image
          key={shot.src}
          src={shot.src}
          alt={`${name}, ${shot.label.toLowerCase()}`}
          fill
          loading="eager"
          sizes="(min-width: 1024px) 600px, 100vw"
          className={tall ? "object-contain py-6" : "object-cover"}
        />
      </div>

      {shots.length > 1 && (
        <div className="mt-4 flex gap-3" role="group" aria-label={`${name} photos`}>
          {shots.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              className={cn(
                // A ring rather than a border keeps the frame at the photo's exact 3:2 ratio.
                "relative aspect-[3/2] w-28 overflow-hidden rounded-2xl bg-white ring-2 transition-shadow",
                i === active ? "ring-ink" : "ring-transparent hover:ring-ink/30",
              )}
            >
              <Image src={s.src} alt="" fill sizes="112px" className="object-cover" />
              <span className="sr-only">Show {s.label.toLowerCase()}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
