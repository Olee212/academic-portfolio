import { experience } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-border bg-secondary/40"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading kicker="Experience" title="Professional & Research Timeline" />

        <ol className="relative ml-3 border-l border-border">
          {experience.map((item, i) => (
            <Reveal key={`${item.role}-${item.period}`} delay={i * 70} as="li">
              <div className="relative pb-10 pl-8 last:pb-0">
                <span
                  className="absolute -left-[7px] top-1.5 size-3.5 rounded-full border-2 border-background bg-accent"
                  aria-hidden="true"
                />
                <p className="text-sm font-medium text-accent">{item.period}</p>
                <h3 className="mt-1 font-serif text-lg font-semibold tracking-tight">
                  {item.role}
                </h3>
                <p className="text-sm text-muted-foreground">{item.org}</p>
                <p className="mt-2 text-pretty leading-relaxed text-foreground/80">
                  {item.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
