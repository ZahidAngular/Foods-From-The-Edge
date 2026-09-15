import Image from "next/image"

const variants = {
  // Spiral and name only; the tagline is too small to read at header size.
  wordmark: { file: "logo-wordmark", width: 1533, height: 271 },
  horizontal: { file: "logo-horizontal", width: 1538, height: 271 },
  stacked: { file: "logo-stacked", width: 590, height: 900 },
}

type Props = {
  variant?: keyof typeof variants
  tone?: "ink" | "paper"
  className?: string
  preload?: boolean
}

export function Logo({ variant = "wordmark", tone = "ink", className, preload }: Props) {
  const v = variants[variant]
  return (
    <Image
      src={`/brand/${v.file}-${tone}.png`}
      alt="Foods From The Edge"
      width={v.width}
      height={v.height}
      loading={preload ? "eager" : undefined}
      className={className}
    />
  )
}
