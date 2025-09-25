import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of Service for Maxapp ZRH. Please read these terms carefully before using our services.',
}

export default function Terms() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Legal" title="Terms of Service">
        <p>
          These terms govern your use of our services. Please read them
          carefully.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <FadeIn>
          <div className="mx-auto max-w-4xl">
            {/* Table of Contents */}
            <div className="mb-12 rounded-2xl bg-neutral-50 p-8">
              <h3 className="mb-6 font-display text-xl font-semibold text-neutral-900">
                Table of Contents
              </h3>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  'Acceptance of Terms',
                  'Description of Service',
                  'User Responsibilities',
                  'Intellectual Property',
                  'Payment Terms',
                  'Limitation of Liability',
                  'Indemnification',
                  'Termination',
                  'Governing Law',
                  'Changes to Terms',
                  'Contact Information',
                ].map((item, index) => (
                  <a
                    key={item}
                    href={`#section-${index + 1}`}
                    className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
                  >
                    {index + 1}. {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Terms Content */}
            <div className="prose prose-neutral max-w-none">
              <section id="section-1" className="mb-12 scroll-mt-24">
                <h2 className="mb-4 font-display text-2xl font-semibold text-neutral-900">
                  1. Acceptance of Terms
                </h2>
                <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-neutral-200">
                  <p className="text-neutral-700">
                    By accessing and using the services provided by Maxapp ZRH
                    (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you
                    accept and agree to be bound by the terms and provision of
                    this agreement. If you do not agree to abide by the above,
                    please do not use this service.
                  </p>
                </div>
              </section>

              <section id="section-2" className="mb-12 scroll-mt-24">
                <h2 className="mb-4 font-display text-2xl font-semibold text-neutral-900">
                  2. Description of Service
                </h2>
                <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-neutral-200">
                  <p className="text-neutral-700">
                    Maxapp ZRH provides web development, application
                    development, and digital consulting services. We reserve the
                    right to modify or discontinue the service (or any part
                    thereof) temporarily or permanently with or without notice.
                  </p>
                </div>
              </section>

              <section id="section-3" className="mb-12 scroll-mt-24">
                <h2 className="mb-4 font-display text-2xl font-semibold text-neutral-900">
                  3. User Responsibilities
                </h2>
                <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-neutral-200">
                  <p className="mb-4 text-neutral-700">You agree to:</p>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start">
                      <span className="mt-1 mr-3 h-1.5 w-1.5 rounded-full bg-neutral-400"></span>
                      Provide accurate and complete information when required
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1 mr-3 h-1.5 w-1.5 rounded-full bg-neutral-400"></span>
                      Use our services only for lawful purposes
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1 mr-3 h-1.5 w-1.5 rounded-full bg-neutral-400"></span>
                      Not interfere with or disrupt our services
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1 mr-3 h-1.5 w-1.5 rounded-full bg-neutral-400"></span>
                      Respect intellectual property rights
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1 mr-3 h-1.5 w-1.5 rounded-full bg-neutral-400"></span>
                      Maintain the confidentiality of any account credentials
                    </li>
                  </ul>
                </div>
              </section>

              <section id="section-4" className="mb-12 scroll-mt-24">
                <h2 className="mb-4 font-display text-2xl font-semibold text-neutral-900">
                  4. Intellectual Property
                </h2>
                <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-neutral-200">
                  <p className="text-neutral-700">
                    All content, trademarks, service marks, trade names, logos,
                    and other intellectual property displayed on our website or
                    created as part of our services remain the property of
                    Maxapp ZRH or our licensors. You may not use, reproduce, or
                    distribute any content without our written permission.
                  </p>
                </div>
              </section>

              <section id="section-5" className="mb-12 scroll-mt-24">
                <h2 className="mb-4 font-display text-2xl font-semibold text-neutral-900">
                  5. Payment Terms
                </h2>
                <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-neutral-200">
                  <p className="text-neutral-700">
                    Payment terms will be specified in individual service
                    agreements. All fees are non-refundable unless otherwise
                    specified. We reserve the right to change our pricing with
                    30 days&apos; notice.
                  </p>
                </div>
              </section>

              <section id="section-6" className="mb-12 scroll-mt-24">
                <h2 className="mb-4 font-display text-2xl font-semibold text-neutral-900">
                  6. Limitation of Liability
                </h2>
                <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-neutral-200">
                  <p className="text-neutral-700">
                    To the maximum extent permitted by law, Maxapp ZRH shall not
                    be liable for any indirect, incidental, special,
                    consequential, or punitive damages, including without
                    limitation, loss of profits, data, use, goodwill, or other
                    intangible losses, resulting from your use of our services.
                  </p>
                </div>
              </section>

              <section id="section-7" className="mb-12 scroll-mt-24">
                <h2 className="mb-4 font-display text-2xl font-semibold text-neutral-900">
                  7. Indemnification
                </h2>
                <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-neutral-200">
                  <p className="text-neutral-700">
                    You agree to defend, indemnify, and hold harmless Maxapp ZRH
                    and its officers, directors, employees, and agents from and
                    against any claims, damages, obligations, losses,
                    liabilities, costs, or debt, and expenses (including
                    attorney&apos;s fees) arising from your use of our services
                    or violation of these terms.
                  </p>
                </div>
              </section>

              <section id="section-8" className="mb-12 scroll-mt-24">
                <h2 className="mb-4 font-display text-2xl font-semibold text-neutral-900">
                  8. Termination
                </h2>
                <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-neutral-200">
                  <p className="text-neutral-700">
                    We may terminate or suspend your access to our services
                    immediately, without prior notice or liability, for any
                    reason whatsoever, including without limitation if you
                    breach the terms.
                  </p>
                </div>
              </section>

              <section id="section-9" className="mb-12 scroll-mt-24">
                <h2 className="mb-4 font-display text-2xl font-semibold text-neutral-900">
                  9. Governing Law
                </h2>
                <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-neutral-200">
                  <p className="text-neutral-700">
                    These terms shall be governed by and construed in accordance
                    with Swiss law, without regard to its conflict of law
                    provisions. Any disputes arising from these terms shall be
                    subject to the exclusive jurisdiction of the courts of
                    Zurich, Switzerland.
                  </p>
                </div>
              </section>

              <section id="section-10" className="mb-12 scroll-mt-24">
                <h2 className="mb-4 font-display text-2xl font-semibold text-neutral-900">
                  10. Changes to Terms
                </h2>
                <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-neutral-200">
                  <p className="text-neutral-700">
                    We reserve the right to modify these terms at any time. We
                    will notify users of any material changes by posting the new
                    terms on this page. Your continued use of our services after
                    any such changes constitutes your acceptance of the new
                    terms.
                  </p>
                </div>
              </section>

              <section id="section-11" className="mb-12 scroll-mt-24">
                <h2 className="mb-4 font-display text-2xl font-semibold text-neutral-900">
                  11. Contact Information
                </h2>
                <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-neutral-200">
                  <p className="mb-4 text-neutral-700">
                    If you have any questions about these Terms of Service,
                    please contact us at:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="mr-3 text-sm font-medium text-neutral-500">
                        Email:
                      </span>
                      <a
                        href="mailto:legal@maxappzrh.com"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        legal@maxappzrh.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-3 text-sm font-medium text-neutral-500">
                        Address:
                      </span>
                      <span className="text-neutral-700">
                        Maxapp ZRH, Zurich, Switzerland
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              <div className="mt-12 rounded-lg bg-neutral-50 p-6 text-center">
                <p className="text-sm text-neutral-500">
                  Last updated:{' '}
                  {new Date().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      <ContactSection />
    </RootLayout>
  )
}
