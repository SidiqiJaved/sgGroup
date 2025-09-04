import Header from './components/Header'
import Footer from './components/Footer'
import LinkTile from './components/LinkTile'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main id="main-content" className="flex-1" role="main">
        {/* Hero Section */}
        <section className="py-16 md:py-24" aria-labelledby="hero-heading">
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 
                id="hero-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-ink mb-6 leading-tight"
              >
                Sidiqi Global Group
              </h1>
              <p className="text-lg md:text-xl text-brand-grey mb-10 leading-relaxed">
                A holding company focused on building and backing modern, resilient ventures.
              </p>
              
              {/* Primary and Secondary CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a
                  href="https://sg2tech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 transition-all duration-200 min-w-[200px]"
                  aria-label="Explore SG2 Technologies (opens in new tab)"
                >
                  Explore SG2 Technologies
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href="https://sidiqi.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-brand-blue text-brand-blue font-semibold rounded-lg hover:bg-brand-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 transition-all duration-200 min-w-[200px]"
                  aria-label="Visit Sidiqi.ai AI Venture (opens in new tab)"
                >
                  Visit Sidiqi.ai
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Strip */}
        <section className="py-12 bg-gray-50/50" aria-labelledby="what-we-do-heading">
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="font-semibold text-brand-ink mb-2">Holding Company</h3>
                <p className="text-brand-grey text-sm">Strategic parent entity building sustainable ventures</p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-ink mb-2">Investment Thesis</h3>
                <p className="text-brand-grey text-sm">Forward-thinking technology and innovation sectors</p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-ink mb-2">Key Sectors</h3>
                <p className="text-brand-grey text-sm">Digital transformation, AI, data-driven solutions</p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-ink mb-2">Operating Playbook</h3>
                <p className="text-brand-grey text-sm">Deep expertise with patient capital approach</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-20" aria-labelledby="about-heading">
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 
                id="about-heading"
                className="text-3xl md:text-4xl font-bold text-brand-ink mb-8"
              >
                About Sidiqi Global Group
              </h2>
              <div className="text-lg text-brand-grey space-y-6 leading-relaxed">
                <p>
                  We are a strategic holding company that identifies, develops, and invests in forward-thinking 
                  ventures across technology and innovation sectors. Our approach combines deep industry 
                  expertise with patient capital to build sustainable, market-leading businesses.
                </p>
                <p>
                  Led by Javed Sidiqi, Founder & CEO — learn more at{' '}
                  <a
                    href="https://sidiqi.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue hover:text-brand-blueLight transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded"
                    aria-label="Learn more about Javed Sidiqi on Sidiqi.ai (opens in new tab)"
                  >
                    Sidiqi.ai
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Businesses Section */}
        <section id="businesses" className="py-16 md:py-20" aria-labelledby="businesses-heading">
          <div className="max-w-[1120px] mx-auto px-6">
            <h2 
              id="businesses-heading"
              className="text-3xl md:text-4xl font-bold text-brand-ink text-center mb-12"
            >
              Our Businesses
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <LinkTile
                title="SG2 Technologies"
                description="Digital modernization & data-driven solutions."
                href="https://sg2tech.com"
              />
              <LinkTile
                title="Sidiqi.ai"
                description="AI venture & innovation lab."
                href="https://sidiqi.ai"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
