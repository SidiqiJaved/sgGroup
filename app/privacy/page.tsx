import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Privacy Policy - Sidiqi Global Group',
  description: 'Privacy policy for Sidiqi Global Group website. Learn how we handle your data and protect your privacy.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main id="main-content" className="flex-1" role="main">
        <section className="py-16 md:py-24">
          <div className="max-w-[800px] mx-auto px-6">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-ink mb-6">
                Privacy Policy
              </h1>
              <p className="text-lg text-brand-grey">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-brand-ink mb-4">Overview</h2>
                  <p className="text-brand-grey leading-relaxed">
                    Sidiqi Global Group ("we," "our," or "us") is committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, and safeguard information when you visit our website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-brand-ink mb-4">Information We Collect</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium text-brand-ink mb-2">Automatically Collected Information</h3>
                      <p className="text-brand-grey leading-relaxed">
                        We may collect basic analytics data including page visits, referral sources, and general geographic location 
                        through standard web analytics tools. This information is anonymized and used solely for improving our website experience.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-brand-ink mb-2">Information You Provide</h3>
                      <p className="text-brand-grey leading-relaxed">
                        When you contact us through our contact form, we collect only the information you voluntarily provide, 
                        such as your name, email address, and message content.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-brand-ink mb-4">How We Use Information</h2>
                  <p className="text-brand-grey leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-brand-grey space-y-2">
                    <li>Respond to your inquiries and communications</li>
                    <li>Improve our website and user experience</li>
                    <li>Understand how visitors interact with our site</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-brand-ink mb-4">Data Sharing</h2>
                  <p className="text-brand-grey leading-relaxed">
                    We do not sell, trade, or rent your personal information to third parties. 
                    We may share information only in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-brand-grey space-y-2 mt-4">
                    <li>With your explicit consent</li>
                    <li>To comply with legal requirements</li>
                    <li>To protect our rights and safety</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-brand-ink mb-4">Cookies and Tracking</h2>
                  <p className="text-brand-grey leading-relaxed">
                    Our website may use cookies and similar technologies to enhance your browsing experience and collect analytics data. 
                    Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-brand-ink mb-4">Data Security</h2>
                  <p className="text-brand-grey leading-relaxed">
                    We implement appropriate security measures to protect your information against unauthorized access, alteration, 
                    disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-brand-ink mb-4">Your Rights</h2>
                  <p className="text-brand-grey leading-relaxed">
                    You have the right to access, update, or delete your personal information. 
                    If you have any questions or concerns about our privacy practices, please contact us.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-brand-ink mb-4">Changes to This Policy</h2>
                  <p className="text-brand-grey leading-relaxed">
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-brand-ink mb-4">Contact Us</h2>
                  <p className="text-brand-grey leading-relaxed">
                    If you have questions about this Privacy Policy, please contact us at{' '}
                    <a 
                      href="mailto:contact@sidiqiglobal.com"
                      className="text-brand-blue hover:text-brand-blueLight transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded px-1 -mx-1"
                    >
                      contact@sidiqiglobal.com
                    </a>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
