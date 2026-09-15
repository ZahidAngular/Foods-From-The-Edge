"use client"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { motion, useAnimationControls, useReducedMotion } from "framer-motion"

// Synthesised glass "ting": a few inharmonic sine partials with a fast decay.
function playClink(ctxRef: React.RefObject<AudioContext | null>) {
  const AudioCtx = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
  if (!AudioCtx) return
  const ctx = (ctxRef.current ??= new AudioCtx())
  // Browsers keep the context suspended until the visitor has interacted with the page.
  if (ctx.state === "suspended") ctx.resume().catch(() => {})
  if (ctx.state !== "running") return

  const now = ctx.currentTime
  const master = ctx.createGain()
  master.gain.value = 0.18
  master.connect(ctx.destination)

  ;[2380, 3610, 4830, 6270].forEach((freq, i) => {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = "sine"
    osc.frequency.value = freq
    gain.gain.setValueAtTime(0.0001, now)
    gain.gain.exponentialRampToValueAtTime(0.6 / (i + 1), now + 0.004)
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.9 - i * 0.15)
    osc.connect(gain).connect(master)
    osc.start(now)
    osc.stop(now + 1)
  })
}

type Props = { alt: string; className?: string }

export function HeroBottle({ alt, className }: Props) {
  const reduce = useReducedMotion()
  const controls = useAnimationControls()
  const audio = useRef<AudioContext | null>(null)

  useEffect(() => {
    if (reduce) {
      controls.set({ rotate: 30, x: "18%", y: "-4%" })
      return
    }
    let cancelled = false
    // Lift, swing in an arc and lean 30° towards the bowl, clinking as it arrives.
    controls
      .start({
        rotate: [0, -10, 30],
        x: ["0%", "-8%", "18%"],
        y: ["0%", "-22%", "-4%"],
        transition: { duration: 1.5, times: [0, 0.4, 1], ease: [0.45, 0, 0.2, 1], delay: 0.6 },
      })
      .then(() => {
        if (!cancelled) playClink(audio)
      })
    return () => {
      cancelled = true
    }
  }, [controls, reduce])

  const wobble = () => {
    playClink(audio)
    if (reduce) return
    controls.start({
      rotate: [30, 22, 34, 28, 30],
      transition: { duration: 0.6, ease: "easeOut" },
    })
  }

  return (
    <motion.div
      className={className}
      style={{ transformOrigin: "50% 100%" }}
      initial={{ rotate: 0, x: "0%", y: "0%" }}
      animate={controls}
      onHoverStart={wobble}
      onTap={wobble}
    >
      <Image
        src="/products/attitude-cutout.webp"
        alt={alt}
        width={341}
        height={1400}
        // Served as-is: the 1400px cutout is already optimised, and re-encoding softened the label.
        unoptimized
        className="product-shadow h-full w-auto cursor-pointer select-none"
        draggable={false}
      />
    </motion.div>
  )
}
