import Image from "next/image"
import { ArrowDown, ArrowRight, Check } from "lucide-react"
import { EnquiryForm, EnquiryLink } from "@/components/EnquiryForm"
import { Header } from "@/components/Header"
import { Reveal } from "@/components/Reveal"
import { Wordmark } from "@/components/Wordmark"
import {
  foodserviceUses,
  ingredients,
  madeFrom,
  philosophy,
  range,
  retailerPoints,
  type Product,
} from "@/lib/content"

const byName = (name: string) => range.flatMap((g) => g.products).find((p) => p.name === name)!

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <IngredientMarquee />
        <About />
        <MadeFromFood />
        <OurRange />
        <PlantForward />
        <Philosophy />
        <AdelaideHills />
        <Retailers />
        <Foodservice />
        <NearTheEdge />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

function Hero() {
  const beet = byName("Cheesy Beetroot")
  const dukkah = byName("Spicy Dukkah")
  const attitude = byName("Attitude")

  return (
    <section className="relative overflow-hidden pt-[72px]">
      <div className="container-x grid items-center gap-12 pb-16 pt-10 md:pt-16 lg:grid-cols-12 lg:gap-8 lg:pb-24">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow text-moss">Dips · Dressings · Dukkah</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display mt-6 text-[clamp(3.25rem,10vw,8.5rem)] font-medium">
              Foods From <span className="italic text-beet">The Edge</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-8 font-display text-2xl italic text-olive md:text-3xl">
              Wholefood flavour. Made differently.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/75">
              Dips, dressings and condiments made from vegetables, nuts, seeds, herbs and spices.
            </p>
            <p className="mt-2 max-w-xl text-lg font-medium text-ink">
              Simple ingredients. Generous flavour. Naturally plant-forward.
            </p>
          </Reveal>
          <Reveal delay={0.24} className="mt-10 flex flex-wrap gap-3">
            <a href="#range" className="btn btn-dark">
              Explore the range
              <ArrowDown size={18} aria-hidden="true" />
            </a>
            <EnquiryLink type="retail" className="btn border-[1.5px] border-ink/25 hover:border-ink">
              Stock the range
            </EnquiryLink>
          </Reveal>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[560px] lg:col-span-5">
          <div className="absolute right-0 top-0 h-[80%] w-[80%] overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-ink/10">
            <Image
              src={beet.image.src}
              alt={`${beet.name} dip in a bowl`}
              fill
              loading="eager"
              sizes="(min-width: 1024px) 450px, 80vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-[4%] left-0 h-[50%] w-[30%] overflow-hidden rounded-3xl bg-white shadow-xl shadow-ink/15">
            <Image
              src={attitude.image.src}
              alt={`${attitude.name} dressing bottle`}
              fill
              sizes="(min-width: 1024px) 170px, 30vw"
              className="object-contain p-3"
            />
          </div>
          <div className="animate-float absolute bottom-0 right-[6%] aspect-square w-[36%] overflow-hidden rounded-full border-[6px] border-paper bg-white shadow-xl shadow-ink/15">
            <Image
              src={dukkah.image.src}
              alt={`${dukkah.name} close up`}
              fill
              sizes="(min-width: 1024px) 200px, 36vw"
              className="scale-[1.9] object-cover"
            />
          </div>
          <RoundBadge className="absolute left-[4%] top-[6%] w-[24%]" />
        </div>
      </div>
    </section>
  )
}

function RoundBadge({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <svg viewBox="0 0 120 120" className="animate-spin-slow">
        <defs>
          <path id="badge-circle" d="M60 60m-44 0a44 44 0 1 1 88 0a44 44 0 1 1-88 0" />
        </defs>
        <circle cx="60" cy="60" r="58" fill="#1F2A1E" />
        <text fill="#F4EEE3" fontSize="9.5" fontWeight="600">
          <textPath href="#badge-circle" textLength="272" lengthAdjust="spacing">
            MADE IN SOUTH AUSTRALIA · PLANT-FORWARD ·
          </textPath>
        </text>
        <circle cx="60" cy="60" r="7" fill="#D9A43A" />
      </svg>
    </div>
  )
}

function IngredientMarquee() {
  const items = [...ingredients, ...ingredients]
  return (
    <div className="overflow-hidden bg-ink py-5 text-paper" aria-label={ingredients.join(", ")}>
      <div className="animate-marquee flex w-max" aria-hidden="true">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0">
            {items.map((item, i) => (
              <span key={i} className="flex items-center gap-8 pr-8 font-display text-2xl italic md:text-3xl">
                {item}
                <span className="text-mustard not-italic">✺</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={`eyebrow flex items-center gap-3 ${className ?? ""}`}>
    <span className="h-px w-8 bg-current" aria-hidden="true" />
    {children}
  </p>
}

function About() {
  return (
    <section id="about" className="py-24 md:py-36">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <SectionLabel className="text-moss">About</SectionLabel>
          <h2 className="display mt-6 text-5xl font-medium md:text-7xl">
            Food should be <span className="italic text-tomato">interesting</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="space-y-6 text-lg leading-relaxed text-ink/80 lg:col-span-6 lg:col-start-7 lg:pt-16">
          <p className="font-display text-2xl leading-snug text-ink md:text-3xl">
            Foods From The Edge is a collection of boldly flavoured dips, dressings and condiments made for everyday
            eating.
          </p>
          <p>
            We begin with familiar wholefood ingredients—vegetables, legumes, nuts, seeds, herbs and spices—and bring
            them together in combinations that are a little less ordinary.
          </p>
          <p>
            Some are inspired by old recipes. Others come from experimentation, travel and the simple pleasure of
            discovering a flavour worth sharing.
          </p>
          <p className="font-medium text-ink">
            The result is food with texture, character and a proper sense of taste.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function MadeFromFood() {
  return (
    <section className="bg-olive py-24 text-paper md:py-36">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <SectionLabel className="text-mustard">Our starting point</SectionLabel>
            <h2 className="display mt-6 text-5xl font-medium md:text-7xl">Made from food</h2>
          </Reveal>
          <Reveal delay={0.1} className="text-lg leading-relaxed text-paper/80 lg:col-span-5 lg:col-start-8 lg:pt-16">
            <p>We believe the best place to begin is with real, recognisable ingredients.</p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-paper/15 sm:grid-cols-2 lg:grid-cols-4">
          {madeFrom.map((m, i) => {
            const product = byName(m.product) ?? byName("Original Dukkah")
            return (
              <Reveal as="li" key={m.product} delay={i * 0.06} className="flex flex-col bg-olive p-8">
                <div className="relative size-24 overflow-hidden rounded-full border-4 border-paper/90 bg-white">
                  <Image
                    src={product.image.src}
                    alt=""
                    fill
                    sizes="96px"
                    className="scale-[1.8] object-cover"
                  />
                </div>
                <p className="mt-8 font-display text-3xl italic leading-tight">{m.ingredient}</p>
                <p className="mt-3 text-sm text-paper/70">
                  in our <span className="font-semibold text-paper">{m.product === "Dukkah" ? "dukkah" : m.product}</span>
                </p>
              </Reveal>
            )
          })}
        </ul>

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <Reveal className="text-lg leading-relaxed text-paper/80 lg:col-span-5">
            <p>
              Our range is increasingly dairy-free and plant-forward, using thoughtfully selected alternatives only
              where they make the product better.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <p className="font-display text-3xl leading-tight text-paper/60 md:text-4xl">
              We do not want to make complicated food sound simple.
            </p>
            <p className="mt-4 font-display text-3xl italic leading-tight md:text-4xl">
              We want to make genuinely simple food taste <span className="text-mustard">exceptional.</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function OurRange() {
  return (
    <section id="range" className="bg-paper-2 py-24 md:py-36">
      <div className="container-x">
        <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel className="text-moss">The collection</SectionLabel>
            <h2 className="display mt-6 text-5xl font-medium md:text-7xl">Our range</h2>
          </div>
          <nav aria-label="Range categories" className="flex flex-wrap gap-2">
            {range.map((g) => (
              <a
                key={g.id}
                href={`#${g.id}`}
                className="rounded-full border border-ink/20 px-4 py-2 text-sm font-medium transition-colors hover:border-ink hover:bg-ink hover:text-paper"
              >
                {g.title} <span className="text-ink/50">({g.products.length})</span>
              </a>
            ))}
          </nav>
        </Reveal>

        <div className="mt-16 space-y-24">
          {range.map((group, gi) => (
            <section key={group.id} id={group.id} aria-labelledby={`${group.id}-title`}>
              <Reveal className="flex items-baseline justify-between gap-4 border-b border-ink/15 pb-5">
                <h3 id={`${group.id}-title`} className="font-display text-3xl md:text-4xl">
                  {group.title}
                </h3>
                <span className="font-display text-lg italic text-ink/50">0{gi + 1}</span>
              </Reveal>

              <ul
                className={
                  group.id === "dukkah"
                    ? "mt-10 grid gap-6 lg:grid-cols-2"
                    : "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                }
              >
                {group.products.map((p, i) => (
                  <Reveal as="li" key={p.slug} delay={i * 0.06} className="h-full">
                    <ProductCard product={p} wide={group.id === "dukkah"} />
                  </Reveal>
                ))}
                {group.id === "dips" && (
                  <Reveal as="li" delay={0.3} className="h-full">
                    <div className="flex h-full flex-col justify-between rounded-3xl bg-ink p-8 text-paper">
                      <p className="font-display text-3xl leading-tight">
                        A range with a clear <span className="italic text-mustard">reason to exist.</span>
                      </p>
                      <EnquiryLink type="retail" className="btn btn-light mt-10 self-start">
                        Enquire about stocking the range
                        <ArrowRight size={18} aria-hidden="true" />
                      </EnquiryLink>
                    </div>
                  </Reveal>
                )}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, wide }: { product: Product; wide?: boolean }) {
  const bottle = product.image.height > product.image.width
  return (
    <article
      className={`group flex h-full overflow-hidden rounded-3xl bg-paper ${wide ? "flex-col sm:flex-row" : "flex-col"}`}
    >
      <div className={`relative aspect-[4/3] overflow-hidden bg-white ${wide ? "sm:aspect-auto sm:w-2/5" : ""}`}>
        <Image
          src={product.image.src}
          alt={product.name}
          fill
          sizes={wide ? "(min-width: 1024px) 240px, (min-width: 640px) 40vw, 100vw" : "(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"}
          className={`transition-transform duration-700 ease-out group-hover:scale-105 ${
            bottle ? "object-contain py-5" : "object-cover"
          }`}
        />
      </div>
      <div className={`flex flex-1 flex-col p-7 ${wide ? "sm:w-3/5 sm:justify-center" : ""}`}>
        <h4 className="font-display text-2xl font-medium md:text-[1.75rem]">{product.name}</h4>
        <p className="mt-3 leading-relaxed text-ink/75">{product.description}</p>
        <p className="mt-4 font-display text-lg italic leading-snug text-olive">{product.character}</p>
        {product.serving && (
          <div className="mt-auto pt-5">
            <p className="border-t border-line pt-4 text-sm leading-relaxed text-ink/70">{product.serving}</p>
          </div>
        )}
      </div>
    </article>
  )
}

function PlantForward() {
  return (
    <section className="py-24 md:py-36">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionLabel className="text-moss">Our approach</SectionLabel>
            <h2 className="display mt-6 text-5xl font-medium md:text-7xl">
              Plant-forward <span className="italic text-moss">by nature</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6 text-lg leading-relaxed text-ink/80 lg:col-span-6 lg:col-start-7 lg:pt-16">
            <p>We are not interested in making food complicated.</p>
            <p className="font-display text-2xl leading-snug text-ink md:text-3xl">
              We are interested in making vegetables, legumes, nuts, seeds, herbs and spices genuinely exciting.
            </p>
            <p>
              Our approach is plant-forward rather than restrictive. It is food designed for everyone at the
              table—whether they eat plant-based every day or simply enjoy something delicious.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-20 border-t border-line pt-14 md:mt-28">
          <p className="display text-[clamp(2.25rem,6vw,5rem)] font-medium">
            Dairy-free should never mean <span className="italic text-beet">flavour-free.</span>
          </p>
          <p className="display mt-4 text-[clamp(2.25rem,6vw,5rem)] font-medium text-ink/55">
            And wholefood should never mean <span className="italic text-tomato">dull.</span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function Philosophy() {
  return (
    <section id="philosophy" className="bg-ink py-24 text-paper md:py-36">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <SectionLabel className="text-mustard">How we work</SectionLabel>
              <h2 className="display mt-6 text-5xl font-medium md:text-7xl">
                Our food <span className="italic">philosophy</span>
              </h2>
            </Reveal>
          </div>
        </div>
        <ol className="lg:col-span-7 lg:col-start-6">
          {philosophy.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={i * 0.04}
              className="grid gap-4 border-t border-paper/15 py-10 last:border-b sm:grid-cols-[5rem_1fr]"
            >
              <span className="font-display text-2xl italic text-mustard">0{i + 1}</span>
              <div>
                <h3 className="font-display text-3xl leading-tight md:text-4xl">{item.title}</h3>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-paper/70">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

function AdelaideHills() {
  return (
    <section className="relative overflow-hidden pb-48 pt-24 md:pb-64 md:pt-36">
      <div className="container-x relative z-10 grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <SectionLabel className="text-moss">Where we are from</SectionLabel>
          <h2 className="display mt-6 text-5xl font-medium md:text-7xl">
            From the edge of the <span className="italic text-olive">Adelaide Hills</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="space-y-6 text-lg leading-relaxed text-ink/80 lg:col-span-5 lg:col-start-8 lg:pt-16">
          <p>
            Foods From The Edge is produced in South Australia by people who understand that good food is built from
            the inside out.
          </p>
          <p>Quality ingredients matter. Good recipes matter. But consistency, care and disciplined production matter too.</p>
          <p>
            Our products are made by <strong className="font-semibold text-ink">Dips 2 U</strong>, supported by{" "}
            <strong className="font-semibold text-ink">NextBite Brands</strong> as we develop Foods From The Edge for
            more retailers, foodservice customers and tables across Australia and New Zealand.
          </p>
          <p className="font-display text-2xl italic leading-snug text-ink">
            We are building the brand patiently: starting with distinctive products, making them well and allowing
            trust to grow one repeat purchase at a time.
          </p>
        </Reveal>
      </div>
      <Hills className="absolute inset-x-0 bottom-0 h-40 w-full md:h-60" />
    </section>
  )
}

function Hills({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1440 240" preserveAspectRatio="none" className={className} aria-hidden="true">
      <path d="M0 120c160-60 300-80 460-40s280 70 440 10 340-90 540-30v180H0z" fill="#B4B37A" opacity="0.55" />
      <path d="M0 170c200-50 360-40 520 0s320 40 500-20 300-40 420 0v110H0z" fill="#6B7F3A" />
      <path d="M0 210c240-30 420-20 620 5s380 10 560-15 200-5 260 5v35H0z" fill="#33482A" />
    </svg>
  )
}

function Retailers() {
  return (
    <section id="retailers" className="bg-paper-2 py-24 md:py-36">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <SectionLabel className="text-moss">For retailers</SectionLabel>
          <h2 className="display mt-6 text-5xl font-medium md:text-6xl">
            A range with a clear <span className="italic text-beet">reason to exist</span>
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-ink/80">
            Foods From The Edge brings together wholefood ingredients, distinctive flavour and accessible plant-forward
            eating.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            We are interested in sustainable distribution, not distribution for its own sake.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            That means working with retail partners to establish the right range, support trial, measure product
            performance and build repeatable sales.
          </p>
          <EnquiryLink type="retail" className="btn btn-dark mt-10">
            Enquire about stocking the range
            <ArrowRight size={18} aria-hidden="true" />
          </EnquiryLink>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
          <div className="rounded-3xl bg-paper p-8 md:p-10">
            <p className="font-display text-2xl">The range has been designed to offer:</p>
            <ul className="mt-6 divide-y divide-line">
              {retailerPoints.map((point) => (
                <li key={point} className="flex items-start gap-4 py-4 text-lg">
                  <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-moss text-paper">
                    <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Foodservice() {
  return (
    <section id="foodservice" className="bg-beet py-24 text-paper md:py-36">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <SectionLabel className="text-paper/70">For foodservice</SectionLabel>
            <h2 className="display mt-6 text-5xl font-medium md:text-7xl">
              More than something for the <span className="italic">side of the plate</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8 lg:pt-16">
            <p className="text-lg leading-relaxed text-paper/85">
              Our dips, dressings and condiments can be used across:
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {foodserviceUses.map((use, i) => (
            <Reveal
              as="li"
              key={use}
              delay={i * 0.04}
              className="flex items-center gap-4 rounded-2xl border border-paper/20 px-6 py-5 transition-colors hover:bg-paper/10"
            >
              <span className="font-display text-sm italic text-paper/60">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-display text-xl md:text-2xl">{use}</span>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-14 flex flex-col gap-6 border-t border-paper/20 pt-10 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-lg leading-relaxed text-paper/85">
            Contact us to discuss foodservice formats, commercial pack sizes and product applications.
          </p>
          <EnquiryLink type="foodservice" className="btn btn-light shrink-0">
            Foodservice enquiries
            <ArrowRight size={18} aria-hidden="true" />
          </EnquiryLink>
        </Reveal>
      </div>
    </section>
  )
}

function NearTheEdge() {
  const lines = [
    "Where a dip becomes a sauce.",
    "Where vegetables become the best part of the plate.",
    "Where plant-forward food is chosen for flavour—not obligation.",
  ]
  return (
    <section className="py-24 md:py-40">
      <div className="container-x text-center">
        <Reveal>
          <h2 className="display mx-auto max-w-5xl text-[clamp(2.75rem,8vw,6.5rem)] font-medium">
            Good food lives <span className="italic text-tomato">near the edge</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-ink/75">
            The edge is where familiar ingredients meet unexpected ideas.
          </p>
        </Reveal>
        <ul className="mx-auto mt-14 max-w-3xl">
          {lines.map((line, i) => (
            <Reveal as="li" key={line} delay={i * 0.08} className="border-t border-line py-6 font-display text-2xl italic md:text-3xl">
              {line}
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-10">
          <p className="text-lg font-medium">That is where you will find us.</p>
          <p className="mt-10 text-2xl text-ink md:text-4xl">
            <Wordmark />
          </p>
          <p className="mt-3 font-display text-lg italic text-ink/60">Wholefood flavour. Made differently.</p>
        </Reveal>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="bg-ink py-24 text-paper md:py-36">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <SectionLabel className="text-mustard">Contact us</SectionLabel>
          <h2 className="display mt-6 text-5xl font-medium md:text-7xl">
            Let&apos;s <span className="italic">talk</span>
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-paper/80">
            Interested in stocking Foods From The Edge, using our products in foodservice or working with us as a
            distribution partner?
          </p>
          <p className="mt-4 text-lg text-paper">We would be pleased to hear from you.</p>

          <dl className="mt-12 divide-y divide-paper/15 border-y border-paper/15">
            <div className="py-5">
              <dt className="eyebrow text-paper/55">Retail and distribution</dt>
              <dd className="mt-2 font-display text-2xl">NextBite Brands</dd>
            </div>
            <div className="py-5">
              <dt className="eyebrow text-paper/55">Manufacturing and foodservice</dt>
              <dd className="mt-2 font-display text-2xl">Dips 2 U Pty Ltd</dd>
            </div>
            <div className="py-5">
              <dt className="eyebrow text-paper/55">Origin</dt>
              <dd className="mt-2 font-display text-2xl italic">Made in South Australia</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <EnquiryForm />
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-ink pb-10 text-paper">
      <div className="container-x border-t border-paper/15 pt-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <a href="#top" className="text-2xl md:text-3xl" aria-label="Back to top">
              <Wordmark tone="paper" />
            </a>
            <p className="mt-3 font-display italic text-paper/60">Wholefood flavour. Made differently.</p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-paper/70">
            {range.map((g) => (
              <a key={g.id} href={`#${g.id}`} className="link-underline hover:text-paper">
                {g.title}
              </a>
            ))}
            <a href="#retailers" className="link-underline hover:text-paper">Retailers</a>
            <a href="#foodservice" className="link-underline hover:text-paper">Foodservice</a>
            <a href="#contact" className="link-underline hover:text-paper">Contact</a>
          </nav>
        </div>
        <p className="mt-12 text-sm text-paper/50">
          © {new Date().getFullYear()} Foods From The Edge. Made in South Australia.
        </p>
      </div>
    </footer>
  )
}
