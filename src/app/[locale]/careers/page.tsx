import { type Metadata } from 'next'
import Link from 'next/link'
import {
  MapPin,
  Clock,
  Users,
  Briefcase,
  Heart,
  Zap,
  Globe,
  Code,
  Palette,
  BarChart3,
} from 'lucide-react'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { StylizedImage } from '@/components/StylizedImage'
import { RootLayout } from '@/components/RootLayout'
import imageMeeting from '@/assets/images/meeting.jpg'

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join our team of passionate developers and designers. We offer competitive benefits, flexible work arrangements, and opportunities to work on cutting-edge projects.',
}

const openPositions = [
  {
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Remote / Copenhagen',
    type: 'Full-time',
    description:
      'Lead the development of modern web applications using React, Next.js, and TypeScript.',
    requirements: [
      '5+ years of frontend development experience',
      'Expert knowledge of React, Next.js, and TypeScript',
      'Experience with modern CSS frameworks (Tailwind CSS)',
      'Strong understanding of web performance optimization',
      'Experience with testing frameworks (Jest, Cypress)',
    ],
  },
  {
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Remote / Copenhagen',
    type: 'Full-time',
    description:
      'Build end-to-end solutions from database design to user interface implementation.',
    requirements: [
      '3+ years of full-stack development experience',
      'Proficiency in React, Node.js, and PostgreSQL',
      'Experience with cloud platforms (AWS, Vercel)',
      'Knowledge of API design and development',
      'Familiarity with DevOps practices',
    ],
  },
  {
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Remote / Copenhagen',
    type: 'Full-time',
    description:
      'Create beautiful, intuitive user experiences that delight our clients and their users.',
    requirements: [
      '4+ years of UI/UX design experience',
      'Proficiency in Figma, Sketch, or Adobe Creative Suite',
      'Strong portfolio showcasing user-centered design',
      'Experience with design systems and component libraries',
      'Knowledge of accessibility best practices',
    ],
  },
  {
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Remote / Copenhagen',
    type: 'Full-time',
    description:
      'Manage our infrastructure and deployment pipelines to ensure reliable, scalable systems.',
    requirements: [
      '3+ years of DevOps experience',
      'Expert knowledge of AWS, Docker, and Kubernetes',
      'Experience with CI/CD pipelines (GitHub Actions, GitLab CI)',
      'Knowledge of monitoring and logging tools',
      'Scripting skills (Bash, Python, or similar)',
    ],
  },
]

const benefits = [
  {
    title: 'Flexible Work',
    description:
      'Work from anywhere with flexible hours that fit your lifestyle.',
    icon: Globe,
  },
  {
    title: 'Learning Budget',
    description:
      'Annual budget for courses, conferences, and professional development.',
    icon: Code,
  },
  {
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance and wellness programs.',
    icon: Heart,
  },
  {
    title: 'Modern Tools',
    description: 'Latest hardware and software to help you do your best work.',
    icon: Zap,
  },
  {
    title: 'Team Events',
    description: 'Regular team building activities and company retreats.',
    icon: Users,
  },
  {
    title: 'Career Growth',
    description: 'Clear career paths and mentorship opportunities.',
    icon: BarChart3,
  },
]

const values = [
  {
    title: 'Innovation',
    description:
      'We embrace new technologies and creative solutions to solve complex problems.',
    icon: Zap,
  },
  {
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and open communication.',
    icon: Users,
  },
  {
    title: 'Quality',
    description:
      'We take pride in delivering exceptional work that exceeds expectations.',
    icon: Palette,
  },
  {
    title: 'Growth',
    description:
      "We invest in our team members' personal and professional development.",
    icon: BarChart3,
  },
]

const blogArticles = [
  {
    href: '/blog/future-of-web-development',
    title: 'The Future of Web Development',
    description:
      'Exploring emerging technologies and trends shaping the future of web development.',
    date: '2024-01-15',
  },
  {
    href: '/blog/a-short-guide-to-component-naming',
    title: 'A Short Guide to Component Naming',
    description:
      'Best practices for naming React components and maintaining clean code architecture.',
    date: '2024-01-10',
  },
  {
    href: '/blog/3-lessons-we-learned-going-back-to-the-office',
    title: '3 Lessons We Learned Going Back to the Office',
    description:
      'Insights from our transition back to in-person collaboration and hybrid work models.',
    date: '2024-01-05',
  },
]

export default function Careers() {
  return (
    <RootLayout>
      <PageIntro
        eyebrow="Careers"
        title="Join our team of passionate developers and designers"
      >
        <p>
          We&apos;re building the future of web development, one project at a
          time. Join us and help create amazing digital experiences for our
          clients.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="15+" label="Team members" />
          <StatListItem value="50+" label="Projects completed" />
          <StatListItem value="100%" label="Remote-friendly" />
        </StatList>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                src={imageMeeting}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title="Remote-first culture">
              Work from anywhere in the world with flexible hours that fit your
              lifestyle.
            </ListItem>
            <ListItem title="Competitive compensation">
              We offer competitive salaries, equity options, and performance
              bonuses.
            </ListItem>
            <ListItem title="Professional development">
              Annual learning budget for courses, conferences, and skill
              development.
            </ListItem>
            <ListItem title="Modern technology stack">
              Work with the latest tools and technologies in a supportive
              environment.
            </ListItem>
          </List>
        </div>
      </Container>

      <OpenPositions />

      <Benefits />

      <Values />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Learn more about our culture, technology, and industry insights through our latest blog posts."
        pages={blogArticles}
      />

      <ContactSection />
    </RootLayout>
  )
}

function OpenPositions() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Open Positions"
        title="Current job openings"
        invert
      >
        <p>
          We&apos;re always looking for talented individuals to join our team.
          Check out our current openings and apply today.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger>
          <div className="space-y-8">
            {openPositions.map((position) => (
              <FadeIn key={position.title} className="group">
                <div className="rounded-3xl bg-neutral-800 p-8 transition hover:bg-neutral-700">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-semibold text-white">
                        {position.title}
                      </h3>
                      <div className="mt-2 flex flex-wrap gap-4 text-sm text-neutral-400">
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {position.type}
                        </span>
                      </div>
                      <p className="mt-4 text-neutral-300">
                        {position.description}
                      </p>
                      <div className="mt-4">
                        <h4 className="font-semibold text-white">
                          Requirements:
                        </h4>
                        <ul className="mt-2 space-y-1">
                          {position.requirements.map((req, index) => (
                            <li
                              key={index}
                              className="text-sm text-neutral-400"
                            >
                              • {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <Link
                        href="/contact"
                        className="inline-flex items-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function Benefits() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro eyebrow="Benefits" title="Why work with us">
        <p>
          We offer a comprehensive benefits package designed to support your
          personal and professional growth.
        </p>
      </SectionIntro>
      <div className="mt-16">
        <FadeInStagger>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => {
              const IconComponent = benefit.icon
              return (
                <FadeIn key={benefit.title} className="group">
                  <div className="rounded-3xl bg-neutral-100 p-8 transition hover:bg-neutral-200">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-950 text-white">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-display text-xl font-semibold text-neutral-950">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-neutral-600">
                      {benefit.description}
                    </p>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </FadeInStagger>
      </div>
    </Container>
  )
}

function Values() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-40 lg:py-32">
      <SectionIntro eyebrow="Our Values" title="What we stand for" invert>
        <p>
          Our values guide everything we do, from how we work with clients to
          how we support each other as a team.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          {values.map((value) => {
            const IconComponent = value.icon
            return (
              <GridListItem key={value.title} title={value.title} invert>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-700 text-white">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <span className="text-lg font-semibold text-white">
                    {value.title}
                  </span>
                </div>
                {value.description}
              </GridListItem>
            )
          })}
        </GridList>
      </Container>
    </div>
  )
}
