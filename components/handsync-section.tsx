import { ArrowUpRight, Check, Sparkles } from 'lucide-react'
import { handsync } from '@/lib/data'
import { withBase } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

export function HandSyncSection() {
  return (
    <section
      id="startup"
      className="relative overflow-hidden border-y border-border bg-primary text-primary-foreground"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-accent/15 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="flex items-center gap-2 text-sm font-medium tracking-wide text-accent uppercase">
            <Sparkles className="size-4" aria-hidden="true" />
            {handsync.label}
          </p>
        </Reveal>

        <div className="mt-8 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal delay={60}>
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-4xl font-semibold tracking-tight md:text-5xl">
                  {handsync.wordmark}
                </span>
                <span className="text-sm text-primary-foreground/50">
                  ({handsync.fullName})
                </span>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-4 text-pretty text-lg text-accent">{handsync.tagline}</p>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-5 text-pretty leading-relaxed text-primary-foreground/75">
                {handsync.description}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <ul className="mt-7 space-y-3">
                {handsync.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-primary-foreground/90">
                    <Check className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-pretty">{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={300}>
              <a
                href={handsync.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                Visit handsync.org
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <a
              href={handsync.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mx-auto block aspect-3/4 max-w-sm overflow-hidden rounded-xl border border-primary-foreground/15 bg-primary-foreground/5"
            >
              <img
                src={withBase(handsync.image || '/placeholder.svg')}
                alt="HandSync privacy-first gloves worn on a hand that convert sign language to speech"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
