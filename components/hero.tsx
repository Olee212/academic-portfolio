import { Mail, Phone, Award, ArrowDown } from 'lucide-react'
import { profile } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { LinkedinIcon } from '@/components/icons'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground"
    >
      {/* Subtle grid texture — quiet backdrop, not a decorative gimmick. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 pt-32 pb-20 md:px-8 md:pt-40 md:pb-28">
        <Reveal delay={80}>
          <h1 className="max-w-4xl font-serif text-4xl font-semibold tracking-tight text-balance md:text-6xl">
            {profile.name}
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-5 max-w-3xl text-pretty text-base leading-relaxed text-primary-foreground/70 md:text-lg">
            {profile.title}
          </p>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl border-l-2 border-accent pl-4 text-pretty text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
            {profile.pitch}
          </p>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <ContactLink
              href={`mailto:${profile.contacts.email}`}
              icon={<Mail className="size-4" aria-hidden="true" />}
              label="Email"
            />
            <ContactLink
              href={`tel:${profile.contacts.phone.replace(/\s/g, '')}`}
              icon={<Phone className="size-4" aria-hidden="true" />}
              label="Phone"
            />
            <ContactLink
              href={profile.contacts.linkedin}
              icon={<LinkedinIcon className="size-4" />}
              label="LinkedIn"
              external
            />
          </div>
        </Reveal>

        <Reveal delay={320}>
          <a
            href="#about"
            className="mt-14 inline-flex items-center gap-2 text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
          >
            <ArrowDown className="size-4 animate-bounce" aria-hidden="true" />
            Explore research &amp; projects
          </a>
        </Reveal>
      </div>
    </section>
  )
}

function ContactLink({
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
