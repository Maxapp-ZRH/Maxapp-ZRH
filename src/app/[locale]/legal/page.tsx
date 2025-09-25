import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
  title: 'Legal Information',
  description:
    'Legal information and company details for Maxapp ZRH, including registration, compliance, and regulatory information.',
}

export default function Legal() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Legal" title="Legal Information">
        <p>
          Legal information, company details, and regulatory compliance for
          Maxapp ZRH.
        </p>
        <div className="mt-4 text-sm text-neutral-500">
          Last updated:{' '}
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
                  Company Information
                </h2>
                <div className="rounded-lg bg-neutral-50 p-6">
                  <div className="space-y-3 text-neutral-700">
                    <div>
                      <strong>Company Name:</strong> Maxsoft AG
                    </div>
                    <div>
                      <strong>Legal Form:</strong> Aktiengesellschaft (AG)
                    </div>
                    <div>
                      <strong>Registration Number:</strong> CHE-123.456.789
                    </div>
                    <div>
                      <strong>VAT Number:</strong> CHE-123.456.789 MWST
                    </div>
                    <div>
                      <strong>Registered Address:</strong> Birkenstrasse 49,
                      6343 Rotkreuz, Schweiz
                    </div>
                    <div>
                      <strong>Email:</strong>{' '}
                      <a
                        href="mailto:info@maxappzrh.com"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        info@maxappzrh.com
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="mb-6 text-2xl font-bold text-neutral-900">
                  Indian Operations
                </h2>
                <div className="rounded-lg bg-neutral-50 p-6">
                  <div className="space-y-3 text-neutral-700">
                    <div>
                      <strong>Indian Office:</strong> Maxapp
                    </div>
                    <div>
                      <strong>Address:</strong> 123A Triplicane High Road,
                      Triplicane, Tamil Nadu, Chennai 600 005
                    </div>
                    <div>
                      <strong>GST Number:</strong> 33AABCU9603R1Z5
                    </div>
                    <div>
                      <strong>PAN Number:</strong> AABCU9603R
                    </div>
                    <div>
                      <strong>Email:</strong>{' '}
                      <a
                        href="mailto:info@maxappzrh.com"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        info@maxappzrh.com
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="mb-6 text-2xl font-bold text-neutral-900">
                  Regulatory Compliance
                </h2>
                <p className="mb-6 text-lg text-neutral-700">
                  Maxapp ZRH operates in compliance with Swiss and international
                  regulations applicable to software development and digital
                  services.
                </p>

                <div className="grid gap-6 lg:grid-cols-3">
                  <div className="rounded-lg bg-blue-50 p-6">
                    <div className="mb-4 flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                        <span className="text-sm font-bold text-blue-600">
                          CH
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-blue-900">
                        Swiss DPA
                      </h3>
                    </div>
                    <p className="text-sm text-blue-700">
                      We comply with the Swiss Federal Data Protection Act
                      (FADP) and ensure that personal data is processed
                      lawfully, fairly, and transparently.
                    </p>
                  </div>

                  <div className="rounded-lg bg-purple-50 p-6">
                    <div className="mb-4 flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100">
                        <span className="text-sm font-bold text-purple-600">
                          EU
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-purple-900">
                        GDPR
                      </h3>
                    </div>
                    <p className="mb-3 text-sm text-purple-700">
                      For our European clients and users, we adhere to GDPR
                      requirements:
                    </p>
                    <ul className="space-y-1 text-xs text-purple-600">
                      <li>• Data minimization and purpose limitation</li>
                      <li>• Lawful basis for processing</li>
                      <li>• Individual rights protection</li>
                      <li>• Data breach notification</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-orange-50 p-6">
                    <div className="mb-4 flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100">
                        <span className="text-sm font-bold text-orange-600">
                          IN
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-orange-900">
                        DPDP Act 2023
                      </h3>
                    </div>
                    <p className="mb-3 text-sm text-orange-700">
                      For our Indian clients and users, we comply with the
                      Digital Personal Data Protection Act 2023:
                    </p>
                    <ul className="space-y-1 text-xs text-orange-600">
                      <li>• Lawful, fair, and transparent processing</li>
                      <li>• Purpose limitation and data minimization</li>
                      <li>• Accuracy and storage limitation</li>
                      <li>• Individual rights and consent management</li>
                      <li>• Data Protection Board compliance</li>
                      <li>• Cross-border data transfer safeguards</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="mb-6 text-2xl font-bold text-neutral-900">
                  Intellectual Property
                </h2>
                <p className="mb-6 text-lg text-neutral-700">
                  All intellectual property rights in our services, including
                  but not limited to software, designs, trademarks, and content,
                  are owned by Maxapp ZRH or our licensors.
                </p>
                <List>
                  <ListItem>Software and application code</ListItem>
                  <ListItem>Design elements and user interfaces</ListItem>
                  <ListItem>Trademarks and brand assets</ListItem>
                  <ListItem>
                    Documentation and technical specifications
                  </ListItem>
                  <ListItem>Proprietary methodologies and processes</ListItem>
                </List>
              </section>

              <section>
                <h2 className="mb-6 text-2xl font-bold text-neutral-900">
                  Limitation of Liability
                </h2>
                <p className="text-lg text-neutral-700">
                  To the maximum extent permitted by applicable law, Maxapp ZRH
                  shall not be liable for any indirect, incidental, special,
                  consequential, or punitive damages arising from the use of our
                  services, including but not limited to loss of profits, data,
                  or business opportunities.
                </p>
              </section>

              <section>
                <h2 className="mb-6 text-2xl font-bold text-neutral-900">
                  Governing Law and Jurisdiction
                </h2>
                <p className="text-lg text-neutral-700">
                  These legal terms and any disputes arising from them shall be
                  governed by Swiss law. Any legal proceedings shall be subject
                  to the exclusive jurisdiction of the courts of Zurich,
                  Switzerland.
                </p>
              </section>

              <section>
                <h2 className="mb-6 text-2xl font-bold text-neutral-900">
                  Contact Information
                </h2>
                <p className="mb-6 text-lg text-neutral-700">
                  For legal inquiries, compliance questions, or regulatory
                  matters, please contact us:
                </p>
                <div className="rounded-lg bg-neutral-50 p-6">
                  <div className="space-y-2 text-neutral-700">
                    <div>
                      <strong>Legal Department:</strong>{' '}
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
                    <div>
                      <strong>Business Hours:</strong> Monday - Friday, 9:00 AM
                      - 6:00 PM CET
                    </div>
                  </div>
                </div>
              </section>

              <div className="border-t border-neutral-200 pt-8">
                <p className="text-sm text-neutral-500">
                  This legal information is provided for general reference
                  purposes only and does not constitute legal advice.
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
