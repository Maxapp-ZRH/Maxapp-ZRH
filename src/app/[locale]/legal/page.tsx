import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
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
      </PageIntro>

      <Container className="mt-16">
        <FadeIn>
          <div className="prose prose-neutral max-w-none">
            <h2>Company Information</h2>
            <div className="rounded-lg bg-neutral-50 p-6">
              <h3>Maxapp ZRH</h3>
              <p>
                <strong>Legal Name:</strong> Maxapp ZRH AG
              </p>
              <p>
                <strong>Registration Number:</strong> CHE-123.456.789
              </p>
              <p>
                <strong>VAT Number:</strong> CHE-123.456.789 MWST
              </p>
              <p>
                <strong>Registered Office:</strong> Zurich, Switzerland
              </p>
              <p>
                <strong>Business Address:</strong> Bahnhofstrasse 1, 8001
                Zurich, Switzerland
              </p>
              <p>
                <strong>Phone:</strong> +41 44 123 45 67
              </p>
              <p>
                <strong>Email:</strong> info@Maxappzrh.com
              </p>
            </div>

            <h2>Regulatory Compliance</h2>
            <p>
              Maxapp ZRH operates in compliance with Swiss and international
              regulations applicable to software development and digital
              services.
            </p>

            <h3>Swiss Data Protection Act (DPA)</h3>
            <p>
              We comply with the Swiss Federal Data Protection Act (FADP) and
              ensure that personal data is processed lawfully, fairly, and
              transparently.
            </p>

            <h3>GDPR Compliance</h3>
            <p>
              For our European clients and users, we adhere to the General Data
              Protection Regulation (GDPR) requirements, including:
            </p>
            <ul>
              <li>Lawful basis for processing personal data</li>
              <li>Data subject rights implementation</li>
              <li>Data protection by design and by default</li>
              <li>Privacy impact assessments where required</li>
              <li>Data breach notification procedures</li>
            </ul>

            <h3>Indian IT Act Compliance</h3>
            <p>
              For our Indian clients and users, we comply with the Information
              Technology Act, 2000 and related rules, including:
            </p>
            <ul>
              <li>Reasonable security practices and procedures</li>
              <li>Data localization requirements where applicable</li>
              <li>Grievance redressal mechanisms</li>
              <li>Intermediary guidelines compliance</li>
            </ul>

            <h2>Professional Indemnity</h2>
            <p>
              Maxapp ZRH maintains professional indemnity insurance to protect
              our clients and ourselves against claims arising from our
              professional services.
            </p>

            <h2>Intellectual Property Rights</h2>
            <p>
              All intellectual property rights in our services, including but
              not limited to software, designs, methodologies, and
              documentation, remain the property of Maxapp ZRH unless otherwise
              agreed in writing.
            </p>

            <h2>Dispute Resolution</h2>
            <p>
              Any disputes arising from our services shall be resolved through:
            </p>
            <ol>
              <li>Good faith negotiations between the parties</li>
              <li>Mediation through a mutually agreed mediator</li>
              <li>
                Arbitration under the Swiss Rules of International Arbitration
              </li>
              <li>Court proceedings in Zurich, Switzerland as a last resort</li>
            </ol>

            <h2>Force Majeure</h2>
            <p>
              Maxapp ZRH shall not be liable for any failure or delay in
              performance due to circumstances beyond our reasonable control,
              including but not limited to acts of God, natural disasters, war,
              terrorism, or government actions.
            </p>

            <h2>Severability</h2>
            <p>
              If any provision of our legal documents is found to be
              unenforceable or invalid, the remaining provisions shall remain in
              full force and effect.
            </p>

            <h2>Contact for Legal Matters</h2>
            <p>For legal inquiries, please contact our legal department:</p>
            <ul>
              <li>Email: legal@Maxappzrh.com</li>
              <li>Phone: +41 44 123 45 68</li>
              <li>
                Address: Maxapp ZRH Legal Department, Bahnhofstrasse 1, 8001
                Zurich, Switzerland
              </li>
            </ul>

            <p className="mt-8 text-sm text-neutral-500">
              Last updated:{' '}
              {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </FadeIn>
      </Container>

      <ContactSection />
    </RootLayout>
  )
}
