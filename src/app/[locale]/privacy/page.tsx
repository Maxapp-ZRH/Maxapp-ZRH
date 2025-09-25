import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Maxapp ZRH. Learn how we collect, use, and protect your personal information in compliance with GDPR and Swiss data protection laws.',
}

export default function Privacy() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Legal" title="Privacy Policy">
        <p>
          We are committed to protecting your privacy and ensuring the security
          of your personal information in compliance with applicable data
          protection laws.
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
                  'Information We Collect',
                  'How We Use Your Information',
                  'Legal Basis for Processing',
                  'Data Sharing and Disclosure',
                  'Data Security',
                  'Data Retention',
                  'Your Rights',
                  'Cookies and Tracking',
                  'International Data Transfers',
                  "Children's Privacy",
                  'Changes to This Policy',
                  'Contact Information',
                  'Data Protection Officer',
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

            {/* Privacy Policy Content */}
            <div className="prose prose-neutral max-w-none">
              <section id="section-1" className="mb-12 scroll-mt-24">
                <h2 className="mb-4 font-display text-2xl font-semibold text-neutral-900">
                  1. Information We Collect
                </h2>
                <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-neutral-200">
                  <p className="mb-4 text-neutral-700">
                    We collect information in the following ways:
                  </p>

                  <h3 className="mb-3 font-display text-lg font-semibold text-neutral-900">
                    1.1 Information You Provide
                  </h3>
                  <ul className="mb-6 space-y-2 text-neutral-700">
                    <li className="flex items-start">
                      <span className="mt-1 mr-3 h-1.5 w-1.5 rounded-full bg-neutral-400"></span>
                      Contact information (name, email, phone number)
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1 mr-3 h-1.5 w-1.5 rounded-full bg-neutral-400"></span>
                      Business information (company name, job title)
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1 mr-3 h-1.5 w-1.5 rounded-full bg-neutral-400"></span>
                      Project requirements and specifications
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1 mr-3 h-1.5 w-1.5 rounded-full bg-neutral-400"></span>
                      Communication preferences
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1 mr-3 h-1.5 w-1.5 rounded-full bg-neutral-400"></span>
                      Payment information (processed securely through
                      third-party providers)
                    </li>
                  </ul>

                  <h3 className="mb-3 font-display text-lg font-semibold text-neutral-900">
                    1.2 Information We Collect Automatically
                  </h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start">
                      <span className="mt-1 mr-3 h-1.5 w-1.5 rounded-full bg-neutral-400"></span>
                      Website usage data (pages visited, time spent, clicks)
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1 mr-3 h-1.5 w-1.5 rounded-full bg-neutral-400"></span>
                      Device information (browser type, operating system, IP
                      address)
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1 mr-3 h-1.5 w-1.5 rounded-full bg-neutral-400"></span>
                      Cookies and similar tracking technologies
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1 mr-3 h-1.5 w-1.5 rounded-full bg-neutral-400"></span>
                      Analytics data to improve our services
                    </li>
                  </ul>
                </div>
              </section>

              <h2>2. How We Use Your Information</h2>
              <p>We use your information for the following purposes:</p>
              <ul>
                <li>Providing and improving our services</li>
                <li>Communicating with you about projects and services</li>
                <li>Processing payments and managing accounts</li>
                <li>
                  Marketing and promotional communications (with your consent)
                </li>
                <li>Legal compliance and regulatory requirements</li>
                <li>Website analytics and performance optimization</li>
              </ul>

              <h2>3. Legal Basis for Processing (GDPR)</h2>
              <p>
                We process your personal data based on the following legal
                grounds:
              </p>
              <ul>
                <li>
                  <strong>Consent:</strong> When you have given clear consent
                  for specific processing
                </li>
                <li>
                  <strong>Contract:</strong> When processing is necessary for
                  contract performance
                </li>
                <li>
                  <strong>Legitimate Interest:</strong> For business operations
                  and service improvement
                </li>
                <li>
                  <strong>Legal Obligation:</strong> When required by applicable
                  laws
                </li>
              </ul>

              <h2>4. Data Sharing and Disclosure</h2>
              <p>We may share your information with:</p>
              <ul>
                <li>Service providers who assist in our operations</li>
                <li>Payment processors for transaction processing</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your explicit consent</li>
              </ul>
              <p>
                We do not sell, rent, or trade your personal information to
                third parties.
              </p>

              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. These measures
                include:
              </p>
              <ul>
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Staff training on data protection practices</li>
              </ul>

              <h2>6. Data Retention</h2>
              <p>
                We retain your personal information only for as long as
                necessary to fulfill the purposes outlined in this policy,
                comply with legal obligations, resolve disputes, and enforce our
                agreements.
              </p>

              <h2>7. Your Rights</h2>
              <p>
                Depending on your location, you may have the following rights:
              </p>

              <h3>7.1 GDPR Rights (EU/EEA residents)</h3>
              <ul>
                <li>Right of access to your personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure (&quot;right to be forgotten&quot;)</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Rights related to automated decision-making</li>
              </ul>

              <h3>7.2 Swiss Data Protection Rights</h3>
              <ul>
                <li>Right to information about data processing</li>
                <li>Right to access your personal data</li>
                <li>Right to correction of inaccurate data</li>
                <li>Right to deletion of personal data</li>
                <li>Right to data portability</li>
              </ul>

              <h3>7.3 Indian Data Protection Rights</h3>
              <ul>
                <li>Right to confirmation and access</li>
                <li>Right to correction and erasure</li>
                <li>Right to data portability</li>
                <li>Right to grievance redressal</li>
              </ul>

              <h2>8. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar technologies to enhance your browsing
                experience, analyze website traffic, and personalize content.
                You can control cookie preferences through our cookie banner and
                browser settings.
              </p>

              <h3>8.1 Types of Cookies We Use</h3>
              <ul>
                <li>
                  <strong>Essential Cookies:</strong> Necessary for website
                  functionality
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand website
                  usage
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> Used for targeted
                  advertising (with consent)
                </li>
                <li>
                  <strong>Preference Cookies:</strong> Remember your settings
                  and preferences
                </li>
              </ul>

              <h2>9. International Data Transfers</h2>
              <p>
                Your personal information may be transferred to and processed in
                countries other than your own. We ensure appropriate safeguards
                are in place, including:
              </p>
              <ul>
                <li>Standard Contractual Clauses (SCCs)</li>
                <li>Adequacy decisions by relevant authorities</li>
                <li>Binding Corporate Rules where applicable</li>
              </ul>

              <h2>10. Children&apos;s Privacy</h2>
              <p>
                Our services are not directed to children under 16. We do not
                knowingly collect personal information from children under 16.
                If we become aware of such collection, we will take steps to
                delete the information promptly.
              </p>

              <h2>11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any material changes by posting the new policy on
                this page and updating the &quot;Last updated&quot; date.
              </p>

              <h2>12. Contact Information</h2>
              <p>
                If you have any questions about this Privacy Policy or wish to
                exercise your rights, please contact us:
              </p>
              <ul>
                <li>Email: privacy@Maxappzrh.com</li>
                <li>Phone: +41 44 123 45 67</li>
                <li>
                  Address: Maxapp ZRH, Bahnhofstrasse 1, 8001 Zurich,
                  Switzerland
                </li>
              </ul>

              <h2>13. Data Protection Officer</h2>
              <p>
                For GDPR-related inquiries, you can contact our Data Protection
                Officer:
              </p>
              <ul>
                <li>Email: dpo@Maxappzrh.com</li>
                <li>Phone: +41 44 123 45 69</li>
              </ul>

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
