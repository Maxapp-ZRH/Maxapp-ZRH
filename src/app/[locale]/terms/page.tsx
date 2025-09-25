import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
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
        <div className="mt-4 text-sm text-neutral-500">
          Effective Date:{' '}
          {new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
      </PageIntro>

      <Container className="mt-16">
        <FadeIn>
          <div className="max-w-4xl">
            <div className="space-y-16">
              <section>
                <h2 className="mb-6 text-2xl font-bold text-neutral-900">
                  1. Acceptance of Terms
                </h2>
                <p className="text-lg text-neutral-700">
                  By accessing and using the services provided by Maxapp ZRH
                  (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you
                  accept and agree to be bound by the terms and provision of
                  this agreement. If you do not agree to abide by the above,
                  please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="mb-6 text-2xl font-bold text-neutral-900">
                  2. Description of Service
                </h2>
                <p className="text-lg text-neutral-700">
                  Maxapp ZRH provides web development, application development,
                  and digital consulting services. We reserve the right to
                  modify or discontinue the service (or any part thereof)
                  temporarily or permanently with or without notice.
                </p>
              </section>

              <section>
                <h2 className="mb-6 text-2xl font-bold text-neutral-900">
                  3. User Responsibilities
                </h2>
                <p className="mb-6 text-lg text-neutral-700">You agree to:</p>
                <List>
                  <ListItem>
                    Provide accurate and complete information when required
                  </ListItem>
                  <ListItem>Use our services only for lawful purposes</ListItem>
                  <ListItem>
                    Not interfere with or disrupt our services
                  </ListItem>
                  <ListItem>Respect intellectual property rights</ListItem>
                  <ListItem>
                    Maintain the confidentiality of any account credentials
                  </ListItem>
                </List>
              </section>

              <section>
                <h2 className="mb-6 text-2xl font-bold text-neutral-900">
                  4. Intellectual Property
                </h2>
                <p className="text-lg text-neutral-700">
                  All content, trademarks, service marks, trade names, logos,
                  and other intellectual property displayed on our website or
                  created as part of our services remain the property of Maxapp
                  ZRH or our licensors. You may not use, reproduce, or
                  distribute any content without our written permission.
                </p>
              </section>

              <section>
                <h2 className="mb-6 text-2xl font-bold text-neutral-900">
                  5. Payment Terms
                </h2>
                <p className="text-lg text-neutral-700">
                  Payment terms will be specified in individual service
                  agreements. All fees are non-refundable unless otherwise
                  specified. We reserve the right to change our pricing with 30
                  days&apos; notice.
                </p>
              </section>

              <section>
                <h2 className="mb-6 text-2xl font-bold text-neutral-900">
                  6. Limitation of Liability
                </h2>
                <p className="text-lg text-neutral-700">
                  To the maximum extent permitted by law, Maxapp ZRH shall not
                  be liable for any indirect, incidental, special,
                  consequential, or punitive damages, including without
                  limitation, loss of profits, data, use, goodwill, or other
                  intangible losses, resulting from your use of our services.
                </p>
              </section>

              <section>
                <h2 className="mb-6 text-2xl font-bold text-neutral-900">
                  7. Indemnification
                </h2>
                <p className="text-lg text-neutral-700">
                  You agree to defend, indemnify, and hold harmless Maxapp ZRH
                  and its officers, directors, employees, and agents from and
                  against any claims, damages, obligations, losses, liabilities,
                  costs, or debt, and expenses (including attorney&apos;s fees)
                  arising from your use of our services or violation of these
                  terms.
                </p>
              </section>

              <section>
                <h2 className="mb-6 text-2xl font-bold text-neutral-900">
                  8. Termination
                </h2>
                <p className="text-lg text-neutral-700">
                  We may terminate or suspend your access to our services
                  immediately, without prior notice or liability, for any reason
                  whatsoever, including without limitation if you breach the
                  terms.
                </p>
              </section>

              <section>
                <h2 className="mb-6 text-2xl font-bold text-neutral-900">
                  9. Governing Law
                </h2>
                <p className="text-lg text-neutral-700">
                  These terms shall be governed by and construed in accordance
                  with Swiss law, without regard to its conflict of law
                  provisions. Any disputes arising from these terms shall be
                  subject to the exclusive jurisdiction of the courts of Zurich,
                  Switzerland.
                </p>
              </section>

              <section>
                <h2 className="mb-6 text-2xl font-bold text-neutral-900">
                  10. Changes to Terms
                </h2>
                <p className="text-lg text-neutral-700">
                  We reserve the right to modify these terms at any time. We
                  will notify users of any material changes by posting the new
                  terms on this page. Your continued use of our services after
                  any such changes constitutes your acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="mb-6 text-2xl font-bold text-neutral-900">
                  11. Contact Information
                </h2>
                <p className="mb-6 text-lg text-neutral-700">
                  If you have any questions about these Terms of Service, please
                  contact us at:
                </p>
                <div className="rounded-lg bg-neutral-50 p-6">
                  <div className="space-y-2 text-neutral-700">
                    <div>
                      <strong>Email:</strong>{' '}
                      <a
                        href="mailto:legal@maxappzrh.com"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        legal@maxappzrh.com
                      </a>
                    </div>
                    <div>
                      <strong>Phone:</strong> +41 44 123 45 67
                    </div>
                    <div>
                      <strong>Address:</strong> Maxapp ZRH, Bahnhofstrasse 1,
                      8001 Zurich, Switzerland
                    </div>
                  </div>
                </div>
              </section>

              <div className="border-t border-neutral-200 pt-8">
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
