import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { ThesisSection } from '@/components/thesis-section'
import { HandSyncSection } from '@/components/handsync-section'
import { FeaturedProjects } from '@/components/featured-projects'
import { OtherProjects } from '@/components/other-projects'
import { Publications } from '@/components/publications'
import { Experience } from '@/components/experience'
import { EducationSkills } from '@/components/education-skills'
import { Awards } from '@/components/awards'
import { ReferencesFooter } from '@/components/references-footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ThesisSection />
        <HandSyncSection />
        <FeaturedProjects />
        <Experience />
        <Publications />
        <OtherProjects />
        <EducationSkills />
        <Awards />
        <ReferencesFooter />
      </main>
    </>
  )
}
