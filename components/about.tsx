import { about } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <SectionHeading kicker="About" title="Research Statement" />

      <div className="grid gap-10 md:grid-cols-3 md:gap-14">
        <div className="md:col-span-2">
          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className="text-pretty text-base leading-relaxed text-foreground/85 md:text-lg">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120} className="md:col-span-1">
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
              Focus Areas
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {about.focusAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-md bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
