import { cn } from "@/lib/utils"

// Text wordmark until the supplied logo file (no background) is added to /public.
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-baseline gap-1.5 font-display leading-none tracking-tight", className)}>
      <span className="text-[0.62em] font-medium uppercase tracking-[0.18em]">Foods from</span>
      <span className="font-semibold italic">the Edge</span>
    </span>
  )
}
