import { type Metadata } from 'next'
import {
  Building2,
  CreditCard,
  ShoppingCart,
  GraduationCap,
  Cloud,
  Factory,
} from 'lucide-react'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { StylizedImage } from '@/components/StylizedImage'
import { RootLayout } from '@/components/RootLayout'
import imageLaptop from '@/assets/images/laptop.jpg'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'We help you identify, explore and respond to new opportunities. Specializing in web development, application development, e-commerce, and custom content management.',
}

const industries = [
  {
    name: 'Healthcare',
    description:
      'HIPAA-compliant solutions for medical practices, patient portals, and healthcare management systems.',
    icon: Building2,
  },
  {
    name: 'Fintech',
    description:
      'Secure financial applications, payment processing, and banking solutions with regulatory compliance.',
    icon: CreditCard,
  },
  {
    name: 'E-commerce',
    description:
      'Scalable online stores, marketplace integrations, and inventory management systems.',
    icon: ShoppingCart,
  },
  {
    name: 'Education',
    description:
      'Learning management systems, educational platforms, and student engagement tools.',
    icon: GraduationCap,
  },
  {
    name: 'SaaS',
    description:
      'Cloud-based software solutions, subscription management, and multi-tenant architectures.',
    icon: Cloud,
  },
  {
    name: 'Manufacturing',
    description:
      'IoT integration, supply chain management, and production optimization systems.',
    icon: Factory,
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

export default function Services() {
  return (
    <RootLayout>
      <PageIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
      >
        <p>
          As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="50+" label="Projects completed" />
          <StatListItem value="25+" label="Happy clients" />
          <StatListItem value="99%" label="Client satisfaction" />
        </StatList>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title="Web development">
              We specialise in crafting beautiful, high quality marketing pages.
              The rest of the website will be a shell that uses lorem ipsum
              everywhere.
            </ListItem>
            <ListItem title="Application development">
              We have a team of skilled developers who are experts in the latest
              app frameworks, like Angular 1 and Google Web Toolkit.
            </ListItem>
            <ListItem title="E-commerce">
              We are at the forefront of modern e-commerce development. Which
              mainly means adding your logo to the Shopify store template
              we&apos;ve used for the past six years.
            </ListItem>
            <ListItem title="Custom content management">
              At Studio we understand the importance of having a robust and
              customised CMS. That&apos;s why we run all of our client projects
              out of a single, enormous Joomla instance.
            </ListItem>
          </List>
        </div>
      </Container>

      <Industries />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Learn more about our services and industry insights through our latest blog posts and case studies."
        pages={blogArticles}
      />

      <ContactSection />
    </RootLayout>
  )
}

function Industries() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Industries"
        title="We serve clients across diverse industries"
        invert
      >
        <p>
          Our expertise spans multiple sectors, delivering tailored solutions
          that meet industry-specific requirements and compliance standards.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger>
          <div className="grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const IconComponent = industry.icon
              return (
                <FadeIn key={industry.name} className="group flex">
                  <div className="flex w-full flex-col rounded-3xl bg-neutral-800 p-8 transition hover:bg-neutral-700">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-700 text-white">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="font-display text-xl font-semibold text-white">
                        {industry.name}
                      </h3>
                    </div>
                    <p className="mt-4 flex-1 text-neutral-400">
                      {industry.description}
                    </p>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </FadeInStagger>
      </Container>
    </div>
  )
}
