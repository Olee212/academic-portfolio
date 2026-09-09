import { GraduationCap, Cpu, Users } from 'lucide-react'
import { education, skills } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function EducationSkills() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Education */}
        <div>
          <SectionHeading kicker="Education" title="Academic Background" />
          <div className="space-y-5">
            {education.map((edu, i) => (
              <Reveal key={edu.degree} delay={i * 70}>
                <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-5">
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md bg-secondary text-accent">
                    <GraduationCap className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-medium text-pretty text-foreground">{edu.degree}</h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">{edu.org}</p>
                    <p className="mt-1.5 text-sm font-medium text-accent">{edu.result}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <SectionHeading kicker="Skills" title="Technical & Soft Skills" />

          <Reveal>
            <h3 className="flex items-center gap-2 text-sm font-medium tracking-wide text-muted-foreground uppercase">
              <Cpu className="size-4 text-accent" aria-hidden="true" />
              Technical
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {skills.technical.map((s) => (
                <li
                  key={s}
                  className="rounded-md border border-border bg-card px-3 py-1.5 text-sm text-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80}>
            <h3 className="mt-8 flex items-center gap-2 text-sm font-medium tracking-wide text-muted-foreground uppercase">
              <Users className="size-4 text-accent" aria-hidden="true" />
              Soft Skills
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {skills.soft.map((s) => (
                <li
                  key={s}
                  className="rounded-md bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-8 rounded-md border border-border bg-secondary/50 p-4 text-sm leading-relaxed text-muted-foreground">
              {skills.instructorNote}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
