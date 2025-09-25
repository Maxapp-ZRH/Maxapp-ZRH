import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/assets/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/assets/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/assets/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/assets/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/assets/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/assets/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/assets/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/assets/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/assets/images/clients/unseal/logo-light.svg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe technology is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function TechStack() {
  const technologies = [
    { name: 'React', icon: '/src/assets/images/tech-stack/react.svg' },
    { name: 'Next.js', icon: '/src/assets/images/tech-stack/nextjs.svg' },
    {
      name: 'TypeScript',
      icon: '/src/assets/images/tech-stack/typescript.svg',
    },
    { name: 'Node.js', icon: '/src/assets/images/tech-stack/nodejs.svg' },
    {
      name: 'PostgreSQL',
      icon: '/src/assets/images/tech-stack/postgresql.svg',
    },
    { name: 'MongoDB', icon: '/src/assets/images/tech-stack/mongodb.svg' },
    { name: 'AWS', icon: '/src/assets/images/tech-stack/aws.svg' },
    { name: 'Docker', icon: '/src/assets/images/tech-stack/docker.svg' },
    { name: 'GraphQL', icon: '/src/assets/images/tech-stack/graphql.svg' },
    {
      name: 'Tailwind CSS',
      icon: '/src/assets/images/tech-stack/tailwind.svg',
    },
    { name: 'Framer Motion', icon: '/src/assets/images/tech-stack/framer.svg' },
    { name: 'Prisma', icon: '/src/assets/images/tech-stack/prisma.svg' },
  ]

  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-40 lg:py-32">
      <Container>
        <FadeIn className="text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Our Tech Stack
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            We use modern technologies to build fast, scalable, and maintainable
            applications
          </p>
        </FadeIn>

        <FadeInStagger className="mt-16">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {technologies.map((tech) => (
              <FadeIn key={tech.name} className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-800 transition hover:bg-neutral-700">
                  <Image
                    src={tech.icon}
                    alt={`${tech.name} logo`}
                    width={32}
                    height={32}
                    className="h-8 w-8"
                  />
                </div>
                <span className="mt-3 text-sm font-medium text-white">
                  {tech.name}
                </span>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

function Hero() {
  return (
    <Container className="mt-24 sm:mt-32 md:mt-56">
      <FadeIn className="max-w-3xl">
        <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
          Award-winning development studio based in Denmark.
        </h1>
        <p className="mt-6 text-xl text-neutral-600">
          We are a development studio working at the intersection of design and
          technology. It&apos;s a really busy intersection though — a lot of our
          staff have been involved in hit and runs.
        </p>
      </FadeIn>
    </Container>
  )
}

export default async function Home() {
  const caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <RootLayout>
      <Hero />

      <Container className="mt-16">
        <StatList>
          <StatListItem value="50+" label="Projects completed" />
          <StatListItem value="25+" label="Happy clients" />
          <StatListItem value="99%" label="Client satisfaction" />
        </StatList>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user&apos;s microphone without triggering
        one of those annoying permission dialogs.
      </Testimonial>

      <TechStack />

      <ContactSection />
    </RootLayout>
  )
}
