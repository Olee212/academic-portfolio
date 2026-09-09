import { Reveal } from '@/components/reveal'

/**
 * Shared section heading: small kicker label + serif title.
 * Keeps every section visually consistent.
 */
export function SectionHeading({
  kicker,
  title,
  description,
}: {
  kicker: string
  title: string
  description?: string
}) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <p className="mb-3 flex items-center gap-2 text-sm font-medium tracking-wide text-accent uppercase">
        <span className="h-px w-8 bg-accent" aria-hidden="true" />
        {kicker}
      </p>
      <h2 className="font-serif text-3xl font-semibold tracking-tight text-balance md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
