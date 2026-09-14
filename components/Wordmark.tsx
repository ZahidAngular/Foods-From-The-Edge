import Image from "next/image"
import { cn } from "@/lib/utils"

// Spiral mark from the brand logo, with the "FOODS from the EDGE" lettering set in type.
export function Wordmark({ tone = "ink", className }: { tone?: "ink" | "paper"; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-[0.45em] font-display leading-none", className)}>
      <Image
        src={`/brand/mark-${tone}.png`}
        alt=""
        width={162}
        height={145}
        className="h-[1.35em] w-auto"
      />
      <span className="whitespace-nowrap tracking-tight">
        FOODS <span className="italic">from the</span> EDGE
      </span>
    </span>
  )
}
