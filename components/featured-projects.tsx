import Image from 'next/image'
import { featured } from '@/lib/data'
import { withBase } from '@/lib/utils'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function FeaturedProjects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <SectionHeading
        kicker="Featured Work"
        title="Research & Applied Projects"
        description="Selected projects spanning civic-scale AI systems, instrumentation research, and applied computer vision."
      />

      <div className="space-y-8 md:space-y-12">
        {featured.map((project, i) => (
          <Reveal key={project.title} delay={i * 60}>
            <article className="grid gap-0 overflow-hidden rounded-xl border border-border bg-card md:grid-cols-5">
              <a
                href={withBase(project.image || '/placeholder.svg')}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} — open full image`}
                className={`group relative block aspect-video bg-secondary md:col-span-2 ${
                  i % 2 === 1 ? 'md:order-2' : ''
                }`}
              >
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={`${project.title} — project visual`}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-contain p-3"
                />
                <span className="absolute right-3 bottom-3 rounded-md bg-primary/85 px-2 py-1 text-xs font-medium text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
                  View full image
                </span>
              </a>

              <div className="p-6 md:col-span-3 md:p-8">
                <p className="text-sm font-medium text-accent">{project.subtitle}</p>
                <h3 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-balance">
                  {project.title}
                </h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mt-5 border-t border-border pt-4 text-sm font-medium text-foreground">
                  <span className="text-muted-foreground">Impact — </span>
                  {project.outcome}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
