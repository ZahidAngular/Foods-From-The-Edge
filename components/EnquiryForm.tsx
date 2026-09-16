"use client"
import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import { submitLead } from "@/lib/formService"
import { cn } from "@/lib/utils"

export const enquiryTypes = [
  { value: "retail", label: "Retail & distribution" },
  { value: "foodservice", label: "Foodservice" },
  { value: "general", label: "General enquiry" },
] as const

export type EnquiryType = (typeof enquiryTypes)[number]["value"]

const EVENT = "enquiry-type"

// CTA that scrolls to the contact form and preselects the enquiry type.
export function EnquiryLink({
  type,
  className,
  children,
}: {
  type: EnquiryType
  className?: string
  children: React.ReactNode
}) {
  return (
    <a
      href="#contact"
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent<EnquiryType>(EVENT, { detail: type }))}
    >
      {children}
    </a>
  )
}

type Status = "idle" | "sending" | "sent" | "error"

export function EnquiryForm() {
  const [type, setType] = useState<EnquiryType>("retail")
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState("")

  useEffect(() => {
    const onType = (e: Event) => setType((e as CustomEvent<EnquiryType>).detail)
    window.addEventListener(EVENT, onType)
    return () => window.removeEventListener(EVENT, onType)
  }, [])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus("sending")
    setError("")
    try {
      const field = (name: string) => String(new FormData(form).get(name) ?? "").trim()
      const typeLabel = enquiryTypes.find((t) => t.value === type)?.label ?? type
      // The CRM takes one free-text comment, so the enquiry type and business fold into it.
      await submitLead({
        fullName: field("name"),
        email: field("email"),
        phone: field("phone"),
        comment: [
          `Enquiry: ${typeLabel}`,
          ...(field("business") ? [`Business: ${field("business")}`] : []),
          "",
          field("message"),
        ]
          .join("\n"),
      })
      form.reset()
      setStatus("sent")
    } catch (err) {
      console.error(err)
      setError("Sorry, your enquiry could not be sent. Please try again.")
      setStatus("error")
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-3xl bg-paper p-8 text-ink sm:p-10" role="status">
        <p className="font-display text-3xl italic">Thank you.</p>
        <p className="mt-3 text-ink/75">
          Your enquiry is with the team. We will be in touch soon.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="btn btn-dark mt-8">
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-paper p-6 text-ink sm:p-10">
      <fieldset>
        <legend className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/60">I am enquiring about</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {enquiryTypes.map((t) => (
            <label
              key={t.value}
              className={cn(
                "cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                type === t.value ? "border-ink bg-ink text-paper" : "border-line hover:border-ink/40",
              )}
            >
              <input
                type="radio"
                name="enquiryType"
                value={t.value}
                checked={type === t.value}
                onChange={() => setType(t.value)}
                className="sr-only"
              />
              {t.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" autoComplete="name" required />
        <Field label="Business" name="business" autoComplete="organization" />
        <Field label="Email" name="email" type="email" autoComplete="email" required />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
        <label className="grid gap-2 sm:col-span-2">
          <span className="text-sm font-medium">Message</span>
          <textarea name="message" rows={4} required className="input resize-y" />
        </label>
      </div>

      {status === "error" && (
        <p className="mt-5 text-sm text-beet" role="alert">
          {error}
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className="btn btn-dark mt-8 w-full sm:w-auto">
        {status === "sending" ? "Sending…" : "Contact the team"}
        <ArrowRight size={18} aria-hidden="true" />
      </button>
    </form>
  )
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium">
        {label}
        {props.required && <span className="text-ink/50"> *</span>}
      </span>
      <input {...props} className="input" />
    </label>
  )
}
