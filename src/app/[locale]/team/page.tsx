import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageAngelaFisher from '@/assets/images/team/angela-fisher.jpg'
import imageBenjaminRussel from '@/assets/images/team/benjamin-russel.jpg'
import imageBlakeReid from '@/assets/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/assets/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/assets/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/assets/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/assets/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/assets/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/assets/images/team/leonard-krasner.jpg'
import imageLeslieAlexander from '@/assets/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/assets/images/team/michael-foster.jpg'
import imageWhitneyFrancis from '@/assets/images/team/whitney-francis.jpg'
import { loadArticles } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

function Values() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro eyebrow="Our values" title="What drives us forward" invert>
        <p>
          We believe in building not just great products, but great
          relationships with our clients and within our team.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Excellence" invert>
            We strive for excellence in every project, pushing boundaries and
            delivering solutions that exceed expectations.
          </GridListItem>
          <GridListItem title="Innovation" invert>
            We embrace cutting-edge technologies and creative approaches to
            solve complex problems in unique ways.
          </GridListItem>
          <GridListItem title="Collaboration" invert>
            We believe the best solutions come from working together, both with
            our clients and within our diverse team.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        image: { src: imageLeslieAlexander },
      },
      {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        image: { src: imageMichaelFoster },
      },
      {
        name: 'Dries Vincent',
        role: 'Partner & Business Relations',
        image: { src: imageDriesVincent },
      },
    ],
  },
  {
    title: 'Development Team',
    people: [
      {
        name: 'Chelsea Hagon',
        role: 'Senior Developer',
        image: { src: imageChelseaHagon },
      },
      {
        name: 'Benjamin Russel',
        role: 'Senior Developer',
        image: { src: imageBenjaminRussel },
      },
      {
        name: 'Angela Fisher',
        role: 'Front-end Developer',
        image: { src: imageAngelaFisher },
      },
    ],
  },
  {
    title: 'Design & UX',
    people: [
      {
        name: 'Emma Dorsey',
        role: 'Senior Designer',
        image: { src: imageEmmaDorsey },
      },
      {
        name: 'Leonard Krasner',
        role: 'VP, User Experience',
        image: { src: imageLeonardKrasner },
      },
    ],
  },
  {
    title: 'Operations',
    people: [
      {
        name: 'Kathryn Murphy',
        role: 'VP, Human Resources',
        image: { src: imageKathrynMurphy },
      },
      {
        name: 'Whitney Francis',
        role: 'Content Specialist',
        image: { src: imageWhitneyFrancis },
      },
      {
        name: 'Jeffrey Webb',
        role: 'Account Coordinator',
        image: { src: imageJeffreyWebb },
      },
      {
        name: 'Blake Reid',
        role: 'Junior Copywriter',
        image: { src: imageBlakeReid },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Our Team',
  description:
    'Meet the talented individuals behind Maxapp ZRH. Our diverse team of developers, designers, and strategists work together to deliver exceptional digital solutions.',
}

export default async function TeamPage() {
  const blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <RootLayout>
      <PageIntro eyebrow="Our team" title="Meet the people behind Maxapp ZRH">
        <p>
          We&apos;re a diverse group of passionate professionals who believe in
          the power of technology to transform businesses and create meaningful
          experiences.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Our team combines years of experience in web development, design,
            and digital strategy to deliver solutions that not only meet your
            needs but exceed your expectations.
          </p>
          <p>
            From our leadership team&apos;s strategic vision to our
            developers&apos; technical expertise and our designers&apos;
            creative flair, every member of our team plays a crucial role in
            bringing your digital vision to life.
          </p>
        </div>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="15+" label="Team members" />
          <StatListItem value="50+" label="Projects completed" />
          <StatListItem value="5+" label="Years of experience" />
        </StatList>
      </Container>

      <Values />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Stay updated with our latest insights on web development, design trends, and digital transformation strategies."
        pages={blogArticles}
      />

      <ContactSection />
    </RootLayout>
  )
}
