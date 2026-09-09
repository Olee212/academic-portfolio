'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { otherProjects } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const PREVIEW_COUNT = 6

export function OtherProjects() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? otherProjects : otherProjects.slice(0, PREVIEW_COUNT)
  const hasMore = otherProjects.length > PREVIEW_COUNT

  return (
    <section className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <Reveal>
          <h3 className="font-serif text-2xl font-semibold tracking-tight md:text-3xl">
            Other Projects
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Additional coursework and personal engineering projects.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => (
              <li
                key={p.title}
                className="rounded-lg border border-border bg-card p-4 transition-colors hover:border-accent/60"
              >
                <p className="font-medium text-foreground text-pretty">{p.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{p.note}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        {hasMore ? (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-8 inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent"
            aria-expanded={expanded}
          >
            {expanded ? 'Show fewer' : `Show all ${otherProjects.length} projects`}
            <ChevronDown
              className={cn('size-4 transition-transform', expanded && 'rotate-180')}
              aria-hidden="true"
            />
          </button>
        ) : null}
      </div>
    </section>
  )
}
