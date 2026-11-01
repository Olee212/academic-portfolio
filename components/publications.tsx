import { FileText } from 'lucide-react'
import { publications } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function Publications() {
  return (
    <section id="publications" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <SectionHeading kicker="Research Output" title="Publications & Manuscripts" />

      <ol className="space-y-4">
        {publications.map((pub, i) => (
          <Reveal as="li" key={pub.title} delay={i * 70}>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-5 md:p-6">
              <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md bg-secondary text-accent">
                <FileText className="size-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-pretty font-medium leading-relaxed text-foreground">
                  {pub.title}
                </p>
                {pub.authors ? <p className="mt-2 text-sm text-foreground">{pub.authors}</p> : null}
                {pub.affiliation ? (
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{pub.affiliation}</p>
                ) : null}
                {pub.status ? (
                  <p className="mt-3 text-sm font-medium text-accent">{pub.status}</p>
                ) : null}
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
