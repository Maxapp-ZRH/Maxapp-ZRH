import { type Metadata } from 'next'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { loadArticles } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Balance your passion with your passion for life."
        invert
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Loyalty" invert>
            Our team has been with us since the beginning because none of them
            are allowed to have LinkedIn profiles.
          </GridListItem>
          <GridListItem title="Trust" invert>
            We don’t care when our team works just as long as they are working
            every waking second.
          </GridListItem>
          <GridListItem title="Compassion" invert>
            You never know what someone is going through at home and we make
            sure to never find out.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function TeamReference() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <Border />
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 pt-16 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-neutral-950">
              Meet our team
            </h2>
            <p className="mt-6 text-base text-neutral-600">
              Our diverse team of developers, designers, and strategists work
              together to deliver exceptional digital solutions. Each member
              brings unique expertise and passion to every project.
            </p>
            <div className="mt-8">
              <Button href="/team">View our team</Button>
            </div>
          </div>
          <div className="lg:ml-16">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-lg font-semibold text-neutral-950">
                  Leadership
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  Strategic vision and business development
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-neutral-950">
                  Development
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  Full-stack developers and technical experts
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-neutral-950">
                  Design & UX
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  Creative designers and user experience specialists
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-neutral-950">
                  Operations
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  Project management and client relations
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  const blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <RootLayout>
      <PageIntro eyebrow="About us" title="Our strength is collaboration">
        <p>
          We believe that our strength lies in our collaborative approach, which
          puts our clients at the center of everything we do.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Studio was started by three friends who noticed that developer
            studios were charging clients double what an in-house team would
            cost. Since the beginning, we have been committed to doing things
            differently by charging triple instead.
          </p>
          <p>
            At Studio, we’re more than just colleagues — we’re a family. This
            means we pay very little and expect people to work late. We want our
            employees to bring their whole selves to work. In return, we just
            ask that they keep themselves there until at least 6:30pm.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Underpaid employees" />
          <StatListItem value="52" label="Placated clients" />
          <StatListItem value="$25M" label="Invoices billed" />
        </StatList>
      </Container>

      <Culture />

      <TeamReference />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Our team of experienced designers and developers has just one thing on their mind; working on your ideas to draw a smile on the face of your users worldwide. From conducting Brand Sprints to UX Design."
        pages={blogArticles}
      />

      <ContactSection />
    </RootLayout>
  )
}
