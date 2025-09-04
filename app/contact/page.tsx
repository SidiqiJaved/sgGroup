import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Contact - Sidiqi Global Group',
  description: 'Get in touch with Sidiqi Global Group. Contact us for partnership opportunities, investment inquiries, or general information.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main id="main-content" className="flex-1" role="main">
        <section className="py-16 md:py-24">
          <div className="max-w-[800px] mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-ink mb-6">
                Contact Us
              </h1>
              <p className="text-lg text-brand-grey leading-relaxed">
                Interested in partnership opportunities or have questions about our ventures? 
                We'd love to hear from you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-semibold text-brand-ink mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-brand-ink mb-2">Email</h3>
                    <a 
                      href="mailto:contact@sidiqiglobal.com"
                      className="text-brand-blue hover:text-brand-blueLight transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded px-2 py-1 -mx-2"
                    >
                      contact@sidiqiglobal.com
                    </a>
                  </div>
                  <div>
                    <h3 className="font-medium text-brand-ink mb-2">Response Time</h3>
                    <p className="text-brand-grey">We typically respond within 24-48 hours</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-brand-ink mb-2">Our Ventures</h3>
                    <div className="space-y-2">
                      <a 
                        href="https://sg2tech.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block text-brand-blue hover:text-brand-blueLight transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded px-2 py-1 -mx-2"
                      >
                        SG2 Technologies →
                      </a>
                      <a 
                        href="https://sidiqi.ai" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block text-brand-blue hover:text-brand-blueLight transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded px-2 py-1 -mx-2"
                      >
                        Sidiqi.ai →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-semibold text-brand-ink mb-6">Send a Message</h2>
                <form action="/api/contact" method="POST" className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-ink mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-ink mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-brand-ink mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-colors"
                      placeholder="Brief subject line"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brand-ink mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-colors resize-vertical"
                      placeholder="Tell us about your inquiry..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-brand-blue text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 transition-all duration-200"
                  >
                    Send Message
                  </button>
                </form>
                
                <p className="text-sm text-brand-grey mt-4">
                  * Required fields. We respect your privacy and will never share your information.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
