import { thesis } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function ThesisSection() {
  return (
    <section id="thesis" className="border-y border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading kicker="Primary Research" title="Undergraduate Thesis" />
        <Reveal>
          <article className="rounded-xl border border-border bg-card p-6 md:p-10">
            <p className="mb-5 inline-flex rounded-md bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground">
              {thesis.status}
            </p>
            <h3 className="max-w-4xl font-serif text-2xl font-semibold leading-snug tracking-tight text-pretty md:text-3xl">
              {thesis.title}
            </h3>
            <p className="mt-5 font-medium text-foreground">{thesis.authors}</p>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              {thesis.affiliation}
            </p>
            <p className="mt-7 max-w-3xl text-pretty leading-relaxed text-foreground/85 md:text-lg">
              {thesis.description}
            </p>
            <ul aria-label="Thesis research areas" className="mt-6 flex flex-wrap gap-2">
              {thesis.focusAreas.map((area) => (
                <li key={area} className="rounded-md border border-border px-3 py-1.5 text-sm">
                  {area}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
