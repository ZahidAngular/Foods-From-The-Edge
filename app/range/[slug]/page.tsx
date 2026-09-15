import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { ProductGallery } from "@/components/ProductGallery"
import { allProducts } from "@/lib/content"

export const dynamicParams = false

export function generateStaticParams() {
  return allProducts.map((p) => ({ slug: p.slug }))
}

const find = (slug: string) => allProducts.find((p) => p.slug === slug)

export async function generateMetadata({ params }: PageProps<"/range/[slug]">): Promise<Metadata> {
  const product = find((await params).slug)
  if (!product) return {}
  return {
    title: `${product.name} | Foods From The Edge`,
    description: `${product.description} ${product.character}`,
  }
}

export default async function ProductPage({ params }: PageProps<"/range/[slug]">) {
  const product = find((await params).slug)
  if (!product) notFound()

  const { group } = product
  const index = allProducts.indexOf(product)
  const next = allProducts[(index + 1) % allProducts.length]
  const related = group.products.filter((p) => p.slug !== product.slug)
  const shots = [
    { ...product.image, label: product.tub ? "In a bowl" : "Bottle" },
    ...(product.tub ? [{ ...product.tub, label: "Tub" }] : []),
  ]

  return (
    <>
      <Header />
      <main className="pt-[72px]">
        <div className="container-x pb-20 pt-8 md:pb-28 md:pt-12">
          <nav aria-label="Breadcrumb" className="text-sm text-ink/60">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/#range" className="link-underline hover:text-ink">
                  Our Range
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href={`/#${group.id}`} className="link-underline hover:text-ink">
                  {group.title}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink">
                {product.name}
              </li>
            </ol>
          </nav>

          <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6">
              <div className="lg:sticky lg:top-28">
                <ProductGallery name={product.name} shots={shots} />
              </div>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <p className="eyebrow text-moss">{group.title}</p>
              <h1 className="display mt-4 text-5xl font-medium md:text-6xl">{product.name}</h1>
              <p className="mt-5 font-display text-2xl italic text-olive">{product.overview}</p>

              {product.highlights.length > 0 && (
                <ul className="mt-6 flex flex-wrap gap-2">
                  {product.highlights.map((h) => (
                    <li key={h} className="rounded-full bg-mustard/25 px-4 py-1.5 text-sm font-semibold text-ink">
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-8 space-y-4 border-t border-line pt-8 text-lg leading-relaxed text-ink/80">
                <p>{product.description}</p>
                <p className="font-display text-xl italic leading-snug text-ink">{product.character}</p>
                {product.serving && <p>{product.serving}</p>}
              </div>

              <div className="mt-8 border-t border-line pt-8">
                <h2 className="font-display text-2xl">
                  {product.name} is:
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {product.dietary.map((d) => (
                    <li
                      key={d}
                      className="flex items-center gap-2 rounded-full border border-ink/15 bg-paper-2 px-4 py-2 text-sm font-medium capitalize"
                    >
                      <Check size={16} strokeWidth={2.5} className="text-moss" aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-line pt-8">
                <h2 className="font-display text-2xl">Ingredients include</h2>
                <p className="mt-3 leading-relaxed text-ink/80">{product.ingredients}</p>
                <p className="mt-4 rounded-2xl bg-paper-2 px-4 py-3 text-sm leading-relaxed text-ink/70">
                  Always check the product label for the most current ingredients and allergen information.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/#contact" className="btn btn-dark">
                  Enquire about stocking the range
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <Link href="/#contact" className="btn border-[1.5px] border-ink/25 hover:border-ink">
                  Foodservice enquiries
                </Link>
              </div>
            </div>
          </div>
        </div>

        <section aria-labelledby="related-title" className="bg-paper-2 py-20 md:py-28">
          <div className="container-x">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 id="related-title" className="display text-4xl font-medium md:text-5xl">
                More {group.title.toLowerCase()}
              </h2>
              <Link href="/#range" className="link-underline inline-flex items-center gap-2 text-sm font-medium">
                <ArrowLeft size={16} aria-hidden="true" />
                Back to the full range
              </Link>
            </div>

            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <li key={p.slug}>
                  <Link href={`/range/${p.slug}`} className="group block overflow-hidden rounded-3xl bg-paper">
                    <div className="relative aspect-[3/2] overflow-hidden bg-white">
                      <Image
                        src={p.image.src}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
                        className={p.image.height > p.image.width ? "object-contain py-3" : "object-cover"}
                      />
                    </div>
                    <div className="p-6">
                      <p className="font-display text-2xl">{p.name}</p>
                      <p className="mt-2 text-sm text-ink/70">{p.overview}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href={`/range/${next.slug}`}
              className="mt-12 flex items-center justify-between gap-6 rounded-3xl bg-ink px-8 py-7 text-paper transition-colors hover:bg-olive"
            >
              <span>
                <span className="eyebrow text-paper/60">Next product</span>
                <span className="mt-2 block font-display text-3xl">{next.name}</span>
              </span>
              <ArrowRight size={28} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer base="/" />
    </>
  )
}
