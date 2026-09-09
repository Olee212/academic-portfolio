import { Award, Star } from 'lucide-react'
import { awards } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

export function Awards() {
  return (
    <section id="awards" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading kicker="Recognition" title="Awards & Honors" />

        <div className="grid gap-4 md:grid-cols-2">
          {awards.map((award, i) => (
            <Reveal key={award.title} delay={i * 60}>
              <div
                className={cn(
                  'flex h-full items-start gap-4 rounded-lg border bg-card p-5',
                  award.highlight
                    ? 'border-accent bg-accent/5'
                    : 'border-border',
                )}
              >
                <span
                  className={cn(
                    'mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md',
                    award.highlight
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-secondary text-accent',
                  )}
                >
                  {award.highlight ? (
                    <Star className="size-4" aria-hidden="true" />
                  ) : (
                    <Award className="size-4" aria-hidden="true" />
                  )}
                </span>
                <div>
                  <p className="font-medium text-pretty text-foreground">{award.title}</p>
                  {award.note ? (
                    <p className="mt-1 text-sm text-muted-foreground">{award.note}</p>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
