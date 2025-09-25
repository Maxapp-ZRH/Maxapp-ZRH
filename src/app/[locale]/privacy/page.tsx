import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
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
        <FadeInStagger faster>
          <div className="max-w-4xl">
            <div className="space-y-16">
              <FadeIn>
                <section>
                  <h2 className="mb-6 text-2xl font-bold text-neutral-900">
                    1. Information We Collect
                  </h2>
                  <p className="mb-6 text-lg text-neutral-700">
                    We collect information in the following ways:
                  </p>

                  <h3 className="mb-4 text-xl font-semibold text-neutral-900">
                    1.1 Information You Provide
                  </h3>
                  <List>
                    <ListItem>
                      Contact information (name, email, phone number)
                    </ListItem>
                    <ListItem>
                      Business information (company name, job title)
                    </ListItem>
                    <ListItem>Project requirements and specifications</ListItem>
                    <ListItem>Communication preferences</ListItem>
                    <ListItem>
                      Payment information (processed securely through
                      third-party providers)
                    </ListItem>
                  </List>

                  <h3 className="mt-8 mb-4 text-xl font-semibold text-neutral-900">
                    1.2 Information We Collect Automatically
                  </h3>
                  <List>
                    <ListItem>
                      Website usage data (pages visited, time spent, clicks)
                    </ListItem>
                    <ListItem>
                      Device information (browser type, operating system, IP
                      address)
                    </ListItem>
                    <ListItem>
                      Cookies and similar tracking technologies
                    </ListItem>
                    <ListItem>Analytics data to improve our services</ListItem>
                  </List>
                </section>
              </FadeIn>

              <FadeIn>
                <section>
                  <h2 className="mb-6 text-2xl font-bold text-neutral-900">
                    2. How We Use Your Information
                  </h2>
                  <p className="mb-6 text-lg text-neutral-700">
                    We use your information for the following purposes:
                  </p>
                  <List>
                    <ListItem>Providing and improving our services</ListItem>
                    <ListItem>
                      Communicating with you about projects and services
                    </ListItem>
                    <ListItem>
                      Processing payments and managing accounts
                    </ListItem>
                    <ListItem>
                      Marketing and promotional communications (with your
                      consent)
                    </ListItem>
                    <ListItem>
                      Legal compliance and regulatory requirements
                    </ListItem>
                    <ListItem>
                      Website analytics and performance optimization
                    </ListItem>
                  </List>
                </section>
              </FadeIn>

              <FadeIn>
                <section>
                  <h2 className="mb-6 text-2xl font-bold text-neutral-900">
                    3. Legal Basis for Processing (GDPR)
                  </h2>
                  <p className="mb-6 text-lg text-neutral-700">
                    We process your personal data based on the following legal
                    grounds:
                  </p>
                  <List>
                    <ListItem>
                      <strong>Consent:</strong> When you have given clear
                      consent for specific processing
                    </ListItem>
                    <ListItem>
                      <strong>Contract:</strong> When processing is necessary
                      for contract performance
                    </ListItem>
                    <ListItem>
                      <strong>Legitimate Interest:</strong> For business
                      operations and service improvement
                    </ListItem>
                    <ListItem>
                      <strong>Legal Obligation:</strong> When required by
                      applicable laws
                    </ListItem>
                  </List>
                </section>
              </FadeIn>

              <FadeIn>
                <section>
                  <h2 className="mb-6 text-2xl font-bold text-neutral-900">
                    4. Data Sharing and Disclosure
                  </h2>
                  <p className="mb-6 text-lg text-neutral-700">
                    We may share your information with:
                  </p>
                  <List>
                    <ListItem>
                      Service providers who assist in our operations
                    </ListItem>
                    <ListItem>
                      Payment processors for transaction processing
                    </ListItem>
                    <ListItem>Legal authorities when required by law</ListItem>
                    <ListItem>
                      Business partners with your explicit consent
                    </ListItem>
                  </List>
                  <div className="mt-6 rounded-lg bg-green-50 p-6">
                    <p className="font-medium text-green-800">
                      <span className="mr-2">✓</span>
                      We do not sell, rent, or trade your personal information
                      to third parties.
                    </p>
                  </div>
                </section>
              </FadeIn>

              <FadeIn>
                <section>
                  <h2 className="mb-6 text-2xl font-bold text-neutral-900">
                    5. Data Security
                  </h2>
                  <p className="mb-6 text-lg text-neutral-700">
                    We implement appropriate technical and organizational
                    measures to protect your personal information against
                    unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  <List>
                    <ListItem>
                      <strong>Encryption:</strong> Data in transit and at rest
                    </ListItem>
                    <ListItem>
                      <strong>Security Assessments:</strong> Regular updates and
                      monitoring
                    </ListItem>
                    <ListItem>
                      <strong>Access Controls:</strong> Authentication
                      mechanisms
                    </ListItem>
                    <ListItem>
                      <strong>Staff Training:</strong> Data protection practices
                    </ListItem>
                  </List>
                </section>
              </FadeIn>

              <FadeIn>
                <section>
                  <h2 className="mb-6 text-2xl font-bold text-neutral-900">
                    6. Data Retention
                  </h2>
                  <p className="text-lg text-neutral-700">
                    We retain your personal information only for as long as
                    necessary to fulfill the purposes outlined in this policy,
                    comply with legal obligations, resolve disputes, and enforce
                    our agreements.
                  </p>
                </section>
              </FadeIn>

              <FadeIn>
                <section>
                  <h2 className="mb-6 text-2xl font-bold text-neutral-900">
                    7. Your Rights
                  </h2>
                  <p className="mb-6 text-lg text-neutral-700">
                    Depending on your location, you may have the following
                    rights:
                  </p>

                  <h3 className="mb-4 text-xl font-semibold text-neutral-900">
                    7.1 GDPR Rights (EU/EEA residents)
                  </h3>
                  <List>
                    <ListItem>Right of access to your personal data</ListItem>
                    <ListItem>
                      Right to rectification of inaccurate data
                    </ListItem>
                    <ListItem>
                      Right to erasure (&quot;right to be forgotten&quot;)
                    </ListItem>
                    <ListItem>Right to restrict processing</ListItem>
                    <ListItem>Right to data portability</ListItem>
                    <ListItem>Right to object to processing</ListItem>
                    <ListItem>
                      Rights related to automated decision-making
                    </ListItem>
                  </List>

                  <h3 className="mt-8 mb-4 text-xl font-semibold text-neutral-900">
                    7.2 Swiss Data Protection Rights
                  </h3>
                  <List>
                    <ListItem>
                      Right to information about data processing
                    </ListItem>
                    <ListItem>Right to access your personal data</ListItem>
                    <ListItem>Right to correction of inaccurate data</ListItem>
                    <ListItem>Right to deletion of personal data</ListItem>
                    <ListItem>Right to data portability</ListItem>
                  </List>

                  <h3 className="mt-8 mb-4 text-xl font-semibold text-neutral-900">
                    7.3 Indian Data Protection Rights (DPDP Act 2023)
                  </h3>
                  <List>
                    <ListItem>
                      Right to confirmation and access to personal data
                    </ListItem>
                    <ListItem>
                      Right to correction and erasure of personal data
                    </ListItem>
                    <ListItem>Right to data portability</ListItem>
                    <ListItem>
                      Right to grievance redressal through Data Protection Board
                    </ListItem>
                    <ListItem>
                      Right to nominate another individual for data processing
                    </ListItem>
                    <ListItem>Right to withdraw consent at any time</ListItem>
                  </List>
                </section>
              </FadeIn>

              <FadeIn>
                <section>
                  <h2 className="mb-6 text-2xl font-bold text-neutral-900">
                    8. Cookies and Tracking Technologies
                  </h2>
                  <p className="mb-6 text-lg text-neutral-700">
                    We use cookies and similar technologies to enhance your
                    browsing experience, analyze website traffic, and
                    personalize content. You can control cookie preferences
                    through our cookie banner and browser settings.
                  </p>

                  <h3 className="mb-4 text-xl font-semibold text-neutral-900">
                    8.1 Types of Cookies We Use
                  </h3>
                  <List>
                    <ListItem>
                      <strong>Essential Cookies:</strong> Necessary for website
                      functionality
                    </ListItem>
                    <ListItem>
                      <strong>Analytics Cookies:</strong> Help us understand
                      website usage
                    </ListItem>
                    <ListItem>
                      <strong>Marketing Cookies:</strong> Used for targeted
                      advertising (with consent)
                    </ListItem>
                    <ListItem>
                      <strong>Preference Cookies:</strong> Remember your
                      settings and preferences
                    </ListItem>
                  </List>
                </section>
              </FadeIn>

              <FadeIn>
                <section>
                  <h2 className="mb-6 text-2xl font-bold text-neutral-900">
                    9. International Data Transfers
                  </h2>
                  <p className="mb-6 text-lg text-neutral-700">
                    Your personal information may be transferred to and
                    processed in countries other than your own. We ensure
                    appropriate safeguards are in place, including:
                  </p>
                  <List>
                    <ListItem>Standard Contractual Clauses (SCCs)</ListItem>
                    <ListItem>
                      Adequacy decisions by relevant authorities
                    </ListItem>
                    <ListItem>
                      Binding Corporate Rules where applicable
                    </ListItem>
                    <ListItem>
                      <strong>Switzerland-India Transfers:</strong> We use SCCs
                      and additional safeguards for data transfers between our
                      Swiss headquarters and Indian operations
                    </ListItem>
                    <ListItem>
                      <strong>Data Localization:</strong> We comply with Indian
                      data localization requirements where applicable
                    </ListItem>
                  </List>
                </section>
              </FadeIn>

              <FadeIn>
                <section>
                  <h2 className="mb-6 text-2xl font-bold text-neutral-900">
                    10. Children&apos;s Privacy
                  </h2>
                  <p className="text-lg text-neutral-700">
                    Our services are not directed to children under 16. We do
                    not knowingly collect personal information from children
                    under 16. If we become aware of such collection, we will
                    take steps to delete the information promptly.
                  </p>
                </section>
              </FadeIn>

              <FadeIn>
                <section>
                  <h2 className="mb-6 text-2xl font-bold text-neutral-900">
                    11. Changes to This Policy
                  </h2>
                  <p className="text-lg text-neutral-700">
                    We may update this Privacy Policy from time to time. We will
                    notify you of any material changes by posting the new policy
                    on this page and updating the &quot;Last updated&quot; date.
                  </p>
                </section>
              </FadeIn>

              <FadeIn>
                <section>
                  <h2 className="mb-6 text-2xl font-bold text-neutral-900">
                    12. Contact Information
                  </h2>
                  <p className="mb-6 text-lg text-neutral-700">
                    If you have any questions about this Privacy Policy or wish
                    to exercise your rights, please contact us:
                  </p>
                  <div className="rounded-lg bg-neutral-50 p-6">
                    <div className="space-y-2 text-neutral-700">
                      <div>
                        <strong>Email:</strong>{' '}
                        <a
                          href="mailto:privacy@maxappzrh.com"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          privacy@maxappzrh.com
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
              </FadeIn>

              <FadeIn>
                <section>
                  <h2 className="mb-6 text-2xl font-bold text-neutral-900">
                    13. Data Protection Officer
                  </h2>
                  <p className="mb-6 text-lg text-neutral-700">
                    For GDPR-related inquiries, you can contact our Data
                    Protection Officer:
                  </p>
                  <div className="rounded-lg bg-neutral-50 p-6">
                    <div className="space-y-2 text-neutral-700">
                      <div>
                        <strong>Email:</strong>{' '}
                        <a
                          href="mailto:dpo@maxappzrh.com"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          dpo@maxappzrh.com
                        </a>
                      </div>
                      <div>
                        <strong>Phone:</strong> +41 44 123 45 69
                      </div>
                    </div>
                  </div>
                </section>
              </FadeIn>

              <FadeIn>
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
              </FadeIn>
            </div>
          </div>
        </FadeInStagger>
      </Container>

      <ContactSection />
    </RootLayout>
  )
}
