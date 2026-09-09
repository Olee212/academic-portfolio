import { Mail, Phone, Download, ArrowUpRight, UserRound } from 'lucide-react'
import { profile, references, referencesNote } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { LinkedinIcon } from '@/components/icons'
import { SectionHeading } from '@/components/section-heading'

export function ReferencesFooter() {
  return (
    <>
      {/* References */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading kicker="References" title="Academic References" />
        <div className="grid gap-4 md:grid-cols-2">
          {references.map((ref, i) => (
            <Reveal key={ref.name} delay={i * 70}>
              <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary text-accent">
                  <UserRound className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-medium text-foreground">{ref.name}</p>
                  <p className="text-sm text-muted-foreground">{ref.title}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={140}>
          <p className="mt-5 text-sm text-muted-foreground">{referencesNote}</p>
        </Reveal>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <Reveal>
            <p className="text-sm font-medium tracking-wide text-accent uppercase">
              Get in touch
            </p>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold tracking-tight text-balance md:text-4xl">
              Open to PhD opportunities for Fall 2027.
            </h2>
            <p className="mt-4 max-w-xl text-pretty leading-relaxed text-primary-foreground/70">
              I welcome conversations with faculty and admissions committees about device
              fabrication, 2D materials, and applied hardware–AI research.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <FooterLink
                href={`mailto:${profile.contacts.email}`}
                icon={<Mail className="size-4" aria-hidden="true" />}
                label={profile.contacts.email}
              />
              <FooterLink
                href={`tel:${profile.contacts.phone.replace(/\s/g, '')}`}
                icon={<Phone className="size-4" aria-hidden="true" />}
                label={profile.contacts.phone}
              />
              <FooterLink
                href={profile.contacts.linkedin}
                icon={<LinkedinIcon className="size-4" />}
                label="LinkedIn"
                external
              />
            </div>
          </Reveal>

          <Reveal delay={160}>
            <a
              href={profile.cvUrl}
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              <Download className="size-4" aria-hidden="true" />
              Download CV
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </Reveal>

          <div className="mt-14 border-t border-primary-foreground/15 pt-6 text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  )
}

function FooterLink({
  href,
  icon,
  label,
  external,
}: {
  href: string
  icon: React.ReactNode
  label: string
  external?: boolean
}) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/20 px-4 py-2 text-sm text-primary-foreground/90 transition-colors hover:border-accent hover:text-accent"
    >
      {icon}
      {label}
    </a>
  )
}
